'use strict';

// tests for s3DocumentConvertComplete
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('s3DocumentConvertComplete', '/s3/document/convertComplete.js', 'handler');

describe('s3DocumentConvertComplete', () => {
  before((done) => {
    done();
  });

  const event = {
    "Records": [
      {
        "eventVersion": "2.0",
        "eventSource": "aws:s3",
        "awsRegion": "us-west-1",
        "eventTime": "2018-11-14T00:15:09.033Z",
        "eventName": "ObjectCreated:Put",
        "userIdentity": {
          "principalId": "AWS:AIDAIQHMZ3T4ECMZXJEVK"
        },
        "requestParameters": {
          "sourceIPAddress": "24.7.45.54"
        },
        "responseElements": {
          "x-amz-request-id": "F6873A708C4970C8",
          "x-amz-id-2": "v1RlnnegbZEnn//UMh20ca1gv8fFuzdfhjulHVFvSFeL1hd2GQiODos6pleVD4pKUX5lMUYBcTc="
        },
        "s3": {
          "s3SchemaVersion": "1.0",
          "configurationId": "CreateDocThumbnailCompleteTrigger",
          "bucket": {
            "name": "dev-ca-document",
            "ownerIdentity": {
              "principalId": "A3C4A60J8BI88N"
            },
            "arn": "arn:aws:s3:::dev-ca-document"
          },
          "object": {
            "key": "THUMBNAIL/435660802fdd41f4bbf19abe46516790/result.txt",
            "size": 1476706,
            "eTag": "1c1cb937280f8607f05a4fa86a1bc441",
            "sequencer": "005BEB690CE5C89929"
          }
        }
      }
    ]
  }

  it('implement tests here', () => {
    return wrapped.run(event).then((response) => {
      console.log("test result", response);
      expect(response).to.not.be.empty;
    });
  });
});