import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/searchByEmail?email=${searchTerm}`);
            console.log('Response:', response.data); 
            setSearchResults(response.data);
            setError('');
        } catch (error) {
            console.error('Error searching by email:', error);
            setSearchResults(null);
            setError('Error fetching data. Please try again later.');
        }
    };
    

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h2>Search Customers by Email</h2>
            <div>
                <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Enter email" />
                <button onClick={handleSearch}>Search</button>
            </div>
            {error && <p>{error}</p>}
            {searchResults && (
                <div>
                    <h3>Search Result:</h3>
                    <p>
                        Name: {searchResults.firstName} {searchResults.lastName}<br />
                        Email: {searchResults.email}<br />
                        Phone: {searchResults.phone}<br />
                        Street: {searchResults.street}<br />
                        Address: {searchResults.address}<br />
                        City: {searchResults.city}<br />
                        State: {searchResults.state}<br />
                    </p>
                </div>
            )}
            {!error && !searchResults && <p>No results found.</p>}
        </div>
    );
};

export default Search;
