var homeController = function (server){
	console.log('homeController listo');

	server.route('/')

		.get(function (req, res) {
			x = 'pepe';
			res.render('index', {x : x});
		});
};

module.exports = homeController;