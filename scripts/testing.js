async function getNFts () {
const MyContract = await ethers.getContractFactory("NFTMarketplace");
const contract = await MyContract.attach(
  "0x5FbDB2315678afecb367f032d93F642f64180aa3"
);

// Now you can call functions of the contract
var vals = await contract.getAllNFTs();
console.log(vals);
}

getNFts();

