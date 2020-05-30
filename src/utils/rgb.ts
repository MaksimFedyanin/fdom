export interface IRGB {
    red: string;
    green: string;
    blue: string;
    getColor: () => string;
}

const rgb = (r: string, g: string, b: string): IRGB => ({
  red: r,
  green: g,
  blue: b,
  getColor() {
    return `#${this.red}${this.green}${this.blue}`;
  },
});

export default rgb;
