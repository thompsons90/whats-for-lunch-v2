// Randomized.tsx

import { atom, useAtom } from 'jotai';
// import Switch from 'react-switch';
import { RandomizedContainer } from './Randomized.styles';
import ApiCall from '../../components/ApiCall';
// import { HeaderContainer } from '../../components/Header.styles';

const checkedAtom = atom(false);

const Randomized = () => {
  const [checked, setChecked] = useAtom(checkedAtom);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <RandomizedContainer isDarkMode={checked}>
      {/* <HeaderContainer>
      <label>
        <span>Light/Dark Mode:</span>
        <Switch onChange={handleChange} checked={checked} />
      </label>
      </HeaderContainer> */}
      <ApiCall 
      isDarkMode={checked}
      handleChange={handleChange}
      // checked={checked}
      />
    </RandomizedContainer>
  );
};

export default Randomized;
