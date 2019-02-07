import React from 'react';
import './itemcard.css'
import {Link} from 'react-router-dom';

const Item_card = ({elm})=>{
		
    return (
   <div class="container" >
    <div class="row">
    	<div class="card col-md-12 p-3">
    		<div class="row ">
    			 <div class="col-md-4">
    				<img class="w-100" src={elm.image}style={{width:'30%'}}/>
    			 </div>
    			<div class="col-md-8">
    				<div class="card-block">
    					<h2 class="card-title">{elm.titre}</h2>
    					<p class="card-text text-justify">{elm.description}</p>
    				<Link to={elm.link}>	<button>plus de détails</button></Link> 
    				</div>
    			</div>
    		</div>
    	</div>
    
    </div>
    </div>
    )
  }
  

 
export default Item_card ;