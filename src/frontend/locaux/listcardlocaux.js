import React, { Component } from 'react';
import Item_card_locaux from './itemcardservicelocaux';
import Professionnel from './professionnel'
import Particulier from './Particulier'
import Locaux from './Serviceslocaux'

import './itemcardlocaux.css'
import im2 from './bb.jpg';

import im3 from './me.jpg';


var tab=[
 
{
    
    img:im2,
    titre:'Professionnels',
    para:'Bureaux, Usines, Commerces,Copropriétés, Régies d’immeubles,Entrepôts, Locaux commerciaux, Associations, Etablissements publics',
    link:'/service_locaux_Professionnel'
},
{
    
    img:im3,
    titre:'Particuliers',
    para:'Nettoyage de fin de bail ,(États des lieux, Remise de clefs.), Maisons, Villas,Appartements',
    link:'/service_locaux_Particulier'
}
];
class List_card_Locaux extends Component {
  
    render() { 
      
        return ( 
            
       <div> 
            <Locaux/>
    <div className="styleCardlocaux">
    {tab.map((el,i)=><Item_card_locaux  elm={el}  key={i} />)}
    </div>
        <div><Professionnel/></div>
        <div><Particulier/></div>
       
    
   
    </div> 

         );
    }
}
 
export default List_card_Locaux;