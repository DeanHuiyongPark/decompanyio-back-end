'use strict';

// Generated by serverless-mocha-plugin
// TODO: sls invoke test
// TODO: sls invoke test [--stage stage] [--region region] [-f function1] [-f function2] [...]
console.log("current path", __dirname, process.cwd());
const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('SmartContractToDynamoVotesPerDocumentCurrent', '/functions/sqs/SmartContractToDynamoVotesPerDocumentCurrent/index.js', 'handler');
let wrapped2 = mochaPlugin.getWrapper('SmartContractToDynamoVotesPerDocumentYesterday', '/functions/sqs/SmartContractToDynamoVotesPerDocumentYesterday/index.js', 'handler');
/*
describe('SmartContractToDynamoVotesPerDocumentCurrent', () => {
  before((done) => {
    done();
  });

  it('implement tests here', () => {
    //ae5bb91da55142f1b6aa038c04266c8c, 40cca9f5e8f34449bdaebe7516d9bdd7
    const queueData = JSON.stringify({
      "documentId": "fc75cc8c92184f5bad0ca1d5e1cf6f9e",
      "accountId": "0xf319E1a032338183c4fDC024F3e3845497dB3152"
    });

    const event = {
      Records: [ {
          body: queueData
        }
      ]
    }

    return wrapped.run(event).then((response) => {
      expect(response).to.not.be.empty;
    });
  });
});
*/
describe('SmartContractToDynamoVotesPerDocumentYesterday', () => {
  before((done) => {
    done();
  });

  it('implement tests here', () => {
    //ae5bb91da55142f1b6aa038c04266c8c, 40cca9f5e8f34449bdaebe7516d9bdd7
    const queueData = JSON.stringify({
      "documentId": "fc75cc8c92184f5bad0ca1d5e1cf6f9e",
      "accountId": "0xf319E1a032338183c4fDC024F3e3845497dB3152"
    });


    const event = {
      Records: [ {
          body: queueData
        }
      ]
    }

    return wrapped2.run(event).then((response) => {
      expect(response).to.not.be.empty;
    });
  });
});
