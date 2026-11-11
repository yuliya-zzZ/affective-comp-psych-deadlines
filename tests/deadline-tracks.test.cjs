// Run with Node: node tests/deadline-tracks.test.cjs (uses system Ruby to read YAML).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({console, Date});
for (const file of ['moment.min.js','moment-timezone-with-data.min.js','deadline-tracks.js']) {
  vm.runInContext(fs.readFileSync(path.join(root,'static/js',file),'utf8'),context);
}
const D = context.DeadlineTracks;
const conferences=JSON.parse(execFileSync('/usr/bin/ruby',['-rjson','-ryaml','-e','puts JSON.generate(YAML.load_file(ARGV[0]))',path.join(root,'_data/conferences.yml')],{encoding:'utf8'}));
const find=id=>conferences.find(c=>c.id===id);
const now=Date.parse('2026-10-29T16:00:00Z');
const chi=find('chi2027');
assert.equal(D.title(chi),'CHI 2027');
assert.equal(D.summary(chi,now).group,'upcoming');
assert.equal(D.summary(chi,now).next.track.kind,'poster');
const poster=chi.tracks.find(t=>t.id==='poster');
assert.equal(D.parse(poster).toISOString(),'2027-01-22T11:59:59.000Z','AoE is UTC-12, not local time');
const justAfter=D.parse(poster).valueOf()+1;
assert.equal(D.summary(chi,justAfter).group,'past','Expiry does not round to whole days');
assert.equal(D.parse({...poster,deadline:'estimated 2027-01-21 23:59:59'}),null);
assert.equal(D.parse({...poster,deadline:'2027-02-30 23:59:59'}),null);
assert.equal(D.parse({...poster,timezone:'Not/AZone'}),null);
for(const id of ['cogsci2027','cogsci2028','neurips2027']) {
  const c=find(id);assert.equal(D.summary(c,now).group,'planning');
  c.tracks.forEach(t=>{assert.equal(D.parse(t),null);assert.equal(D.ics(c,t),null);});
}
assert.equal(D.parse(find('cogsci2026').tracks[0]).toISOString(),'2026-02-03T10:59:59.000Z');
const ics=D.ics(chi,poster);
assert.match(ics,/DTSTART:20270122T115959Z/);
assert.match(ics,/SUMMARY:CHI 2027 — Poster deadline/);
assert.match(ics,/UID:chi2027-poster@/);
for(const c of conferences) {
  assert(!/\d{4}/.test(c.title),'Year is stored only in year');
  assert(c.tracks.some(t=>t.kind==='paper') && c.tracks.some(t=>t.kind==='poster'));
  assert.equal(new Set(c.tracks.map(t=>t.id)).size,c.tracks.length);
  c.tracks.forEach(t=>{
    assert(/^https:\/\//.test(t.source));
    if(t.status==='confirmed') assert(D.parse(t),'Confirmed deadline must parse strictly: '+c.id+' '+t.id);
    else assert(!t.deadline,'Pending/unverified tracks must not export an exact date');
  });
}
console.log('PASS: actual conference data, track selection, strict parsing, AoE/UTC-11, exact expiry, future pending entries, and track-specific ICS.');
if (process.argv[2]) {
  const html=fs.readFileSync(path.join(process.argv[2],'calendar/index.html'),'utf8');
  const start=html.indexOf('function load_conference_list()');
  const end=html.indexOf('function update_filtering(data)',start);
  assert(start>0 && end>start);
  vm.runInContext(html.slice(start,end),context);
  const events=context.load_conference_list();
  const event=events.find(e=>e.id==='chi2027-poster-deadline');
  assert.equal(event.startDate.toISOString(),'2027-01-22T11:59:59.000Z');
  assert.equal(event.name,'CHI 2027 — Poster');
  assert(!events.some(e=>/^cogsci202[78]-.*deadline$/.test(e.id)));
  assert(events.every(e=>Number.isFinite(e.startDate.valueOf()) && Number.isFinite(e.endDate.valueOf())));
  console.log('PASS: built calendar contains distinct paper/poster events in the correct timezone, without pending or invalid deadlines.');
}
