interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Eric",
  lastName: "Owusu",
  age: 20,
  location: "Osu",
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Ali",
  age: 22,
  location: "Accra",
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Using Vanilla JavaScript, render a table
const table = document.createElement("table");

// For each element in the array, append a new row to the table
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);
