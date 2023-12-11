// pages/api/updateUser.js

import UserDataSource from '../../../public/data-sources/data-source';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id, name, email, lokasiGunung, tanggalNaik, tanggalTurun, jenisSampah } = req.body;

  try {
    // Assuming your data source has a method to update the user
    const updatedUser = await UserDataSource.updateUser({
      id,
      name,
      email,
      lokasiGunung,
      tanggalNaik,
      tanggalTurun,
      jenisSampah,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
