import { createLucideIcon, IconNode } from 'lucide-react';

const MenuBurger: IconNode = [
  [
    'line',
    {
      x1: '1',
      y1: '8.5',
      x2: '23',
      y2: '8.5',
      stroke: 'currentColor',
      id: 'top-line',
    },
  ],
  [
    'line',
    {
      x1: '1',
      y1: '15.5',
      x2: '23',
      y2: '15.5',
      stroke: 'currentColor',
      id: 'bottom-line',
    },
  ],
];

export default createLucideIcon('MenuBurger', MenuBurger);
