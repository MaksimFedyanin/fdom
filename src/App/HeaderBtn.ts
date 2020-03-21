import VStack from 'components/VStack';
import Text from 'components/Text';
import { useState } from 'react';
import { BorderType } from '../utils/Border';
import Color from '../utils/Color';
import Cursor from '../utils/Cursor';
import Alignment from "../utils/Alignment";

interface IMenuItem {
    title: string;
}

const HeaderBtnStyle = {
  style: {
    color: Color.white,
    fontSize: '14px',
    border: {
      type: BorderType.none,
    },
  },
  hover: {
    color: Color.black,
    fontSize: '15px',
    border: {
      width: '2px',
      color: Color.black,
      type: BorderType.solid,
    },
  },
};

const HeaderBtn = (props: IMenuItem) => {
  const { title } = props;
  const [style, setStyle] = useState(HeaderBtnStyle.style);

  return VStack(
    Text(title)
      .color(style.color)
      .fontSize(style.fontSize)
      .cursor(Cursor.pointer),
  )
    .alignment(Alignment.CENTER)
    .width('100px')
    .height('50px')
    .borderTop(style.border)
    .onHover((isHover: boolean) => setStyle(isHover
      ? HeaderBtnStyle.hover
      : HeaderBtnStyle.style))
    .onClick(() => console.log(title));
};

export default HeaderBtn;
