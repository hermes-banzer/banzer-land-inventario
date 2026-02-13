
import React from 'react';
import { ServiceCardProps } from '../types';
import { WhatsAppButton } from './Button';

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, items, theme, icon }) => {
  const themeStyles = {
    gold: "border-gold",
    green: "border-emerald-600",
    original: "border-navy"
  };

  const iconColors = {
    gold: "text-gold",
    green: "text-emerald-600",
    original: "text-navy"
  };

  return (
    <div className={`bg-white p-8 md:p-10 shadow-xl border-t-4 ${themeStyles[theme]} flex flex-col h-full transition-transform hover:-translate-y-2`}>
      <div className={`mb-6 ${iconColors[theme]}`}>
        {icon}
      </div>
      <h3 className="font-title text-2xl font-bold mb-4 text-navy">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>
      
      <ul className="mb-8 space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className={`mr-2 mt-1 ${iconColors[theme]}`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-graphite uppercase tracking-tight">{item}</span>
          </li>
        ))}
      </ul>
      
      <WhatsAppButton className="w-full text-xs" />
    </div>
  );
};
