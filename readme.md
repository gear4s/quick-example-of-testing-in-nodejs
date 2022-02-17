# Unit Testing in Node.js

## Intro
This is a quick example project to show how a test environment can be setup in Node.js

It includes the following

- [Mocha](http://mochajs.org/) - *testing framework*
- [Chai](http://chaijs.com/) - *assertion library*
- [Istanbul](https://github.com/gotwarlost/istanbul) - *coverage testing*
- [SinonJs](http://sinonjs.org/) - *stubs and splices for mocking data*


The following online tools are used to monitor results

- [Travis CI](https://travis-ci.org/) - *Continuous Integration*
- [David DM](https://david-dm.org/) - *Dependency Management*
- [Codacy](https://www.codacy.com/) - *Automated Code Quality Reviews*
- [Inch CI](https://inch-ci.org/) - *Documentation Reviews*


## The Project
The project is a very simple script that pulls current weather data from OpenWeatherMap
for your location, it then analyses it and lists which items (umbrella, icecream, jumper...)
you will need for the current weather.

## To Install
- Navigate into your working directory, run the following commands:
- ```git clone https://github.com/gear4s/quick-example-of-testing-in-nodejs.git``` to clone repo
- ```cd quick-example-of-testing-in-nodejs``` to navigate into project
- ```npm install``` to install the dependencies

## To run the project
- ```npm start``` will run the main file (app.js) and display results
- ```node app --location Newcastle``` will run app.js for a custom location, e.g. Newcastle
- ```npm test``` will run the Mocha tests, output results and generate reports
- ```npm run cover``` will run the Istanbul coverage tests and output results and generate reports

## Screenshots

Command Line Output: Tests Passing

<p align="center"><img src="https://i.ibb.co/WDpBStz/better-test3.png" /></p>

Web Report: Some Tests Failing
<p align="center"><img src="https://i.ibb.co/93CdGjG/bad-test1.png" /></p>

Web Report: All Tests Passing
<p align="center"><img src="https://i.ibb.co/nCdHFs4/better-test2.png" /></p>

