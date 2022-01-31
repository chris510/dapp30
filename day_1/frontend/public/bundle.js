

const main = () => {
  var contractABI = [];
  var contractAddress = '0x31957eC8ecFE947e7f8627ECbc762fF7A9BCF71b';
  var web3 = new Web3('http://localhost:9545');
  var simpleSmartContracvt= new web3.eth.Contract(contractABI, contractAddress);

  console.log(simpleSmartContracvt);
  web3.eth.getAccounts()
    .then(console.log);
}

main();