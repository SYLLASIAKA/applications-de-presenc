import React, { useState, useEffect } from 'react';

const EmployeePresence = () => {
    
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

  const checkIfInside = (location) => {
    // Vérifier si l'utilisateur est à l'intérieur de l'entreprise en fonction de sa géolocalisation
    const companyLocation = {
      latitude: 5.352693,
      longitude: -4.018906,
      radius: 500 // rayon en mètres
    };

    const distance = getDistance(location.latitude, location.longitude, companyLocation.latitude, companyLocation.longitude);
    return distance <= companyLocation.radius;
  }

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
  const deg2rad = (deg) => {
    return deg * (Math.PI/180)
  }

  const handleArrival = () => {
    if (isInside) {
      const now = new Date();
      setArrivalTime(now.toLocaleTimeString());
    }
  }

  const handleDeparture = () => {
    if (isInside) {
      const now = new Date();
      setDepartureTime(now.toLocaleTimeString());
    }
  }

  return (
    <div>
      {location && (
        <p>Votre emplacement actuel : {location.latitude}, {location.longitude}</p>
      )}
      {isInside ? (
        <>
          {arrivalTime ? (
            <p>Heure d'arrivée enregistrée : {arrivalTime}</p>
          ) : (
            <button onClick={handleArrival}>Enregistrer l'heure d'arrivée</button>
          )}
          {departureTime ? (
            <p>Heure de départ enregistrée : {departureTime}</p>
          ) : (
            <button onClick={handleDeparture}>Enregistrer l'heure de départ</button>
          )}
        </>
        ) : (
        <p>Vous n'êtes pas à l'intérieur de l'entreprise.</p>
        )}
    </div>
    );
};
            
export default EmployeePresence;

