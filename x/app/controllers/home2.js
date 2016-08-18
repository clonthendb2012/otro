var homeController = function (server){
	console.log('homeController listo 2');

	server.route('/')

		.get(function (req, res) {
			x = 'pancho';
			res.render('index', {x : x});
		});
};

module.exports = homeController;