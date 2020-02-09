var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
const path = require('path');
const fs = require('fs')

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, 'resume.csv')
  }
})

var upload = multer({ storage: storage }).single('file');

app.post('/upload', function (req, res) {
  const path = __dirname + '/public/resume.csv';
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err)
      return
    }

    //file removed
  })

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)

  })

});

app.listen(8000, function () {

  console.log('App running on port 8000');

});