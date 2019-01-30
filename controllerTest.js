/* eslint-env jest */

var dot = require("dot-event")()
var log = require("@dot-event/log")
var controller = require("./")

beforeEach(function() {
  dot.reset()
  log(dot)
  controller(dot)
})

test("adds prefix prop", function() {
  expect.assertions(1)
  dot.controller("testController", function(p) {
    expect(p).toEqual(["test"])
  })
  return dot.testController()
})
