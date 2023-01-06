//& Import modules
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../Store/Reducers/slices';
import './ThemeBtn.scss';

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const test = () => dispatch(toggleTheme());

  return (
    <section className="button">
      <div onClick={test} className="button__form"></div>
    </section>
  );
};

export default ThemeBtn;
