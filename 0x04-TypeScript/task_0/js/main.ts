interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 34,
  location: "New York",
};
const student2: Student = {
  firstName: "Angela",
  lastName: "Robert",
  age: 25,
  location: "Rome",
};
const studentsList: Student[] = [student1, student2];

const createTable = (): void => {
  const body: HTMLElement | null = document.body;
  const table = document.createElement("table");

  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");

    const nameData: HTMLTableCellElement = document.createElement("td");
    const locationData: HTMLTableCellElement = document.createElement("td");

    nameData.textContent = student.firstName;
    locationData.textContent = student.location;

    row.appendChild(nameData);
    row.appendChild(locationData);
    table.appendChild(row);
  });
  body.appendChild(table);
};

document.addEventListener("DOMContentLoaded", function () {
  createTable();
});
