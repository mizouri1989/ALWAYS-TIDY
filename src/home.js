import React, { Component } from 'react';
import Carousel from './carousel'
import PrimarySearchAppBar from './navbar'
import './App.css';
import Blog from './blog'
import ButtonBases from './buttons'
import Box from './box'
const HomePage=()=>{
return (   
<div classNameName='HomePage-container'>
 
<PrimarySearchAppBar  />

<Box/>
<ButtonBases/>
<Blog className='blog'/>

</div>
)
}



export default HomePage ;