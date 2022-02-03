import { Routes,Route } from 'react-router-dom';
import './App.css';
import Core from './Core';
import Product from './Product';
import {Helmet} from "react-helmet";
function App() {
  return (
    <div>
      <Route path ="/" exact>
        <Core/>
      </Route>
      <Route path="/product/:id" exact>
        <Product/>
      </ Route>
    </div>
 )
}

export default App;
