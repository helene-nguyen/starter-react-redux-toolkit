//& Import Module
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Spinner } from '../Components';

//& Import SCSS
import './Layout.scss';

const Layout = () => {
  const theme = useSelector((state) => state.theme.default);

  return (
    <div className={`layout theme--${theme}`}>
      <Header theme={theme} />
      <main>
        <Spinner />
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;
