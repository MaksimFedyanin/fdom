import { DetailedReactHTMLElement, ReactElement } from 'react';
import { IView } from './view';
import Axios from '../utils/Axios';
import Stack, {IStack} from './Stack';

const VStack = (...elements: Array<IView | ReactElement | DetailedReactHTMLElement<any, any>>): IStack => ({
  ...Stack(...elements),
  ...{
    _axios: Axios.VERTICAL,
  },
});

export default VStack;
