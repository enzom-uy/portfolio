import { Flex, Text, AspectRatio, Box } from '@chakra-ui/react'
import SimpleContainer from 'components/containers/simple-container'
import NextChakraImage from 'components/next-chakra-image'
import { Body, Category as CategoryType, MainImage } from 'interfaces/posts'
import { Tech } from 'interfaces/works'
import { urlFor } from 'lib/sanity'
import Category from './post/category'

interface Props {
  categories?: Array<CategoryType> | undefined
  mainImage: MainImage
  body: Body[]
  title: string
  stack?: Tech[]
  repository?: string
  website?: string
}

const ArticleCard: React.FC<Props> = ({
  categories,
  mainImage,
  body,
  title
}) => {
  return (
    <SimpleContainer
      as="article"
      display="flex"
      flexDir="column"
      boxShadow="card-baseline"
      transitionProperty="all"
      transitionDuration="normal"
      _hover={{ transform: 'scale(1.03)' }}
      zIndex="99"
    >
      <Flex alignItems="center" gap={4}>
        <Text as="h2" fontSize="2rem" fontWeight="semibold">
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
        <AspectRatio ratio={16 / 9} mt={4}>
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

export default ArticleCard
