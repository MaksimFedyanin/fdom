import React from 'react';
import { createElement, Elements, IView } from './View';

export interface IAttributesBtn {
    onClick: (event: React.MouseEvent) => void
}

const Btn = (
  view: IView,
  onClick: (event: React.MouseEvent) => void,
) => createElement(
  Elements.Btn,
  {
    onClick,
  },
  ...[view],
);

export default Btn;
