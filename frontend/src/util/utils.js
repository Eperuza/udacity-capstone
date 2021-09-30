export const getFileName = (string) => {
  const array = string.split('/');
  const fileName = array[array.length - 1];
  return fileName;
};

export const convertDate = (timestamp) => {
  const date = timestamp.split('T')[0];
  return date;
}