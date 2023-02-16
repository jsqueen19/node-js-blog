const express = require('express');
let blogs = require('./db.json');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/getblogs', (req, res) => {
    res.render('blogs', { blogs });
});

app.get('/blog', (req, res) => {
    const id = req.query.id;

    let blog = null;

    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].id == id) {
            blog = blogs[i];
        }
    }

    console.log(blog)
    // blog = blogs.filter(blog => blog.id ==id)[0];

    res.render('blog', { blog });
});

app.post('/addblog', (req, res) => {

})

app.delete('/deleteblog', (req, res) => {
const id = Number.parseInt(req.query.id);

blogs = blogs.filter(blog => blog.id !== id);

res.status(200).json({})

})

app.get('/addBlog', (req, res)=>{
    res.render('addBlog');
})

app.post('/addBlog', (req,res) => {
    const payload = req.body;
    blogs.push(req.body)
    res.status(200).json({message:"welcome to my blog"})
})

app.patch('/updateblog', (req, res) => {

})

app.listen(3000, () => {
    console.log('App is live at http://localhost:3000')
})