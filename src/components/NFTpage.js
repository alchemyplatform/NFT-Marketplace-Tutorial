import Navbar from "./Navbar";
import axie from "../tile.jpeg";

function NFTPage () {
    return(
        <div>
            <Navbar></Navbar>
            <div className="flex ml-20 mt-20">
                <img src={axie} alt="" className="w-48 md:w-72" />
                <div className="text-xl ml-5 text-white">
                    <div>
                        Name: {"Axie#4563"}
                    </div>
                    <div>
                        Description: {"Axie Infinity Marketplace"}
                    </div>
                    <div>
                        <a href="htps://axieinfinity.com">Website</a>
                    </div>
                    <div>
                        Price: {"0.03 ETH"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTPage;