import React, { DetailedReactHTMLElement } from 'react';
import { ViewInstance } from './view';

export enum ImagePosition {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  center = 'center',
}

export enum ImageFit {
  fill = 'fill',
  contain = 'contain',
  cover = 'cover',
  none = 'none',
}

export class ImageInstance extends ViewInstance {
  private src: string;

  constructor(src: string) {
    super();

    this.src = src;
  }

  public render(): DetailedReactHTMLElement<any, any> {
    return React.createElement('img', { style: this.style, src: this.src });
  }

  public position(vPosition: ImagePosition, hPosition: ImagePosition) {
    this.style.objectPosition = `${vPosition} ${hPosition}`;

    return this;
  }

  public fit(fit: ImageFit) {
    this.style.objectFit = fit;

    return this;
  }
}

const Image = (data: string) => new ImageInstance(data);

export default Image;
