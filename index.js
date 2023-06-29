const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = { ...employee };

    employees[key] = value;
    return employees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee, key};

    delete newEmployee[key];

    return newEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]

    return employee

}
