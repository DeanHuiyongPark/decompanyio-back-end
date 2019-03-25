'use strict';

// tests for readLatestVoteAmount
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('readLatestVoteAmount', '/functions/onchain/readLatestVoteAmount.js', 'handler');

describe('readLatestVoteAmount', () => {
  before((done) => {
    done();
  });

  it('implement tests here', () => {

    const event = {
      Records:[
        {
          body: JSON.stringify({
            documentId: "67338527a4f945b2b2038066bfebd327"
          })
        },
        {
          body: JSON.stringify({
            documentId: "0e807ad9018649d3ab0301079f9f4121"
          })
        },
        

      ]
    }
    return wrapped.run(event).then((response) => {
      expect(response).to.not.be.empty;
    });
  });
});
