const employee = {
    name: 'Subira', 
    streetAddress: 'South C',
}

// Function to update an employee with a new key-value pair non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {

    console.log('*************************************');
    console.log('      Update Non-Destructively       ');
    console.log('*************************************');

    const newEmployee = { ...employee };
    console.log(`Before Update: ${newEmployee.name}`);
    newEmployee[key] = value;
    console.log(`After Update: ${newEmployee.name}`);
    return newEmployee;
}
  
// Function to update an employee with a new key-value pair destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    console.log('*************************************');
    console.log('        Update Destructively         ');
    console.log('*************************************');

    console.log(`Before Update: ${employee.name}`);
    employee[key] = value;
    console.log(`After Update: ${employee.name}`);
    return employee;
}
  
// Function to delete a key from an employee object non-destructively
function deleteFromEmployeeByKey(employee, key) {

    console.log('*************************************');
    console.log('        Delete by Employee Key       ');
    console.log('*************************************');

    let newEmployee = {};
    console.log(`Before Declaration: ${newEmployee.name}`);
    newEmployee = { ...employee };
    console.log(`Before Delete: ${newEmployee.name}`);
    delete newEmployee[key];
    console.log(`Before Update: ${newEmployee.name}`);
    return newEmployee;
}
  
// Function to delete a key from an employee object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {

    console.log('**************************************');
    console.log(' Delete destructively by Employee Key ');
    console.log('**************************************');

    console.log(`Before Delete: ${employee.name}`);
    delete employee[key];
    console.log(`After Delete: ${employee.name}`)
    return employee;
}
