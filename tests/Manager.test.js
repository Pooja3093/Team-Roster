// using Manager constructor 
const Manager = require('../lib/Manager');

describe("Manager", () => { 
    // creating manager object  
    it('creates an Manager object', () => {
        const manager = new Manager('Pooja', 21, 'pooja@patel.com', 4);
        
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    // gets office number from getOfficenumber()
    it('gets office number', () => {
        const manager = new Manager('Pooja', 21, 'pooja@patel.com', 4);
        
        expect(manager.getOfficenumber()).toEqual(4);
    });

    // gets role from getRole()
    it('gets role of employee', () => {
        const manager = new Manager('Pooja', 21, 'pooja@patel.com', 4);

        expect(manager.getRole()).toEqual('Manager');
    }); 
});