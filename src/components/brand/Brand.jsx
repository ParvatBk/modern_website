import React from 'react'

import './brand.css';
import {google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className=""><img src={google} alt="google logo" /></div>
      <div className=""><img src={slack} alt="slack logo" /></div>
      <div className=""><img src={atlassian} alt="atlassian logo" /></div>
      <div className=""><img src={dropbox} alt="dropbox logo" /></div>
      <div className=""><img src={shopify} alt="shopify logo" /></div>
    </div>
  )
}

export default Brand