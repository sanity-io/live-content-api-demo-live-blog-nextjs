import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemaTypes/post'
import { schedule } from './schemaTypes/schedule'
import { speaker } from './schemaTypes/speaker'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,schedule,speaker],
}
