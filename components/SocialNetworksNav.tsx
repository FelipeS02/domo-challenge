import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import TwitterX from './Icons/TwitterX';
import DrawedArrow from './Icons/DrawedArrow.svg';
import Image from 'next/image';

const ICON_SIZE = 22;
const SocialNetworksNav: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <nav className={`${className} d-flex gap-3 align-items-center`}>
      <Link href=''>
        <TwitterX
          size={ICON_SIZE}
          strokeWidth={0}
          className='text-foreground'
        />
      </Link>
      <Link href=''>
        <Instagram size={ICON_SIZE} className='text-foreground' />
      </Link>
      <Link href='https://www.linkedin.com/in/felipe-saracho/' target='_blank'>
        <Linkedin
          size={ICON_SIZE}
          strokeWidth={1}
          className='text-foreground'
          style={{ fill: 'var(--bs-foreground)' }}
        />
      </Link>
      <Link
        href='https://github.dev/FelipeS02/domo-challenge'
        target='_blank'
        className='position-relative'
      >
        <Github size={ICON_SIZE} className='text-foreground animate-ping' />
        <div className='position-absolute d-flex align-items-center top-0 start-0 ms-4 gap-1 translate-left text-nowrap text-foreground'>
          <Image src={DrawedArrow} alt='drawed-arrow' width={30} />
          <span className='font-drawed fs-5'>Full code</span>
        </div>
      </Link>
    </nav>
  );
};

export default SocialNetworksNav;
