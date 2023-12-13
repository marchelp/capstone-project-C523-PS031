// pages/api/updateUser.js

import UserDataSource from '../../../public/data-sources/data-source';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      // Assuming your data source has a method to delete the user
      await UserDataSource.deleteUser(id);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
