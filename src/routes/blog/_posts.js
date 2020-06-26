import data from './_posts.json';
let posts = data;

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
