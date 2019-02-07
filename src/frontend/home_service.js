import React, { Component } from 'react';
import Item_card from './itemcard';


import './itemcard.css'


import im1 from './locaux/voiture.jpg';
import im2 from  './locaux/jardinage.jpg';
import im3 from './locaux/maison.jpg';
import im4 from './locaux/hygienne.jpg';
let tab=[
    {
        titre:'Nettoyage Du Locaux',
        image :im3,
        description:'Quel que soit le lieu de travail : bureaux, usine, immeuble, entrepôt, hôpital, chantier ou hôtel, les activités de nettoyage de locaux sont incontournables pour le bon fonctionnement d’une entreprise. Pour le bien-être de vos employés comme pour celui de vos visiteurs ou de vos clients, la propreté de des locaux doit être effectuée régulièrement par un prestataire spécialisé.Choisir le nettoyant ',
        _id:'3',
        link:'/service_locaux'
        },
    {
    titre:'Nettoyage De Voiture',
    image :im1,
    description:'Venir faire entretenir votre véhicule chez nous, Selon la formule que vous choisirez, notre équipe effectuera un nettoyage à la main à l intérieur et à l extérieur du véhicule, notamment le nettoyage complet des vitres, le polish de la carrosserie, le shampoing des plafonds et moquettes, la pose de cire de protection, le lustrage mécanique, l entretien des cuirs, la rénovation des plastiques et des jantes et bien d autres encore. n hésitez pas de nous cantacter',
    _id:'1',
    link:'/Netoyage_Voiture'
},
{titre:'Nettoyage Du Jardin',
image:im2,
description:'Vos allées, terrasse, portail, mobilier de jardin parfaitement nettoyés, c’est ce que nous vous proposons avec notre service de nettoyage extérieur. Chaque nettoyeur professionnel de Maison et Services utilise des techniques spécifiques choisies avec soin. Découvrez toutes nos prestations et nos avantages.'
,
_id:'2',
link:'/Nettoyage_Jardin'
},

{titre:'Hygienne 3D',
image :im4,
description:'Notre site est à votre disposition, nous sommes situés en Tunisie et mettons à votre disposition plusieurs produits, matériels destinés à lutter contre tout type d’insectes et de problèmes de ce genre, afin de respecter l’environnement vous souffrez des rats et des souris, vos habitations sont soumises à des soucis d’hygiène. Notre service Hygiène 3D vous en débarrasse en tout professionnalisme.N’hésitez donc pas de nous contacter en cas de besoin.',  
_id:'4',
link:'/Hygienne"'
},
]
class List_Services extends Component {
  
    render() { 
        return ( <div>
            
            
            <div className="backCard" style={{padding:'10%'}}>
                
  <h1 className='PARAGRAPHE1'>VCP Site de 
        nettoyage professionnel à TUNISIE
</h1>
    <div className="styleCard">
    {tab.map((el,i)=>{return <Item_card  elm={el}  key={i} />})}
   </div>
           
 </div>
 </div>
         );
    }
}
 
export default List_Services ;