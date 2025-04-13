import { defineField, defineType } from 'sanity';
import { CaseIcon } from '@sanity/icons'
import { format } from "date-fns";
import { enGB } from 'date-fns/locale'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  preview: {
    select: {
      name: 'name',
      description: 'description',
      image: 'image',
    },
    prepare: ({ name, description, image }) => {
      return {
        title: name,
        subtitle: description?.[0]?.children?.[0]?.text || 'No description',
        media: image || CaseIcon,
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
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [
        {
          name: 'options',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Color Name',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'Leave empty to use the main image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'url',
    }),
  ],
});