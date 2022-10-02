import React, { Button, useState } from 'react';
import logo from './logo.svg';
import Link from './Components/PlaidLink';
import { API } from 'aws-amplify';
import "./App.css";

export default function App() {

  const [linkToken, setLinkToken] = useState('')

  async function getLinkToken() {
    var token = await API.post('linktokenapi', '/plaidLinkToken');
    token = token.link_token;
    setLinkToken(token);
    console.log(linkToken);
  }
  
  return (
    <div className="App">
      <div id='button_container'>
        <button onClick={getLinkToken}>
                Get Link Token
        </button>
        <Link token={linkToken} />
        </div>
    </div>
  );
}
