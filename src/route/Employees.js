import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Employees() {

    const { employees } = useSelector((state) => state.employees);
    console.log(employees);
    return (
        <div>
            <h1>Current Employees</h1>
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
