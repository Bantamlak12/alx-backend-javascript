export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') return '';

  const filteredValue = [...set]
    .filter((ele) => typeof ele === 'string' && ele.startsWith(startString))
    .map((ele) => ele.substring(startString.length))
    .join('-');

  return filteredValue;
}
