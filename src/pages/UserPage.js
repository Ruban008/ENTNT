import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/User.css';

const UserPage = () => {
    const [companies, setCompanies] = useState([
        {
            name: 'Company A',
            communications: [{ type: 'LinkedIn Post', date: '2024-12-01', notes: 'Initial contact' }],
            nextCommunication: { type: 'Email', date: '2024-12-10' },
        },
        {
            name: 'Company B',
            communications: [{ type: 'Email', date: '2024-11-30', notes: 'Follow-up email' }],
            nextCommunication: { type: 'Call', date: '2024-12-05' },
        },
        {
            name: 'Company C',
            communications: [{ type: 'Meeting', date: new Date().toISOString().split('T')[0], notes: 'Discuss project' }],
            nextCommunication: { type: 'Email', date: '2024-12-15' },
        },
    ]);

    const [calendarData, setCalendarData] = useState([]);
    const [newCommunication, setNewCommunication] = useState({ type: '', date: '', notes: '' });
    const today = new Date().toISOString().split('T')[0]; // Get current date

    useEffect(() => {
        // Update calendar data
        const initialCalendarData = companies.flatMap((company) =>
            company.communications.map((comm) => ({
                date: comm.date,
                details: `${comm.type} (${company.name}): ${comm.notes}`,
            }))
        );
        setCalendarData(initialCalendarData);
    }, [companies]);

    const handleAddToCalendar = (date, details) => {
        setCalendarData((prevData) => [...prevData, { date, details }]);
    };

    const handleNewCommunication = (e) => {
        e.preventDefault();
        if (newCommunication.type && newCommunication.date) {
            const updatedCompanies = [...companies];
            updatedCompanies[0].communications.push({
                type: newCommunication.type,
                date: newCommunication.date,
                notes: newCommunication.notes,
            });

            setCompanies(updatedCompanies); // Update companies state

            handleAddToCalendar(
                newCommunication.date,
                `${newCommunication.type} (Company A): ${newCommunication.notes}`
            );

            setNewCommunication({ type: '', date: '', notes: '' });
            alert('New communication logged successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    };

    const getDateColor = (date) => {
        if (date === today) {
            return 'yellow'; // For today's meetings
        } else if (new Date(date) > new Date(today)) {
            return 'red'; // For upcoming meetings
        }
        return 'white'; // Default color for past meetings
    };

    return (
        <div className="user-page">
            

            <div className="header">
                <h2>User Module Dashboard</h2>
            </div>

            <div className="content">
                <div className="calendar-section">
                    <h3>Calendar</h3>
                    <Calendar
                        className="dark-mode-calendar"
                        tileContent={({ date }) =>
                            calendarData
                                .filter((entry) => new Date(entry.date).toDateString() === date.toDateString())
                                .map((entry, index) => (
                                    <div
                                        key={index}
                                        className="calendar-event"
                                        style={{ color: getDateColor(entry.date) }}
                                    >
                                        {entry.details}
                                    </div>
                                ))
                        }
                    />
                </div>

                <div className="new-communication-container">
                    <h3>Log New Communication</h3>
                    <form onSubmit={handleNewCommunication}>
                        <label>
                            Type:
                            <input
                                type="text"
                                value={newCommunication.type}
                                onChange={(e) => setNewCommunication({ ...newCommunication, type: e.target.value })}
                                placeholder="E.g., Email, Meeting"
                            />
                        </label>
                        <label>
                            Date:
                            <input
                                type="date"
                                value={newCommunication.date}
                                onChange={(e) => setNewCommunication({ ...newCommunication, date: e.target.value })}
                            />
                        </label>
                        <label>
                            Notes:
                            <textarea
                                value={newCommunication.notes}
                                onChange={(e) => setNewCommunication({ ...newCommunication, notes: e.target.value })}
                                placeholder="Add notes here"
                            />
                        </label>
                        <button type="submit">Log Communication</button>
                    </form>
                </div>

                <div className="logged-dates-container">
                    <h3>Logged Dates</h3>
                    <ul>
                        {calendarData.length ? (
                            [...new Set(calendarData.map((entry) => entry.date))].map((date, index) => (
                                <li key={index} style={{ color: getDateColor(date) }}>
                                    {date}
                                </li>
                            ))
                        ) : (
                            <p>No dates logged.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
