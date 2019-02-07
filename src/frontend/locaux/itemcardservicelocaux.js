import React from 'react';
import './itemcardlocaux.css'
import {Link} from 'react-router-dom';

class Item_card_locaux extends React.Component{

        render()
      {    
   const {elm} =this.props
        return (
        <Link to={elm.link}>
        <div className='CARD'>
        <div class="wrap">
<div class="tile"> 
  <img src={elm.img}/>
  <div class="text">
  <h1>{elm.titre}</h1>
  
  <p class="animate-text">{elm.para}</p>

  </div>
 </div>

</div>

    </div></Link>
    );}
}
export default Item_card_locaux;