function getListStudentIds(studentList) {
  // Check if the provided argument is an array
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Use the map function to extract the 'id' from each student object
  const studentIds = studentList.map((student) => student.id);

  // Return the array of student ids
  return studentIds;
}

export default getListStudentIds;
