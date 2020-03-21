import {ViewInstance} from './view';
import {DetailedReactHTMLElement, ReactElement} from "react";

const ForEach = (
    data: any[],
    map: (item: any, index: number) => ViewInstance
): Array<ViewInstance | ReactElement | DetailedReactHTMLElement<any, any>> =>
    data.map((item: any, index?: number) => map(item, index)) as Array<ViewInstance | ReactElement | DetailedReactHTMLElement<any, any>>;

export default ForEach;
