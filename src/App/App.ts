import VStack from 'components/VStack';
import { useState } from 'react';
import HStack from 'components/HStack';
import Text from '../components/Text';
import Header from './Header';
import Schedule from './Schedule/Schedule';

const App = () => {
  const [color, setColor] = useState(true);

  return VStack(
    Header(),
    Schedule(),
  )
    .render();
};

export default App;
