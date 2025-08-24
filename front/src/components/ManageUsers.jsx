import React, { useEffect, useState } from "react";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    // Fetch all users
    const fetchUsers = async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/users");
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    };

    // Delete user
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            alert(data.message);
            fetchUsers(); // refresh list
        } catch (err) {
            console.error("Error deleting user:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Manage Users</h2>
            <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(u.id)} style={{ color: "red" }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
