
// Added React import to fix "Cannot find namespace 'React'" error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  theme: 'gold' | 'green' | 'original';
  icon: React.ReactNode;
}

export interface Address {
  city: string;
  location: string;
  details: string;
}