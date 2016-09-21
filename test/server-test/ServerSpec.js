var expect = require('chai').expect;
var request = require('request');

/************************************************************/
// Mocha doesn't have a way to designate pending before blocks.
// Mimic the behavior of xit and xdescribe with xbeforeEach.
/************************************************************/
var xbeforeEach = function() {};
/************************************************************/


describe('', function() {

  beforeEach(function() {
  });

  describe('Randomizer', function() {

    xbeforeEach(function(done) {
    });

    it('Does something', function(done) {
      done();
    });

    describe('Inner test', function() {

      it('Does something else', function(done) {
        // Async function() {
          done();
        // }
      });

    }); 

  });

});