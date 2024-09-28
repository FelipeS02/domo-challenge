import SocialNetworksNav from './SocialNetworksNav';
import Logo from './Logo/Logo';
import MenuBurger from './Icons/MenuBurger';

const Header = () => {
  return (
    <header className='d-flex py-4 px-4 justify-content-center w-100'>
      <div
        className='d-flex align-items-center justify-content-between w-100 position-relative'
        style={{ maxWidth: '1500px' }}
      >
        <SocialNetworksNav className='d-none d-md-flex' />
        {/* Visually centered */}
        <Logo className='position-relative position-md-absolute top-md-50 start-md-50 translate-md-middle header__logo' />
        <MenuBurger size={35} />
      </div>
    </header>
  );
};

export default Header;
