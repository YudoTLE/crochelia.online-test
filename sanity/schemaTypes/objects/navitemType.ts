import { defineField,defineType } from "sanity";

export default defineType({
    name:"navigationItem",
    title:"Navigation Item",
    type: 'object',
    fields:[
    defineField({
        name:"text",
        title:"Navigation Text",
        type:"string"
    }),
    defineField({
        name:"navigationItemUrl",
        title:"Navigation Item URL",
        type:"link"
    }),
    ]
})