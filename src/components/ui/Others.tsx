
// src/components/StatCard.tsx
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode; // Pour passer une icône SVG ou un autre composant
  label: string;
  value: string | number;
  changePercentage: number; // Utilisez un nombre positif pour une augmentation, négatif pour une diminution
  changeText: string; // Ex: "than last week", "depuis hier"
  iconBgColor?: string; // Couleur de fond pour l'icône, par défaut 'bg-slate-800'
  valueColor?: string; // Couleur pour la valeur principale, par défaut 'text-slate-700'
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  changePercentage,
  changeText,
  iconBgColor = 'bg-slate-800', // Un gris foncé par défaut, similaire à l'image
  valueColor = 'text-slate-700', // Un bleu-gris foncé par défaut
}) => {
  const isPositiveChange = changePercentage >= 0;
  const changeColor = isPositiveChange ? 'text-green-500' : 'text-red-500';
  const sign = isPositiveChange ? '+' : '';

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm">
      {/* Icon Container - Positioned absolutely to overlap */}
      <div
        className={`absolute -top-5 left-6 ${iconBgColor} p-4 rounded-xl shadow-md flex items-center justify-center w-16 h-16`}
      >
        {/* Wrapper pour s'assurer que l'icône est blanche et de la bonne taille */}
        <div className="text-white w-8 h-8">
          {icon}
        </div>
      </div>

      {/* Content Area */}
      {/* pt-8 pour donner de l'espace à l'icône qui dépasse */}
      <div className="pt-8">
        {/* Top part: Label and Value */}
        <div className="flex justify-end items-start mb-4">
          <div className="text-right">
            <p className="text-sm text-slate-500">{label}</p>
            <p className={`text-4xl font-bold ${valueColor}`}>{value}</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* Bottom part: Change */}
        <div className="mt-4 flex items-baseline">
          <p className={`text-lg font-semibold ${changeColor} mr-1.5`}>
            {sign}{Math.abs(changePercentage)}%
          </p>
          <p className="text-sm text-slate-500">{changeText}</p>
        </div>
      </div>
    </div>
  );
};

//export default StatCard;