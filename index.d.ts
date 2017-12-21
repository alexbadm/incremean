export declare type IncremeanTuple = [number, number, boolean];
export interface IncremeanInit {
    MAX_VAULUE_EXCEEDED: boolean;
    counter: number;
    mean: number;
}
declare class Incremean {
    static restore(json: IncremeanInit | string): Incremean;
    static unmarshal(json: IncremeanTuple | string): Incremean;
    private counter;
    private mean;
    private MAX_VAULUE_EXCEEDED;
    constructor(init?: IncremeanInit);
    add(...args: number[]): number;
    getCounter(): number;
    getMean(): number;
    marshal(): string;
    isValid(): boolean;
}
export default Incremean;
