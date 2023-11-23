// Randomized.tsx

import { atom, useAtom } from 'jotai';
import Switch from 'react-switch';
import { RandomizedContainer, ToggleDiv } from './Randomized.styles';
import ApiCall from '../../components/ApiCall';
import  moon  from '../../assets/icons/moon.svg'
import  sun  from '../../assets/icons/sun.svg'
import { darkTheme, lightTheme } from '../../utils/Themes';

const checkedAtom = atom(false);

const Randomized = () => {
  const [checked, setChecked] = useAtom(checkedAtom);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <RandomizedContainer isDarkMode={checked}>
        <ToggleDiv>
        <Switch onChange={handleChange} checked={checked} 
        offColor={lightTheme.toggle}
        onColor={darkTheme.text}
        uncheckedIcon={<img src={sun} alt="sun" height="100%" width="100%" />}
        checkedIcon={<img src={moon} alt="moon" height="100%" width="100%" />}
        />
        </ToggleDiv>
      <ApiCall isDarkMode={checked}/>
    </RandomizedContainer>
  );
};

export default Randomized;
 