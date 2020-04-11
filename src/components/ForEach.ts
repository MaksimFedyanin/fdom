import { DetailedReactHTMLElement, ReactElement } from 'react';
import { IView } from './view';

const ForEach = (
  data: any[],
  map: (item: any, index: number) => IView,
): Array<IView | ReactElement | DetailedReactHTMLElement<any, any>> => data.map((item: any, index?: number) => map(item, index)) as Array<IView | ReactElement | DetailedReactHTMLElement<any, any>>;

export default ForEach;
