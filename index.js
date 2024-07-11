// external imports
const express = require('express');
const multer = require('multer');

const app = express();

// file upload folder
const UPLOADS_FOLDER = './uploads/';

// prepare multer upload object
const upload = multer({
    dest: UPLOADS_FOLDER,
});


// application routes
app.post('/', upload.single('avater'), (req, res) => {
    res.send('File uploaded succesfully');
});

app.listen(3000, () => {
    console.log('App is listening at port 3000');
});