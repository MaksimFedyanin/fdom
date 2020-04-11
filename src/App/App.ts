import VStack from 'components/VStack';
import { useState } from 'react';
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
