import React, {CSSProperties, DetailedReactHTMLElement, ReactElement} from 'react';
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

export interface IView {
  _style: any,
  _events: any,
  render: () => DetailedReactHTMLElement<any, any>,
  width: (width: string) => IView,
  height: (height: string) => IView,
  padding: (top: string, right: string, bottom: string, left: string) => IView,
  paddingTop: (padding: string) => IView,
  paddingRight: (padding: string) => IView,
  paddingBottom: (padding: string) => IView,
  paddingLeft: (padding: string) => IView,
  margin: (top: string, right: string, bottom: string, left: string) => IView,
  marginTop: (margin: string) => IView,
  marginRight: (margin: string) => IView,
  marginBottom: (margin: string) => IView,
  marginLeft: (margin: string) => IView,
  opacity: (opacity: number) => IView,
  cursor: (cursor: Cursor) => IView,
  border: (border: IBorder) => IView,
  borderTop: (border: IBorder) => IView,
  borderRight: (border: IBorder) => IView,
  borderBottom: (border: IBorder) => IView,
  borderLeft: (border: IBorder) => IView,
  borderRadius: (...args: string[]) => IView,
  flex: (flex: number) => IView,
  onHover: (hover: (isHover: boolean) => void) => IView,
  onClick: (click: (event?: MouseEvent) => void) => IView,
}

const View = (children?: any, type: string = 'div'): IView => (() => ({
  _style: {},
  _events: {},
  _setValidValue(name: string, value: string) {
    if (isValidValue(value)) {
      this._style[name] = value;
    } else {
      console.log(`${name}: ${value} is not valid`);
    }
  },
  _getBorder(border: IBorder, position: string) {
    const cssBorder: CSSProperties = {};

    cssBorder[`border${position}Width`] = border.width || this._style[`border${position}Width`];
    cssBorder[`border${position}Color`] = border.color ? getColor(border.color) : this._style[`border${position}Color`];
    cssBorder[`border${position}Style`] = border.type || this._style[`border${position}Style`];

    return cssBorder;
  },
  render() {
    return React.createElement(type, { style: this._style, ...this._events }, children);
  },
  width(width: string) {
    this._setValidValue('width', width);

    return this;
  },
  height(height: string) {
    this._setValidValue('height', height);

    return this;
  },
  padding(top: string, right: string, bottom: string, left: string) {
    this.paddingTop(top);
    this.paddingRight(right);
    this.paddingBottom(bottom);
    this.paddingLeft(left);

    return this;
  },
  paddingTop(padding: string) {
    this._setValidValue('paddingTop', padding);

    return this;
  },
  paddingRight(padding: string) {
    this._setValidValue('paddingRight', padding);

    return this;
  },
  paddingBottom(padding: string) {
    this._setValidValue('paddingBottom', padding);

    return this;
  },
  paddingLeft(padding: string) {
    this._setValidValue('paddingLeft', padding);

    return this;
  },
  margin(top: string, right: string, bottom: string, left: string) {
    this.marginTop(top);
    this.marginRight(right);
    this.marginBottom(bottom);
    this.marginLeft(left);

    return this;
  },
  marginTop(margin: string) {
    this._setValidValue('marginTop', margin);

    return this;
  },
  marginRight(margin: string) {
    this._setValidValue('marginRight', margin);

    return this;
  },
  marginBottom(margin: string) {
    this._setValidValue('marginBottom', margin);

    return this;
  },
  marginLeft(margin: string) {
    this._setValidValue('marginLeft', margin);

    return this;
  },
  opacity(opacity: number) {
    this._style.opacity = opacity / 100;

    return this;
  },
  cursor(cursor: Cursor) {
    this._style.cursor = cursor;

    return this;
  },
  border(border: IBorder) {
    this._style = { ...this._style, ...this._getBorder(border, '') };

    return this;
  },
  borderTop(border: IBorder) {
    this._style = { ...this._style, ...this._getBorder(border, 'Top') };

    return this;
  },
  borderRight(border: IBorder) {
    this._style = { ...this._style, ...this._getBorder(border, 'Right') };

    return this;
  },
  borderBottom(border: IBorder) {
    this._style = { ...this._style, ...this._getBorder(border, 'Bottom') };

    return this;
  },
  borderLeft(border: IBorder) {
    this._style = { ...this._style, ...this._getBorder(border, 'Left') };

    return this;
  },
  borderRadius(...args: string[]) {
    if (args.length > 0 && args.length <= 4) {
      this._style.borderRadius = args.reduce((a, b) => `${a} ${b}`, '');
    }

    return this;
  },
  flex(flex: number) {
    this._style.flex = flex;

    return this;
  },
  onHover(hover: (isHover: boolean) => void) {
    this._events.onMouseEnter = () => hover(true);
    this._events.onMouseLeave = () => hover(false);
    this._style.test = '4444';

    return this;
  },
  onClick(click: (event?: MouseEvent) => void) {
    this._events.onClick = (event: MouseEvent) => click(event);

    return this;
  },
} as IView))();

export default View;
