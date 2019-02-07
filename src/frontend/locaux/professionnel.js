import React, { Component } from 'react';
import ItemProfessionnel from './itemprofessionnel'
import bur from './hospital.jpg'
import im from './imme.jpg'
import net from './net.jpg'
import hos from './hos.jpg'
import va from './vappeure.jpg'
import tra from './trav.jpeg'
import en from './enc.jpg'
import tr from './ther.jpg'
import ve from './ve.jpg'
var tab=[
    {image:bur,
   text:'ENTRETIEN BUREAUX'}
   ,{image:im,
    text:'ENTRETIEN IMMEUBLES'},
    {image:net,
    text:' ENTRETIEN COMMERCES'},
    {image:hos,
        text:'ENTRETIEN HOPITAUX ET SANTE'},
    {image:va,
     text:'NETTOYAGE EN VAPPEUR'},
     {image:tra,
        text:'NETTOYAGE APRES TRAVAUX'},
        {image:ve,
            text:'NETTOYAGE VITRES'},
     {image:en,
    text:'EVACUATION DENCOMBRANTS'},

    {image:tr,
    text:'TRAITEMENT SOLS THERMOPLASTIQUES'}
 
];
class Professionnel extends Component {
   
    render() { 
        return ( 
            <div>
               
                <div className='paragprof' style={{width:'84%',
    marginLeft: '8%'}}>>
                <h1>Nettoyage de bureaux, industries, usines, immeubles ,comerciaux...</h1>
                Le nettoyage de locaux professionnels garantit la propreté du lieu de travail pour le confort et l’hygiène de tous les salariés. Notr Site de Nettoyage peut intervenir dans votre immeuble de bureaux, au siège de votre entreprise pour le lavage des vitres ou au sein de votre usine pour l’entretien du parking de vos employés.
               
Nous intervenons dans le département dans toute la Tuniseie.

Nos équipes de professionnels sauront trouver la solution de remise en état et d’assainissement qui convient au lieu nécessitant notre intervention en nettoyage industriel.

Responsable d’une société ou membre d’une collectivité locale, n’hésitez pas à nous faire appel pour rendre bonne mine à vos moquettes, lustrer vos surfaces vitrées ou donner un coup de propre à vos salles de réunion.
</div>

              <div className='cardprofessionnel'>  {tab.map((el,i)=><ItemProfessionnel elm={el}  key={i} />)}</div>
            </div>
         );
    }
}
 
export default Professionnel ;