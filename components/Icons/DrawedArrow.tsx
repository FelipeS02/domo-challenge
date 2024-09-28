import { createLucideIcon } from 'lucide-react';

const DrawedArrow = [
  [
    'path',
    {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    },
  ],
  [
    'path',
    {
      d: 'M6.457 6.457c1.843-1.843 4.335-2.874 6.91-2.874s5.067 1.03 6.91 2.874',
      stroke: 'currentColor',
      id: 'path-1',
    },
  ],
  [
    'path',
    {
      d: 'M6.457 6.457a9.74 9.74 0 0 0-2.874 6.91c0 2.575 1.03 5.067 2.874 6.91',
      stroke: 'currentColor',
      id: 'path-2',
    },
  ],
  [
    'path',
    {
      d: 'M6.457 6.457l12.917 12.917',
      stroke: 'currentColor',
      id: 'path-3',
    },
  ],
  [
    'path',
    {
      d: 'M17.543 6.457a9.74 9.74 0 0 1 2.874 6.91 9.74 9.74 0 0 1-2.874 6.91',
      stroke: 'currentColor',
      id: 'path-4',
    },
  ],
  [
    'path',
    {
      d: 'M17.543 6.457l-12.917 12.917',
      stroke: 'currentColor',
      id: 'path-5',
    },
  ],
];

export default createLucideIcon('drawed-arrow', DrawedArrow);
