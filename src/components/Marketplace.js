import Navbar from "./Navbar";
import NFTTile from "./NFTTile";
import MarketplaceJSON from "../Marketplace.json";

async function getAllNFTs() {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
    console.log("contrct is", contract);
    console.log(provider, signer)
    //create an NFT Token
    let transaction = await contract.getAllNFTs()
    //await transaction.wait()

    console.log("txn success", transaction);
}
export function getTiles(address) {
    console.log("address is", address);
    const data = [
        {
            "name": "Axie#4352",
            "description": "Axie Infinty toolkit",
            "website":"http://axieinfinity.io",
            "image":"",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "Axie#4353",
            "description": "Axie Infinty toolkit",
            "website":"http://axieinfinity.io",
            "image":"",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "Axie#4353",
            "description": "Axie Infinty toolkit",
            "website":"http://axieinfinity.io",
            "image":"",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
        },
    ];

    const val = data.map((value, index) => {
        //Pending filtering by address on profile page
         return <NFTTile data={value} key={index}></NFTTile>;
    })

    return val;
}

function Marketplace (address) {
    const abc = getTiles(address.address);
    const NFTs = getAllNFTs();

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col place-items-center mt-20">
                <div className="md:text-xl font-bold text-white">
                    Top NFTs
                </div>
                <div className="flex mt-5 justify-between flex-col md:flex-row">
                    {abc}
                </div>
            </div>            
        </div>
    );
}

export default Marketplace;