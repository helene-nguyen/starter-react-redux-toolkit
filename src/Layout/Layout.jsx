//& Imports
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Spinner } from '../Components';

//& Component
const Layout = () => {
  const theme = useSelector((state) => state.theme.default);
  // console.log('theme in layout: ', theme);

  return (
    <div className={`layout theme--${theme}`}>
      <Header theme={theme} />
      <main>
        <Spinner/>
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;
