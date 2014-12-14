# Ember Percentages

[![Build Status](https://travis-ci.org/johnotander/ember-percentages.svg?branch=master)](https://travis-ci.org/johnotander/ember-percentages)

A helper for formatting percentages from floats to human readable numbers.

Integrates with [ember-cli](http://ember-cli.com).

## Installation

```
npm i --save-dev ember-percentages
```

## Usage

```hbs
{{percentage 0.87235}}      {{! => 87.235%}}
{{percentage 0.87235 2}}    {{! => 82.24%}}
{{percentage someProperty}} {{! => 12.8%}}
```

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
