import { pagination } from './config.json'

export default (posts) => {
	// Get pagination info
	const COUNT = posts.length
	const LIMIT = pagination.limit
	const PAGE = Math.ceil(COUNT / LIMIT)
	
	const paginatedPosts = []
	// Iterate if page more than 1
	for (let i = 0; i < PAGE; i++) {
		const arrayStart = LIMIT * i - LIMIT
		const arrayEnd = LIMIT * i

		paginatedPosts.push([
			...posts
				// Get by offset position
				.filter((val, index) => {
					return index > arrayStart && index <= arrayEnd
				})
		])
	}
	console.log()
	return PAGE == 1 ? [[...posts]] : paginatedPosts
}