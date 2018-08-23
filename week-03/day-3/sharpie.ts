'use strict'

import { SharpieSet} from './sharpieset'

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount--;
    return this.inkAmount;
  }

  getInkAmount() {
    return this.inkAmount;
  }

}