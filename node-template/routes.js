// router
var Movie = require('./models/movie')
var _ = require('underscore')

module.exports = function(app) {
	app.locals.moment = require('moment')

	// 首页
	app.get('/', function(req, res) {
	  	Movie.fetch(function(err, movies) {
		    if (err) {
		     	console.log(err);
		    }

		    res.render('index', {
		      title: '首页',
		      movies: movies
		    })
	  	})
	})

	// 详情页
	app.get('/movie/:id', function(req, res) {
		var id = req.params.id

		Movie.findById(id, function(err, movie) {
		  	res.render('detail', {
			    title: movie.title + '后台更新页',
			    movie: movie
		 	})
		})
	})

	// 后台列表页
	app.get('/admin/list', function(req, res) {
		Movie.fetch(function(err, movies) {
			console.log(movies)
		    if (err) {
		     	console.log(err)
		    }

		    res.render('list', {
		      title: '列表页',
		      movies: movies
		    })
	  	})
	})

	// 后台录入页
	app.get('/admin/movie', function(req, res) {
	  	res.render('admin', {
		    title: '后台录入页',
		    movie: {
		        title: '',
			    address: '',
			    price: '',
			    language: '',
			    traffic: '',
			    peak: '',
			    summary: '',
			    flash: '',
			    poster: ''
			}
	  	})
	})

	// 更新
	app.get('/admin/update/:id', function(req, res) {
		var id = req.params.id

		if (id) {
			Movie.findById(id, function(err, movie) {
				if (err) {
					console.log(err)
				}

				res.render('admin', {
				    title: '后台更新页',
				    movie: movie
			  	})

			})
		}
	})

	// 新增 接口
	app.post('/admin/movie/new', function(req, res) {
		var id = req.body.movie._id
		var movieObj = req.body.movie
		var _movie

		if (id !== 'undefined') {
			Movie.findById(id, function(err, movie) {
				if (err) {
					console.log(err)
				}

				_movie = _.extend(movie, movieObj)
				_movie.save(function(err, movie) {
					if (err) {
						console.log(err)
					}

					res.redirct('/movie/') + movie._id
				})
			})
		}
		else {
			_movie = new Movie({
				title: movieObj.title,
				address: movieObj.address,
			    price: movieObj.price,
			    language: movieObj.language,
			    traffic: movieObj.traffic,
			    peak: movieObj.peak,
			    summary: movieObj.summary,
			    flash: movieObj.flash,
			    poster: movieObj.poster

			})

			_movie.save(function(err, movie) {
				if (err) {
					console.log(err)
				}

				res.redirct('/movie/') + movie._id
			})
		}
	})

	// 删除 接口
	app.delete('/admin/list', function(req, res) {
		var id = req.query.id
		if (id) {
			Movie.remove({_id: id}, function(err, movie) {
				if (err) console.log(err)
				else res.json({success: 1})
			})
		}
	})
	
}