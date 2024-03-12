function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to get students in the specified city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Use map to update grades for students in the specified city
  const updatedStudents = studentsInCity.map((student) => {
    // Find the corresponding grade in newGrades or set grade to 'N/A' if not found
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObject ? gradeObject.grade : 'N/A';

    // Return the updated student object
    return {
      ...student,
      grade: grade,
    };
  });

  // Return the array of updated students
  return updatedStudents;
}

export default updateStudentGradeByCity;
