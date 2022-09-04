import { Flex, Text, AspectRatio, Box } from '@chakra-ui/react'
import SimpleContainer from 'components/containers/simple-container'
import NextChakraImage from 'components/next-chakra-image'
import { Body, Category as CategoryType, MainImage } from 'interfaces/posts'
import { urlFor } from 'lib/sanity'
import Category from './category'

interface Props {
  categories: Array<CategoryType> | undefined
  mainImage: MainImage
  body: Body[]
  title: string
}

const PostCard: React.FC<Props> = ({ categories, mainImage, body, title }) => {
  return (
    <SimpleContainer as="article" display="flex" flexDir="column" gap={4}>
      <Flex alignItems="center" gap={4}>
        <Text as="h2" fontSize="2rem">
          {title}
        </Text>
        <Flex flexDir="column">
          {categories?.map((cat) => (
            <Category key={cat.title} cat={cat} />
          ))}
        </Flex>
      </Flex>

      <Box noOfLines={2} overflow="hidden" textOverflow="ellipsis">
        <Text>
          {body.map((thing) => thing.children.map((thing) => thing.text))}
        </Text>
      </Box>
      {mainImage && (
        <AspectRatio ratio={16 / 9}>
          <NextChakraImage
            src={urlFor(mainImage).url()}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
            rounded="lg"
          />
        </AspectRatio>
      )}
    </SimpleContainer>
  )
}

export default PostCard
