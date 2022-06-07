import logo from '../logo_3.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function Navbar() {

const [connected, toggleConnect] = useState(false);
const location = useLocation();

function updateButton() {
  const ethereumButton = document.querySelector('.enableEthereumButton');
  ethereumButton.textContent = "Connected";
  ethereumButton.classList.remove("hover:bg-blue-70");
  ethereumButton.classList.remove("bg-blue-500");
  ethereumButton.classList.add("hover:bg-green-70");
  ethereumButton.classList.add("bg-green-500");
}
async function connectWebsite() {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(() => {
        updateButton();
        window.location.replace(location.pathname)
      });
}

  useEffect(() => {
    let val = window.ethereum.isConnected();
    console.log("this ran", val)
    if(val)
    {
      toggleConnect(val);
      updateButton();
    }
  });
    return (
      <div className="">
        <nav className="w-screen">
          <ul className='flex items-end justify-between py-3 bg-transparent text-white pr-5'>
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            <img src={logo} alt="" width={45} height={45} className="inline-block"/>
            <div className='inline-block font-bold text-xl'>
              lchemy NFT Marketplace
            </div>
            </Link>
          </li>
          <li className='w-2/6'>
            <ul className='lg:flex justify-between font-bold mr-10 text-lg'>
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/">Marketplace</Link>
              </li>
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/sellNFT">List my NFT</Link>
              </li>
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={connectWebsite}>{connected? "Connected":"Connect Wallet"}</button>
              </li>
            </ul>
          </li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Navbar;