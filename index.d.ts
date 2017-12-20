declare function Incremean(): Incremean.MeanAggregator;
export = Incremean;

declare namespace Incremean {
  export type MeanAggregator = (...p: number[]) => number;
}