export default function getListStudentIds(objArray) {
  if (Array.isArray(objArray)) return objArray.map((arr) => arr.id);
  return [];
}
