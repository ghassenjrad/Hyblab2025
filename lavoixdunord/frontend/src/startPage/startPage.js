import React from 'react';
import './startPage.css';
import { useNavigate, useParams } from "react-router-dom";
import useBasename from '../hooks/useBasenameHook';

const StartPage = () => {
    const navigate = useNavigate();
    const { difficulty } = useParams(); // Récupérer la difficulté depuis l'URL

    const basename = useBasename(); // Utilisation du hook useBasename

    const handleEtapeClick = (etape) => {
        navigate(`/start/${difficulty}/${etape}`); // Redirige vers la page des questions avec la difficulté et l'étape
    };


    return (
        <div className="start_page_bg w-100 position-relative">
            <div className="mt-84 text-center">
                <h1 className="text-white">DÉPART !</h1>

                <div className="mx-3 mt-5 p-4">
                    <p><i><b>Bienvenue à Lille, point de départ du Tour de France et de votre aventure.</b></i></p>
                    <p>Votre première question vous attend, répondez avec précision, avancez sans perdre de temps et préparez-vous à découvrir les trésors cachés du Nord.</p>
                    <p>Chaque question vous rapproche un peu plus du premier maillot et du podium !</p>
                    <p><i><b>Bonne chance, et que la découverte de cette belle région commence !</b></i></p>
                </div>

                <button onClick={() => handleEtapeClick(1)}
                    className="btn btn-outline-dark fw-bold mx-5"
                >
                    COMMENCER
                </button>

            </div>
        </div>
    );
};

export default StartPage;