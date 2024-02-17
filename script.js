// Define Employee object template
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

// Calculate Average Salary
function calculateAverageSalary(employees) {
    let totalSalary = 0;
    employees.forEach(employee => {
        totalSalary += employee.salary;
    });
    return totalSalary / employees.length;
}

// Find Employees in a Department
function findEmployeesByDepartment(employees, department) {
    return employees.filter(employee => employee.department === department);
}

// Increase Salary for Employees
function increaseSalary(employees, percentage) {
    employees.forEach(employee => {
        employee.salary *= (1 + percentage / 100);
    });
}

// Sort Employees by Age
function sortEmployeesByAge(employees) {
    return employees.slice().sort((a, b) => a.age - b.age);
}

// Example usage:
let employees = [
    new Employee("John", 30, "HR", 50000),
    new Employee("Jane", 35, "Engineering", 60000),
    new Employee("Doe", 25, "Marketing", 55000)
];

console.log("Average Salary:", calculateAverageSalary(employees));
console.log("Employees in Engineering department:", findEmployeesByDepartment(employees, "Engineering"));
increaseSalary(employees, 10);
console.log("Employees after salary increase:", employees);
console.log("Employees sorted by age:", sortEmployeesByAge(employees));
