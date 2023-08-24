export type Type =
  | 'subComponent'
  | 'imageComponent'
  | 'textComponent'
  | 'adressComponent';

export interface Image {
  image: {};
  _type: 'imageComponent';
  _key: string;
}

export interface Sub {
  subtitle: string;
  _type: 'subComponent';
  _key: string;
}

export interface Text {
  text: string;
  _type: 'textComponent';
  _key: string;
}

export interface Address {
  _type: 'adressComponent';
  _key: string;
  street: string;
  zip: string;
  city: string;
  email: string;
  website: string;
  telephone: string;
}
//prettier-ignore
export type Component<T> = 
  T extends 'imageComponent'? Image:
  T extends 'subComponent'? Sub:
  T extends 'textComponent'? Text: 
  T extends 'adressComponent' ? Address:
  never;

//prettier-ignore
export function getComponent<T extends Type>(_type: T, components: (Image | Text | Sub | Address)[]) {
  const result = components.find((comp) => comp._type === _type);
  return result as Component<T>;
}
