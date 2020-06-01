export interface IRGB {
    red: number | string;
    green: number | string;
    blue: number | string;
    getColor: () => string;
}
export interface IRGBA extends IRGB {
    alpha: number;
}

export const rgb = (r: number | string, g: number | string, b: number | string): IRGB => ({
  red: r,
  green: g,
  blue: b,
  getColor() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  },
});
export const rgba = (
  r: number | string,
  g: number | string,
  b: number | string,
  a: number,
): IRGBA => ({
  red: r,
  green: g,
  blue: b,
  alpha: a,
  getColor() {
    return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
  },
});
