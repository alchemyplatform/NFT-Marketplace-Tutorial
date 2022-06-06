import axie from "../tile.jpeg";

function NFTTile (data) {
    console.log(data.data.name);
    return (
        <a href="/nftPage">
        <div className="border-2 display-block ml-12 mt-5 flex flex-col shrink-0 items-center p-0 rounded-lg w-48 md:w-72 shadow-2xl">
            <img src={axie} alt="" className="w-72 rounded-lg" />
            <div className= "text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg z-10 pt-9 -mt-20">
                <strong>{data.data.name}</strong>
                <p className="display-inline">
                    {data.data.description}
                </p>
            </div>
        </div>
        </a>
    )
}

export default NFTTile;

