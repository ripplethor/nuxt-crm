export const actions = {
	async fetchAdmin({ }) {
		return await new Promise(resolve => {
			setTimeout(() => {
				resolve([
					{ title: 'Post 0', date: new Date(), views: 21, comments: [1, 2], id: 'id1' },
					{ title: 'Post 1', date: new Date(), views: 52, comments: [1, 2, 3, 4, 5], id: 'id2' },
					{ title: 'Post 2', date: new Date(), views: 112, comments: [1, 2, 3, 4, 5, 6, 7, 8, 9], id: 'id3' },
					{ title: 'Post 3', date: new Date(), views: 222, comments: [1, 2], id: 'id4' },
					{ title: 'Post 4', date: new Date(), views: 266, comments: [1, 2, 3, 4, 5], id: 'id5' },
					{ title: 'Post 5', date: new Date(), views: 302, comments: [1, 2, 3, 4, 5, 6, 7, 8, 9], id: 'id6' }
				])
			})
		})
	}
}