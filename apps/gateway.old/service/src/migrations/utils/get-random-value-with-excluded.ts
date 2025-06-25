const getRandomValueWithExcluded = (values: any[] = []): any => {
  if (values.length === 0) {
    return;
  }

  return values[Math.floor(Math.random() * (values.length - 1))];
};

export default getRandomValueWithExcluded;
