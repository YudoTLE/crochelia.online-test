import { defineField,defineType } from "sanity";

export const navigationType = defineType({
    name:"navigation",
    title:"Navigation",
    type: 'document',
    fields:[
    defineField({
        name:"title",
        title:"Title",
        type:"string"
    }),
    defineField({
        name:"navId",
        title:"Navigation Id",
        type:"slug"
    }),
    defineField({
        name:"items",
        title:"Navigation Items",
        type:"array",
        of:[{type:"navigationItem",title:"Navigation Item"}]
    })
    ]
})