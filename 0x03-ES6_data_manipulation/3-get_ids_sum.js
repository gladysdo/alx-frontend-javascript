function getStudentIdsSum(studentList) {
  // Use the reduce function to calculate the sum of student ids
  const sumOfIds = studentList.reduce((accumulator, student) => accumulator + student.id, 0);

  // Return the sum of student ids
  return sumOfIds;
}

export default getStudentIdsSum;
