# Javascript30 Local Storage

* Wes Bos Youtube Tutorial: [How LocalStorage and Event Delegation work. #JavaScript30 15/30](https://www.youtube.com/watch?v=YL1F4dCUlLc&index=15&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH).

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Tutorial using a restaurant menu list to explain how HTML local storage works using key-value strings.

## Screenshots

![Example screenshot](./img/storage.png).

## Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
* [HTML local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## Code Examples

* Code to add item to local storage

```javascript
function addItem(e) {
  e.preventDefault(); // prevent the browser from performing the default action for that element (page refresh).
  const text = (this.querySelector('[name=item]')).value;
  console.log('text', text); // example text: text lettuce
  const item = {
    text,
    done: false
  };
  
  items.push(item);
  populateList(items, itemsList); //run this function to add items to the plates list.
  
  // add to local storage using setItem and JSON.stringify to change object to a string.
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
```

## Features

* Uses HTML local storage so items not lost in the event of a page refresh etc.

## Status & To-Do List

* Status: Working. Updated to work from browser, not from Glitch.

* To-Do: This code can be enhanced with an option to set as 'done' or clear all items in the plates list.

## Inspiration

* Wes Bos Youtube Tutorial: [How LocalStorage and Event Delegation work. #JavaScript30 15/30](https://www.youtube.com/watch?v=YL1F4dCUlLc&index=15&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!