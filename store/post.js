const posts = [
	{ title: 'Post 0', date: new Date(), views: 21, comments: [1, 2], id: 'id1' },
	{ title: 'Post 1', date: new Date(), views: 52, comments: [1, 2, 3, 4, 5], id: 'id2' },
	{ title: 'Post 2', date: new Date(), views: 112, comments: [1, 2, 3, 4, 5, 6, 7, 8, 9], id: 'id3' },
	{ title: 'Post 3', date: new Date(), views: 300, comments: [1, 2], id: 'id4' },
	{ title: 'Post 4', date: new Date(), views: 323, comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], id: 'id5' },
	{ title: 'Post 5', date: new Date(), views: 434, comments: [1, 2, 3, 4, 5, 6, 7, 8, 9], id: 'id6' }
]
export const actions = {
	async fetchAdmin({ }) {
		return await new Promise(resolve => {
			setTimeout(() => {
				resolve(posts)
			}, 1000)
		})
	},
	async remove({}, id){

	},
	async fetchAdminById({}, id){

		return await new Promise(resolve => {
			setTimeout(() => {
				resolve(posts.find(p => p.id === id))
			}, 1000)
		})
	}
}