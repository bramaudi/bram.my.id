# bram.my.id

A blog template using Svelte with Sapper.

## Folder Structure

##### Posts content

Write posts or any other content inside `/src/posts` folder.

##### Static content

To serve a static content like assets is inside `/static` folder.

## Posts Frontmatter

- `type` (required) - Post type, have 3 option:
  1. *quick* - Quick post that have small / "quick" content to read
  2. *post* - A normal post like usual blog
  3. *quote* - Post a quote, not a blog post
- `title` (required) - An article title, this needed for *post* type only
- `date` (required) - Post date, recommended format is YYYY-MM-DD HH:MM:SS
- `summary` (required) - Only required for *post* type to display summary on post list
- `tags` (optional) - Return "uncategorized" on empty if it not *quote* type
- `draft` (optional) - Prevent post to be published, just give boolean `true` value to use