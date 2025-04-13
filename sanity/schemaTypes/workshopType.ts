import { defineField, defineType } from 'sanity';
import { CalendarIcon } from '@sanity/icons'
import { format } from "date-fns";
import { enGB } from 'date-fns/locale'

export const workshopType = defineType({
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  preview: {
    select: {
      name: 'name',
      date: 'date',
      location: 'location',
      image: 'image'
    },
    prepare: ({ name, date, location, image }) => {
      return {
        title: name,
        subtitle: `${ format(date, "EEEE, do MMMM yyyy", { locale: enGB }) } – ${ location }`,
        media: image || CalendarIcon
      }
    }
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'url',
    }),
  ],
});