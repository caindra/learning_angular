export enum Color {
  red, black, blue, green, yellow, white, purple
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
