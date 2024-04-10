import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DataTable } from "p14_react_data_tables";

function Employees() {

    const { employees } = useSelector((state) => state.employees);
    console.log(employees);
    const employeesList = [
        {
            firstName: 'Elijah',
            lastName: 'Larsen',
            startDate: new Date('9/3/2006'),
            department: 'Marketing',
            dateOfBirth: new Date('12/26/1997'),
            street: 'Chambers Alley',
            city: 'Bridgeport',
            state: 'Tennessee',
            zipCode: '53584',
        },
        {
            firstName: 'John',
            lastName: 'Donovan',
            startDate: new Date('9/1/2006'),
            department: 'Sales',
            dateOfBirth: new Date('7/17/1976'),
            street: 'Monroe Tunnel',
            city: 'San Antonio',
            state: 'Florida',
            zipCode: '10494',
        },
      ];
      
      const employeesHeader = [
        {id: 'firstName', label: 'First Name', type: 'string'},
        {id: 'lastName', label: 'Last Name', type: 'string'},
        {id: 'startDate', label: 'Start Date', type: 'date'},
        {id: 'department', label: 'Department', type: 'string'},
        {id: 'dateOfBirth', label: 'Date of Birth', type: 'date'},
        {id: 'street', label: 'Street', type: 'string'},
        {id: 'city', label: 'City', type: 'string'},
        {id: 'state', label: 'State', type: 'string'},
        {id: 'zipCode', label: 'Zip Code', type: 'string'}
    ]
    return (
        <div>
            <h1>Current Employees</h1>
            <DataTable 
                data={employeesList} 
                header={employeesHeader} 
                enableSearch={true} 
                enablePagination={true} 
            />
            <table id="employee-table" className="display">
                <thead>
                    <tr>
                        <th>Frist Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? employees.map((employee) => {
                        return <tr>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.startDate}</td>
                            <td>{employee.department}</td>
                            <td>{employee.dateOfBirth}</td>
                            <td>{employee.street}</td>
                            <td>{employee.city}</td>
                            <td>{employee.state}</td>
                            <td>{employee.zipCode}</td>
                        </tr>
                    }) : null}
                </tbody>
            </table>
            <Link to={'/'}>Home</Link>
        </div>
    );
}

export default Employees;
