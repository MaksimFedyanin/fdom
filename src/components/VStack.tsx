import { DetailedReactHTMLElement, ReactElement } from 'react';
import { IView } from './view';
import Axios from '../utils/Axios';
import Stack, {IStack} from './Stack';

function VStack(...elements: Array<IView | ReactElement | DetailedReactHTMLElement<any, any>>): IStack {
  return {
    ...Stack(...elements),
    ...{
      _axios: Axios.VERTICAL,
    },
  };
}

export default VStack;
