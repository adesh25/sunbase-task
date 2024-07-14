import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [editCustomerId, setEditCustomerId] = useState(null);
    const [editedCustomer, setEditedCustomer] = useState({
        firstName: '',
        lastName: '',
        street: '',
        address: '',
        city: '',
        state: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8080/customers')
            .then(response => {
                setCustomers(response.data);
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error fetching customers', error);
                setErrorMessage('Error fetching customers');
            });
    }, []);

    const deleteCustomer = (id) => {
        axios.delete(`http://localhost:8080/delete?id=${id}`)
            .then(response => {
                console.log(response.data);
                setSuccessMessage('Customer deleted successfully');
                setErrorMessage('');
                setCustomers(customers.filter(customer => customer.id !== id));
            })
            .catch(error => {
                console.error('Error deleting customer', error);
                setErrorMessage('Error deleting customer');
                setSuccessMessage('');
            });
    };

    const startEditing = (customer) => {
        setEditCustomerId(customer.id);
        setEditedCustomer(customer);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCustomer({ ...editedCustomer, [name]: value });
    };

    const saveCustomer = () => {
        axios.put(`http://localhost:8080/update?id=${editCustomerId}`, editedCustomer)
            .then(response => {
                setSuccessMessage('Customer updated successfully');
                setErrorMessage('');
                setEditCustomerId(null);
                setCustomers(customers.map(customer =>
                    customer.id === editCustomerId ? editedCustomer : customer
                ));
            })
            .catch(error => {
                console.error('Error updating customer', error);
                setErrorMessage('Error updating customer');
                setSuccessMessage('');
            });
    };

    return (
        <div className="container">
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Street</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            {editCustomerId === customer.id ? (
                                <td colSpan="9">
                                    <form onSubmit={saveCustomer}>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={editedCustomer.firstName}
                                                    onChange={handleInputChange}
                                                    name="firstName"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={editedCustomer.lastName}
                                                    onChange={handleInputChange}
                                                    name="lastName"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Street"
                                                    value={editedCustomer.street}
                                                    onChange={handleInputChange}
                                                    name="street"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    value={editedCustomer.address}
                                                    onChange={handleInputChange}
                                                    name="address"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="City"
                                                    value={editedCustomer.city}
                                                    onChange={handleInputChange}
                                                    name="city"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="State"
                                                    value={editedCustomer.state}
                                                    onChange={handleInputChange}
                                                    name="state"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    value={editedCustomer.email}
                                                    onChange={handleInputChange}
                                                    name="email"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    value={editedCustomer.phone}
                                                    onChange={handleInputChange}
                                                    name="phone"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success mr-2">Save</button>
                                                <button type="button" className="btn btn-secondary ml-2" onClick={() => setEditCustomerId(null)}>Cancel</button>
                                            </div>
                                        </div>

                                    </form>
                                </td>
                            ) : (
                                <>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.street}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.city}</td>
                                    <td>{customer.state}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>
                                        <i className="fas fa-trash-alt text-danger" style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => deleteCustomer(customer.id)}></i>
                                        <i className="fas fa-edit text-primary" style={{ cursor: 'pointer' }} onClick={() => startEditing(customer)}></i>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;
