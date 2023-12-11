import {
  mdiAccount,
  mdiBallotOutline,
  mdiMail,
  mdiMapMarkerRadius,
  mdiSortCalendarAscending,
  mdiSortCalendarDescending,
  mdiUpload,
} from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import CardBox from '../components/CardBox'
import FormField from '../components/Form/Field'
import FormFilePicker from '../components/Form/FilePicker'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'

const FormsPage = () => {
  const router = useRouter()

  // Access user data from query parameters
  const { name, email, lokasiGunung, tanggalNaik, tanggalTurun, jenisSampah } = router.query

  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiBallotOutline} title="Edit Data Pengunjung" main />

        <CardBox>
          <Formik
            initialValues={{
              name: name || '',
              email: email || '',
              lokasiGunung: lokasiGunung || '',
              tanggalNaik: tanggalNaik || '',
              tanggalTurun: tanggalTurun || '',
              jenisSampah: jenisSampah || '',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Nama" icons={[mdiAccount]}>
                <Field name="name" placeholder="Masukkan Nama" />
              </FormField>

              <FormField label="Email" icons={[mdiMail]}>
                <Field name="email" placeholder="Masukkan Email" />
              </FormField>

              <FormField label="Lokasi Gunung" icons={[mdiMapMarkerRadius]}>
                <Field name="lokasiGunung" placeholder="Masukkan Lokasi Gunung" />
              </FormField>

              <FormField>
                <FormField label="Tanggal Naik" icons={[mdiSortCalendarDescending]}>
                  <Field type="date" name="tanggalNaik" />
                </FormField>
                <FormField label="Tanggal Turun" icons={[mdiSortCalendarAscending]}>
                  <Field type="date" name="tanggalTurun" />
                </FormField>
              </FormField>

              {/* <FormField label="Sampah Bawaan">
                <Field name="jenisSampah" placeholder="Masukkan Jenis Sampah" />
              </FormField> */}

              <FormField label="Sampah Bawaan" labelFor="jenisSampah">
                <Field name="jenisSampah" id="jenisSampah" component="select">
                  <option value="Kertas">Sampah Kertas</option>
                  <option value="Plastik">Sampah Plastik</option>
                  <option value="Kaleng">Sampah Kaleng</option>
                </Field>
              </FormField>

              <FormField>
                <FormField label="Upload Bukti Sampah" help="PNG / JPEG > 5 MB">
                  <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
                </FormField>
                <FormField label="Upload Bukti Registrasi" help="PNG / JPEG > 5 MB">
                  <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
                </FormField>
              </FormField>

              <Buttons>
                <Button type="submit" color="info" label="Submit" />
                <Button type="reset" color="info" outline label="Reset" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  )
}

FormsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default FormsPage
