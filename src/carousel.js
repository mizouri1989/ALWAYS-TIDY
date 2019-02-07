import React, { Component } from 'react';
import './App.css';

class Carousel extends Component {

   render() {
       return (


<div className="carousel">
 <div className="holder">

   <img src={require('./img/idin.jpg')} />
   <img src={require('./img/hcleaning.jpg')} />
   <img src={require('./img/idin.jpg')} />
   <img src={require('./img/idin.jpg')} />
 <img src={require('./img/idin.jpg')} />
 <img src={require('./img/idin.jpg')} />
   <img src={require('./img/idin.jpg')} />
 </div>
</div>
        );
   }
}

export default Carousel;


