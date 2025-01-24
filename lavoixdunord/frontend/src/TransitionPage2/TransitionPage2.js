import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TransitionPage2.css';

const TransitionPage2 = () => {

    const location = useLocation();
    const navigate = useNavigate();
        
    // Récupérer les valeurs passées via navigate
    const finalScore = location.state?.finalScore || 0;
    const difficulty = location.state?.difficulty || 1;

    // Convertir le score en minutes et secondes
    const minutes = Math.floor(finalScore / 60);
    const seconds = finalScore % 60;

    return (
        <div className="background_TP2">
            <div className="container_TP2">
                <p className="p_TP2"><b>Score :</b> {minutes} minute{minutes !== 1 ? "s" : ""} et {seconds} seconde{seconds !== 1 ? "s" : ""}</p>
            </div>
            <button className="button_TP2" onClick={() => navigate(`/etape/3?difficulty=${difficulty}`)}><b>ÉTAPE SUIVANTE</b></button>
        </div>
    );
};

export default TransitionPage2;
