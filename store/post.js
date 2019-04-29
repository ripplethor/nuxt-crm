export const actions = {
	async fetchAdmin({ }) {
		return await new Promise(resolve => {
			setTimeout(() => {
				resolve([
					{ title: 'Post', date: new Date(), views: 21, comments: [1, 2], id: Math.random() },
					{ title: 'Post 1', date: new Date(), views: 52, comments: [1, 2, 3, 4, 5], id: Math.random() },
					{ title: 'Post 2', date: new Date(), views: 112, comments: [1, 2, 3, 4, 5, 6, 7, 8, 9], id: Math.random() }
				])
			})
		})
	}
}