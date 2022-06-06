import Navbar from "./Navbar";
import { getTiles } from "./Marketplace";

function Profile () {
    var address = '0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13';
    var num = 14;
    var val = 0.014;

    var abc = getTiles(address);
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
            <div className="flex text-center flex-col mt-11 md:text-2xl text-white">
                <div className="mb-5">
                    <h2 className="font-bold">Wallet Address</h2>  
                    {address}
                </div>
            </div>
            <div className="flex flex-row text-center justify-center mt-10 md:text-2xl text-white">
                    <div>
                        <h2 className="font-bold">No. of NFTs</h2>
                        {num}
                    </div>
                    <div className="ml-20">
                        <h2 className="font-bold">Total Value</h2>
                        {val}
                    </div>
            </div>
            <div className="flex flex-col text-center md:text-2xl mt-11 text-white">
                <h2 className="font-bold">Your NFTs</h2>
                <div className="flex justify-center">
                    {abc}
                </div>
            </div>
            </div>
        </div>
    )
};

export default Profile;