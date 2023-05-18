export default function destructuring(obj) {
  const { special } = obj;
  special.forEach((elem) => {
    if (!elem.description) {
      const element = elem;
      element.description = 'Описание недоступно';
    }
  });
  return special;
}
