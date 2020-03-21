import VStack from './src/components/VStack';
import HStack from './src/components/HStack';
import Text from './src/components/Text';
import Image from './src/components/Image';
import Spacer from './src/components/Spacer';
import ForEach from './src/components/ForEach';
import Alignment from './src/utils/Alignment';
import Axios from './src/utils/Axios';
import { BorderType } from './src/utils/Border';
import Color from './src/utils/Color';
import Cursor from './src/utils/Cursor';
import rgb from './src/utils/rgb';

const fdom = {
  components: {
    VStack,
    HStack,
    Text,
    Image,
    Spacer,
    ForEach,
  },
  utils: {
    Alignment,
    Axios,
    BorderType,
    Color,
    Cursor,
    rgb,
  },
};

export default fdom;
