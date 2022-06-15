// using Engineer constructor 
const Engineer = require('../lib/Engineer');

describe("Engineer", () => { 
    // creating engineer object  
    it('creates an Engineer object', () => {
        const engineer = new Engineer('Pooja', 21, 'pooja@patel.com', 'Pooja3093');
        
        expect(engineer.github) .toEqual(expect.any(String));
    });

    // gets github from getGithub()
    it('gets engineer github username', () => {
        const engineer = new Engineer('Pooja', 21, 'pooja@patel.com', 'Pooja3093');

        expect(engineer.getGithub()).toEqual('Pooja3093');
    });

    // gets role from getRole() 
    it('gets role of employee', () => {
        const engineer = new Engineer('Pooja', 21, 'pooja@patel.com', 'Pooja3093');

        expect(engineer.getRole()).toEqual('Engineer');
    });
});