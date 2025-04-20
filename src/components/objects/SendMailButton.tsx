import React from 'react';

interface SendMailButtonProps {
  to: string;
  subject?: string;
  body?: string;
  children?: React.ReactNode;
}

const SendMailButton: React.FC<SendMailButtonProps> = ({
  to,
  subject = '',
  body = '',
  children = 'Send Email',
}) => {
  const handleClick = () => {
    const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-900 transition"
    >
      {children}
    </button>
  );
};

export default SendMailButton;
