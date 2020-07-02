# bram.my.id

A blog template using Svelte with Sapper.

## Folder Structure

##### Posts content

Write posts or any other content inside `/src/posts` folder.

##### Static content

To serve a static content like assets is inside `/static` folder.

## Posts Frontmatter

- type | required : [quick, quote, default: post]
- title | required : string
- date | required : 2020-07-02 09:04:29
- tags | optional : [uncategorized]
- draft | optional : boolean
- summary | required if type = post