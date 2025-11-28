import Database from "better-sqlite3";

const db = new Database('./data/db.sqlite3');

db.prepare('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, year DATE)').run();

export const getAll = () => db.prepare('SELECT * FROM books').all();

export const getById = (id) => db.prepare('SELECT * FROM books WHERE id = ?').get(id)

export const createBook = (title, author, year) => db.prepare('INSERT INTO books (title, author, year) VALUES (?, ?, ?)').run(title, author, year)

const books = [{title: "t1", author: "a1", year:"1900"}];