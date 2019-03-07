'use strict';
const ContractWapper = require('../ContractWapper');
const { mongodb, tables } = require('../../resources/config.js').APP_PROPERTIES();

/**
 * @function writePageview
 * @description
 * smartcontract DocumentReg.confirmPageView(bytes32 _docId, uint _date, uint _pageView)
 */
module.exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event.Records));

  console.log(params);
  if(!params.documentId || isNaN(params.confirmPageview) || isNaN(params.date)) {
    throw new Error("Invaild Parameter");
  }
  
  const contractWapper = new ContractWapper();
  const {documentId, confirmPageview, date} = params;
  const documentIdByte32 = contractWapper.asciiToHex(documentId);

  console.log("Transaction Request Start", documentIdByte32, params);

  const values = await contractWapper.getPrepareTransaction();
 
  const recentlyBlockNumber = values.blockNumber;
  const nonce = values.nonce;
  const gasPrice = values.gasPrice;

  const estimateGas = await contractWapper.getConfirmPageViewEstimateGas(documentIdByte32, date, confirmPageview);
  const gasLimit = Math.round(estimateGas);

  const transactionResult = await contractWapper.sendTransaction(gasPrice, gasLimit, nonce, 
    contractWapper.confirmPageViewContract(documentIdByte32, date, confirmPageview).encodeABI());

 
  console.log("Transaction Request Result", {documentIdByte32, params, recentlyBlockNumber, nonce, gasPrice, transactionResult});

  return callback(null, "complete");

};
