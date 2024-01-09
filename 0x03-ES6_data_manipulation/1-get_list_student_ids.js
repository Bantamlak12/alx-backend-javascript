export default function getListStudentIds(objArray) {
  if (typeof objArray !== 'object') return [];

  return objArray.map((arr) => arr.id);
}
