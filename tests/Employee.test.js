const Employee = require('../src/Employee');
const Engineer = require('../src/Engineer');
const Intern = require('../src/Intern');
const Manager = require('../src/Manager');

describe("Ensures all employee objects handle data correctly", () => {
    test("Employee data handling", () => {
        var testEmployee = new Employee("John", "22", "John@gmail.com");
        expect(testEmployee.name).toBe("John");
    })

    test("Engineer data handling", () => {
        var testEmployee = new Engineer("John", "22", "John@gmail.com");
        expect(testEmployee.id).toBe("22");
    })

    test("Intern data handling", () => {
        var testEmployee = new Intern("John", "22", "John@gmail.com");
        expect(testEmployee.email).toBe("John@gmail.com");
    })

    test("Manager data handling", () => {
        var testEmployee = new Manager("John", "26", "John@gmail.com");
        expect(testEmployee.id).toBe("26");
    })
})