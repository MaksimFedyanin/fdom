import Div from 'components/Div';
import Span from 'components/Span';
import Input from 'components/Input';
import React, { useState } from 'react';
import Btn from 'components/Btn';
import ForEach from 'components/ForEach';
import Color from './utils/Color';
import Direction from './utils/Direction';
import Display from './utils/Display';
import Alignment from './utils/Alignment';
import FlexDirection from './utils/FlexDirection';


const App = () => {
  const [value, setValue] = useState('2222');

  return Div(
    Span('2222')
      .color(Color.white),
    Input({
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    }),
    ...ForEach(['2222', '4444'], (item) => Span(item)),
    Btn(
      Span('2222'),
      () => console.log(value),
    ),
  )
    .display(Display.FLEX)
    .flexDirection(FlexDirection.COLUMN)
    .justifyContent(Alignment.FLEX_START)
    .alignItems(Alignment.CENTER)
    .width(500)
    .height('500px')
    .background(Color.blue)
    .padding(Direction.VERTICAL, 50)
    .padding(Direction.LEFT, 100)
    .render();
};

export default App;
