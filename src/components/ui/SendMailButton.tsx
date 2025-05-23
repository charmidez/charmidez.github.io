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
}) => {
  const handleClick = () => {
    const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
     <img onClick={handleClick} src='/assets/icon/mail.svg' className='h-10 hover:mb-2 transition-all transform duration-500 rounded-lg' />
  );
};

export default SendMailButton;
