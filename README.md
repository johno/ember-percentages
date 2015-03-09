# ember-percentages [![Build Status](https://travis-ci.org/johnotander/ember-percentages.svg?branch=master)](https://travis-ci.org/johnotander/ember-percentages)

A helper for formatting percentages from floats to human readable numbers.

## Installation

```
ember install:addon ember-percentages
```

Or, for older versions of the Ember CLI:

```
npm i --save ember-percentages
```

## Usage

```hbs
{{percentage '0.87235'}}    {{! => '87.235%'}}
{{percentage someProperty}} {{! => '12.8%'}}
```

You can specify the decimal place for rounding:

```hbs
{{percentage '0.87235' 2}} {{! => '82.24%'}}
```

There's also a shortcut provided, too:

```hbs
{{pct '0.1234567' 2}} {{! => '12.35%'}}
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
