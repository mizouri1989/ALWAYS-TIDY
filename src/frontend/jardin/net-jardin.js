import React, { Component } from 'react';
import './jardinage.css';

class Nettoyage_Voiture extends Component {
    
    render() { 
        return (  
            <div>
                        
             <div className='paragprof' style={{width:'100%',
               padding:'8%', color:'black'}}>
               <h1>Entreti</h1>
               Vous cherchez un jardinier compétent et sympathique pour réaliser l’entretien de votre jardin à Bordeaux, Langon, Pessac ou ailleurs en Gironde ? Contactez votre jardinier Allo-Brico33 qui se fera un plaisir d’entretenir votre jardin quel que soit votre lieu d’habitation en Gironde.
             </div>


           <div className='para'>
           Notre application Cmonjardinier et a été pensé pour vous faciliter votre quotidien. Elle est disponible sur iOS et Android et téléchargeable gratuitement en quelques secondes sur les stores.
Lorsqu’un client vous fait une demande, vous recevez une petite notification sur votre téléphone. Il vous suffit alors d’ouvrir l’application pour prendre connaissance de celle-ci. Cela peut être une demande de rendez-vous pour un devis ou directement une demande d’intervention pour les besoins les plus simples ou pour les clients souhaitant « acheter » quelques heures de travail. Les clients indiquent leurs dates de disponibilités et leur adresse. Vous pouvez ainsi leur répondre immédiatement dans l’application.
Si vous souhaitez honorer la prestation, il vous suffit d’envoyer directement votre devis via l’application, et d’attendre la réponse du client à ce sujet. Vous êtes à tout moment libres de décliner la proposition en répondant immédiatement à la requête.

Lors de votre inscription, vous pourrez choisir la zone sur laquelle vous voulez travailler en renseignant les codes postaux, créer votre profil personnalisé avec photos et vidéos, rédiger et envoyer des devis, accepter différents créneaux de rendez-vous et être payé directement après une prestation
     <div>
    <h2>Description</h2> 
  {/* <ul>

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
</ul> */}
<h2>RÉSERVATION EN LIGNE !</h2>
Grâce à notre système de réservation en ligne, économiser du temps et réservez en avance encore plus rapidement !
<button stule={{marginLeft:'10%'}}>RESERVEZ MAINTENANT</button>
</div>
</div>
<div style={{    display:'flex',
    justifyContent:'space-around'}} >
 {/* haie */}
    <div className="cssSlider">
     <div className="sliderImages">
	    	<img className="si_1" src={require('./h1.jpg') }/>
		    <img className="si_2" src={require('./h2.jpeg')} />
		    <img className="si_3" src= {require('./h3.jpg')}/>
       
       
     </div>
     </div>


     <div className="cssSlider">
     <div className="sliderImages">
	    	<img className="si_1" src={require('./t1.jpg') }/>
		    <img className="si_2" src={require('./t2.jpg')} />
		    <img className="si_3" src= {require('./t3.jpg')}/>
       
     </div>
     </div>

    
     <div className="cssSlider">
     <div className="sliderImages">
	    	<img className="si_1" src={require('./r1.jpg') }/>
		    <img className="si_2" src={require('./r2.jpg')} />
		    <img className="si_3" src= {require('./r3.jpg')}/>
      
     </div>
     </div>

</div>
</div>
          
        );
   }
}


 
export default Nettoyage_Voiture;