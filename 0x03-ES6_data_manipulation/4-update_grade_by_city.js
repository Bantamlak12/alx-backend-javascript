export default function updateStudentGradeByCity(
  listOfStudents,
  city,
  newGrades,
) {
  return listOfStudents
    .filter((students) => students.location === city)
    .map((student) => {
      const newGrade = newGrades.find(
        (pupil) => pupil.studentId === student.id,
      );
      if (newGrade) {
        return { ...student, grade: newGrade.grade };
      } return { ...student, grade: 'N/A' };
    });
}
