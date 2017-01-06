export interface Work {
  id: number;
  title: string;
  type: string;
  caption: string;
  color: string;
  images: Image[];
}

export interface Image {
  id: number;
  url: string;
}
