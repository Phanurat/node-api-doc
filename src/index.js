const express = require('express');
const mysql = require('mysql');

// สร้างแอพพลิเคชัน Express
const app = express();

// กำหนดการเชื่อมต่อกับ MySQL
const db = mysql.createConnection({
    host: 'db',  // ชื่อ service ของ MySQL ที่กำหนดใน docker-compose.yml
    user: 'root',
    password: '1111',
    database: 'db'
});

// เชื่อมต่อกับฐานข้อมูล MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// สร้าง route เบื้องต้น
app.get('/', (req, res) => {
    res.send('Hello, Node.js with MySQL on Docker!');
});

// รันเซิร์ฟเวอร์
const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
