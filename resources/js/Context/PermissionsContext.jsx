// PermissionsContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const PermissionsContext = createContext();

export const PermissionsProvider = ({ children }) => {
    const [permissions, setPermissions] = useState([]);

    // Example: Fetch permissions on component mount
    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                const response = await fetch('/api/userdata');
                const data = await response.json();
                setPermissions(data); // Assuming data is an array of permissions
            } catch (error) {
                console.error('Error fetching permissions:', error);
            }
        };

        fetchPermissions();
    }, []);

    return (
        <PermissionsContext.Provider value={{ permissions }}>
            {children}
        </PermissionsContext.Provider>
    );
};

export const usePermissions = () => useContext(PermissionsContext);
