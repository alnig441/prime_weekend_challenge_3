var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
//router.get('/', function(req, res, next) {
//    res.sendFile(path.join(__dirname, '../models/deltaCohort.json'));
//});

router.get('/:id?', function(req, res, next){
    var id = req.params.id;
    var file = path.join(__dirname, '../models/deltaCohort.json');

    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            next(err);
        }else {
            var obj = JSON.parse(data);
            var student;
            obj.forEach(function(elem, index){
                if(index==id){
                    student = elem;
                }
            })
            res.json(student);
        }
    })
})

module.exports = router;