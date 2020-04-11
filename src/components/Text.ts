import React, { DetailedReactHTMLElement, ReactElement } from 'react';
import View, {IView, ViewInstance} from './view';
import { RGB } from '../utils/rgb';
import Color from '../utils/Color';

export enum TextAlignment {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}

export interface IText extends IView {
  color: (color: Color | RGB) => IText,
  bold: () => IText,
  font: (font: string) => IText,
  fontSize: (fontSize: string) => IText,
  textAlignment: (textAlignment: TextAlignment) => IText,
}

const Text = (text: string): IText => {
  const style: any = {
    color: Color.black,
  };
  const events: any = {};
  const type: string = 'span';
  const children: string = text;

  return ((() => ({
    ...View(children, type),
    ...{
      _style: style,
      _events: events,
      color(color: Color | RGB) {
        this._style.color = color instanceof RGB ? color.getColor() : color;

        return this;
      },
      bold() {
        this._style.fontWeight = 'bold';

        return this;
      },
      font(font: string) {
        this._style.font = font;

        return this;
      },
      fontSize(fontSize: string) {
        this._style.fontSize = fontSize;

        return this;
      },
      textAlignment(textAlignment: TextAlignment) {
        this._style.textAlign = textAlignment;

        return this;
      },
    },
  }))());
};

export default Text;
