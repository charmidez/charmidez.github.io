import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [verification, setVerification] = useState('');
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (parseInt(verification) !== randomNumber) {
            alert('Test de vérification incorrect. Veuillez réessayer.');
            return;
        }
        alert('Formulaire envoyé avec succès !');
        setName('');
        setMessage('');
        setVerification('');
        setRandomNumber(generateRandomNumber());
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Contactez-moi</h1>
            <p>Téléphone : 0123-456-789</p>
            <p>Email : exemple@mail.com</p>
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ marginLeft: '10px' }}
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{ marginLeft: '10px', width: '100%', height: '100px' }}
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label htmlFor="verification">Test de vérification : {randomNumber}</label>
                    <input
                        type="number"
                        id="verification"
                        value={verification}
                        onChange={(e) => setVerification(e.target.value)}
                        required
                        style={{ marginLeft: '10px' }}
                    />
                </div>
                <button type="submit" style={{ marginTop: '20px' }}>
                    Envoyer
                </button>
            </form>
        </div>
    );
};

export default ContactPage;


/**
 * 
 * 
 * 
 */
