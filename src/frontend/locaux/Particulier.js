import React, { Component } from 'react';
import ItemProfessionnel from './itemprofessionnel'
import sol from './sol.jpg'
import cui from './cui.jpg'
import lin from './lin.jpg'
import salle from './salle.jpg'
import pou from './pou.jpg'
import encore from './encore.jpg'

var tab=[
    {image:sol,
   text:'Nettoyage des sols'}
   ,{image:cui,
    text:'Nettoyage complet de la cuisine'},
    {image:lin,
    text:' Repassage du linge'},
    {image:salle,
        text:'Nettoyage des pièces deau'},
    {image:pou,
     text:'Poussière dans tout votre logement'},
     {image:encore,
        text:'Et plus encore...'}
];
class Particulier extends Component {
   
    render() { 
        return ( 
            <div>
               
                <div className='paragprof' style={{width:'84%',
    marginLeft: '8%'}}>
                <h1>POUR UNE MAISON NETTE DE PROPRETÉ </h1>
                Avec la société NSS NETTOYAGE, profitez d’un intérieur parfaitement nettoyé en profondeur. Nous vous proposons des services personnalisés en fonction de vos besoins. Nous lavons vos vitres, vos carrelages muraux et vos sols. Faites-nous confiance pour prendre soin de votre moquette, vos façades, vos escaliers, etc. Nous sommes un professionnel du nettoyage à haute pression. Nous sommes à votre écoute pour définir la réponse exacte à vos attentes. Nous sommes disponibles pour des nettoyages ponctuels ou réguliers. Confiez-nous l’hygiène et la propreté de votre demeure.
              </div>

              <div className='cardprofessionnel'>  {tab.map((el,i)=><ItemProfessionnel elm={el}  key={i} />)}</div>
            </div>
         );
    }
}
 
export default Particulier ;