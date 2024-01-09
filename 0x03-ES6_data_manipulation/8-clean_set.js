export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) return '';

  const filteredValue = [...set]
    .filter((ele) => typeof ele === 'string' && ele.startsWith(startString))
    .map((ele) => ele.substring(startString.length))
    .join('-');

  return filteredValue;
}
