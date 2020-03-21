import React, { DetailedReactHTMLElement } from 'react'
import { ViewInstance } from './view';
import {RGB} from "../utils/rgb";
import Color from "../utils/Color";

export enum TextAlignment {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}

export class TextInstance extends ViewInstance {

  private text: string = null;

  constructor(text: string) {
    super();

    this.text = text;
  }

  public render(): DetailedReactHTMLElement<any, any> {
    return React.createElement('span', { style: this.style, ...this.event }, this.text);
  }

  public color(color: Color | RGB) {
    this.style.color = color instanceof RGB ? color.getColor() : color;

    return this;
  }

  public bold() {
    this.style.fontWeight = 'bold';

    return this;
  }

  public font(font: string) {
    this.style.font = font;

    return this;
  }

  public fontSize(fontSize: string) {
    this.style.fontSize = fontSize;

    return this;
  }

  public textAlignment(textAlignment: TextAlignment) {
    this.style.textAlign = textAlignment;

    return this;
  }
}

const Text = (data: string) => new TextInstance(data);

export default Text;
