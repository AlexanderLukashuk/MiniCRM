const baseUrl = 'http://localhost:5084/api';

export const login = async (credentials) => {
    try {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const getEmployees = async () => {
    try {
        const response = await fetch(`${baseUrl}/employees`);

        if (!response.ok) {
            throw new Error('Failed to fetch employees');
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error('Error during fetching employees:', error);
        throw error;
    }
};

export const getEmployeeTasks = async (employeeId) => {
    try {
        const response = await fetch(`${baseUrl}/employee/${employeeId}/tasks`);

        if (!response.ok) {
            throw new Error('Failed to fetch employee tasks');
        }

        const data  = await response.json();
        return data;
    } catch (error) {
        console.error('Error during fetching employee tasks:', error);
        throw error;
    }
};

export const getOverdueTasks = async () => {
    try {
        const response = await fetch(`${baseUrl}/tasks/overdue`);

        if (!response.ok) {
            throw new Error('Failed to fetch overdue tasks');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during fetching overdue tasks:', error);
        throw error;
    }
}