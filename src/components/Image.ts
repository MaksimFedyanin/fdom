import { createElement, Elements } from 'components/View';

export interface IAttributesImage {
    src: string
}

const Image = (
  attributes?: IAttributesImage,
) => createElement(
  Elements.Image,
  attributes || {},
);

export default Image;
