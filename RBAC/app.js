const express = require('express');
const port = 3000;
const app = express();
const userRoutes = require('./routes/userRoutes');
// Middleware to parse JSON bodies
app.use(express.json());
// Use user routes
app.use('/api', userRoutes);    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


