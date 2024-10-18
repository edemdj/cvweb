import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <section id="about">
                <h2>À propos</h2>
                <p>BONJOUR, MON NOM C'EST EDEM DJOSSOU</p>
                <p>
                    Je suis un développeur web passionné en formation à Holberton School, avec des compétences en Java, Python, JavaScript, ainsi que des technologies comme Docker et SQL. J'ai travaillé sur divers projets personnels, démontrant ma capacité à résoudre des problèmes complexes et à collaborer en équipe. Dynamique et motivé, je recherche une alternance pour approfondir mes connaissances et contribuer activement au sein d'une entreprise innovante.
                </p>
                <img src="/photo.jpg" alt="Edem Djossou" style={{ width: '300px', borderRadius: '20px', marginTop: '40px' }} />
                <a href="/cv.pdf" download>
                    <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Télécharger mon CV
                    </button>
                </a>
            </section>
        </div>
    );
};

export default About;
