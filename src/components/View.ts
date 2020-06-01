import React, { DetailedReactHTMLElement } from 'react';
import Cursor from '../utils/Cursor';
import Color from '../utils/Color';
import { IRGB } from '../utils/rgb';
import { BorderType, IBorder } from '../utils/Border';
import Direction from '../utils/Direction';
import Display from '../utils/Display';
import Alignment from '../utils/Alignment';
import FlexDirection from '../utils/FlexDirection';
import { BackgroundSize } from '../utils/BackgroundSize';

export enum Elements {
  Div = 'div',
  Span = 'span',
  P = 'p',
  Input = 'input',
  Btn = 'button',
  TextArea = 'textarea',
  A = 'a',
  Image = 'img',
}

export interface IView {
  render: () => DetailedReactHTMLElement<any, any>
  display: (display: Display) => IView,
  width: (width: number | string) => IView,
  height: (height: number | string) => IView,
  background: (background: Color | IRGB) => IView,
  padding: (direction?: Direction | Direction[], value?: number | string) => IView,
  margin: (direction?: Direction | Direction[], value?: number | string) => IView,
  color: (color: Color | IRGB) => IView,
  opacity: (opacity: number) => IView,
  cursor: (cursor: Cursor) => IView,
  border: (direction: Direction | Direction[], value: IBorder) => IView,
  borderRadius: (direction?: Direction | Direction[], value?: number | string) => IView,
  flex: (flex: number) => IView,
  flexDirection: (direction: FlexDirection) => IView,
  justifyContent: (alignment: Alignment) => IView,
  alignItems: (alignment: Alignment) => IView,
  objectFit: (backgroundSize: BackgroundSize) => IView,
  backgroundSize: (backgroundSize: BackgroundSize) => IView,
}

const View = (
  element: Elements,
  attributes: any,
  ...children: IView[] | DetailedReactHTMLElement<any, any>[]
): IView => {
  const style: any = {};
  const handlers: any = {};
  const getValue = (value: number | string) => {
    if (value) {
      return typeof value === 'number' ? `${value}px` : value;
    }

    return '';
  };
  const getColor = (color?: Color | IRGB) => {
    if (color) {
      return typeof color === 'string' ? color : color.getColor();
    }

    return '';
  };
  const getBorder = (border: IBorder) => {
    const width = getValue(border.width ? border.width : 0);
    const color = getColor(border.color ? border.color : Color.black);
    const type = border.type ? border.type : BorderType.NONE;

    return `${width} ${color} ${type}`;
  };
  const setDirectionValue = (
    property: string,
    direction?: Direction | Direction[],
    value?: number | string,
  ) => {
    let _direction: Direction[] = [];
    let _value = '14px';

    if (direction) {
      if (typeof direction !== 'number') {
        _direction = direction;
      } else {
        _direction.push(direction);
      }
    } else {
      _direction = [
        Direction.TOP,
        Direction.RIGHT,
        Direction.BOTTOM,
        Direction.LEFT,
      ];
    }
    if (value) {
      _value = getValue(value);
    }

    _direction.forEach((item: Direction) => {
      if (item === Direction.ALL) {
        style[property] = _value;
      }
      if (item === Direction.HORIZONTAL) {
        style[`${property}Right`] = _value;
        style[`${property}Left`] = _value;
      }
      if (item === Direction.VERTICAL) {
        style[`${property}Top`] = _value;
        style[`${property}Bottom`] = _value;
      }
      if (item === Direction.TOP) {
        style[`${property}Top`] = _value;
      }
      if (item === Direction.RIGHT) {
        style[`${property}Right`] = _value;
      }
      if (item === Direction.BOTTOM) {
        style[`${property}Bottom`] = _value;
      }
      if (item === Direction.LEFT) {
        style[`${property}Left`] = _value;
      }
    });
  };
  return {
    display(display: Display): IView {
      style.display = display;

      return this;
    },
    flex(flex: number): IView {
      style.flex = flex;

      return this;
    },
    flexDirection(direction: FlexDirection): IView {
      style.flexDirection = direction;

      return this;
    },
    justifyContent(alignment: Alignment): IView {
      style.justifyContent = alignment;

      return this;
    },
    alignItems(alignment: Alignment): IView {
      style.alignItems = alignment;

      return this;
    },
    width(width: string) {
      style.width = width;

      return this;
    },
    height(height: string) {
      style.height = height;

      return this;
    },
    background(background: Color | IRGB) {
      style.background = getColor(background);

      return this;
    },
    backgroundSize(backgroundSize: BackgroundSize): IView {
      style.backgroundSize = backgroundSize;

      return this;
    },
    objectFit(backgroundSize: BackgroundSize): IView {
      style.objectFit = backgroundSize;

      return this;
    },
    padding(direction?: Direction | Direction[], value?: number | string) {
      setDirectionValue('padding', direction, value);

      return this;
    },
    margin(direction?: Direction | Direction[], value?: number | string) {
      setDirectionValue('margin', direction, value);

      return this;
    },
    color(color: Color | IRGB) {
      style.color = getColor(color);

      return this;
    },
    border(direction: Direction | Direction[] = Direction.ALL, value: IBorder) {
      setDirectionValue('border', direction, getBorder(value));

      return this;
    },
    borderRadius(direction?: Direction | Direction[], value?: number | string) {
      setDirectionValue('borderRadius', direction, value);

      return this;
    },
    cursor(cursor: Cursor): IView {
      style.cursor = cursor;

      return this;
    },
    opacity(opacity: number): IView {
      style.opacity = opacity / 100;

      return this;
    },
    render(): DetailedReactHTMLElement<any, any> {
      // @ts-ignore
      const elements = children.map((
        item: IView | DetailedReactHTMLElement<any, any>,
      ) => (typeof item === 'object' && 'render' in item ? item.render() : item));

      return React.createElement(element, { style, ...attributes }, ...elements);
    },
  };
};

export const createElement = (
  element: Elements,
  attributes,
  ...children
) => View(element, attributes, ...children);
