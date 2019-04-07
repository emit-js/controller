# @emit-js/controller

[emit](https://github.com/emit-js/emit#readme) dom controllers

![controller](controller.gif)

## Install

```bash
npm install @emit-js/emit @emit-js/controller
```

## Setup

```js
const emit = require("@emit-js/emit")()
require("@emit-js/controller")(emit)
```

## Usage

First create your controller composer:

```js
module.exports = function(emit) {
  emit.controller("myController", myController)
}

async function myController() {
  // control stuff
}
```

Then use it:

```js
require("./myController")(emit)
emit.myController()
```

## Props

Commonly we append the controller name to [the `prop` array](https://github.com/emit-js/emit#props) and pass the concatenated props to sub-events.

Passing those props down produces descriptive element ids and [logs](https://github.com/emit-js/log) that describe the call stack.

Luckily, the `controller` composer injects the controller name into [the `prop` array](https://github.com/emit-js/emit#props) automatically, eliminating the controller name append step.

> ℹ️ Prop injection is the only thing the controller composer does at this point in time.

## Related composers

| Library | Description        | URL                                      |
| ------- | ------------------ | ---------------------------------------- |
| el      | DOM elements       | https://github.com/emit-js/el#readme     |
| render  | Server side render | https://github.com/emit-js/render#readme |
| view    | DOM views          | https://github.com/emit-js/view#readme   |
