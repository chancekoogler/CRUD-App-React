const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '#nioxus77',
    database: 'productSystem'

})

app.get('', (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) {
            console.log(err)

        } else {
            res.send(result)
        }
    })
})

app.post('/add', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const image = req.body.image
    const price = req.body.price
    const likes = req.body.likes


    db.query('INSERT INTO products (title, description, image, price) VALUES (?,?,?,?)', [title, description, image, price], 
    (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Values Inserted")
        }

    })
})


app.listen(3001, () => {
    console.log("Connected")
})

