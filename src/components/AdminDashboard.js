import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [reservations, setReservations] = useState([]);
    const [editReservation, setEditReservation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('/reservations');
            console.log('Fetched reservations:', response.data); // Log fetched data
            setReservations(response.data);
        } catch (err) {
            console.error('Error fetching reservations:', err);
            setError('Error fetching reservations');
        }
    };

    const handleEditClick = (reservation) => {
        setEditReservation(reservation);
    };

    const handleUpdateReservation = async (updatedReservation) => {
        try {
            await axios.put(`/reservations/${updatedReservation._id}`, updatedReservation);
            setEditReservation(null);
            fetchReservations();
        } catch (err) {
            setError('Error updating reservation');
        }
    };

    const handleDeleteReservation = async (reservationId) => {
        try {
            await axios.delete(`/reservations/${reservationId}`);
            fetchReservations();
        } catch (err) {
            setError('Error deleting reservation');
        }
    };

    return (
        <div>
            <h1 className="tb mt-5">Admin Dashboard</h1>
            {error && <p className="error">{error}</p>}
            {editReservation ? (
                <EditReservationForm
                    reservation={editReservation}
                    onUpdate={handleUpdateReservation}
                    onCancel={() => setEditReservation(null)}
                />
            ) : (
                <ReservationList
                    reservations={reservations}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteReservation}
                />
            )}
        </div>
    );
}

function ReservationList({ reservations, onEdit, onDelete }) {
    return (
        <div>
            <h2 className="tb">Reservations</h2>
            <div className="d-flex flex-row justify-content-center">
            <table className="table table-bordered table-striped mt-3 asas">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation._id}>
                            <td>{reservation._id}</td>
                            <td>{reservation.fname} {reservation.lname}</td>
                            <td>{reservation.resDate}</td>
                            <td>{reservation.timeFrame}</td>
                            <td>
                                <button onClick={() => onEdit(reservation)} className="btn btn-outline-warning mx-2">Edit</button>
                                <button onClick={() => onDelete(reservation._id)} className="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div> 
        </div>
    );
}

function EditReservationForm({ reservation, onUpdate, onCancel }) {
    const [formData, setFormData] = useState({ ...reservation });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <div>
            <h2 className="tb mt-4">Edit Reservation</h2>
            <div className="d-flex flex-row  justify-content-center">
            <form onSubmit={handleSubmit} className="cara">
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        className="pranava"
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        className="pranava"
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="resDate"
                        value={formData.resDate}
                        onChange={handleChange}
                        className="pranava"
                    />
                </div>
                <div>
                    <label>Time</label>
                    <input
                        type="text"
                        name="timeFrame"
                        value={formData.timeFrame}
                        onChange={handleChange}
                        className="pranava"
                    />
                </div>
                <button type="submit" className="btn btn-outline-warning mx-2">Update</button>
                <button type="button" onClick={onCancel} className="btn btn-outline-danger">Cancel</button>
            </form>
            </div> 
        </div>
    );
}

export default AdminDashboard;
