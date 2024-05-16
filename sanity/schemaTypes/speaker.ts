import { defineField, defineType } from "sanity";

export const speaker = defineType({
  name: 'speaker',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'photo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title'
    }
  },
})