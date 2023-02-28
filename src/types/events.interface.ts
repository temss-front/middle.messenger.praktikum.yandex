export interface IEvents {
  [key: string]: (e: Event) => void;
}
