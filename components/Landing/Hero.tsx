import Image from 'next/image';
import HeroImage from '@/assets/hero-image.webp';
import Card from './Card';
import SocialNetworksNav from '../SocialNetworksNav';
import FingerPrint from '../Icons/FingerPrint';
import Phone24 from '../Icons/Phone24';
import './hero.css';

const LandingHero = () => {
  return (
    <main className='d-flex w-100 sm-flex-col d-md-grid px-4 py-4 gap-4 align-items-center flex-grow-1 justify-content-between hero__wrapper'>
      <section className='d-flex flex-column flex-wrap gap-4 text-balance max-w-full hero__text'>
        <SocialNetworksNav className='d-md-none' />

        <h6 className='text-primary fw-bold'>Core features</h6>

        <h1 className='display-5 fw-bold hero__text__heading '>
          Develop systematically with Comet.
        </h1>

        <p className='h3 fw-bold text-secondary-emphasis'>
          Adaptable sections are ideal{' '}
          <span className='text-secondary'>
            for crafting versatile layouts.
          </span>
        </p>

        <div className='d-flex flex-column flex-md-row mt-4 mt-md-0 w-100 justify-content-between gap-4 gap-md-3'>
          <Card
            icon={
              <FingerPrint
                size={50}
                iconColor='#94D727'
                backgroundColor='#F0FEE5'
                className='hero__card__icon'
              />
            }
            info='Consectetur adipiscing elit, sed do eiusmod temporet'
            link=''
            title='System analyze your data'
            className='col'
          />
          <Card
            icon={
              <Phone24
                size={50}
                iconColor='#C459E5'
                backgroundColor='#F8E7F9'
                className='hero__card__icon'
              />
            }
            info='Lorem ipsum dolor sit amet, consectetur adipiscing'
            link=''
            title='Direct system management'
            className='col'
          />
        </div>
      </section>
      <div className='d-sm-none d-md-flex mh-100 h-100 flex-grow-1 position-relative overflow-hidden rounded-5 mh-100 shadow-sm hero__image'>
        <Image fill alt='hero-image' src={HeroImage} className='' />
      </div>
    </main>
  );
};

export default LandingHero;
