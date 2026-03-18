## Affective Computational Psychology Conference DDL Tracking

Countdown timers to keep track of a bunch of CHI/AAAL conference deadlines.

## Contributing

[![](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/images/0)](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/links/0)[![](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/images/1)](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/links/1)[![](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/images/2)](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/links/2)[![](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/images/3)](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/links/3)[![](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/images/4)](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/links/4)[![](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/images/5)](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/links/5)[![](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/images/6)](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/links/6)[![](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/images/7)](https://sourcerer.io/fame/abhshkdz/abhshkdz/ai-deadlines/links/7)

Contributions are very welcome!

To keep things minimal, I'm only looking to list top-tier conferences in AI as per [conferenceranks.com][6] and my judgement calls. Please feel free to maintain a separate fork if you don't see your sub-field or conference of interest listed.

To add or update a deadline:
- Fork the repository
- Update `_data/conferences.yml`
- Make sure it has the `title`, `year`, `id`, `link`, `deadline`, `timezone`, `date`, `place`, `sub` attributes
    + See available timezone strings [here](https://momentjs.com/timezone/).
- Optionally add a `note` and `abstract_deadline` in case the conference has a separate mandatory abstract deadline
- Optionally add `hindex` (refers to h5-index from [here](https://scholar.google.com/citations?view_op=top_venues&vq=eng))
- Example:
    ```yaml
    - title: ACII 2026
  year: 2026
  id: acii2026
  full_name: Affective Computing and Intelligent Interaction
  link: https://acii-conf.net/2026/
  deadline: 2026-03-27 23:59:59
  timezone: AoE
  date: September 7-10, 2026
  place: Puebla, Mexico
  sub: Affective,ComputationalPsychology,Multimodal,HCI
  note: Main track full paper (absolute flagship for affective computing, emotion modeling, multimodal emotion)
  priority: ★★★★★

- title: SAS 2026
  year: 2026
  id: sas2026
  full_name: Society for Affective Science Annual Conference
  link: https://society-for-affective-science.org/2026-sas-annual-conference
  deadline: 2025-11-03 23:59:59
  timezone: AoE
  date: March 12-14, 2026
  place: Pittsburgh, Pennsylvania, USA
  sub: Affective,SAS,ComputationalPsychology
  note: Submissions closed Nov 3, 2025; affective science core + computational tracks + Preconferences (Mar 12, e.g. Affective Computing)
  priority: ★★★★☆

- title: CogSci 2026
  year: 2026
  id: cogsci2026
  full_name: Cognitive Science Society Annual Meeting
  link: https://cognitivesciencesociety.org/cogsci-2026
  deadline: 2026-02-02 23:59:59
  timezone: UTC-11  # 官网指定 UTC-11 midnight
  date: July 22-25, 2026
  place: Rio de Janeiro, Brazil (hybrid)
  sub: CogSci,ComputationalPsychology,Affective
  note: Computational cognition + emotion models; submissions closed Feb 2, 2026
  priority: ★★★★

- title: CHI 2026
  year: 2026
  id: chi2026
  full_name: ACM Conference on Human Factors in Computing Systems
  link: https://chi2026.acm.org/
  deadline: 2025-09-XX 23:59:59  # 预计 Abstract/Full ~ Sep 2025 (典型9月，官网未精确公布 full paper；late-breaking 如 Posters 到 2026-01-22)
  timezone: AoE
  date: April 13-17, 2026
  place: Barcelona, Spain
  sub: CHI,HCI,Affective
  note: HCI flagship; affective interfaces/emotion-aware common; check site for exact Sep deadline (past patterns: abstract early Sep, full mid-Sep)
  priority: ★★★★★

- title: ICMI 2026
  year: 2026
  id: icmi2026
  full_name: ACM International Conference on Multimodal Interaction
  link: https://icmi.acm.org/2026
  deadline: 2026-04-20 23:59:59  # Paper after abstract 2026-04-13
  abstract_deadline: 2026-04-13 23:59:59
  timezone: AoE
  date: October 5-9, 2026
  place: Napoli, Italy
  sub: Multimodal,Affective,HCI,ComputationalPsychology
  note: Multimodal emotion interaction/affective common; Grand Challenge etc. earlier
  priority: ★★★★

- title: ISRE 2026
  year: 2026
  id: isre2026
  full_name: International Society for Research on Emotion
  link: https://www.isre2026.org/
  deadline: 2026-05-01 23:59:59  # Late-breaking abstracts; main earlier ~ Dec 2025 extended
  timezone: AoE
  date: July 11-14, 2026
  place: Brisbane, Queensland, Australia
  sub: Affective,EmotionResearch,ComputationalModels
  note: Emotion research authority + computational models increasing; possible Affective Preconf
  priority: ★★★★☆

- title: ICWSM 2026
  year: 2026
  id: icwsm2026
  full_name: International Conference on Web and Social Media
  link: https://www.icwsm.org/2026/
  deadline: 2026-01-15 23:59:59  # 3rd round full papers (multi-round: earlier 2025 May/Sep, last Jan 2026)
  timezone: AoE
  date: May 27-29, 2026
  place: Los Angeles, CA, USA
  sub: ComputationalPsychology,SocialAffective,NLP
  note: Social media emotion analysis/computational language + emotion; key for social big data affect
  priority: ★★★★★
    ```
- Send a pull request

## Forks & other useful listings

- [geodeadlin.es][3] by @LukasMosser
- [neuro-deadlines][4] by @tbryn
- [ai-challenge-deadlines][5] by @dieg0as
- [CV-oriented ai-deadlines (with an emphasis on medical images)][8] by @duducheng
- [es-deadlines (Embedded Systems, Computer Architecture, and Cyber-physical Systems)][9] by @AlexVonB and @k0nze
- [2019-2020 International Conferences in AI, CV, DM, NLP and Robotics][10] by @JackieTseng
- [ccf-deadlines][11] by @ccfddl
- [networking-deadlines (Computer Networking, Measurement)][12] by @andrewcchu
- [ad-deadlines.com][13] by @daniel-bogdoll
- [sec-deadlines.github.io/ (Security and Privacy)][14] by @clementfung
- [pythondeadlin.es][15] by @jesperdramsch
- [deadlines.openlifescience.ai (Healthcare domain conferences and workshops)][16] by @monk1337
- [hci-deadlines.github.io (Human-Computer Interaction conferences)][17] by @makinteract
- [ds-deadlines.github.io (Distributed Systems, Event-based Systems, Performance, and Software Engineering conferences)][18] by @ds-deadlines
- [https://deadlines.cpusec.org/ (Computer Architecture-Security conferences)][19] by @hoseinyavarzadeh
- [se-deadlines.github.io (Software engineering conferences)][20] by @sivanahamer and @imranur-rahman
- [awesome-mlss (Machine Learning Summer Schools)][21] by @sshkhr and @gmberton

## License

This project is licensed under [MIT][1].

It uses:

- [IcoMoon Icons](https://icomoon.io/#icons-icomoon): [GPL](http://www.gnu.org/licenses/gpl.html) / [CC BY4.0](http://creativecommons.org/licenses/by/4.0/)

[1]: https://abhshkdz.mit-license.org/
[2]: http://aideadlin.es/
[3]: https://github.com/LukasMosser/geo-deadlines
[4]: https://github.com/tbryn/neuro-deadlines
[5]: https://github.com/dieg0as/ai-challenge-deadlines
[6]: http://www.conferenceranks.com/#
[8]: https://m3dv.github.io/ai-deadlines/
[9]: https://ekut-es.github.io/es-deadlines/
[10]: https://jackietseng.github.io/conference_call_for_paper/conferences.html
[11]: https://ccfddl.github.io/
[12]: https://noise-lab.net/networking-deadlines/
[13]: https://ad-deadlines.com/
[14]: https://sec-deadlines.github.io/
[15]: https://pythondeadlin.es/
[16]: https://deadlines.openlifescience.ai/
[17]: https://hci-deadlines.github.io/
[18]: https://ds-deadlines.github.io
[19]: https://deadlines.cpusec.org/
[20]: https://se-deadlines.github.io/
[21]: https://awesome-mlss.com/
