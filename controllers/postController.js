let posts = [
    {
        id: 1,
        title: 'Benvenuto al mio blog',
        content: 'Questo è il primo post del mio blog. Qui iniziamo il nostro viaggio.',
        image: '/images/post1.svg',
        tags: ['intro', 'welcome']
    },
    {
        id: 2,
        title: 'Imparare Express',
        content: 'Oggi vediamo come creare una semplice app con Express.',
        image: '/images/post2.svg',
        tags: ['node', 'express']
    },
    {
        id: 3,
        title: 'Gestire le rotte',
        content: 'Le rotte sono il cuore di una web app. /bacheca mostrerà i post.',
        image: '/images/post3.svg',
        tags: ['routing', 'http']
    },
    {
        id: 4,
        title: 'Asset Statici',
        content: 'Configuriamo `express.static()` per servire immagini e CSS.',
        image: '/images/post4.svg',
        tags: ['static', 'assets']
    },
    {
        id: 5,
        title: 'Prossimi passi',
        content: 'Aggiungeremo funzionalità come CRUD, template engine e persistenza.',
        image: '/images/post5.svg',
        tags: ['roadmap', 'features']
    }
];


const index = (req, res) => {
    res.json({ posts });
};


const show = (req, res) => {
    const post = posts.find(post => post.id === parseInt(req.params.id));

    if (post) {
        res.json({ post });
    } else {
        res.status(404).json({ error: 'Post non trovato' });
    }
};


const store = (req, res) => {
    res.send('Creazione di un nuovo post');
};


const update = (req, res) => {
    res.send(`Aggiornamento del post ${req.params.id}`);
};


const modify = (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
};


const destroy = (req, res) => {
    posts = posts.filter(post => post.id !== parseInt(req.params.id));
    res.send(`Cancellazione del post ${req.params.id}`);
};


module.exports = { index, show, store, update, modify, destroy };