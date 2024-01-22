const express = require('express');
const path=require('path');
const app = express();
const port = 3000;

app.set('views','./views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/image', express.static(__dirname + 'public/image'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use(express.static(path.join(__dirname,'public')));


app.get("", (req, res) => {
    res.render('index');
})





app.listen(port, () => console.log(`listened on port ${port}`));