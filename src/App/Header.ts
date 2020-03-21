import HStack from 'components/HStack';
import ForEach from 'components/ForEach';
import Image, { ImageFit } from 'components/Image';
import Spacer from 'components/Spacer';
import HeaderBtn from './HeaderBtn';
import rgb from '../utils/rgb';
import Alignment from "../utils/Alignment";

const items = [
  {
    title: 'Расписание',
  },
  {
    title: 'Тренеры',
  },
  {
    title: 'Контакты',
  },
  {
    title: 'О нас',
  },
];
const HeaderLeft = () => HStack(
  ...ForEach(items, (item) => HeaderBtn({ title: item.title })),
)
  .alignment(Alignment.LEFT);
const HeaderRight = () => HStack(
  Image('https://docs-assets.developer.apple.com/published/3b15d468d6/66500a4f-0179-44e6-acb0-af94689d9e8e.png')
    .width('50px')
    .fit(ImageFit.fill)
    .borderRadius('50%', '50%', '50%', '50%'),
)
  .alignment(Alignment.RIGHT);

const Header = () => HStack(
  HeaderLeft(),
  Spacer(),
  HeaderRight(),
)
  .alignment(Alignment.LEFT)
  .width('100%')
  .height('50px')
  .background(rgb('1a', '14', '3b'))
  .render();

export default Header;
