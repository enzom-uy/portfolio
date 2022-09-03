import React, { useState } from 'react'
import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { authUser } from 'services/authUser'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useUserReducer } from 'reducers/user-reducer'
import { AdminLoginInputs, adminLoginSchema } from '../../schemas/loginSchema'
import { useRouter } from 'next/router'

const ChakraForm = chakra('form')

const Login: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AdminLoginInputs>({
    mode: 'onTouched',
    resolver: zodResolver(adminLoginSchema)
  })
  const { login } = useUserReducer()
  const router = useRouter()

  const onSubmit = async (data: AdminLoginInputs) => {
    const username = data.username
    const password = data.password
    reset()
    console.log('check')

    const { authData, error } = await authUser(username, password)
    if (authData) {
      login(authData)
      router.push('/admin/dashboard')
    }
    if (error) {
      router.push('/')
    }
  }
  console.log(errors)

  return (
    <ChakraForm
      display="flex"
      flexDir="column"
      gap={4}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors?.username?.message}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input type="text" id="username" {...register('username')} />
        <FormErrorMessage>
          {errors?.username && errors?.username?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors?.password?.message}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" id="password" {...register('password')} />

        {errors?.password && errors?.password?.message}
      </FormControl>
      <Button type="submit" colorScheme="green" isLoading={isSubmitting}>
        Login
      </Button>
    </ChakraForm>
  )
}

export default Login
