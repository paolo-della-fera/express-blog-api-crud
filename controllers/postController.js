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
    res.send('Creazione di un nuovo post');
};


// update
const update = (req, res) => {
    res.send(`Aggiornamento del post ${req.params.id}`);
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