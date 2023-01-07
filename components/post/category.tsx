import { Tag } from '@chakra-ui/react'
import { Category } from 'interfaces/posts'
import { Tech } from 'interfaces/works'

const Category: React.FC<{ cat: Category | Tech }> = ({ cat }) => {
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
    <Tag
      key={title}
      color="whiteAlpha.800"
      p={1}
      bgColor={textColor}
      colorScheme="red"
      rounded="lg"
      width="min-content"
      whiteSpace="nowrap"
    >
      {title}
    </Tag>
  )
}

export default Category
