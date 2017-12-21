export type IncremeanTuple = [ number, number, boolean ];

export interface IncremeanInit {
  MAX_VAULUE_EXCEEDED: boolean;
  counter: number;
  mean: number;
}

class Incremean {
  public static restore(json: IncremeanInit | string): Incremean {
    const init: IncremeanInit = (typeof json === "string") ? JSON.parse(json) : json;
    return new Incremean(init);
  }

  public static unmarshal(json: IncremeanTuple | string): Incremean {
    const tuple: IncremeanTuple = (typeof json === "string") ? JSON.parse(json) : json;
    if (!Array.isArray(tuple) || tuple.length !== 3) {
      throw new Error("Failed to unmarshal the tuple");
    }
    return new Incremean({
      MAX_VAULUE_EXCEEDED: tuple[2],
      counter: tuple[0],
      mean: tuple[1],
    });
  }

  private counter: number;
  private mean: number;
  private MAX_VAULUE_EXCEEDED: boolean;

  constructor(init?: IncremeanInit) {
    this.counter = init && init.counter || 0;
    this.mean = init && init.mean || 0;
    this.MAX_VAULUE_EXCEEDED = init && init.MAX_VAULUE_EXCEEDED || false;
  }

  public add(...args: number[]): number {
    for (const arg of args) {
      const totalAmount = this.mean * this.counter + arg;
      if (totalAmount > Number.MAX_VALUE) {
        this.MAX_VAULUE_EXCEEDED = true;
      }
      this.mean = totalAmount / ++this.counter;
    }
    return this.getMean();
  }

  public getCounter(): number {
    return this.counter;
  }

  public getMean(): number {
    return this.mean;
  }

  public marshal(): string {
    return JSON.stringify([ this.counter, this.mean, this.MAX_VAULUE_EXCEEDED ]);
  }

  public isValid(): boolean {
    return !this.MAX_VAULUE_EXCEEDED;
  }
}

export default Incremean;
