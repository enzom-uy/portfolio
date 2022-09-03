import { getCookie } from 'cookies-next'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Login from '../../components/admin/login'
import Head from 'next/head'

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enzo Muñoz - Admin login</title>
      </Head>
      <Login />
    </>
  )
}

export default Admin

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const isAdmin = getCookie('user', { req, res })

  if (isAdmin) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin/dashboard'
      }
    }
  }
  return {
    props: {}
  }
}
