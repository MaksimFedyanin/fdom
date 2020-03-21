import React, { DetailedReactHTMLElement, ReactElement } from 'react';
import { ViewInstance } from './view';
import Color from '../utils/Color';
import { RGB } from '../utils/rgb';
import Axios from "../utils/Axios";
import Alignment from "../utils/Alignment";

export class StackInstance extends ViewInstance {
  protected elements: Array<ViewInstance | ReactElement | DetailedReactHTMLElement<any, any>> = [];

  protected _spacing: string;

  protected _axios: Axios;

  constructor(...elements: Array<ViewInstance | ReactElement | DetailedReactHTMLElement<any, any>>) {
    super();

    this.elements = elements;

    this.style = {
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
    };
  }

  public render() {
    const elements: ReactElement[] = this.elements
      .map((element: ViewInstance | ReactElement, index: number) => {
        const item = (element instanceof ViewInstance
          ? element.render() : element);

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

    return React.createElement(
      'div',
      {
        style: this.style,
        ...this.event,
      },
      elements,
    );
  }

  public background(color: Color | RGB) {
    this.style.background = color instanceof RGB ? color.getColor() : color;

    return this;
  }

  protected axios(axios: Axios) {
    this._axios = axios;
    this.style.flexDirection = axios === Axios.HORIZONTAL ? 'row' : 'column';

    return this;
  }

  public spacing(spacing: string) {
    this._spacing = spacing;

    return this;
  }

  public alignment(alignment: Alignment) {
    if (this._axios === Axios.VERTICAL) {
      this.style.alignItems = alignment;
    }
    if (this._axios === Axios.HORIZONTAL) {
      this.style.justifyContent = alignment;
    }

    return this;
  }
}

export default StackInstance;
