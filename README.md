# Yomitan

This is a dev fork of yomitan for improving arabic support.

## What is Yomitan?

Yomitan turns your web browser into a tool for building language literacy by helping you **read** texts that would otherwise be too difficult to tackle in [a variety of supported languages](https://yomitan.wiki/supported-languages/).

Yomitan provides powerful features not available in other browser-based dictionaries:

- 💬 Interactive popup definition window for displaying search results.
- 🔊 Built-in native pronunciation audio with the ability to add your own [custom audio sources](https://yomitan.wiki/advanced/#default-audio-sources).
- ✍️ Kanji stroke order diagrams are just a click away.
- 📝 [Automatic flashcard creation](https://yomitan.wiki/anki/) for the [Anki](https://apps.ankiweb.net/) flashcard program via the [AnkiConnect](https://foosoft.net/projects/anki-connect) plugin.
- 🔍 Custom search page for easily executing custom search queries.
- 📖 Support for multiple dictionary formats including [EPWING](https://ja.wikipedia.org/wiki/EPWING) via the [Yomitan Import](https://github.com/yomidevs/yomitan-import) tool.
- ✨ Clean, modern code makes it easy for developers to [contribute](#contributing) new features and languages.

[![Term definitions](img/ss-terms-thumb.png)](img/ss-terms.png)
[![Kanji information](img/ss-kanji-thumb.png)](img/ss-kanji.png)
[![Dictionary options](img/ss-dictionaries-thumb.png)](img/ss-dictionaries.png)
[![Anki options](img/ss-anki-thumb.png)](img/ss-anki.png)

## Documentation/How To

**Please visit the [Yomitan Wiki](https://yomitan.wiki) for the most up-to-date usage documentation.**

### Developer Documentation

- Dictionaries
  - 🛠️ [Making Yomitan Dictionaries](./docs/making-yomitan-dictionaries.md)
- Anki Integration
  - 🔧 [Anki handlebar templates](./docs/templates.md)
- Advanced Features
- Troubleshooting
  - 🕷️ [Known browser bugs](./docs/browser-bugs.md)

## Installation

Yomitan comes in two flavors: _stable_ and _testing_. New changes are initially introduced into the _testing_ version, and after some time spent ensuring that they are relatively bug free, they will be promoted to the _stable_ version. If you are technically savvy and don't mind [submitting issues](https://github.com/yomidevs/yomitan/issues/new/choose) on GitHub, try the _testing_ version; otherwise, the _stable_ version will be your best bet. Check [contributing](#contributing) for more information on how to help.

- **Google Chrome**

  - [stable](https://chrome.google.com/webstore/detail/yomitan/likgccmbimhjbgkjambclfkhldnlhbnn)
  - [testing](https://chrome.google.com/webstore/detail/yomitan-development-build/glnaenfapkkecknnmginabpmgkenenml)

- **Mozilla Firefox**

  - [stable](https://addons.mozilla.org/en-US/firefox/addon/yomitan/)
  - [testing](https://github.com/yomidevs/yomitan/releases) ※

- **Microsoft Edge**
  - [stable](https://microsoftedge.microsoft.com/addons/detail/yomitan/idelnfbbmikgfiejhgmddlbkfgiifnnn)
  - Testing: Coming soon

※ Unlike Chrome, Firefox does not allow extensions meant for testing to be hosted in the marketplace. You will have to download the desired version and side-load it yourself. You only need to do this once, and you will get updates automatically.

## Contributing

🚀 **Dip your toes into contributing by looking at issues with the label [good first issue](https://github.com/yomidevs/yomitan/issues?q=is%3Aissue+is%3Aopen+label%3A%22gоοd+fіrst+іssսe%22).**

Since this is a distributed effort, we **highly welcome new contributors**! Feel free to browse the [issue tracker](https://github.com/yomidevs/yomitan/issues), and read our [contributing guidelines](./CONTRIBUTING.md).

Here are some ways anyone can help:

- Try using the Yomitan dev build. Not only do you get cutting edge features, but you can help uncover bugs and give feedback to developers early on.
- Document any UI/UX friction in GitHub Issues. We're looking to make Yomitan more accessible to non-technical users.
- All the issues in `area/bug` older than 2 months need help reproducing. If anything interests you, please try to reproduce it and report your results. We can't easily tell if these issues are one-off, have since been resolved, or are no longer relevant.

> The current active maintainers of Yomitan spend a lot of their time debugging and triaging issues. When someone files a bug report, we need to assess the frequency and severity of the bug. It is extremely helpful if we get multiple reports of people who experience a bug or people who can contribute additional detail to an existing bug report.

If you're looking to code, please let us know what you plan on working on before submitting a Pull Request. This gives the core maintainers an opportunity to provide feedback early on before you dive too deep. You can do this by opening a GitHub Issue with the proposal.

Some contributions we always appreciate:

- Well-written tests covering different functionalities. This includes [playwright tests](https://github.com/yomidevs/yomitan/tree/master/test/playwright), [benchmark tests](https://github.com/yomidevs/yomitan/tree/master/benches), and unit tests.
- Increasing our type coverage.
- More and better documentation!

Information on how to setup and build the codebase can be found [here](./CONTRIBUTING.md#setup).

If you want to add or improve support for a language, read the documentation on [language features](./docs/development/language-features.md).

Feel free to join us on the [Yomitan Discord](https://discord.gg/YkQrXW6TXF).

## Building Yomitan

1. Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).

2. Run `npm ci` to set up the environment.

3. Run `npm run license-report:html` to generate any missing or changed license information.

4. Run `npm run build` for a plain testing build or `npm run-script build -- --all --version {version}` for a release build (replacing `{version}` with a version number).

5. The builds for each browser and release branch can be found in the `builds` directory.

For more information, see [Contributing](./CONTRIBUTING.md#setup).

## Third-Party Libraries

Yomitan uses several third-party libraries to function.

<!-- The following table is generated using the command `npm run license-report:markdown`. -->

| Name                | Installed version | License type | Link                                             |
| :------------------ | :---------------- | :----------- | :----------------------------------------------- |
| @zip.js/zip.js      | 2.7.32            | BSD-3-Clause | git+https://github.com/gildas-lormeau/zip.js.git |
| dexie               | 3.2.4             | Apache-2.0   | git+https://github.com/dfahlander/Dexie.js.git   |
| dexie-export-import | 4.0.7             | Apache-2.0   | git+https://github.com/dexie/Dexie.js.git        |
| yomitan-handlebars  | 1.0.0             | MIT          | n/a                                              |
| parse5              | 7.1.2             | MIT          | git://github.com/inikulin/parse5.git             |
| wanakana            | 5.3.1             | MIT          | git+ssh://git@github.com/WaniKani/WanaKana.git   |
| hangul.js           | 0.2.6             | MIT          | git+https://github.com/e-/Hangul.js.git          |
