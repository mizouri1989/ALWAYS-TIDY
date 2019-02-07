import React, { Component } from 'react';
import './nettoyage.css';
import a from './a.jpg';
import b from './b.jpg'
import c from './c.jpg';
import d from './d.jpg'
class Nettoyage_Voiture extends Component {
    
    render() { 
        return (  
            <div>
                        
               
               <div className='paragprof' style={{width:'100%',
               padding:'8%', color:'black'}}>
               <h1>Lavage automobiles, bus,...</h1>
               Nos équipes se déplacent chez vous et partout sur le grand Tunis, ils sont disponibles 7 jours sur 7 (de 9h00 à 19h00) pour entretenir votre véhicule selon votre souhait.

         Nos prestations sont très respectueuses envers votre environnement, elles sont exclusivement réalisées à l’aide de produits biodégradables par des professionnels compétents et formés. (Laissant ainsi vos sols dans leurs états d’origine).
             </div>

<div style={{align:"center", display:'flex'}}>
  {/* <div className="contener_slideshow">
    <div className="contener_slide">
      <div className="slid_1"><img src={require('./a.jpg')}/></div>
      <div className="slid_2"><img src={require('./b.jpg')}/></div>
      <div className="slid_3"><img src={require('./c.jpg')}/></div>
      <div className="slid_3"><img src={require('./d.jpg')}/></div>
    </div>
  </div> */}

<div className="cssSlider">
  <div className="sliderImages">
		<img className="si_1" src={require('./a.jpg') }/>
		<img className="si_2" src={require('./b.jpg')} />
		<img className="si_3" src= {require('./c.jpg')}/>
		<img className="si_4" src= {require('./d.jpg')}/>
		<img className="si_5" src= {require('./va.jpg')}/>
		<div style={{clear:'left'}}></div>
	</div>
</div>
           <div className='para'>
          VPC et rénovation automobile à domicile en Tunisie.

Retrouver votre voiture comme neuve avec la vapeur qui permet d’éliminer les tâches sur le textile ou le cuir, rafraichir le tableau de bord, faire briller les jantes et dégraisser le bloc moteur sans aucun risque pour les parties électroniques.

L’utilisation de la vapeur économise plus que 90% de la quantité de l’eau utilisée dans un lavage classique en garantissant l’élimination des tâches et des mauvaises odeurs et l’extermination des germes en adoptant une technique plus rapide et efficace par rapport aux techniques de nettoyage ordinaires.

Vous n’avez plus besoin de ce déplacer et d’attendre votre tour, Nos équipes interviennent chez vous où et quand vous voulez sans aucun frais supplémentaire.

Il vous suffit d’appeler 22 747 747 et fixer un rendez-vous ou de passer votre réservation en ligne sur notre site web.
     <div>
    <h2>PROCESSUS DE NETTOYAGE ET RÉNOVATION</h2> 
  <ul>

<li>Dépoussiérage et nettoyage du coffre.</li>
<li>Rénovation et détachage du ciel de toit.</li>
<li>Aspiration et dépoussiérage des sièges et moquettes.</li>
<li>Rénovation et désinfection des sièges et moquettes.</li>
<li>Nettoyage des panneaux des portes et des vitres intérieures .</li>
<li>Dépoussiérage des aérateurs du tableau de bord et rénovation des plastiques.</li>
<li>Dépoussiérage et assainissement de circuit climatisation.</li>
<li>Lavage extérieur de la carrosserie (en option).</li>
<li>Dégraissage du bloc moteur.</li>
<li>Dégraissage du bloc moteur.</li>
<li>Nettoyage et brillance des jantes.</li>
</ul>
<h2>RÉSERVATION EN LIGNE !</h2>
Grâce à notre système de réservation en ligne, économiser du temps et réservez en avance encore plus rapidement !
   <button stule={{marginLeft:'10%'}}>RESERVEZ MAINTENANT</button>
     </div>
           </div>
           </div>
           </div>
        );
   }
}


 
export default Nettoyage_Voiture;