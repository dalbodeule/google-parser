declare const _default: (search: string) => Promise<ISearch[] | ISearchError>;
export default _default;
export interface ISearch {
    title: string;
    url: string;
    description: string;
}
export interface ISearchError {
    error: true;
    reson: "antibot";
}
