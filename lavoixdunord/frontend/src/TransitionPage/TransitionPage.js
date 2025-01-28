import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useBasename from '../hooks/useBasenameHook';
import ImageModal from '../components/ImageModal';

const TransitionPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const basename = useBasename();
    const [showModal, setShowModal] = React.useState(false);

    // Récupérer les valeurs passées via navigate
    const finalScore = parseInt(localStorage.getItem("score")) || 0;
    // const difficulty = location.state?.difficulty || 1;

    // Convertir le score en minutes et secondes
    const minutes = Math.floor(finalScore / 60);
    const seconds = finalScore % 60;

    let { level_id, difficulty } = useParams();

    const transition_data = [
        {
            id: 1,
            card_image: `${basename}images/Etape 2/map_etape2.png`,
            maillot_image: `${basename}images/illustrations/TRANSITION1.png`,
            paragraph1: `Félicitations, vous avez terminé la première étape de la 112e édition du Tour de France en ${minutes} minute${minutes !== 1 ? 's' : ''} et ${seconds} seconde${seconds !== 1 ? 's' : ''}. Votre performance vous vaut le premier maillot, bravo !`,
            paragraph2: "Mais l’aventure ne s’arrête pas là !",
            paragraph3: "Place désormais à la deuxième étape qui vous mènera de Lauwin-Planque à Boulogne-sur-mer.",
            paragraph4: "Bonne chance pour décrocher votre deuxième maillot !",
            button_text: "ÉTAPE SUIVANTE",
            navigate_to: `/start/${difficulty}/2`,
            color: "#1A3347"
        },
        {
            id: 2,
            card_image: `${basename}images/Etape 3/map_etape3.png`,
            maillot_image: `${basename}images/illustrations/TRANSITION2.png`,
            paragraph1: `Vous l’avez fait ! En franchissant la ligne d’arrivée de la deuxième étape, vous décrochez un deuxième maillot et poursuivez votre quête avec brio. Vous avez couru la deuxième étape en ${minutes} minute${minutes !== 1 ? 's' : ''} et ${seconds} seconde${seconds !== 1 ? 's' : ''}.`,
            paragraph2: "Mais l’aventure ne s’arrête pas là !",
            paragraph3: "Il reste un dernier défi à relever : le gain du troisième et dernier maillot.",
            paragraph4: "À vous d’écrire la dernière page de votre épopée.",
            button_text: "ÉTAPE SUIVANTE",
            navigate_to: `/start/${difficulty}/3`,
            color: "#607F00"
        },
        {
            id: 3,
            card_image: null,
            maillot_image: `${basename}images/illustrations/TRANSITION3.png`,
            paragraph1: `Félicitations, vous avez franchi la ligne d’arrivée de cette dernière étape ! Vous décrochez le troisième maillot. Votre parcours a été remarquable, et votre temps final, transformé en chrono fictif, est de ${minutes} minute${minutes !== 1 ? 's' : ''} et ${seconds} seconde${seconds !== 1 ? 's' : ''}.`,
            paragraph2: "Votre Tour de France s’achève ici !",
            paragraph3: "À Dunkerque, sur une note triomphale. Vous avez prouvé que l’Histoire et la culture de la région n’ont plus de secrets pour vous.",
            paragraph4: null,
            button_text: "TERMINER",
            navigate_to: `/credit`,
            color: "#ED8422"
        }
    ];

    const [currentTransition, setCurrentTransition] = React.useState(transition_data[parseInt(level_id) - 1]);


    return (
        <div className="start_page_bg w-100 position-relative"
            style={{
                zIndex: 1,
                backgroundImage: `url(${currentTransition.maillot_image})`,
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
            <div className="mt-84 text-center">
                <h3 className="text-white">FÉLICITATIONS</h3>

                <div className="mx-3 p-3 fs-6 position-relative" style={{padding: '20px', borderRadius: '10px' }}>
                    <p style={{ color: currentTransition.color, marginTop: '90px' }}><b>{minutes} minute{minutes !== 1 ? "s" : ""} et {seconds} seconde{seconds !== 1 ? "s" : ""} !</b></p>

                    <p style={{fontSize: '11px'}}>
                        {currentTransition.paragraph1}
                    </p>

                    <p className="fw-bold" style={{ color: currentTransition.color, fontSize: '11px', marginTop: '150px' }}>
                        {currentTransition.paragraph2}
                    </p>
                    <p style={{fontSize: '11px'}}>
                        {currentTransition.paragraph3}
                    </p>
                    <p className="fw-bold" style={{ color: currentTransition.color, fontSize: '11px' }}>
                        {currentTransition.paragraph4}
                    </p>
                </div>
                <button onClick={() => navigate(currentTransition.navigate_to)}
                    className="btn btn-outline-dark fw-bold mx-5"
                >
                    {currentTransition.button_text}
                </button>

                {/*{Boolean(currentTransition.card_image) && (<ImageModal
                    imageSrc={currentTransition.card_image}
                    altText={`Carte étape ${currentTransition.id}`}
                    showModal={showModal}
                    onClose={setShowModal}
                />)}*/}
            </div>
        </div>
    );
};


export default TransitionPage;
