export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next: function () {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const employeesInCurrentDepartment = allEmployees[currentDepartment];

        if (currentEmployeeIndex < employeesInCurrentDepartment.length) {
          const employee = employeesInCurrentDepartment[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          // Move to the next department
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next(); // Change this to return the result of the next() function
        }
      } else {
        // No more departments or employees
        return { done: true };
      }
    },
  };
}
