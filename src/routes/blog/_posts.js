import all from '../../posts/**/*.md'
import { parse } from 'path'
import Prism from 'prismjs'

let rawPosts = all

const 	_slugify_strip_re = /[^\w\s-]/g;
const _slugify_hyphenate_re = /[-\s]+/g;
function slugify(s) {
	s = parse(s).name
  s = s.replace(_slugify_strip_re, '').trim().toLowerCase();
  s = s.replace(_slugify_hyphenate_re, '-');
  return s;
}

function dateFormat(date) {
	const d = new Date(date)
	const month = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ags', 'Sep', 'Oct', 'Nov', 'Dec']
	return `${d.getFullYear()}, ${d.getDate()} ${month[d.getMonth()]}`
}

const posts = []
export const metaOnly = []

// Sort by date
rawPosts = rawPosts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))

rawPosts.map(({ metadata, html, filename }) => {
  // required to be a valid content
  const { type, tags, date } = metadata
	// Set default tags if not defined
	metadata.tags = tags || ['uncategorized']
	// Format date
	metadata.date = dateFormat(date)

	// Decode html special character
	function decodeEntities(encodedString) {
		return encodedString
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
	}

	// Do highlight code
	const regexAll = /<pre><code (\w+)="(\w+)(.[^>]*)?">(.[^<]*)?<\/code><\/pre>/gis
	const regexOne = /<pre><code (\w+)="(\w+)(.[^>]*)?">(.[^<]*)?<\/code><\/pre>/
	const fences = html.match(regexAll)

	fences && fences.map(code => {
		const partData = code.match(regexOne)
		const highlighted = Prism.highlight(decodeEntities(partData[4]), Prism.languages[partData[2]], partData[2])
		const preModified = (html.replace(partData[4], highlighted)).replace(
			'<pre>',
			`<pre ${partData[1]}="${partData[3].trim(' ')}">`
		)
		html = preModified
	})

	if (type && date) {
		const slug = slugify(filename)
		
		// Exclude if post has "draft" frontmatter
		if (!metadata.draft) {
			posts.push({
        ...metadata,
        html,
        slug
      })

      // Push for meta-only version
      const quote = type === 'quote' ? { html } : {}
      const quick = type === 'quick' ? { html } : {}
			metaOnly.push({
				...metadata,
        slug,
        ...quote,
        ...quick
			})
		}
	}
})

export default posts