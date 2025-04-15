import React from 'react';

interface LigneSeparationProps {
    borderSize: string;
    color: string;
}

const LigneSeparation: React.FC<LigneSeparationProps> = ({ borderSize, color }) => {
    return (
        <hr
            style={{
                borderWidth: borderSize,
                borderColor: color,
                borderStyle: 'solid',
                width: '100%',
                height: 5
            }}
        />
    );
};

export default LigneSeparation;