import logo from '../logo_3.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function Navbar() {
    return (
      <div className="">
        <nav className="w-screen">
          <ul className='flex items-end justify-between py-3 bg-transparent text-white pr-5'>
          <li className='flex items-end ml-5 border-b-2 pb-2'>
            <Link to="/">
            <img src={logo} alt="" width={45} height={45} className="inline-block"/>
            <div className='inline-block font-bold text-xl'>
              xieMarketplace
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
            </ul>
          </li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Navbar;