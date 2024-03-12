// Define a function named getListStudents
function getListStudents() {
  // Create an array of objects representing students
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  // Return the array of students
  return students;
}

// Export the getListStudents function to make it available for other files
export default getListStudents;
