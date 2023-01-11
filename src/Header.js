import React, {Component} from 'react';
import logo from './logo.svg';
import './index.css';

function Header() {
    return (
    <div>
    <img src={logo} alt="logo" />
    <h2>{process.env.REACT_APP_PERTAMA}</h2>
    <h3>{process.env.REACT_APP_KEDUA}</h3>
    </div>
    )
}
class MyButton extends Component {
    render() {
          return  <button className='Button'>Login</button> 
          
      }
      
  }


export default Header