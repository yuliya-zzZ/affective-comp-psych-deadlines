## Affective Computational Psychology Conference DDL Tracking

Countdowns for affective science, computational psychology, CHI/HCI and emotion-related conferences

## Contributing
Contributions are very welcome!
This fork focuses on affective science, computational psychology, CHI/HCI, and emotion-related fields.  
If you see a missing conference or incorrect deadline, feel free to add/update it.

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
      timezone: AoE # Anywhere on Earth
      date: September 7-10, 2026
      place: Puebla, Mexico
      sub: Affective,ComputationalPsychology,Multimodal,HCI
      note: Main track full paper (absolute flagship for affective computing, emotion modeling, multimodal
    emotion)
      priority: ★★★★★
    ```
- Send a pull request

## Related Deadline Trackers

- [hci-deadlines.github.io](https://hci-deadlines.github.io/) by @makinteract – Human-Computer Interaction conferences (very relevant for CHI/HCI)
- [neuro-deadlines](https://github.com/tbryn/neuro-deadlines) by @tbryn – Neuroscience-related deadlines (useful for computational psych overlap)
- [deadlines.openlifescience.ai](https://deadlines.openlifescience.ai/) by @monk1337 – Healthcare and life science domain (some overlap with affective science)

** This project is a fork of the original [ai-deadlines](https://github.com/mlciv/ai-deadlines), customized for affective science, computational psychology, and CHI/HCI！


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
