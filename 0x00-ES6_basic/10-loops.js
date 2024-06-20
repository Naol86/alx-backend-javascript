export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const iterator of array) {
    newArray.push(appendString + iterator);
  }

  return newArray;
}
