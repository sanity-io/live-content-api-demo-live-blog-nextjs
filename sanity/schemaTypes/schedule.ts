import { defineField, defineType } from "sanity";

export const schedule = defineType({
  name: 'schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'start',
      type: 'datetime'
    }),
    defineField({
      name: 'end',
      type: 'datetime'
    }),
  ],
  orderings: [
    {
      title: "Start time",
      name: "startTime",
      by: [
        {field: "start", direction: "desc"}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      start: 'start',
      end: 'end'
    },
    prepare({title, start, end}) {
      let startTime = new Date(start).toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
      })
      let endTime = new Date(end).toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
      })
      return {
        title,
        subtitle: `${startTime} – ${endTime}`
      }
    }
  }
})