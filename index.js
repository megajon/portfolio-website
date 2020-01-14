const express = require('express');
const keys = require('./config/keys');

const app = express();



if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets
  app.use(express.static('client/build'));
  // Express will serve index.html if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


