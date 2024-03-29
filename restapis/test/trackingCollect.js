'use strict';

// tests for trackingExport
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('trackingCollect', '/controllers/tracking/collect.js', 'handler');

describe('trackingCollect', () => {
  before((done) => {
    done();
  });

  it('implement tests here', () => {

    const event = {
      query: {
        id: "968de024dd1647f1a7544d9c4b46de48",
        n: 2,
        ev: "test",
        sid: "y6Of_R_8s",
        cid: "1060212880.1546915423",
        t: 1561619940891
      }
    }
    return wrapped.run(event).then((response) => {
      console.log(response);
      expect(response).to.not.be.empty;
    });
  });
});
