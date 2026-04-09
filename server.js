const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const postsRouter = require('./routes/posts');

app.use(express.static(path.join(__dirname, 'public')));


// Register the body parts
app.use(express.json());


// Start the server
app.listen(PORT, () => {
    console.log(`Server del mio blog in ascolto sulla porta http://127.0.0.1:${PORT}`);
});


// Server entry point
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});


// 📌 Post CRUD
app.use('/posts', postsRouter);


// Middleware per rotte non registrate (404)
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint non trovato' });
});


// Middleware per gestione errori (500)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Errore interno del server' });
});