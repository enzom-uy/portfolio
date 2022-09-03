import { getCookie } from 'cookies-next'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Login from '../../components/admin/login'

const Admin: NextPage = () => {
  return (
    <>
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
