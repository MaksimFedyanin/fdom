import { DetailedReactHTMLElement, ReactElement } from 'react';
import { ViewInstance } from './view';
import StackInstance from './Stack';
import Axios from "../utils/Axios";

export class VStackInstance extends StackInstance {
  constructor(...elements:
                Array<ViewInstance | ReactElement | DetailedReactHTMLElement<any, any>>) {
    super(...elements);

    this.axios(Axios.VERTICAL);
  }
}

const VStack = (...elements:
                  Array<ViewInstance |
                    ReactElement |
                    DetailedReactHTMLElement<any, any>>) => new VStackInstance(...elements);

export default VStack;
