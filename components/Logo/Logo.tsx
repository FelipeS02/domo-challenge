import { FC } from 'react';
import './logo.css';

export const LogoIcon: FC<{ size?: number }> = ({ size = 50 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 50 50'
      className='brand-logo'
    >
      <g transform='translate(25, 25)' stroke='#ccc'>
        <g className='stroke-neutral-400' strokeWidth='4' strokeLinecap='round'>
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(0)'
            opacity='1'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(30)'
            opacity='0.95'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(60)'
            opacity='0.85'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(90)'
            opacity='0.75'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(120)'
            opacity='0.65'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(150)'
            opacity='0.55'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(180)'
            opacity='0.45'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(210)'
            opacity='0.35'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(240)'
            opacity='0.25'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(270)'
            opacity='0.15'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(300)'
            opacity='0.2'
          />
          <line
            x1='0'
            y1='-10'
            x2='4.2'
            y2='-18'
            transform='rotate(330)'
            opacity='0.1'
          />
        </g>
      </g>
    </svg>
  );
};

const Logo: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`d-flex align-items-center gap-1 ${className}`}>
      <LogoIcon size={42} />
      <span className='fs-2 fw-bold'>Comet</span>
    </div>
  );
};

export default Logo;
