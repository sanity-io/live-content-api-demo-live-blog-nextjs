import { defineField, defineType } from "sanity";

export const post = defineType({
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}]
    })
  ]
}
)