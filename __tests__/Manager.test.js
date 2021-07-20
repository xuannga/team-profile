const Employee = require('./lib/Employee');
const manager = require('./lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Bob');
});

test('set office number with constructor', () => {
    const testVal = 100;
    const e = new Manager('foo', 1, 'manager@email.com', testVal);
    expect(e.officeNumber).toBe(testVal);
});

test('get office number with getOffNum() method', () => {
    const testVal = 100;
    const e = new Manager('foo', 1, 'manager@email.com', testVal);
    expect(e.getOffNum()).toBe(testVal);
});

test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'manager@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});