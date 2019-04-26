'use strict';
const documentService = require('../document/documentMongoDB');
const {utils} = require('decompany-common-utils');
const period = 8;  // 오늘 + 7일전 
/**
 * @description recently voted documets
 * @url : /api/curator/document/today
 */
module.exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event));
  const {query} = event;
  const {ethAccount} = query;
  
  const today = new Date();
  const startDate = new Date(today.getTime() - 1000 * 60 * 60 * 24 * period);
  const blockchainTimestamp = utils.getBlockchainTimestamp(startDate);

  const resultList = await documentService.queryRecentlyVoteList({
    applicant: ethAccount,
    startTimestamp: blockchainTimestamp
  });

  const totalViewCountInfo = await documentService.getRecentlyPageViewTotalCount();

  return JSON.stringify({
    success: true,
    resultList: resultList,
    totalViewCountInfo: totalViewCountInfo
  });
  
};