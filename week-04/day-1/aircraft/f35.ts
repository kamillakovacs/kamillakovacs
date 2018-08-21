import { Aircraft } from "./aircraft"

export class F35 extends Aircraft {
  constructor(type: string) {
    super(type);
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }

}