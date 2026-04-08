let posts = require('../data/posts');


// index
const index = (req, res) => {
    let result = posts;

    if (req.query.tag) {
        result = posts.filter(post => post.tags.includes(req.query.tag));
    }

    res.json({ posts: result });
};


// show
const show = (req, res) => {
    const post = posts.find(post => post.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }

    res.json({ post });
};


// store
const store = (req, res) => {
    const newPost = {
        id: posts[posts.length - 1].id + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);
    console.log(posts);
    res.status(201).json({ post: newPost });
};


// update
const update = (req, res) => {
    const post = posts.find(post => post.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    res.json({ post });
};


// modify
const modify = (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
};


// destroy
const destroy = (req, res) => {
    const post = posts.find(post => post.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }

    posts = posts.filter(post => post.id !== parseInt(req.params.id));
    console.log(posts);
    res.status(204).send();
};


module.exports = { index, show, store, update, modify, destroy };