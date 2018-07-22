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

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('p', {}, this.props.description);
	}
});

var MoviePoster = React.createClass({
	propTypes: {
		url: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('img', {src: this.props.url});
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function() {
		debugger;
		console.log('Movie props: ' + JSON.stringify(this.props));
		return React.createElement('div', {}, 
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieDescription, {description: this.props.movie.desc}),
			React.createElement(MoviePoster, {url: this.props.movie.url})
		);
	}
});

var MovieList = React.createClass({
	propTypes: {
		moviesArray: React.PropTypes.array.isRequired
	},
	render: function() {
		var movies = this.props.moviesArray.map(function(item) {
			console.log(item.id);
			return React.createElement('li', {key: item.id}, 
				React.createElement(Movie, {movie: item})
			)
		});
		return React.createElement('ul', {}, movies);
	}
});

var movieList = React.createElement(MovieList, {moviesArray: movies});
ReactDOM.render(movieList, document.getElementById('app'));
