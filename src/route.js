import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import List_Services from './frontend/home_service'
import List_card_Locaux from './frontend/locaux/listcardlocaux';
import Professionnel from './frontend/locaux/professionnel';
import Particulier from './frontend/locaux/Particulier'
import Nettoyage_Voiture from './frontend/voiture/nettoyage_voiture';
import Net_jardin from './frontend/jardin/net-jardin'


class Routes extends Component {
    
    render() { 
        return ( <div>
       <Route exact path="/" component={List_Services }/>
       <Route exact path="/service_locaux" component={List_card_Locaux}/>
       <Route exact path="/service_locaux_Professionnel" component={Professionnel}/>
       <Route exact path="/service_locaux_Particulier" component={Particulier}/>
       <Route exact path="/Netoyage_Voiture" component={Nettoyage_Voiture}/>
       <Route exact path="/Nettoyage_Jardin" component={Net_jardin }/>
       {/* <Route exact path="/Insciription" component={Inscrit }/> */}
       {/* <Route exact path="/Hygienne" component={Hygienne}/> */}

        </div> );
    }
}
 
export default Routes;