export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents
    .map((student) => student.id)
    .reduce((acc, value) => acc + value, 0);
}
