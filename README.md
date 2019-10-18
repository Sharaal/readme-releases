Latest Release: [v1.1.0](https://github.com/Sharaal/readme-releases/releases/tag/v1.1.0), Latest Major Release: [v1.0.0](https://github.com/Sharaal/readme-releases/releases/tag/v1.0.0), [All Releases](https://github.com/Sharaal/readme-releases/releases)

# README-RELEASES

Maintain the latest release, latest major release and all releases GitHub links in the README.md.

## Installation

```bash
npm install --save-dev readme-releases
```

* Add the line to the `README.md`:

```
Latest Release: ..., Latest Major Release: ..., [All Releases](...)
```

* Add the `version` hook to the `package.json`:

```json
{
  "scripts": {
    "version": "npx readme-releases && git add README.md"
  }
}
```

## Usage

1. Everytime you `npm version` the links in the `README.md` will be updated

2. Use `git push --follow-tags` to push the changes for the new version together with the created git tag

3. Open the link of the latest release (macOS: `cmd` + `double-click` on the link) and add a description to it

## Contact

Found a bug or missing a feature? -> Create a new [Issue](https://github.com/Sharaal/readme-releases/issues)

Having questions, want to give feedback or talk to me? -> E-Mail me readme-releases@sharaal.de
