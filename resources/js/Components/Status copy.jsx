import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "@inertiajs/react";

const Status = ({ userId, initialStatus }) => {
    // const { data, setData, post, processing, errors } = useForm({
    //     userId:  '',
    //     initialStatus: initialStatus || '',
    //     _method: 'put',
    // });

    // useEffect(() => {
    //     setData('userId', userId || '');
    //     setData('initialStatus', initialStatus || '');
    // }, [userId]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     post(route('changeStatus', userId), {
    //         forceFormData: true,
    //     });
    // };

    {
        /* <form >
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="status"
                    value={data.initialStatus}
                    onChange={(e) => setData('status', e.target.value)}
                />
                <button type='submit' className='btn btn-info btn-sm'>Active</button>
                <button type='submit' className='btn btn-info btn-sm'>{status === 1 ? 'Active' : 'Inactive'}</button>
            </form> */
    }

    const [status, setStatus] = useState(initialStatus);

    const handleChange = async (event) => {
        const newStatus = event.target.checked ? 1 : 0;
        setStatus(newStatus);

        try {
            const response = await axios.put(`/changeStatus/${userId}`, {
                status: newStatus,
            });
            console.log("Status updated successfully:", response.data);
            // console.log("Status updated successfully:", initialStatus);


            // Optionally handle success UI feedback
        } catch (error) {
            console.error("Failed to update status:", error);

            // Optionally revert the status in case of an error
            setStatus(initialStatus);
        }
    };

    useEffect(() => {
        { userId, initialStatus }
    }, []);

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                id={`statusSwitch-${userId}`}
                checked={status === 1}
                // {(status === 1) ? checked : "" }
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
