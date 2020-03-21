import { DetailedReactHTMLElement, ReactElement } from 'react';
import { ViewInstance } from './view';
import StackInstance from './Stack';
import Axios from "../utils/Axios";

export class HStackInstance extends StackInstance {
  constructor(...elements:
                Array<ViewInstance | ReactElement | DetailedReactHTMLElement<any, any>>) {
    super(...elements);

    this.axios(Axios.HORIZONTAL);
  }
}

const HStack = (...elements:
                  Array<ViewInstance |
                    ReactElement |
                    DetailedReactHTMLElement<any, any>>) => new HStackInstance(...elements);

export default HStack;
