import { createElement, Elements } from './View';

const Span = (text: string) => createElement(Elements.Span, {}, text);

export default Span;
