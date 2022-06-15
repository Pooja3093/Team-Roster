// using Intern constructor 
const Intern = require('../lib/Intern');

describe("Employee", () => { 
    // creating intern object  
    it('creates an Intern object', () => {
        const intern = new Intern('Pooja', 21, 'pooja@patel.com', 'UofT');
        
        expect(intern.school) .toEqual(expect.any(String));
    });

    // gets school from getSchool()
    it('gets employee school', () => {
        const intern = new Intern('Pooja', 21, 'pooja@patel.com', 'UofT');
        
        expect(intern.getSchool()).toEqual('UofT');
    });

    // gets role from getRole()
    it('gets role of employee', () => {
        const intern = new Intern('Pooja', 21, 'pooja@patel.com', 'UofT');

        expect(intern.getRole()).toEqual('Intern');
    }); 
});