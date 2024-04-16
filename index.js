const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demodatabase'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email } = req.body;

    // Insert data into MySQL table
    const sql = 'INSERT INTO contacts (name, email) VALUES (?, ?)';
    connection.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL: ' + err.stack);
            res.status(500).json({ error: 'Error saving contact' });
        } else {
            console.log('Contact saved successfully');
            res.status(200).json({ message: 'Contact saved successfully' });
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
