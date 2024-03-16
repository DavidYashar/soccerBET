import {  useState } from "react";
// import { Link } from "react-router-dom";
import './CSS/main.css';

import WalletConnect from './WalletConnect';
import ChooseLeague from "./choose/ChooseLeague";
import ChooseTeam from "./choose/ChooseTeam";

// import one from './images/1.png';
// import two from './images/2.png';
// import three from './images/3.png';
// import four from './images/4.png';

const Main = () => {
    // const {address} = useContext(WalletContext);

    // useEffect(()=> {
    //     console.log('address updated:', address)
    // }, [address])

    // if(!address){
    //     return(
    //         <p>connecting address....</p>
    //     )
    // }

    const [address, setAddress] = useState('');
    const [network, setNetwork] = useState('');
    const [balance, setBalance] = useState('');
    const [buttonWallet, setButtonWallet] = useState("Wallet Connect");


    const wallet = async () => {
     try {

            let res = await window.unisat.switchNetwork("testnet");
            let bal = await window.unisat.getBalance();
            
            setBalance(bal.total/100000000);
            setNetwork(res);
            setButtonWallet("connected");

              

            if(res === 'testnet'){
                let accounts = await window.unisat.requestAccounts();
                setAddress(accounts);
                console.log('connect success', accounts);
                console.log("balance", balance.total);
                console.log(res)
            }
           
          } catch (e) {
            console.log('connect failed');
          }
    }


    return ( 
        <div className="main">
            <WalletConnect buttonWallet={buttonWallet} wallet={wallet} />
           {address && 
           <div className="wallet">
           <p>Good day</p> 
         <h4>{address}</h4>
         <h5>{network}</h5>
         </div>
         } 
           
           <div className="choose">
            <ChooseLeague/>
            <ChooseTeam/>
           </div>
           
            <div className="todayGames">
            
            <h4>todays games:</h4>
            
            </div>
        </div>
     );
}
 
export default Main;