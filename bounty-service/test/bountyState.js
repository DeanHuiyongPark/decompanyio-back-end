'use strict';

// tests for bountyState
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('bountyState', '/src/api/bountyState.js', 'handler');

describe('bountyState', () => {
  before((done) => {
    done();
  });

  it('implement tests here', () => {
    const event = {
      principalId: "google-oauth2|101778494068951192848",
      query: {
        ethAccount: "0x4Ee128892469e7962e6E617727cb99C59525D7D2",
      }
    }
    return wrapped.run(event).then((response) => {
      console.log("");
      console.log(response);
      expect(response).to.not.be.empty;
    });
  });
});