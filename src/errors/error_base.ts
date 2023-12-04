export class ErrorBase extends Error {
  parent?: ErrorBase;

  constructor(message: string, parent?: ErrorBase) {
    super(message);
    this.parent = parent;
  }

  get log(): string {
    if (this.parent) {
      return `${this.parent.log} -> ${this.message}`;
    }

    return this.message;
  }
}
