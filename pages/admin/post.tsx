import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import Editor from 'components/editor/editor'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { NewPostInputs, newPostSchema } from 'schemas/newPostSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChakraForm } from 'components/admin/login'

const Post: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm<NewPostInputs>({
    mode: 'onTouched',
    resolver: zodResolver(newPostSchema)
  })
  return (
    <Flex flexDir="column" gap={4}>
      <ChakraForm display="flex" flexDir="column" gap={4}>
        <FormControl isInvalid={!!errors.title?.message} isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            type="text"
            id="title"
            {...register('title')}
            placeholder="Título del post..."
          />
          <FormErrorMessage>
            {errors?.title?.message && errors?.title?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.thumbnail?.message} isRequired>
          <FormLabel htmlFor="thumbnail">Thumbnail</FormLabel>
          <Input
            type="text"
            id="thumbnail"
            {...register('thumbnail')}
            placeholder="https://i.imgur.com/..."
          />
          <FormErrorMessage>
            {errors?.thumbnail?.message && errors?.thumbnail?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Editor />
        </FormControl>
      </ChakraForm>
    </Flex>
  )
}

export default Post
