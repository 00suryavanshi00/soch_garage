import React from 'react';
import './App.css';
import Button from './button';
import { BUTTON_TYPES } from './data/button';

function App() {
  return (
    <div className="App">
      <div className="button-wrapper">
      <Button type={BUTTON_TYPES.PRIMARY} btnText='Login with Google' 
      icon={
      <svg 
      xmlns="C://</div></div>Users/SANKET S\Downloads/Google__G__Logo.svg" 
      class="icon icon-tabler icon-tabler-brand-google" 
      width="70" 
      height="21" 
      viewBox="0 0 24 24" 
      stroke-width="2" 
      stroke="currentColor" 
      fill="none" 
      stroke-linecap="round" 
      stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
      </svg>
      }
      iconPos="LEFT"
      
    />
      <Button type={BUTTON_TYPES.SECONDARY} btnText='Login with Github' icon={
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="icon icon-tabler icon-tabler-brand-github" 
      width="70" 
      height="23" 
      viewBox="0 0 24 24" 
      stroke-width="2" 
      stroke="currentColor" 
      fill="none" 
      stroke-linecap="round" 
      stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
      </svg>
      } 
      iconPos="LEFT"
      
    />
      <Button type={BUTTON_TYPES.TERTIARY} btnText='Login with Facebook' 
      icon={
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="icon icon-tabler icon-tabler-brand-facebook" 
      width="70" 
      height="24" 
      viewBox="0 0 24 24" 
      stroke-width="2" 
      stroke="currentColor" 
      fill="none" 
      stroke-linecap="round" 
      stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
      </svg>
      } 
      iconPos="LEFT"
      
    />
      </div>
    </div>
  );
};

export default App;
