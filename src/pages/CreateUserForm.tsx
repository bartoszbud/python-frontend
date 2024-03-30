import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users', formData);
      if (response.status === 201) {
        alert('User created successfully');
        // Optionally, you can reset the form after successful submission
        setFormData({
          first_name: '',
          last_name: '',
          age: ''
        });
      } else {
        alert('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('An error occurred while creating user');
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label><br />
        <input type="text" id="firstName" name="first_name" value={formData.first_name} onChange={handleChange} required /><br />
        <label htmlFor="lastName">Last Name:</label><br />
        <input type="text" id="lastName" name="last_name" value={formData.last_name} onChange={handleChange} required /><br />
        <label htmlFor="age">Age:</label><br />
        <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
