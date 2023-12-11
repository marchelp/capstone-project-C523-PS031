import axios from 'axios';

class UserDataSource {
    static baseUrl = 'http://localhost:4000'; // Sesuaikan dengan URL backend Anda

    static getAllUsers() {
        return axios
            .get(`${UserDataSource.baseUrl}/users`)
            .then((response) => response.data)
            .catch((error) => {
                console.error('Error fetching users:', error);
                throw error;
            });
    }

    static getUserById(userId) {
        return axios
            .get(`${UserDataSource.baseUrl}/users/${userId}`)
            .then((response) => response.data)
            .catch((error) => {
                console.error(`Error fetching user with id ${userId}:`, error);
                throw error;
            });
    }

    static addUser(user) {
        return axios
            .post(`${UserDataSource.baseUrl}/signup`, user)
            .then((response) => response.data)
            .catch((error) => {
                console.error('Error adding user:', error);
                throw error;
            });
    }

    static updateUser(userId, updatedUser) {
        return axios
            .patch(`${UserDataSource.baseUrl}/users/${userId}`, updatedUser)
            .then((response) => response.data)
            .catch((error) => {
                console.error(`Error updating user with id ${userId}:`, error);
                throw error;
            });
    }

    static deleteUser(userId) {
        return axios
            .delete(`${UserDataSource.baseUrl}/users/${userId}`)
            .then((response) => response.data)
            .catch((error) => {
                console.error(`Error deleting user with id ${userId}:`, error);
                throw error;
            });
    }
}

export default UserDataSource;
