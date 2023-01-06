//& Import modules
import { useSelector } from 'react-redux';
import './Header.scss';
import { Logo, Navbar, ThemeBtn } from '../../Components';

const Header = () => {
  const theme = useSelector((state) => state.theme.default);

  return (
    <header className={`header theme--${theme}`}>
      <Logo />
      <Navbar />
      <ThemeBtn />
    </header>
  );
};

export default Header;
