const express = require('express');
const { randomBytes } = require('crypto');

const app = express();
app.use(express.json());

// Vamos salvar em memórias os nossos posts criados
const posts = {};

app.get('/posts', (req, res) => {
  // Verifica se existem posts
  if (Object.keys(posts).length) {
    res.send(posts);
  }

  res.send('Não existem posts cadastrados!');
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  if (title) {
    posts[id] = {
      id, title
    };
  
    res.status(201).send(posts[id]);
  }

  res.status(400).send('Erro ao criar post. É preciso inserir um title.')
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});