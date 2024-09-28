import { Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='d-flex justify-content-center w-100 py-5 px-4 bg-foreground-100'>
      <div style={{ maxWidth: '1400px' }}>
        <h4>Acerca del proyecto:</h4>
        <p className='fs-4'>
          Este proyecto fue construido en NextJS con motivo de aprovechar el
          renderizado por parte del servidor para agilizar la carga de los
          diferentes elementos estaticos. Por otro lado se opto por la
          combinacion de Typescript + Bootstrap (Compilado de estilos
          optimizado) + CSS (Metodologia BEM) para la creacion de componentes
          reutilizables y escalables.
        </p>
        <div>
          <Link
            className='fw-medium fs-5 d-flex align-items-center gap-1'
            href='mailto:FelipeSaracho02@gmail.com'
          >
            <Mail size={20} /> FelipeSaracho02@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
