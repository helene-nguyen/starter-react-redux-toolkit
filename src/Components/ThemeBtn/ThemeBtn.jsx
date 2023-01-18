//& Import modules
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../Store/Reducers/Theme';
import './ThemeBtn.scss';

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme())
  };
 
  return (
    <section className="button">
      <div onClick={changeTheme} className="button__form"></div>
    </section>
  );
};

export default ThemeBtn;
