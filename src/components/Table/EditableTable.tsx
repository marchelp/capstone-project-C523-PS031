import { mdiCheckBold, mdiCloseThick, mdiPencil, mdiTrashCan, mdiTableSearch } from '@mdi/js'
import React, { useState, useEffect } from 'react'
import UserDataSource from '../../../public/data-sources/data-source'
import { useRouter } from 'next/router'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'
import PillTag from '../PillTag'
import FormField from '../Form/Field'
import { Field, Form, Formik } from 'formik'

const EditableTable = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const perPage = 5

  const [currentPage, setCurrentPage] = useState(0)

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const usersPaginated = filteredUsers.slice(perPage * currentPage, perPage * (currentPage + 1))

  const numPages = Math.ceil(filteredUsers.length / perPage)

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  useEffect(() => {
    UserDataSource.getAllUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error))
  }, [])

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)

  const [userIdToDelete, setUserIdToDelete] = useState(null)

  const handleModalAction = () => {
    setIsModalInfoActive(false)
    setIsModalTrashActive(false)
    setUserIdToDelete(null)
  }

  const router = useRouter()

  const handleButtonClick = (userData) => {
    router.push({
      pathname: '/forms',
      query: { ...userData },
    })
  }

  const setStatusToActive = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, statusSampahBawaan: 1 } : user))
    )
  }

  const setStatusToInactive = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, statusSampahBawaan: 0 } : user))
    )
  }

  const [userToChangeStatus, setUserToChangeStatus] = useState(null)
  const [newStatus, setNewStatus] = useState(null)

  const handleStatusChange = () => {
    if (userToChangeStatus && newStatus !== null) {
      if (newStatus === 1) {
        setStatusToActive(userToChangeStatus.id)
      } else {
        setStatusToInactive(userToChangeStatus.id)
      }
      setIsModalInfoActive(false)
    }
  }

  const handleEditStatus = (user, status) => {
    setUserToChangeStatus(user)
    setNewStatus(status)
    setIsModalInfoActive(true)
  }

  const handleDeleteUser = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userIdToDelete))
    handleModalAction()
  }

  return (
    <>
      <CardBoxModal
        title={newStatus === 1 ? 'Aktifkan Status' : 'Non-Aktifkan Status'}
        buttonColor="info"
        buttonLabel="Confirm"
        isActive={isModalInfoActive}
        onConfirm={handleStatusChange}
        onCancel={handleModalAction}
      >
        <p>
          Apakah anda yakin ingin <b>{newStatus === 1 ? 'mengaktifkan' : 'menon-aktifkan'}</b>{' '}
          status pengunjung?
        </p>
        <p>Status yang diubah tidak dapat dikembalikan</p>
      </CardBoxModal>

      <CardBoxModal
        title="Menghapus Data"
        buttonColor="danger"
        buttonLabel="Confirm"
        isActive={isModalTrashActive}
        onConfirm={handleDeleteUser}
        onCancel={handleModalAction}
      >
        <p>
          Apakah anda yakin ingin <b> menghapus </b> data pengunjung?
        </p>
        <p>Data yang dihapus tidak dapat dikembalikan</p>
      </CardBoxModal>

      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={(values) => {
          setSearchTerm(values.search)
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
              {/* <th className="whitespace-nowrap">Sampah Plastik</th>
              <th className="whitespace-nowrap">Sampah Kaleng</th> */}
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
                {/* <td data-label="Sampah Plastik">{client.city}</td>
                <td data-label="Sampah Kaleng">{client.city}</td> */}
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
                <td className="before:hidden lg:w-1 whitespace-nowrap">
                  <Buttons type="justify-start lg:justify-end" noWrap>
                    <Button
                      color="warning"
                      icon={mdiPencil}
                      onClick={() => handleButtonClick(user)}
                      small
                    />
                    <Button
                      color={'success'}
                      icon={mdiCheckBold}
                      onClick={() => handleEditStatus(user, 1)}
                      small
                      disabled={user.statusSampahBawaan}
                    />
                    <Button
                      color="danger"
                      icon={mdiCloseThick}
                      onClick={() => handleEditStatus(user, 0)}
                      small
                      disabled={!user.statusSampahBawaan}
                    />
                    <Button
                      color="info"
                      icon={mdiTrashCan}
                      onClick={() => {
                        setUserIdToDelete(user.id)
                        setIsModalTrashActive(true)
                      }}
                      small
                    />
                  </Buttons>
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

export default EditableTable
