/* eslint-env jest */

var controller = require("./"),
  dot,
  log = require("@dot-event/log")

beforeEach(function() {
  dot = require("dot-event")()
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
