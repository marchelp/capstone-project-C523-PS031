// pages/api/updateUser.js

import UserDataSource from '../../../public/data-sources/data-source';

export default async function handler(req, res) {
  if (req.method === 'PATCH') {
    const { id } = req.body;
    const { statusSampahBawaan } = req.body;

    try {
      // Assuming your data source has a method to update the user status
      await UserDataSource.updateStatus(id, statusSampahBawaan);
      res.status(200).json({ message: 'User status updated successfully' });
    } catch (error) {
      console.error(`Error updating user status with id ${id}:`, error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
