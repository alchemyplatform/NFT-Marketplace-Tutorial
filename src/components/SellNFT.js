import Navbar from "./Navbar";
import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import Web3Modal from 'web3modal';

export default function SellNFT () {
    const [formParams, updateFormParams] = useState({ name: '', description: '', price: ''});
    const [fileURL, setFileURL] = useState(null);
    const web3Modal = new Web3Modal();
    const ethers = require("ethers");

    async function OnChangeFile(e) {
        var file = e.target.files[0];
        //check for file extension
        try {
            const response = await uploadFileToIPFS(file);
            if(response.success === true) {
                console.log("yoyo", response.pinataUrl)
                setFileURL(response.pinataURL);
            }
        }
        catch(e) {
            console.log("Error during file upload", e);
        }
    }

    async function uploadMetadataToIPFS() {
        const {name, description, price} = formParams;
        if( !name || !description || !price || !fileURL)
            return;
        const nftJSON = JSON.stringify({
            name, description, image: fileURL
        });

        try {
            const response = await uploadJSONToIPFS(nftJSON);
            if(response.success === true){
                console.log("yoyooyo", response)
                return response.pinataURL;
            }
        }
        catch(e) {
            console.log("error uploading JSON metadata:", e)
        }
    }

    async function listNFT(e) {
        e.preventDefault();

        const metadataURL = uploadMetadataToIPFS();
        //const web3Modal = new Web3Modal();
        //const connection = await web3Modal.connect()
        //const provider = new ethers.providers.Web3Provider(connection)
        const signer = ethers.provider.getSigner();
        /*console.log("signer", signer);
        
        const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
        let contract = new ethers.Contract(address, "", signer)
        let listingPrice = 0.01;
        listingPrice = listingPrice.toString();
        let transaction = await contract.createToken(metadataURL, formParams.price, {value: listingPrice});
        await transaction.wait();*/

        //console.log("txn success", transaction);
    }

    return (
        <div className="">
        <Navbar></Navbar>
        <div className="flex flex-col place-items-center mt-10">
            <form className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4">
            <h3 class="text-center font-bold text-purple-500 mb-8">Upload your NFT to the marketplace</h3>
                <div className="mb-4">
                    <label className="block text-purple-500 text-sm font-bold mb-2" for="name">NFT Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Axie#4563" onChange={e => updateFormParams({...formParams, name: e.target.value})}></input>
                </div>
                <div className="mb-6">
                    <label className="block text-purple-500 text-sm font-bold mb-2" for="description">NFT Description</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" cols="40" rows="5" id="description" type="text" placeholder="Axie Infinity Collection" onChange={e => updateFormParams({...formParams, description: e.target.value})}></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-purple-500 text-sm font-bold mb-2" for="price">Price (in ETH)</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Min 0.01 ETH" step="0.01" onChange={e => updateFormParams({...formParams, price: e.target.value})}></input>
                </div>
                <div>
                    <label className="block text-purple-500 text-sm font-bold mb-2" for="image">Upload Image</label>
                    <input type={"file"} onChange={OnChangeFile}></input>
                </div>
                <button onClick={listNFT} className="font-bold mt-10 w-full bg-purple-500 text-white rounded p-2 shadow-lg">
                    List NFT
                </button>
            </form>
        </div>
        </div>
    )
}