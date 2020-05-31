import React from 'react';
import { createElement, Elements } from './View';

export interface IAttributesInput {
    value?: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (
  attributes?: IAttributesInput,
) => createElement(
  Elements.Input,
  attributes || {},
);

export default Input;
