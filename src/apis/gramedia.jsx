import axios from "axios";

// Di sini kita membuat instance dari axios
const gramedia = axios.create({
  baseURL: "https://laravel-books-db.herokuapp.com/api",
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
    Accept: "application/json",
  },
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    Language: "en",
    Page: "1",
  },
});

const gramediaLokal = axios.create({
  baseURL: "https://laravel-books-db.herokuapp.com/api",
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
    Accept: "application/json",
  },
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    Language: "id",
    Page: "1",
  },
});

const gramediaAll = axios.create({
  baseURL: "https://laravel-books-db.herokuapp.com/api",
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
    Accept: "application/json",
  },
});

const gramediaKeyword = axios.create({
  baseURL: "https://laravel-books-db.herokuapp.com/api",
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
    Accept: "application/json",
  },
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    keyword: "",
  },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export { gramedia, gramediaLokal, gramediaAll, gramediaKeyword };
