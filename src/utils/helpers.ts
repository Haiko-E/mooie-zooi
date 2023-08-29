import { urlForImage } from './sanity';

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

export function getComponents(components: any[]): string[] {
  const componentsArray = components.map((comp) => {
    switch (comp._type) {
      case 'subComponent':
        return `<h2 class='mb-4 text-6xl font-bold'>${comp.subtitle}</h2>`;
    }
    switch (comp._type) {
      case 'textComponent':
        return `<p class='mb-6 dark:text-neutral-300'>${comp.text}</p>`;
    }
    switch (comp._type) {
      case 'imageComponent':
        return `<img src='${urlForImage(comp.image)
          .format('webp')
          .height(400)
          .url()}'
        alt='test'
        class='h-[400px] w-full object-cover lg:w-full lg:h-auto'
      />`;
    }
  });
  return componentsArray;
}
