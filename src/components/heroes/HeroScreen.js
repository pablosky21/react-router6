import React, { useMemo } from "react";
import { useParams, Navigate,useNavigate } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroById";

const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate()
  const handleReturn = ()=>{
    navigate( -1 );
    
  }
  const hero =  useMemo(() =>  getHeroeById(heroeId), [heroeId]);
  if (!hero) {
    return <Navigate to='/' />
  }
  const {  superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div className="row mt-5">
      <div className="col-4"> 
      <img alt={superhero} src ={`../assets/heroes/${heroeId}.jpg`}
      className="img-thumbnail animate__animated animate__fadeIn"></img>
      </div>
      <div className="col-8">
        <h3>{superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>ALter ego:</b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
          <li className="list-group-item"><b>Firts apperearance:</b>{first_appearance}</li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
