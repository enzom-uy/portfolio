import React, { useState } from 'react'
import { Field, Formik, FormikHelpers, FormikProps } from 'formik'
import SimpleContainer from 'components/containers/simple-container'
import { Button, FormLabel, Input } from '@chakra-ui/react'
import { authUser } from 'services/authUser'

interface FormValues {
  username: string
  password: string
}

const Login: React.FC = () => {
  const [authData, setAuthData] = useState<{
    authToken: string
    name: string
  }>()
  return (
    <SimpleContainer width="fit-content" position="relative">
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={async (
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          const userData = await authUser(values.username, values.password)
          setAuthData(userData)
          setSubmitting(false)
        }}
      >
        {(formik: FormikProps<FormValues>) => (
          <form onSubmit={formik.handleSubmit}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Field
              as={Input}
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              variant="filled"
              focusBorderColor="rgba( 255, 38, 135, 0.20 )"
            />

            <FormLabel htmlFor="password">Password</FormLabel>
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              variant="filled"
              focusBorderColor="rgba( 255, 38, 135, 0.20 )"
            />
            <Button type="submit" mt={4}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </SimpleContainer>
  )
}

export default Login
