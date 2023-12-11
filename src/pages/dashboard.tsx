// DashboardPage.tsx
import {
  mdiAccountMultiple,
  mdiChartTimelineVariant,
  mdiDeleteRestore,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import UserDataSource from '../../public/data-sources/data-source'
import type { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBoxWidget from '../components/CardBox/Widget'
import CardBox from '../components/CardBox'
import { getPageTitle } from '../config'
import InformationTable from '../components/Table/InformationTable'

const DashboardPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    UserDataSource.getAllUsers()
      .then((data) => {
        setUsers(data);
        filterUsers(data, searchTerm);
      })
      .catch((error) => console.error('Error fetching users:', error))
  }, [searchTerm]);

  const filterUsers = (users, term) => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleSearch = (values) => {
    setSearchTerm(values.search);
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title="Ringkasan"
          main
        ></SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            icon={mdiAccountMultiple}
            iconColor="info"
            number={filteredUsers.length}
            label="Total Pengunjung"
          />
          <CardBoxWidget
            icon={mdiAccountMultiple}
            iconColor="warning"
            number={filteredUsers.filter((user) => user.statusSampahBawaan).length}
            label="Pengunjung Masuk"
          />
          <CardBoxWidget
            icon={mdiAccountMultiple}
            iconColor="danger"
            number={filteredUsers.filter((user) => !user.statusSampahBawaan).length}
            label="Pengunjung Keluar"
          />
        </div>

        <SectionTitleLineWithButton icon={mdiDeleteRestore} title="Tabel Informasi Setor Sampah" />

        <CardBox hasTable>
          <InformationTable filteredUsers={filteredUsers} onSearch={handleSearch} />
        </CardBox>
      </SectionMain>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
