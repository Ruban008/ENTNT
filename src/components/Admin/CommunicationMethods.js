import React, { useState } from 'react';

const CommunicationMethodPage = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', mandatory: true },
    { name: 'LinkedIn Message', description: 'Message on LinkedIn', mandatory: false },
    { name: 'Email', description: 'Send an email', mandatory: false },
    { name: 'Phone Call', description: 'Call on phone', mandatory: false },
    { name: 'Other', description: 'Other method', mandatory: false },
  ]);

  const addMethod = () => {
    const newMethod = { name: 'New Method', description: '', mandatory: false };
    setMethods([...methods, newMethod]);
  };

  const deleteMethod = (index) => {
    setMethods(methods.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-page">
      <h2>Communication Method Management</h2>
      <button onClick={addMethod}>Add Method</button>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            <input
              type="text"
              value={method.name}
              onChange={(e) => {
                const updatedMethods = [...methods];
                updatedMethods[index].name = e.target.value;
                setMethods(updatedMethods);
              }}
              placeholder="Method Name"
            />
            <input
              type="text"
              value={method.description}
              onChange={(e) => {
                const updatedMethods = [...methods];
                updatedMethods[index].description = e.target.value;
                setMethods(updatedMethods);
              }}
              placeholder="Description"
            />
            <button onClick={() => deleteMethod(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodPage;
