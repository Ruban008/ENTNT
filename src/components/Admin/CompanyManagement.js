import React, { useState } from 'react';

const AdminPage = () => {
  // State to hold companies and communication methods
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    location: '',
    linkedin: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
  });
  const [communicationNotes, setCommunicationNotes] = useState({});

  // Handle changes for company input fields
  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  // Add company to the list
  const addCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({
      name: '',
      location: '',
      linkedin: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
    });
  };

  // Handle communication method notes
  const handleCommunicationNotesChange = (companyName, e) => {
    const { value } = e.target;
    setCommunicationNotes({ ...communicationNotes, [companyName]: value });
  };

  return (
    <div className="admin-page">
      <h2>Admin - Manage Companies and Communication Methods</h2>

      {/* Company Management Section */}
      <div className="company-management">
        <h3>Add Company</h3>
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
        <button onClick={addCompany}>Add Company</button>
      </div>

      {/* Communication Methods Section */}
      <div className="communication-methods">
        <h3>Communication Methods</h3>
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <div key={index} className="company-item">
              <h4>{company.name}</h4>
              <div>
                <strong>LinkedIn Message:</strong> {company.linkedin}
              </div>
              <div>
                <strong>Email:</strong> {company.emails}
              </div>
              <div>
                <strong>Phone Number:</strong> {company.phoneNumbers}
              </div>
              <div>
                <strong>Details you can use to communicate the organization:</strong>
                <textarea
                  value={communicationNotes[company.name] || ''}
                  onChange={(e) => handleCommunicationNotesChange(company.name, e)}
                  placeholder="Enter message or notes"
                ></textarea>
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
