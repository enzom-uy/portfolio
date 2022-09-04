import { BasicInformation } from './posts'

export type Tech = {
  _id: string
  title:
    | 'Typescript'
    | 'Next'
    | 'Chakra'
    | 'Framer Motion'
    | 'Sanity.io'
    | 'Node'
    | 'Express'
    | 'React'
    | 'Tailwind'
    | 'Prisma'
    | 'MongoDB'
    | 'MySQL'
    | string
}

export interface Work extends BasicInformation {
  stack: Array<Tech>
  website: string
  repository: string
}
