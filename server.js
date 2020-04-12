const express = require('express'),
      connectDB = require('./config/db');

const app = express();

//Cnnect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.send("API RUNNING"));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profiles'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));