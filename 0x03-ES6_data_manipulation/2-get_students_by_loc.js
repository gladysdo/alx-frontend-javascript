function getStudentsByLocation(studentList, city) {
  // Use the filter function to get students located in the specified city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Return the array of students in the specified city
  return studentsInCity;
}

export default getStudentsByLocation;
