# @dot-event/controller

[dot-event](https://github.com/dot-event/dot-event#readme) dom controllers

![controller](controller.gif)

## Install

```bash
npm install dot-event @dot-event/controller
```

## Setup

```js
const dot = require("dot-event")()
require("@dot-event/controller")(dot)
```

## Usage

First create your controller composer:

```js
module.exports = function(dot) {
  dot.controller("myController", myController)
}

async function myController() {
  // control stuff
}
```

Then use it:

```js
require("./myController")(dot)
dot.myController()
```

## Props

Commonly we append the controller name to [the `prop` array](https://github.com/dot-event/dot-event#props) and pass the concatenated props to sub-events.

Passing those props down produces descriptive element ids and [logs](https://github.com/dot-event/log) that describe the call stack.

Luckily, the `controller` composer injects the controller name into [the `prop` array](https://github.com/dot-event/dot-event#props) automatically, eliminating the controller name append step.

> ℹ️ Prop injection is the only thing the controller composer does at this point in time.

## Related composers

| Library | Description        | URL                                        |
| ------- | ------------------ | ------------------------------------------ |
| el      | DOM elements       | https://github.com/dot-event/el#readme     |
| render  | Server side render | https://github.com/dot-event/render#readme |
| view    | DOM views          | https://github.com/dot-event/view#readme   |
