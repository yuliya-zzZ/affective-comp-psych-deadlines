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

## Submission tracks and future editions

Use the acronym only in `title` (for example `CogSci`), with the edition in `year`.
Each conference now has a `tracks` list, shared by Countdowns, conference details,
and Calendar. `deadline` at conference level is retained for compatibility; the
website uses track dates to decide which submissions are upcoming.

```yaml
tracks:
  - id: poster
    label: Poster
    kind: poster # paper, poster, or abstract
    status: confirmed # confirmed, not_announced, or unverified
    deadline: "2027-01-21 23:59:59"
    timezone: AoE
    source: https://chi2027.acm.org/authors/posters/
```

Only `confirmed` tracks with a complete timestamp and recognized timezone get a
countdown or calendar export. Use `not_announced` with no deadline for future
calls; never insert `estimated ...` into a timestamp. Use `unverified` when an
existing claim cannot be checked. Add `note` to explain track-specific rules and
`last_checked` to record the verification date. A poster presentation of a full
paper is different from a separate poster/extended-abstract submission route.

The current update includes CogSci 2027 and 2028, CHI 2027 Posters, and ICWSM 2027
paper rounds. Official sources are linked beside each track. The source checks
were performed on October 29, 2026. SAS 2026 submission details remain explicitly
unverified. CogSci 2028's city is named on the Society's Get Involved page; its
meeting dates and submission rules have not been announced there.
