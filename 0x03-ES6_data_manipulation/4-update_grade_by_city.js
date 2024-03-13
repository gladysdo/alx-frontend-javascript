function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to get students in the specified city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Use map to update grades for students in the specified city
  const updatedStudents = studentsInCity.map((student) => {
    // Find the corresponding grade in newGrades or set grade to 'N/A' if not found
    const { grade = 'N/A' } = newGrades.find((grade) => grade.studentId === student.id);

    // Return the updated student object using property shorthand
    return {
      ...student,
      grade, // Shorthand notation
    };
  });

  // Return the array of updated students
  return updatedStudents;
}

export default updateStudentGradeByCity;
