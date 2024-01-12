/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Cpp();
export const react = new Subjects.JavaClass();
export const cTeacher: Subjects.Teacher = {
  experienceTeachingC: 10,
  firstName: "John",
  lastName: "Smith",
};

cpp.teacher = cTeacher;
java.teacher = cTeacher;
react.teacher = cTeacher;

console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
