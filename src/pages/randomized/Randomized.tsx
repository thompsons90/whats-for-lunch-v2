// Randomized.tsx

import { atom, useAtom } from 'jotai';
import Switch from 'react-switch';
import { RandomizedContainer } from './Randomized.styles';
import ApiCall from '../../components/ApiCall';

const checkedAtom = atom(false);

const Randomized = () => {
  const [checked, setChecked] = useAtom(checkedAtom);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <RandomizedContainer isDarkMode={checked}>
      <label>
        <span>Light/Dark Mode:</span>
        <Switch onChange={handleChange} checked={checked} />
      </label>
      <ApiCall />
    </RandomizedContainer>
  );
};

export default Randomized;
