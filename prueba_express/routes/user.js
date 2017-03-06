var express = require('express');
var router = express.Router();

router.get('/:usuario', function(req, res, next){
	res.render('index', { usuario: req.params.usuario });
	console.log(req.method);
	console.log(req.params);
	console.log(req.path);

})

module.exports = router;
