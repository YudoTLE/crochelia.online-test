import { defineField,defineType } from "sanity";

export default defineType({
    name:"link",
    title:"Link",
    type: 'object',
    fields:[
    defineField({
        name:"internalLink",
        title:"Internal Link",
        type:"reference",
        description:"Select pages for navigation",
        to: [{type: "page"},{type: 'post'}]
    }),
    defineField({
        name:"externalUrl",
        title:"External URL",
        type:"url",
        description:"Use fully qualified URLs for external link"
    }),
    ]
})