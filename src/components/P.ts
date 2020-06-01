import { createElement, Elements } from './View';

const P = (text: string) => createElement(Elements.P, {}, text);

export default P;
