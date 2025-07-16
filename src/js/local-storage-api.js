export const saveInLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFormLS = key => {
  const saveData = localStorage.getItem(key);
  if (saveData) {
    const parsedData = JSON.parse(saveData);
    return parsedData;
  }
  return null;
};
