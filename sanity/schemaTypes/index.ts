import { type SchemaTypeDefinition } from 'sanity'
import { navigationType } from './navigationType'
import navitemType from './objects/navitemType'
import link from './objects/link'
import { pageType } from './pageType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navigationType, pageType, postType, navitemType, link],
}
