import posts from './_posts.js';
import paginationPosts from '../../paginationPosts.js'

export function get(req, res, next) {
	const { tags } = req.params;
	const contents = posts.filter(post => post.type && post.type === 'post' || post.type === 'quick')
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	res.end(JSON.stringify(paginationPosts(contents)));
}
