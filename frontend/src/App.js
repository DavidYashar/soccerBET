import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import {WalletConnect} from './WalletConnect';
import Main from './Main';

// import {WalletConnect} from './WalletConnect';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <Router>
       
        <Routes>
          {/* <Route exact path='/' element={<WalletConnect/>}/> */}
          <Route exact path='/' element={<Main/>}/>
          
        </Routes>
     
      </Router>
    </div>
    
  );
}

export default App;
