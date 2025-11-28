import express from 'express';
import * as db from './util/db.js';
import cors from 'cors';


const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/books', (req, res) => {
    const books = db.getAll()
});

app.get('/books/:id', (req, res) => {
    const book = db.getById(req.params.id); 
    if(!book) {
        return res.status(404).json({error: "book not found"})
    }
})

app.post('/books', (req, res) => {
        const {title, author, year} = req.body;
        if(!title || !author || !year) {
            return res.status(400).json({error: "missing required data"});
        }
        const newBook = db.createBook(title, author, year);
        const book = db.getById(newBook, lastInsertRowId);
        res.status(201).json(book); })


app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})