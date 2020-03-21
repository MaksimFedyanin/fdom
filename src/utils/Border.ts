import { CSSProperties } from 'react';
import Color from './Color';
import {RGB} from "./rgb";

export enum BorderType {
    none = 'none',
    solid = 'solid',
}
export interface IBorder {
    width?: string;
    type?: BorderType;
    color?: Color | RGB;
}
