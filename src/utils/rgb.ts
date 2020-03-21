export class RGB {
    private b: string;

    private g: string;

    private r: string;

    constructor(r: string, g: string, b: string) {
      this.r = r;
      this.g = g;
      this.b = b;
    }

    getColor() {
      return `#${this.r}${this.g}${this.b}`;
    }
}

const rgb = (r: string, g: string, b: string): RGB => new RGB(r, g, b);

export default rgb;
