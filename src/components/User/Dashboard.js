import React, { useState } from 'react';

const UserDashboard = () => {
  const [companies, setCompanies] = useState([
    {
      name: 'Company 1',
      lastCommunications: [
        { type: 'LinkedIn Post', date: '5th September' },
        { type: 'Email', date: '3rd September' },
      ],
      nextCommunication: { type: 'Phone Call', date: '10th September' },
      overdue: false,
    },
    // Add other companies
  ]);

  const markCommunication = (index) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].nextCommunication = null; // Reset highlight
    setCompanies(updatedCompanies);
  };

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      {companies.map((company, index) => (
        <div key={index} className="company-card">
          <h3>{company.name}</h3>
          <ul>
            {company.lastCommunications.map((comm, idx) => (
              <li key={idx}>
                {comm.type} - {comm.date}
              </li>
            ))}
          </ul>
          <div>
            <strong>Next Communication:</strong> {company.nextCommunication ? `${company.nextCommunication.type} on ${company.nextCommunication.date}` : 'No scheduled communication'}
          </div>
          <button onClick={() => markCommunication(index)}>Mark Communication</button>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;

