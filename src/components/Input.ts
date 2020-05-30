import React from 'react';
import { createElement, Elements } from './View';

export interface IAttributesInput {
    value?: string;
    placeholder?: string;
    onChangeValue: (value: string) => void;
}

const Input = (
  attributes?: IAttributesInput,
) => createElement(
  Elements.Input,
  attributes ? {
    ...attributes,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => attributes.onChangeValue(event.target.value),
  } : {},
);

export default Input;
