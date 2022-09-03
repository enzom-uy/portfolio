import { Text } from '@chakra-ui/react'
import { Category } from 'interfaces/posts'

const Category: React.FC<{ cat: Category }> = ({ cat }) => {
  const { title } = cat
  const personal = title === 'Personal'
  const showcase = title === 'Showcase'
  const achievement = title === 'Achievement'
  const justLearned = title === 'Just learned'
  const textColor = personal
    ? 'blue.700'
    : showcase
    ? 'red.700'
    : achievement
    ? 'yellow.700'
    : justLearned
    ? 'green.700'
    : undefined
  return (
    <Text
      key={title}
      color="whiteAlpha.800"
      p={1}
      bgColor={textColor}
      rounded="lg"
    >
      {title}
    </Text>
  )
}

export default Category
