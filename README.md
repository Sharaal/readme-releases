Latest Release: [v0.0.0](https://github.com/Sharaal/readme-releases/releases/tag/v0.0.0), Latest Major Release: [v0.0.0](https://github.com/Sharaal/readme-releases/releases/tag/v0.0.0), [All Releases](https://github.com/Sharaal/readme-releases/releases)

# README-RELEASES

...

## Installation

```bash
npm install --save-dev readme-releases
```

## Usage

1. Add the line to the `README.md`:

```
Latest Release: ..., Latest Major Release: ..., [All Releases](...)
```

2. Add the `version` hook to the `package.json`:

```json
{
  "scripts": {
    "version": "npx readme-releases && git add README.md"
  }
}
```

3. From now on everytime you `npm version` the links in the `README.md` will be updated

## Contact

Found a bug or missing a feature? -> Create a new [Issue](https://github.com/Sharaal/readme-releases/issues)

Having questions, want to give feedback or talk to me? -> E-Mail me readme-releases@sharaal.de
