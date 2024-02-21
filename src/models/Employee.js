/**
 * @class
 * @classdesc Employee data formatter
 */
export default class Employee {

    constructor({ firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department }) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.startDate = startDate;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.department = department;
    }
}