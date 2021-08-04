const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('mickey');
});

test('set school with constructor', () => {
    const testVal = 'UW';
    const e = new Intern('foo', 1, 'intern@email.com', testVal);
    expect(e.school).toBe(testVal)
});

test('get school with getSchool() method', () => {
    const testVal = 'UW';
    const e = new Intern('foo', 1, 'intern@email.com', testVal);
    expect(e.getSchool()).toBe(testVal);
});

test('getRole() return Intern', () => {
    const testVal = 'Intern';
    const e = new Intern('foo', 1, 'intern@email.com', 'UW');
    expect(e.getRole()).toBe(testVal);
})