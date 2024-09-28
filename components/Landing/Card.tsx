import { FC, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import './card.css';

type Props = {
  title: string;
  info: string;
  link: string;
  icon: ReactNode;
  className?: string;
};

const LearnMore: FC<{ link: string }> = ({ link }) => {
  return (
    <Link
      className='d-flex align-items-center position-relative pb-1 text-foreground card__learnMore'
      href={link}
    >
      <span className='fw-bold' id='text'>
        Learn more
      </span>
      <ArrowUpRight size={24} strokeWidth={1.5} id='arrow' />
    </Link>
  );
};

const Card: FC<Props> = ({ info, link, title, icon, className = '' }) => {
  return (
    <article
      className={`
        d-flex flex-column gap-2 py-3 overflow-hidden
        infoCard__container
        ${className}
      `}
    >
      {icon} <h4 className='fs-xl fw-bolder infoCard__title'>{title}</h4>
      <p className='text-secondary-emphasis fw-medium infoCard__text'>{info}</p>
      <LearnMore link={link} />
    </article>
  );
};

export default Card;
