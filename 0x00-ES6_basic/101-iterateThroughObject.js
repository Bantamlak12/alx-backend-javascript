export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = Object.values(reportWithIterator);

  return allEmployees.join(' | ');
}
