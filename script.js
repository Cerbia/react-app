var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		url: 'https://imgc.allpostersimages.com/img/print/poster/harry-potter-chamber-of-secrets-movie-poster_a-G-9843010-0.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		url: 'https://movieposters2.com/images/731769-b.jpg'
	},
	{
		id: 3,
		title: 'Star Wars',
		desc: 'film o galaktykach',
		url: 'https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SL1347_.jpg'
	},
	{
		id: 4,
		title: 'Pokemon',
		desc: 'film o pokemonach',
		url: 'http://cdn.shopify.com/s/files/1/0839/5903/products/882663124510_grande.jpg?v=1522254488'
	},
];

//nazwę klasy | propsy czyli właściwości danego elementu (wejścia) |dzieci elementu, czyli to co ma się znaleźć wewnątrz. Może to być zarówno tekst jak i kolejny ReactElement

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.url})
	);
});



var element = 
React.createElement('div', {}, 
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElements)
);





ReactDOM.render(element, document.getElementById('app'));






