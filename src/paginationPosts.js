import { pagination } from './config.json'

export default (posts) => {
	// Get pagination info
	const COUNT = posts.length
	const LIMIT = pagination.limit
	const PAGE = Math.ceil(COUNT / LIMIT)
	
	const paginatedPosts = []
	// Iterate if page more than 1
	for (let i = 1; i <= PAGE; i++) {
		const arrOffset = LIMIT * i - LIMIT
		const arrLimit = LIMIT * i

		paginatedPosts.push([
			...posts
				// Get by offset position
				.filter((val, index) => {
					return index > (arrOffset - 1) && index <= (arrLimit - 1)
				})
		])
	}

	return PAGE == 1 ? [[...posts]] : paginatedPosts
}