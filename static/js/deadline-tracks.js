/* Shared deadline semantics for the list, conference details and calendar. */
(function (root) {
  'use strict';
  function title(conf) { return conf.title + ' ' + conf.year; }
  function parse(track) {
    if (track.status !== 'confirmed' || !/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(track.deadline || '')) return null;
    var zone = track.timezone;
    if (zone === 'AoE') zone = 'Etc/GMT+12';
    var offset = /^UTC([+-])(\d{1,2})$/.exec(zone || '');
    if (offset) zone = 'Etc/GMT' + (offset[1] === '+' ? '-' : '+') + offset[2];
    if (!zone || !root.moment.tz.zone(zone)) return null;
    var date = root.moment.tz(track.deadline, 'YYYY-MM-DD HH:mm:ss', true, zone);
    return date.isValid() ? date : null;
  }
  function summary(conf, now) {
    var dated = (conf.tracks || []).map(function (track) { return {track: track, date: parse(track)}; }).filter(function (item) { return item.date; });
    var future = dated.filter(function (item) { return item.date.valueOf() > now; }).sort(function (a,b) { return a.date - b.date; });
    if (future.length) return {group: 'upcoming', next: future[0], sort: future[0].date.valueOf()};
    var rolling=(conf.tracks || []).find(function(t) {return t.status==='rolling';});
    if (rolling) return {group:'rolling', track:rolling, sort:conf.year};
    var pending = (conf.tracks || []).some(function (t) { return t.status === 'not_announced' || t.status === 'unverified'; });
    if (pending && (conf.year > new Date(now).getFullYear() || (conf.end && conf.end >= root.moment(now).format('YYYY-MM-DD')))) return {group: 'planning', sort: conf.year};
    return {group: 'past', sort: dated.length ? Math.max.apply(null, dated.map(function (d) {return d.date.valueOf();})) : 0};
  }
  function countdown(date, now) {
    var seconds = Math.max(0, Math.floor((date.valueOf() - now) / 1000));
    var days = Math.floor(seconds / 86400);
    var pad = function (n) { return String(n).padStart(2, '0'); };
    return days + 'd ' + pad(Math.floor(seconds / 3600) % 24) + ':' + pad(Math.floor(seconds / 60) % 60) + ':' + pad(seconds % 60);
  }
  function ics(conf, track) {
    var date = parse(track);
    if (!date) return null;
    var escape = function (s) { return String(s).replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;'); };
    return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Affective Comp Psych Deadlines//EN','BEGIN:VEVENT',
      'UID:' + conf.id + '-' + track.id + '@affective-comp-psych-deadlines',
      'DTSTAMP:' + root.moment.utc().format('YYYYMMDDTHHmmss[Z]'),
      'DTSTART:' + date.clone().utc().format('YYYYMMDDTHHmmss[Z]'),
      'DTEND:' + date.clone().add(1,'minute').utc().format('YYYYMMDDTHHmmss[Z]'),
      'SUMMARY:' + escape(title(conf) + ' — ' + track.label + ' deadline'),
      'DESCRIPTION:' + escape(track.source || conf.link), 'END:VEVENT','END:VCALENDAR',''].join('\r\n');
  }
  function element(tag, text, className) {
    var node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function renderTable(container, conf, now) {
    container.replaceChildren();
    var table = element('table', undefined, 'track-table');
    var caption = element('caption', title(conf) + ' submission deadlines', 'sr-only'); table.appendChild(caption);
    var head = document.createElement('thead');var hr = document.createElement('tr');
    ['Submission track', 'Deadline', 'Status'].forEach(function (text) { var th=element('th',text);th.scope='col';hr.appendChild(th); });head.appendChild(hr);table.appendChild(head);
    var body=document.createElement('tbody');
    (conf.tracks || []).forEach(function (track) {
      var row=document.createElement('tr');row.dataset.track=track.id;
      var label=element('th',track.label);label.scope='row';
      if (track.note) label.appendChild(element('small', track.note, 'track-note'));
      var cell=document.createElement('td');var date=parse(track);var status;
      if (date) {
        var time=element('time', date.format('MMM D, YYYY · HH:mm:ss') + ' ' + track.timezone);time.dateTime=date.toISOString();cell.appendChild(time);
        cell.appendChild(element('small',date.clone().local().format('MMM D, HH:mm:ss Z') + ' · your time','track-local'));
        status=date.valueOf()>now ? 'Upcoming' : 'Closed';
      } else status=track.status === 'rolling' ? 'Rolling' : track.status === 'not_applicable' ? 'Not applicable' : track.status === 'unverified' || track.status === 'confirmed' ? 'Needs verification' : 'Not announced';
      if (!date) cell.appendChild(element('span',status === 'Rolling' ? 'No fixed submission deadline' : status === 'Not applicable' ? 'See submission format' : status === 'Needs verification' ? 'Not verified' : 'To be announced'));
      if (track.source) {var source=element('a','Official source','track-source');source.href=track.source;source.target='_blank';source.rel='noopener noreferrer';cell.appendChild(source);}
      var state=document.createElement('td');state.appendChild(element('span',status,'track-status ' + (status==='Rolling' ? 'track-rolling' : date && date.valueOf()>now ? 'track-open' : 'track-muted')));
      if (date && date.valueOf()>now) {var link=element('a','Add .ics','track-source');link.href='data:text/calendar;charset=utf-8,' + encodeURIComponent(ics(conf,track));link.download=conf.id+'-'+track.id+'.ics';state.appendChild(link);}
      row.appendChild(label);row.appendChild(cell);row.appendChild(state);body.appendChild(row);
    });
    table.appendChild(body);container.appendChild(table);
  }
  root.DeadlineTracks={title:title,parse:parse,summary:summary,countdown:countdown,ics:ics,renderTable:renderTable};
})(typeof window !== 'undefined' ? window : globalThis);
