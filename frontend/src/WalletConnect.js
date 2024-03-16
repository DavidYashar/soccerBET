// import { useState } from "react";
// import { Link } from "react-router-dom";
// import  WalletContext  from "./WalletContext";
// import Main from './Main';

// const WalletContext = createContext({address: '', balance: ''});
import "./CSS/wallet.css";

const WalletConnect = ({ buttonWallet,  wallet }) => {
   
   

    // const [address, setAddress] = useState('');
    // const [network, setNetwork] = useState('');
    // const [balance, setBalance] = useState('');
    // const [buttonWallet, setButtonWallet] = useState("Wallet Connect");


    // const wallet = async () => {
    //  try {

    //         let res = await window.unisat.switchNetwork("testnet");
    //         let bal = await window.unisat.getBalance();
            
    //         setBalance(bal.total/100000000);
    //         setNetwork(res);
    //         setButtonWallet("connected");

              

    //         if(res === 'testnet'){
    //             let accounts = await window.unisat.requestAccounts();
    //             setAddress(accounts);
    //             console.log('connect success', accounts);
    //             console.log("balance", balance.total);
    //             console.log(res)
    //         }
           
    //       } catch (e) {
    //         console.log('connect failed');
    //       }
    // }


    return ( 
        
    
      
        <div className="walletConnect">
           <button onClick={wallet}>{buttonWallet}</button> 
           {/* <h5>wallet address is: {address}</h5>
           <p>network is: {network}</p>
           <p>AYA tokens: {balance} </p> */}

           {/* <button><Link to={'/Main'}> main page </Link></button> */}

         
       
        </div>

     
     );
}
 
export  default WalletConnect;