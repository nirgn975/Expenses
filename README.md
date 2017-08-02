# Expenses

[![license][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url] [![Dependency Status][dependencyci-image]][dependencyci-url] [![Donate][donate-image]][donate-url]

Something about the project.

## Our Stack

  * [Angular](https://angular.io/)
  * [Express](http://expressjs.com/)
  * [Node.js](https://nodejs.org)
  * [MongoDB](https://www.mongodb.com/)

**Tools we use**

  * [Angular Material](https://material.angular.io/)
  * [ngrx](https://github.com/ngrx)
  * [Passport](http://passportjs.org/)
  * [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)

## Pre Requirements

  1. [NodeJS](https://nodejs.org).
  2. [MongoDB](https://www.mongodb.com/).

## Installation

**Client**

  1. Install requirements with `npm install` (located under `client` directory).
  2. Run the server with `ng start`.
  3. Open the browser at [http://localhost:4200](http://localhost:4200).

For social login create a `.env` file in the root of the `server` directory, and add there all the configuration:
```
FACEBOOK_APP_ID=12345
FACEBOOK_APP_SECRET=12345
TWITTER_CONSUMER_KEY=12345
TWITTER_APP_SECRET=12345
GOOGLE_APP_ID=12345
GOOGLE_APP_SECRET=12345
GITHUB_APP_ID=12345
GITHUB_APP_SECRET=12345
```

To see the Google Maps features, add your [Google Maps API Key](https://developers.google.com/maps/web/) in `transactions.module.ts` file:
```
AgmCoreModule.forRoot({
  apiKey: 'YouApiKey'
})
```


**Server**

  1. Install requirements with `npm install` (located under `server` directory).
  2. Run the server with `npm start`.
  3. Open the browser at [http://localhost:3000](http://localhost:3000).

## Tests

**Client**

  * Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
  * Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

**Server**

  * Run `npm run eslint` to check for ESLint mistakes.
  * Run `npm test` to run the integration tests.

## Translation

**Client**

Not yet..

**Server**

Not yet..

## Deploy

**Client**

  1. Run `ng build -prod -aot` to build the project.
  2. Run `npm run sw` to generate the service worker file (in `dist` directory).

**Server**

  1. Not yet..

[license-image]: https://img.shields.io/badge/license-ISC-blue.svg
[license-url]: https://github.com/nirgn975/WhatsBuzz/blob/master/LICENSE
[travis-image]: https://travis-ci.org/nirgn975/Expenses.svg?branch=master
[travis-url]: https://travis-ci.org/nirgn975/Expenses
[codecov-image]: https://codecov.io/gh/nirgn975/Expenses/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/nirgn975/Expenses
[dependencyci-image]: https://dependencyci.com/github/nirgn975/Expenses/badge
[dependencyci-url]: https://dependencyci.com/github/nirgn975/Expenses
[donate-image]: https://img.shields.io/badge/PayPal-Donate-lightgrey.svg
[donate-url]: https://www.paypal.me/nirgn/2
