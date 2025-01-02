const mockCompanies = [
    {
      id: 1,
      name: 'Example Company',
      location: 'New York',
      linkedIn: 'https://linkedin.com/company/example',
      emails: ['contact@example.com'],
      phones: ['+1234567890'],
      comments: 'Great potential partner',
      periodicity: '2 weeks',
    },
  ];
  
  export const fetchCompanies = () => Promise.resolve(mockCompanies);
  
  export const addCompany = (company) => {
    mockCompanies.push(company);
    return Promise.resolve(company);
  };
  
  export const fetchCommunicationMethods = () =>
    Promise.resolve([
      { name: 'LinkedIn Post', description: 'Post on LinkedIn' },
      { name: 'LinkedIn Message', description: 'Message on LinkedIn' },
      { name: 'Email', description: 'Send an Email' },
      { name: 'Phone Call', description: 'Make a phone call' },
      { name: 'Other', description: 'Any other communication method' },
    ]);
  