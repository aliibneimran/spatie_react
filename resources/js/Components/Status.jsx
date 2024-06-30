import React, { useState } from "react";

const Status = ({ userId, initialStatus }) => {

    const [status, setStatus] = useState(initialStatus);

    const handleChange = async (event) => {
        const newStatus = event.target.checked ? 1 : 0;
        setStatus(newStatus);
        console.log("ID- ". newStatus);

        try {
            const response = await axios.put(`/changeStatus/${userId}`, {
                status: newStatus,
            });
            console.log("Status updated successfully:", response.data);

        } catch (error) {
            console.error("Failed to update status:", error);

            // Optionally revert the status in case of an error
            setStatus(initialStatus);
        }
    };

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                id={`statusSwitch-${userId}`}
                checked={status === 1}
                onChange={handleChange}
            />
            <label
                className="form-check-label"
                htmlFor={`statusSwitch-${userId}`}
            >
                {status === 1 ? "Active" : "Inactive"}
            </label>
        </div>
    );
};

export default Status;
