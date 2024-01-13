# Remove French Accents

[![npm version](https://img.shields.io/npm/v/remove-french-accents.svg)](https://www.npmjs.com/package/remove-french-accents)
[![npm downloads](https://img.shields.io/npm/dt/remove-french-accents.svg)](https://www.npmjs.com/package/remove-french-accents)
[![License](https://img.shields.io/github/license/yourusername/remove-french-accents.svg)](https://github.com/yourusername/remove-french-accents/blob/main/LICENSE)

A lightweight and efficient npm package to remove French accents from strings.

## Features

- Simple and easy-to-use.
- Handles a wide range of French accented characters.
- Written in TypeScript for type safety.

## Installation

Install the package using npm:

```bash
npm install remove-french-accents
```

## Usage

```ruby
const { removeFrenchAccents } = require('remove-french-accents');

const input = 'cliché résumé façade';
const result = removeFrenchAccents(input);
console.log(result);
// Output: "cliche resume facade"
```

## API
<b>removeFrenchAccents(input: string): string</b> <br>
- Removes French accents from the input string.

#### input: The string with French accents.

## LICENSE
This project is licensed under the MIT License - see the [LICENSE](https://github.com/SatishB15/remove-french-accents?tab=MIT-1-ov-file#readme) file for details.

## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request.

## Author
[Satish Birhade](https://github.com/SatishB15)