import express from 'express';
import mongoose from 'mongoose';
import connectDB from './models/db.js';
import Url from './models/shorturl.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Helper to generate a random shortcode
function generateShortcode(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Get all short URLs (API)
app.get('/shorturls', async (req, res) => {
  const urls = await Url.find();
  res.json(urls);
});

// Create a new short URL (API)
app.post('/shorturls', async (req, res) => {
  let inputUrl = req.body.url;
  if (!inputUrl) return res.status(400).json({ error: 'Missing url field' });
  if (!/^https?:\/\//i.test(inputUrl)) {
    inputUrl = 'http://' + inputUrl;
  }
  const shortcode = generateShortcode();
  const doc = await Url.create({ full: inputUrl, short: shortcode });
  res.status(201).json(doc);
});

// Redirect to the original URL
app.get('/:short', async (req, res) => {
  const url = await Url.findOne({ short: req.params.short });
  if (!url) return res.sendStatus(404);
  res.redirect(url.full);
});

// Delete a short URL (API)
app.delete('/shorturls/:id', async (req, res) => {
  const deleted = await Url.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json({ success: true });
});



  app.listen(process.env.PORT, () => {
    connectDB()   
    console.log(`Server running on ${process.env.PORT}`);
  });


