export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);

  const employees = [];
  allEmployees.forEach((employee) => {
    employees.push(...employee);
  });

  return employees;
}
