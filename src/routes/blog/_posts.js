// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		"title": 'Blogpost 1',
		"html": '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>',
		"slug": 'blogpost-1',
		"createdAt": '2020-06-22T04:36:26.000+00:00',
		"id": '1',
		"desc": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		"tag": 'general',
		"image": 'https://arepa.s3.amazonaws.com/blogpost-cover.png',
	},
	{
		"title": 'Blogpost 2',
		"html": '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>',
		"slug": 'blogpost-1',
		"createdAt": '2020-06-22T04:37:26.000+00:00',
		"id": '1',
		"desc": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		"tag": 'general',
		"image": 'https://arepa.s3.amazonaws.com/blogpost-cover.png',
	},
	{
		"title": 'Blogpost 3',
		"html": '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>',
		"slug": 'blogpost-1',
		"createdAt": '2020-06-22T04:38:26.000+00:00',
		"id": '1',
		"desc": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		"tag": 'general',
		"image": 'https://arepa.s3.amazonaws.com/blogpost-cover.png',
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
