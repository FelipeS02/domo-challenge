import SocialNetworksNav from './SocialNetworksNav';
import Logo from './Logo/Logo';
import MenuBurger from './Icons/MenuBurger';

const Header = () => {
  return (
    <header className='d-flex py-4 px-3 justify-content-center w-100'>
      <div
        className='d-flex align-items-center justify-content-between w-100 position-relative'
        style={{ maxWidth: '1500px' }}
      >
        <SocialNetworksNav className='d-none d-md-flex' />
        {/* Visually centered */}
        <Logo className='position-absolute top-50 start-50 translate-middle header__logo' />
        <MenuBurger size={35} />
      </div>
    </header>
  );
};

export default Header;
