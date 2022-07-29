import React from 'react'
import {
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
  useFormik
} from 'formik'
import SimpleContainer from 'components/containers/simple-container'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

interface FormValues {
  username: string
  password: string
}

const Login: React.FC = () => {
  return (
    <SimpleContainer>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setTimeout(() => {
            console.log('Submitted', JSON.stringify(values, null, 1))
            setSubmitting(false)
          }, 500)
        }}
      >
        {(formik: FormikProps<FormValues>) => (
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
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
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        )}
      </Formik>
    </SimpleContainer>
  )
}

export default Login
