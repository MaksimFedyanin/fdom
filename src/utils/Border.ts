import Color from "./Color";
import {IRGB} from "./rgb";

export enum BorderType {
    NONE = 'none',
    SOLID = 'solid',
}
export interface IBorder {
    width?: number | string;
    type?: BorderType;
    color?: Color | IRGB;
}
