import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Formulaire envoyé avec succès !');
        setName('');
        setMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center py-16 bg-violet-50">
            <h1 className="text-3xl font-bold text-violet-800 mb-6">Contactez-moi</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                <p className="text-gray-700 mb-4">
                    <strong>Téléphone :</strong> 0123-456-789
                </p>
                <p className="text-gray-700 mb-6">
                    <strong>Email :</strong> exemple@mail.com
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nom */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium">
                            Nom :
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500"
                        />
                    </div>
                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium">
                            Message :
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500"
                            rows={4}
                        />
                    </div>
                    {/* Bouton Envoyer */}
                    <button
                        type="submit"
                        className="w-full bg-violet-600 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
