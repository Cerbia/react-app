'use strict';

var movies = [{
	id: 1,
	title: 'Harry Potter',
	desc: 'film o czarodzieju',
	url: 'https://imgc.allpostersimages.com/img/print/poster/harry-potter-chamber-of-secrets-movie-poster_a-G-9843010-0.jpg'
}, {
	id: 2,
	title: 'Król Lew',
	desc: 'Film o królu sawanny',
	url: 'https://movieposters2.com/images/731769-b.jpg'
}, {
	id: 3,
	title: 'Star Wars',
	desc: 'film o galaktykach',
	url: 'https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SL1347_.jpg'
}, {
	id: 4,
	title: 'Pokemon',
	desc: 'film o pokemonach',
	url: 'http://cdn.shopify.com/s/files/1/0839/5903/products/882663124510_grande.jpg?v=1522254488'
}];

//nazwę klasy | propsy czyli właściwości danego elementu (wejścia) |dzieci elementu, czyli to co ma się znaleźć wewnątrz. Może to być zarówno tekst jak i kolejny ReactElement

/*
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
*/

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render: function render() {
		//console.log('title: ' + typeof(this.props.title));
		return React.createElement('h2', {}, this.props.title);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.string.isRequired
	},
	render: function render() {
		return React.createElement('p', {}, this.props.description);
	}
});

var MoviePoster = React.createClass({
	propTypes: {
		url: React.PropTypes.string.isRequired
	},
	render: function render() {
		return React.createElement('img', { src: this.props.url });
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function render() {
		debugger;
		//console.log('Movie props: ' + JSON.stringify(this.props));
		return React.createElement('div', {}, React.createElement(MovieTitle, { title: this.props.movie.title }), React.createElement(MovieDescription, { description: this.props.movie.desc }), React.createElement(MoviePoster, { url: this.props.movie.url }));
	}
});

var MovieList = React.createClass({
	propTypes: {
		moviesArray: React.PropTypes.array.isRequired
	},
	render: function render() {
		//console.log('movie from list: ' + JSON.stringify(this.props))

		return React.createElement('ul', {}, this.props.moviesArray.map(function (item) {
			//console.log('item: ' + JSON.stringify(item));
			//console.log(item.id);

			React.createElement('li', { key: item.id }, React.createElement(Movie, { movie: JSON.stringify(item) }));
		}));

		/*
  		return this.props.moviesArray.map(function(item) {
  			//console.log('item: ' + JSON.stringify(item));
  			debugger
  			React.createElement('li', {key: item.id}, 
  				React.createElement(Movie, {movie: item})
  			);
  		});
  */

		// return React.createElement('li', {key: this.props.movie.id}, 
		// 	React.createElement(Movie, {movie: this.props.movie})
		// );
	}
});

// function TodoList({ items }) {
//     return items.map(item => (
//         <h1>{item.name}</h1>
//     ));
// }

// var movieListElement = movies.map(function(movieItem) {
// 	return React.createElement(MovieList, {movie: movieItem});
// });

/*
var movieList = React.createElement(MovieList, {moviesArray: movies}, Movie);
console.log(movieList);
ReactDOM.render(movieList, document.getElementById('app'));

//--------

var GalleryItem = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired
	},

	render: function(){
		return React.createElement('div', {}, 
			React.createElement('h2', {}, this.props.image.name),
			React.createElement('img', {src: this.props.image.src})
		);
	}
});

var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};


var element2 = React.createElement(GalleryItem, {image: image});
console.log(element2);
ReactDOM.render(element2, document.getElementById('app'));


*/
