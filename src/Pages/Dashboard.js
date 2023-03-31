import React, { useState, useEffect } from 'react';
// Definit un composant appele Dashboard
const Dashboard = () => {
    // on utilise la methode useState pour definir quatre element
  const [location, setLocation] = useState(null);
  const [isInside, setIsInside] = useState(false);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [departureTime, setDepartureTime] = useState(null);


  useEffect(() => {
    // Obtenir la géolocalisation de l'utilisateur
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);


  useEffect(() => {
    // Vérifier si l'utilisateur est à l'intérieur de l'entreprise
    if (location) {
      const isInside = checkIfInside(location);
      setIsInside(isInside);
    }
  }, [location]);


  const getDistance = (lat1, lon1, lat2, lon2) => {
    // Calcul de la distance entre deux points géographiques en utilisant la formule de Haversine
    const R = 6371; // rayon de la Terre en km
    const dLat = deg2rad(lat2-lat1);
    const dLon = deg2rad(lon2-lon1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return d * 1000; // conversion en mètres
  }


  const checkIfInside = (location) => {
    // Vérifier si l'utilisateur est à l'intérieur de l'entreprise en fonction de sa géolocalisation
    const companyLocation = {
      latitude: 5.3544,
      longitude: -4.0016,
      radius: 500 // rayon en mètres
    };
    const distance = getDistance(location.latitude, location.longitude, companyLocation.latitude, companyLocation.longitude);
    return distance <= companyLocation.radius;
  }


  const deg2rad = (deg) => {
    return deg * (Math.PI/180)
  }


  const handleArrival = () => {
    if (isInside) {
      const now = new Date();
      setArrivalTime(now.toLocaleTimeString());
      console.log(now)
    }
  }


  const handleDeparture = () => {
    if (isInside) {
      const now = new Date();
      setDepartureTime(now.toLocaleTimeString());
      console.log(now)
    }
  }

  
  return (
    <div>  
      <div>
       <div className='hparent'>
          <div className='divdesp'>
           <p className="h2dasboard poyo">nom de l'utilisateur</p>
           <p className="pdashboard poyo">Total du temps de travail : 0 heures</p>
          </div>
          <h1 className="h1dasboard">Tableau de bord du temps de travail</h1>
          {/* {location && (
            <p>Votre emplacement actuel : {location.latitude}, {location.longitude}</p>
          )} */}
          {isInside ? (
            <div className='div-des_button'>
              {arrivalTime ? (
                <p className='poyo'>Arrivée enregistrée : {arrivalTime}</p>
              ) : (
                <button className='butmarquer'onClick={handleArrival}>Enregistrer l'heure d'arrivée</button>
              )}
              {departureTime ? (
                <p className='poyo'>Départ enregistrée : {departureTime}</p>
              ) : (
                <button className='butmarquer' onClick={handleDeparture}>Enregistrer l'heure de départ</button>
              )}
            </div>
          ) : (
            <p className='peror poyo'>Vous n'êtes pas à l'intérieur de l'entreprise...</p>
          )}
       </div>
       <table>
         <thead>
           <tr>
             <th>Date</th>
             <th>Heure d'arrivée</th>
             <th>Heure de départ</th>
             <th>Temps de travail</th>
           </tr>
         </thead>
         <tbody>
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>             
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>             
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>             
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>             
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>             
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>             
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>             
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>             
             <tr >
               <td>29/03/2023</td>
               <td>08:00</td>
               <td>18:30</td>
               <td>9h:30min</td>
             </tr>  

         </tbody>
       </table>
     </div>
    </div>
    
  );
};
            
export default Dashboard;