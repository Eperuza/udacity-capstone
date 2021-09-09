export const getFileName = (string) => {
  const array = string.split('/');
  const fileName = array[array.length - 1]
  return fileName
};