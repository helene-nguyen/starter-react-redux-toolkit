//& Import SCSS
import './Spinner.scss';
import { ReactComponent as SpinnerSVG } from './Spinner.svg';

const Spinner = () => {
  return (
    <>
      {/* <SpinnerSVG /> */}
      <div className="loader-drop"></div>
    </>
  );
};

export default Spinner;
