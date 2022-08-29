import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import morgan from 'morgan';
import Layout from './components/Layout';
import { Post } from './db/models';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const allPosts = await Post.findAll();
  const initState = { allPosts };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.post('/message', async (req, res) => {
  try {
    await Post.create(req.body);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

app.get('/message/:id', async (req, res) => {
  const { id } = req.params;
  const onePost = await Post.findByPk(id);
  const initState = { onePost };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(3000, () => console.log('Server has started on port 3000'));
