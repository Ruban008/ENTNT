import React, { useState } from 'react';

const AdminPage = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    location: '',
    linkedin: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const addCompany = () => {
    if (isEditing) {
      // Edit company
      const updatedCompanies = companies.map((company, index) =>
        index === editIndex ? newCompany : company
      );
      setCompanies(updatedCompanies);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new company
      setCompanies([...companies, newCompany]);
    }

    // Reset form
    setNewCompany({
      name: '',
      location: '',
      linkedin: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
    });
  };

  const deleteCompany = (index) => {
    const filteredCompanies = companies.filter((_, i) => i !== index);
    setCompanies(filteredCompanies);
  };

  const editCompany = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setNewCompany(companies[index]);
  };

  return (
    <div className="admin-page">
      <h2>Admin - Manage Companies and Communication Methods</h2>

      {/* Company Management Section */}
      <div className="company-management">
        <h3>{isEditing ? 'Edit Company' : 'Add Company'}</h3>
        <div className="input-box">
          <label>Company Name</label>
          <input
            type="text"
            name="name"
            value={newCompany.name}
            onChange={handleCompanyChange}
            placeholder="Company Name"
          />
        </div>
        <div className="input-box">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={newCompany.location}
            onChange={handleCompanyChange}
            placeholder="Location"
          />
        </div>
        <div className="input-box">
          <label>LinkedIn Profile URL</label>
          <input
            type="text"
            name="linkedin"
            value={newCompany.linkedin}
            onChange={handleCompanyChange}
            placeholder="LinkedIn Profile URL"
          />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            type="text"
            name="emails"
            value={newCompany.emails}
            onChange={handleCompanyChange}
            placeholder="Email Address"
          />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumbers"
            value={newCompany.phoneNumbers}
            onChange={handleCompanyChange}
            placeholder="Phone Number"
          />
        </div>
        <div className="input-box">
          <label>Comments</label>
          <input
            type="text"
            name="comments"
            value={newCompany.comments}
            onChange={handleCompanyChange}
            placeholder="Additional Comments"
          />
        </div>
        <button onClick={addCompany}>{isEditing ? 'Save Changes' : 'Add Company'}</button>
      </div>

      {/* Company List with Edit and Delete options */}
      <div className="company-list">
        <h3>Company List</h3>
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <div key={index} className="company-item">
              <h4>{company.name}</h4>
              <div>
                <strong>Location:</strong> {company.location}
              </div>
              <div>
                <strong>LinkedIn Profile:</strong> {company.linkedin}
              </div>
              <div>
                <strong>Email:</strong> {company.emails}
              </div>
              <div>
                <strong>Phone Number:</strong> {company.phoneNumbers}
              </div>
              <div>
                <strong>Comments:</strong> {company.comments}
              </div>
              <div className="actions">
                <button onClick={() => editCompany(index)}>Edit</button>
                <button onClick={() => deleteCompany(index)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No companies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
