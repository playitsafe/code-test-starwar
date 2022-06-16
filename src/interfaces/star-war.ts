export interface IPerson {
  name: string,
  height: string,
  mass: string,
  gender: 'male' | 'female' | 'n/a'
}

export interface IResponse {
  count: number,
  next: null | string,
  previous: null | string,
  results: IPerson[]
}