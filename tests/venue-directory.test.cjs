const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const readYaml=file=>JSON.parse(execFileSync('/usr/bin/ruby',['-rjson','-ryaml','-e','puts JSON.generate(YAML.load_file(ARGV[0]))',path.join(root,file)],{encoding:'utf8'}));
const venues=readYaml('_data/venues.yml');
const confs=readYaml('_data/conferences.yml');
const types=readYaml('_data/types.yml').map(t=>t.sub);
assert.equal(venues.conferences.length,21);
assert.equal(venues.journals.length,24);
assert.equal(venues.journals.filter(j=>j.group==='psychology').length,12);
assert.equal(venues.journals.filter(j=>j.group==='human-ai').length,12);
for(const [kind,entries] of Object.entries(venues)) {
 assert.equal(new Set(entries.map(v=>v.id)).size,entries.length);
 for(const entry of entries) {
  assert(entry.name && entry.focus);
  const url=new URL(entry.url);assert.equal(url.protocol,'https:');assert(!url.search);
  assert(entry.subjects.length && entry.subjects.every(s=>types.includes(s)));
  if(kind==='journals') assert(!entry.deadline && !entry.tracks,'Journal directory must not invent fixed deadlines');
  if(kind==='conferences') entry.editions.forEach(e=>assert(confs.some(c=>c.id===e.id && c.year===e.year)));
 }
}
const expected=['cogsci','sas','spsp','acii','chi','icwsm','ic2s2','cscw','acl','emnlp','coling','conll','clpsych','aps','psychonomic','isre','facct','colm','iclr','neurips'];
expected.forEach(id=>assert(venues.conferences.some(v=>v.id===id)));
assert.equal(venues.conferences.find(v=>v.id==='colm').url,'https://colm.cc/');
const context=vm.createContext({console,Date});
for(const file of ['moment.min.js','moment-timezone-with-data.min.js','deadline-tracks.js','venue-directory.js'])vm.runInContext(fs.readFileSync(path.join(root,'static/js',file),'utf8'),context);
const M=context.VenueDirectory.matches,D=context.DeadlineTracks;
assert(M('Nature Mental Health mental health',['AI4MH','PSY'],' MENTAL health ','AI4MH'));
assert(!M('Nature Mental Health',['AI4MH'],'mental','ML'));
assert(!M('Emotion',['AFF'],'no-such-venue',''));
assert(M('Any journal',['PSY'],'',''));
assert.equal(D.summary(confs.find(c=>c.id==='cscw2027'),Date.parse('2026-10-29')).group,'rolling');
const aps=confs.find(c=>c.id==='aps2027'),sas=confs.find(c=>c.id==='sas2027');
assert.equal(D.parse(aps.tracks.find(t=>t.id==='poster')).toISOString(),'2026-12-01T22:00:00.000Z');
assert.equal(D.parse(sas.tracks.find(t=>t.id==='poster-results')).toISOString(),'2026-11-03T11:59:59.000Z');
for(const c of confs)for(const t of c.tracks)if(['rolling','not_applicable'].includes(t.status))assert.equal(D.ics(c,t),null);
console.log('PASS: complete 20-conference shortlist plus ICMI, 24 journals, valid edition links/tags, multi-word search, exact filters, rolling/N/A exclusions, and SAS/APS timezone conversions.');
