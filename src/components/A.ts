import { createElement, Elements } from 'components/View';

export interface IAttributesA {
    href: string
}

const A = (
  attributes?: IAttributesA,
) => createElement(
  Elements.A,
  attributes || {},
);

export default A;
