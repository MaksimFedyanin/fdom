import React from 'react';
import { ViewInstance } from './View';

export class SpacerInstance extends ViewInstance {
  constructor() {
    super();

    this.style = {
      display: 'flex',
      flex: 1,
    };
  }
}

const Spacer = () => new SpacerInstance()
  .render();

export default Spacer;
