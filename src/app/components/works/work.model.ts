export interface Work {
  id: number;
  title: string;
  types: Type[];
  caption: string;
  desc: string;
  color: string;
  images: Image[];
}

export interface Image {
  id: number;
  url: string;
}

export interface Type {
  name: string;
}
