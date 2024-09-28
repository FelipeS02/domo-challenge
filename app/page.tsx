import Header from '@/components/Header';
import LandingHero from '@/components/Landing/Hero';

export default function LandingPage() {
  return (
    <div className='d-flex flex-column min-vw-100 min-vh-100 justify-content-start align-items-center position-relative'>
      <Header />
      <LandingHero />
    </div>
  );
}
