/* eslint-env jest */

var controller = require("./"),
  emit,
  log = require("@emit-js/log")

beforeEach(function() {
  emit = require("@emit-js/emit")()
  log(emit)
  controller(emit)
})

test("adds prefix prop", function() {
  expect.assertions(1)
  emit.controller("testController", function(a, p) {
    expect(p).toEqual(["test"])
  })
  return emit.testController()
})
