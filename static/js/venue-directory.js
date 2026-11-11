(function(root) {
  'use strict';
  function matches(text, subjects, query, subject) {
    var words=query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    return (!subject || subjects.includes(subject)) && words.every(function(word) {return text.toLocaleLowerCase().includes(word);});
  }
  root.VenueDirectory={matches:matches};
  if (typeof document==='undefined') return;
  var page=document.querySelector('[data-directory]');
  if (!page) return;
  var search=document.getElementById('venue-search');
  var subject=document.getElementById('venue-subject');
  var cards=Array.from(page.querySelectorAll('.venue-card'));
  function update() {
    var count=0;
    cards.forEach(function(card) {
      card.hidden=!matches(card.dataset.search,card.dataset.subjects.split(','),search.value,subject.value);
      if(!card.hidden) count++;
    });
    page.querySelectorAll('.directory-section').forEach(function(section) {
      section.hidden=!Array.from(section.querySelectorAll('.venue-card')).some(function(card) {return !card.hidden;});
    });
    document.getElementById('directory-count').textContent=count+' of '+cards.length+' '+page.dataset.directory;
    document.getElementById('directory-empty').hidden=count!==0;
  }
  document.getElementById('directory-filters').addEventListener('submit',function(e) {e.preventDefault();});
  search.addEventListener('input',update);subject.addEventListener('change',update);
  document.getElementById('directory-clear').addEventListener('click',function() {search.value='';subject.value='';update();search.focus();});
  update();
})(typeof window!=='undefined'?window:globalThis);
