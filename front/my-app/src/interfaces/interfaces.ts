// MODIFICAR ACORDE ESCALE EL PROYECTO Y TENGAMOS MAS INFO

export interface Ilogin_props {
  email: string;
  password: string;
}

export interface LoginErrorProps {
  email?: string;
  password?: string;
}

export interface Iregister_props {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface RegisterErrorProps {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
  country?: string;
}

export interface EditErrorProps {
  name?: string;
  email?: string;
  password?: string;
  oldPassword?: string;
  address?: string;
  phone?: string;
}

//VERIFICAR SI AL USER SE LE AGREGA UNA PROPIEDAD PARA GUARDAR SUS ORDENES Y AGREGARLA EN ESTA INTERFACE.
export interface Isession_active {
  token: string;
  user: {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    image?: string;
  };
}

export interface DataUser {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  image?: string;
  status?: string;
}

export interface Iproducts_props {
  id?: string,
  brand: string,
  model: string,
  price: number,
  stock: number,
  description: string,
  size?: string,
  dailyGeneration: string,
  image: string
}
//CARRITO 
export interface Icart {
  id: string;
  totalPrice: number;
  panel_id: string;
  quantity: number;
  panel_image: string;
  panel_model: string;
  stock?: number;
}

//ORDENES

export interface Item {
  id: string
  brand: string
  totalPrice: number
  panel_id: string
  quantity: number
  panel_image: string
  panel_model: string
}

export interface Record {
  id: string
  date: string
  totalPrice: number
  items: Item[]
}

export interface ResponseData {
  record: Record
}



