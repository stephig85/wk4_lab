var express = require('express');
var router = express.Router();
var Student = require('../models/student_model');

/* GET student listings. */
router.get('/', function(req, res, next) {
  console.log('GET works');
  Student.find({},'', function(err, students){
    console.log(students);
    if (err) console.error('Did not get users', err);

    res.json(students);
  });
});

// POST/create student listing
router.post('/', function(req, res, next){
  console.log('POST works');
  var postInfo = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    slack_handle: req.body.slack_handle
  };

  var newStudent = new Student(postInfo);

  newStudent.save(function(err, success){
    if (err) console.error(err);

    console.log('new student works');
    res.json({
      success: true
    });

  });
});

// PUT/update student listing
router.put('/', function(req, res, next){
  console.log('PUT works');

  var id = req.body.id;
  var updateInfo = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    slack_handle: req.body.slack_handle
  };

  Student.findByIdAndUpdate(id, updateInfo, function(err, student){
    if (err) console.error(err);

    res.json ({
      success: true
    });

  });
});

// DELETE student listing
router.delete('/', function(req, res, next){
  console.log('DELETE works');

  var deleteId = req.body._id;

  Student.findByIdAndRemove(deleteId, function(err, student){
    if (err) console.error(err);

  });


});


module.exports = router;
