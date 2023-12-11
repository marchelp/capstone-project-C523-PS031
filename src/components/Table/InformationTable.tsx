// InformationTable.tsx
import React, { useState, useEffect } from 'react'
import Button from '../Button'
import Buttons from '../Buttons'
import PillTag from '../PillTag'
import FormField from '../Form/Field'
import { Field, Form, Formik } from 'formik'
import { mdiTableSearch } from '@mdi/js'

const InformationTable = ({ filteredUsers, onSearch }) => {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const perPage = 5;

  useEffect(() => {
    setUsers(filteredUsers);
  }, [filteredUsers]);

  const usersPaginated = users.slice(perPage * currentPage, perPage * (currentPage + 1));
  const numPages = Math.ceil(users.length / perPage);
  const pagesList = [];

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i);
  }

  return (
    <>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={(values) => {
          setSearchTerm(values.search);
          onSearch(values);
        }}
      >
        <Form className="mb-4">
          <FormField icons={[mdiTableSearch]} isBorderless isTransparent>
            <Field name="search" placeholder="Cari Nama Pengunjung" />
          </FormField>
        </Form>
      </Formik>
      <div className="overflow-auto aside-scrollbars-light dark:aside-scrollbars-gray">
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th className="whitespace-nowrap">Lokasi Gunung</th>
              <th className="whitespace-nowrap">Tanggal Naik</th>
              <th className="whitespace-nowrap">Tanggal Turun</th>
              <th className="whitespace-nowrap">Jenis Sampah</th>
              <th className="whitespace-nowrap">Bukti Sampah</th>
              <th className="whitespace-nowrap">Bukti Registrasi</th>
              <th className="whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {usersPaginated.map((user) => (
              <tr key={user.id}>
                <td data-label="Nama" className="whitespace-nowrap">
                  {user.name}
                </td>
                <td data-label="Email" className="whitespace-nowrap">
                  {user.email}
                </td>
                <td data-label="Lokasi Gunung" className="whitespace-nowrap">
                  {user.lokasiGunung || '-'}
                </td>
                <td data-label="Tanggal Naik" className="lg:w-1 whitespace-nowrap">
                  <small className="text-gray-500 dark:text-slate-400">
                    {user.tanggalNaik || '-'}
                  </small>
                </td>
                <td data-label="Tanggal Turun" className="lg:w-1 whitespace-nowrap">
                  <small className="text-gray-500 dark:text-slate-400">
                    {user.tanggalTurun || '-'}
                  </small>
                </td>
                <td data-label="Jenis Sampah">{user.jenisSampah}</td>
                <td data-label="Bukti Sampah" className="whitespace-nowrap">
                  {user.buktiSampah}
                </td>
                <td data-label="Bukti Registrasi" className="whitespace-nowrap">
                  {user.buktiRegistrasi}
                </td>
                <td data-label="Status" className="lg:w-32 whitespace-nowrap">
                  {user.statusSampahBawaan ? (
                    <PillTag label="Aktif" color="success" />
                  ) : (
                    <PillTag label="Non-Aktif" color="danger" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
            <Buttons>
              {pagesList.map((page) => (
                <Button
                  key={page}
                  active={page === currentPage}
                  label={page + 1}
                  color={page === currentPage ? 'lightDark' : 'whiteDark'}
                  small
                  onClick={() => setCurrentPage(page)}
                />
              ))}
            </Buttons>
            <small className="mt-6 md:mt-0">
              Page {currentPage + 1} of {numPages || 1}
            </small>
          </div>
        </div>
      </div>
    </>
  )
}

export default InformationTable
