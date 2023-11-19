export type ProductsType = {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  save: number;
}

export type cartType = {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  save: number;
  quantity: number;
}

export type favoriteType = {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  save: number;
  quantity: number;
}

export type navbarType = {
  path: string;
  text: string;
}