import React, { DetailedReactHTMLElement, ReactElement } from 'react';
import View, { IView } from './view';
import Color from '../utils/Color';
import { RGB } from '../utils/rgb';
import Axios from '../utils/Axios';
import Alignment from '../utils/Alignment';

export interface IStack extends IView {
  background: (color: Color | RGB) => IStack,
  axios: (axios: Axios) => IStack,
  spacing: (spacing: string) => IStack,
  alignment: (alignment: Alignment) => IStack,
}

const Stack = (...elements: Array<IView | ReactElement | DetailedReactHTMLElement<any, any>>): IStack => {
  return ((() => ({
    ...View(),
    ...{
      _style: {
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      },
      render() {
        const childrens = elements
          .map((element: any, index: number): ReactElement => {
            const item = (typeof element.render === 'function' ? element.render() : element);

            if (this._spacing && index > 0) {
              if (this._axios === Axios.VERTICAL) {
                item.props.style.marginTop = this._spacing;
              }
              if (this._axios === Axios.HORIZONTAL) {
                item.props.style.marginLeft = this._spacing;
              }
            }

            return { ...item, key: index };
          });

        return React.createElement('div', {
          style: {
            ...this._style,
            flexDirection: this._axios === Axios.HORIZONTAL ? 'row' : 'column',
          },
          ...this._events,
        }, childrens);
      },
      background(color: Color | RGB) {
        this._style.background = color instanceof RGB ? color.getColor() : color;

        return this;
      },
      axios(axios: Axios) {
        this._axios = axios;
        this._style.flexDirection = axios === Axios.HORIZONTAL ? 'row' : 'column';

        return this;
      },
      spacing(spacing: string) {
        this._spacing = spacing;

        return this;
      },
      alignment(alignment: Alignment) {
        if (this._axios === Axios.VERTICAL) {
          this._style.alignItems = alignment;
        }
        if (this._axios === Axios.HORIZONTAL) {
          this._style.justifyContent = alignment;
        }

        return this;
      },
    },
  }))());
};

export default Stack;
