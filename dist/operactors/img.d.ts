declare const _default: (search: string, safe?: boolean | undefined) => Promise<IImg[]>;
export default _default;
export interface IImg {
    img: string;
    url: string;
    name: string;
}
