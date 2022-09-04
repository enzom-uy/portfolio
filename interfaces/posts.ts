export type Category = {
  title: 'Personal' | 'Showcase' | 'Just learned' | 'Achievement'
}

export type MainImage = {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export type Children = {
  _key: string
  _type: string
  text: string
  marks: Array<any>
}

export type Body = {
  _key: string
  _type: string
  style: 'normal' | 'h1'
  children: Array<Children>
  markDefs: Array<any>
}

export type Slug = {
  __type: 'slug'
  current: string
}

export type BasicInformation = {
  _id: string
  body: Array<Body>
  mainImage: MainImage
  slug: Slug
  title: string
}

export interface Post extends BasicInformation {
  categories: Array<Category> | undefined
}
