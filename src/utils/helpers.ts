type Type = 'subComponent' | 'imageComponent' | 'textComponent';

type Image = {
  image: {};
  _type: 'imageComponent';
  _key: string;
};

type Sub = {
  subtitle: string;
  _type: 'subComponent';
  _key: string;
};

type Text = {
  text: string;
  _type: 'textComponent';
  _key: string;
};
type Component = Image | Sub | Text;

export function getComponent(_type: Type, components: Component[]) {
  const result = components.find((comp) => comp._type === _type);
  if (result._type === 'subComponent') {
    return result;
  }
  if (result._type === 'textComponent') {
    return result;
  }
  if (result._type === 'imageComponent') {
    return result;
  }
}
