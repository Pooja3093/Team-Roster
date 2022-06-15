// using Employee constructor 
const Employee = require('../lib/Employee');

describe("Employee", () => {   
    // creates employee object 
    it('creates an employee object', () => {
        const employee = new Employee('Pooja', 21, 'pooja@patel.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });


    // gets id from getId() 
    it('gets employee name', () => {
        const employee = new Employee('Pooja', 21, 'pooja@patel.com');

        expect(employee.getName()).toEqual('Pooja');
    });

    // gets id from getId() 
    test('gets employee ID', () => {
        const employee = new Employee('Pooja', 21, 'pooja@patel.com');

        expect(employee.getId()).toEqual(21);
    });

    // gets emails from getEmail()
    it('gets employee email', () => {
        const employee = new Employee('Pooja', 21, 'pooja@patel.com');

        expect(employee.getEmail()).toEqual('pooja@patel.com');
    });

    // gets role from getRole()
    it('gets role of employee', () => {
        const employee = new Employee('Pooja', 21, 'pooja@patel.com');

        expect(employee.getRole()).toEqual('Employee');
    }); 
});