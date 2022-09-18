import React from 'react'
import './helpers.css'
import back from '../assets/back.png'

function Header() {
  return (
    <div class="header">
  <a href="#default" class="logo">iSweat</a>
  <div class="header-right">
    <a class="active" href="/">Home</a>
    <a href="/create">Add Exercise</a>
    <a href="/list">Exercise List</a>
  </div>
</div>
  );
}


function Intro(){
  return(
    <>
    <div className="headcenter">
      <h1>Tracking Made Simple.</h1>
      <img src={back} width='60%' height='60%' />
    </div>
    </>
  )
}
function Footer(){
  return(
    <>
    <div class="footer">
  <p>Developed by Ryson Wong © 2022</p>
</div>
    </>
  )
}

export {Header,Intro,Footer}