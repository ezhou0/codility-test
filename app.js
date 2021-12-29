// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = S.split('');
    let hash = new Map();
    let res = "";

    for(let i = 0; i < arr.length; i++){
        if(hash.get(arr[i])===undefined){
            hash.set(arr[i], true)
        }else{
            const value = hash.get(arr[i]);
            if(value){
                hash.set(arr[i], !value);
            }
        }
    }
    hash.forEach((v,k)=>{
        if(!v){
            res = k
        }
    });
    return res;
}

////////

import React from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';
import {useState, useEffect} from 'react'

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;


// the exported component can be either a function or a class

export default function Autocomplete() {
  const [items, setItems]  = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions]=useState([]);

  useEffect(()=> {
    const loadItems = async()=>{
      const res = await axios.get(ITEMS_API_URL);
      setItems(res.items)
    }
    loadItems();

  }, []);
  
  const onChange = (text) => {
      let matches = [];
      if(text.length > 0){
        matches = items.filter(item =>{
          const regex = new RegExp(`${text}`, "gi");
          return item.match(regex)
        })
      }
      setSuggestions(matches)
      setInput(text)
  }

  return (
    <div className="wrapper">
      <div className="control">
        <input type="text" className="input" 
          onChange={e => onChange(e.target.value)}
          value = {input}
        />
      </div>
      <div className="list is-hoverable" >
          {suggestions && suggestions.map((suggestion, i)=>
            <a key = {i} className='list-item'>{suggestion}
            </a>
          )}
      </div>
    </div>
  );
}
////////
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// These imports allow to find and save messages to the local database
const { findMessages, saveMessage } = require('./dbHelper');


app.use(bodyParser.json());
app.post('/messages', (req, res) => {
   console.log(req)
    return res.sendStatus(500);
});

app.get('/messages', (req, res) => {
    return res.sendStatus(500);
});

module.exports = app;