import React, { CSSProperties } from 'react';
import { IBorder } from '../utils/Border';
import Color from '../utils/Color';
import { RGB } from '../utils/rgb';
import Cursor from '../utils/Cursor';
import isValidValue from '../utils/isValidValue';

const getColor = (color: Color | RGB) => (color instanceof RGB ? color.getColor() : color);

export abstract class ViewInstance {
  protected style: any = {};

  protected event: any = {};

  public render() {
    return React.createElement('div', { style: this.style, ...this.event });
  }

  private setValidValue(name: string, value: string) {
    if (isValidValue(value)) {
      this.style[name] = value;
    } else {
      console.log(`${name}: ${value} is not valid`);
    }
  }

  public width(width: string) {
    this.setValidValue('width', width);

    return this;
  }

  public height(height: string) {
    this.setValidValue('height', height);

    return this;
  }

  public padding(top: string, right: string, bottom: string, left: string) {
    this.paddingTop(top);
    this.paddingRight(right);
    this.paddingBottom(bottom);
    this.paddingLeft(left);

    return this;
  }

  public paddingTop(padding: string) {
    this.setValidValue('paddingTop', padding);

    return this;
  }

  public paddingRight(padding: string) {
    this.setValidValue('paddingRight', padding);

    return this;
  }

  public paddingBottom(padding: string) {
    this.setValidValue('paddingBottom', padding);

    return this;
  }

  public paddingLeft(padding: string) {
    this.setValidValue('paddingLeft', padding);

    return this;
  }

  public margin(top: string, right: string, bottom: string, left: string) {
    this.marginTop(top);
    this.marginRight(right);
    this.marginBottom(bottom);
    this.marginLeft(left);

    return this;
  }

  public marginTop(margin: string) {
    this.setValidValue('marginTop', margin);

    return this;
  }

  public marginRight(margin: string) {
    this.setValidValue('marginRight', margin);

    return this;
  }

  public marginBottom(margin: string) {
    this.setValidValue('marginBottom', margin);

    return this;
  }

  public marginLeft(margin: string) {
    this.setValidValue('marginLeft', margin);

    return this;
  }

  public opacity(opacity: number) {
    this.style.opacity = opacity / 100;

    return this;
  }

  public cursor(cursor: Cursor) {
    this.style.cursor = cursor;

    return this;
  }

  private getBorder(border: IBorder, position: string) {
    const cssBorder: CSSProperties = {};

    cssBorder[`border${position}Width`] = border.width || this.style[`border${position}Width`];
    cssBorder[`border${position}Color`] = border.color ? getColor(border.color) : this.style[`border${position}Color`];
    cssBorder[`border${position}Style`] = border.type || this.style[`border${position}Style`];

    return cssBorder;
  }

  public border(border: IBorder) {
    this.style = { ...this.style, ...this.getBorder(border, '') };

    return this;
  }

  public borderTop(border: IBorder) {
    this.style = { ...this.style, ...this.getBorder(border, 'Top') };

    return this;
  }

  public borderRight(border: IBorder) {
    this.style = { ...this.style, ...this.getBorder(border, 'Right') };

    return this;
  }

  public borderBottom(border: IBorder) {
    this.style = { ...this.style, ...this.getBorder(border, 'Bottom') };

    return this;
  }

  public borderLeft(border: IBorder) {
    this.style = { ...this.style, ...this.getBorder(border, 'Left') };

    return this;
  }

  public borderRadius(...args: string[]) {
    if (args.length > 0 && args.length <= 4) {
      this.style.borderRadius = args.reduce((a, b) => `${a} ${b}`, '');
    }

    return this;
  }

  public flex(flex: number) {
    this.style.flex = flex;

    return this;
  }

  public onHover(hover: (isHover: boolean) => void) {
    this.event.onMouseEnter = () => hover(true);
    this.event.onMouseLeave = () => hover(false);

    return this;
  }

  public onClick(click: (event?: MouseEvent) => void) {
    this.event.onClick = (event: MouseEvent) => click(event);

    return this;
  }
}
