import { NavLink } from 'react-router-dom';
import React from 'react';
export default function Signup(){
  return(
    <div className="divparent">
      <h1 className="h1name">horaire du personnel<br/>
        <span className="ptitle1">veuillez vous inscris,</span><br/>
        <span className="ptitle2">Pour indiquer que vous êtes arrivé ou reparti</span>
      </h1>
      <div className="login-container">
        <h2 className="h2connect">inscriptions</h2>
        <form>
          <label htmlFor="username" className="label_name">Nom</label>
          <input
            className="input_name"
            type="text"
            id="username"
          />
          <label htmlFor="password" className="label_password">Mot de passe</label>
          <input
            className="input_password"
            type="password"
            id="password"
          />                                              
          <button className="button_submit" type="submit">S'inscrire</button>
        </form>
        <p className="ppascompte"><NavLink to="/login">j'ai déjà un compte, je me connecte</NavLink></p>
      </div>
    </div>
  )
}