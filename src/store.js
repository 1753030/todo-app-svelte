import axios from 'axios';
import { writable } from 'svelte/store';
import { localStore } from './localStore.js';

// const initialTodos = [
//     { id: 1, title: "Pay Bills", is_done: true },
//     { id: 2, title: "Learn ReactJS", is_done: false },
//     { id: 3, title: "Learn NodeJS Express", is_done: false },
//     { id: 4, title: "Learn PassportJS", is_done: false },
//     { id: 5, title: "Complete Final Project", is_done: false },
//     { id: 6, title: "Have Dinner", is_done: true },
// ];


// sử dụng axios
axios.get('http://localhost:2020/todos').then(response => {
  console.log(response);
});

// export const todos = localStore('mdn-svelte-todo', initialTodos);
export const todos = writable(initialTodos);