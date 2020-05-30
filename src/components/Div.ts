import { createElement, Elements } from './View';

const Div = (...children) => createElement(Elements.Div, {}, ...children);

export default Div;
