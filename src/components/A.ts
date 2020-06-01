import { createElement, Elements } from 'components/View';

export interface IAttributesA {
    href: string
}

const A = (
  title: string,
  attributes?: IAttributesA,
) => createElement(
  Elements.A,
  attributes || {},
  ...[title],
);

export default A;
