const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));  // Serve HTML, CSS, JS from current folder

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prasad@2664',
    database: 'university_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Database connected successfully');
});

// Route to handle admission form submission
app.post('/api/admission', (req, res) => {
    const {
        fullName, email, phone, dob, gender, address,
        collegename, application_id, degree, course, personalStatement
    } = req.body;

    const query = `
        INSERT INTO admission_forms (
            fullName, email, phone, dob, gender, address,
            collegename, application_id, degree, courses, personalStatement
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [fullName, email, phone, dob, gender, address, collegename, application_id, degree, course, personalStatement],
        (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                return res.status(500).send({ message: 'Database error' });
            }
            res.send({ message: 'Application submitted successfully!' });
        }
    );
});

// Route to handle education info submission
app.post('/api/education', (req, res) => {
    const { school, tenthPercentage, twelfthPercentage, regId } = req.body;

    const sql = `
        INSERT INTO education_info (
            school, tenthPercentage, twelfthPercentage, regId
        ) VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [school, tenthPercentage, twelfthPercentage, regId], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Error inserting data' });
        }

        res.status(200).json({ message: 'Data inserted successfully' });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
