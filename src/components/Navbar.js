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
const [currAddress, updateAddress] = useState('0x');

async function getAddress() {
  const ethers = require("ethers");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const addr = await signer.getAddress();
  updateAddress(addr);
}

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
        console.log("here");
        getAddress();
        window.location.replace(location.pathname)
      });
}

  useEffect(() => {
    let val = window.ethereum.isConnected();
    if(val)
    {
      console.log("here");
      getAddress();
      toggleConnect(val);
      updateButton();
    }

    window.ethereum.on('accountsChanged', function(accounts){
      window.location.replace(location.pathname)
    })
  });

  function underlineNavItem(className) {
/*    if(typeof className === undefined)
      return;
    if(document.getElementById('marketplace') == null)
      return;
    let set = ['marketplace', 'list', 'profile'];
    const el = document.getElementById(className);
    el.classList.add('border-b-2');
    console.log("add", el);
    set = set.filter(n => ![className].includes(n));

    set.map((val, i) => {
      const el2 = document.getElementById(val);
      el2.classList.remove('border-b-2');
      console.log("remove", el2);
      return;
    });*/
    
  }
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
              <li className='hover:border-b-2 hover:pb-0 p-2' id="marketplace" onClick={() => underlineNavItem('marketplace')}>
                <Link to="/">Marketplace</Link>
              </li>
              <li className='hover:border-b-2 hover:pb-0 p-2' id="list" onClick={() => underlineNavItem('list')}>
                <Link to="/sellNFT">List my NFT</Link>
              </li>
              <li className='hover:border-b-2 hover:pb-0 p-2' id="profile" onClick={() => underlineNavItem('profile')}>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={connectWebsite}>{connected? "Connected":"Connect Wallet"}</button>
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        <div className='text-white text-bold text-right mr-10 text-sm'>
          {currAddress !== "0x" ? "Connected to":"Not Connected"} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
        </div>
      </div>
    );
  }

  export default Navbar;