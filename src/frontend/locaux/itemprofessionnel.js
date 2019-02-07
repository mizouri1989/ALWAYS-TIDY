import React, { Component } from 'react';
import './itemcardlocaux.css'

class ItemProfessionnel extends Component {

    render() {
        const {elm} =this.props 
        return (  
            
           
            <div className="img-container">
               <img src={elm.image}/><h3>{elm.text}</h3>
                <div className="overlay">
              
                   
                   <a href="#" className="btn">Choisir un candidat <i class="fa fa-external-link-square" aria-hidden="true"></i></a>
                </div>
        </div>
        // <div className="grid">

        // <figure className="effect-lily">
        //     <img src={elm.image}/>
        //     <figcaption>
        //         <h2>Nice <span>Lily</span></h2>
        //         <p>{elm.text}</p>
        //         <a href="#">View more</a>
        //     </figcaption>			
        // </figure>
    
        
        

       
       
           
             
           
        
       
        );
    }
}
 
export default ItemProfessionnel;