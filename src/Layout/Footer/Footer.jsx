//& Imports modules
import { useSelector } from 'react-redux';
import './Footer.scss';

const Footer = () => {
  const theme = useSelector((state) => state.theme.default);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer theme--${theme}`}>
      <p className="footer__copyright">Copyright © {currentYear} - yourName. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
