import Navbar from "./Navbar";
import axie from "../tile.jpeg";
import { useLocation, useParams } from 'react-router-dom';
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";

export default function NFTPage (props) {

const [data, updateData] = useState({});

async function getNFTData(tokenId) {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
    //create an NFT Token
    const tokenURI = await contract.tokenURI(tokenId);
    let meta = await axios.get(tokenURI);
    meta = meta.data;

    let item = {
        price: meta.price,
        tokenId: meta.tokenId,
        seller: meta.seller,
        owner: meta.owner,
        image: meta.image,
        name: meta.name,
        description: meta.description,
    }

    updateData(item);
}

    const params = useParams();
    const tokenId = params.tokenId;
    getNFTData(tokenId);

    return(
        <div>
            <Navbar></Navbar>
            <div className="flex ml-20 mt-20">
                <img src={data.image} alt="" className="w-48 md:w-72" />
                <div className="text-xl ml-5 text-white">
                    <div>
                        Name: {data.name}
                    </div>
                    <div>
                        Description: {data.description}
                    </div>
                    <div>
                        Price: {data.price}
                    </div>
                </div>
            </div>
        </div>
    )
}