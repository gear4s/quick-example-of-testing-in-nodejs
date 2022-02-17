
/* Include testing tools */
const chai = require('chai');
const expect = chai.expect;

/* Include module(s) to test */
const helloWeather = require('../prepared-for-the-weather');

/* Fetch some sample test-data, and populate sample attributes */
const sampleData = require('../test-data/sample-data').weatherData;
const monday = sampleData.cold_rainy;
const tuesday = sampleData.mild_windy;
const wednesday = sampleData.hot_sunny;
const thursday = sampleData.cold_clear;
const friday = sampleData.warm_wet;

describe('Test the weather kit module\'s basic functionality', function(){
    /* Example of Chai expect*/
    it('should return true for umbrella test if it is raining',function(){
        // TODO: test
    });

    /* Example of Chai should */
    it('should return true if suncream is required', function(){
        // TODO: test
    });

    /* Example of Chai assert */
    it('should return true if jumper is required', function(){
        // TODO: test
    });

    it('should always return true as water is always required', function(){
        // TODO: test
    });
});
