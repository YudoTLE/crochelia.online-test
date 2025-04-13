import { type SchemaTypeDefinition } from 'sanity'
import { workshopType } from './workshopType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    workshopType,
    productType,
  ],
}
