/*prettier-ignore*/
"use strict"

module.exports = function(dot, opts) {
  var state = dot.state

  if (state.controller) {
    return
  }

  state.controller = opts || {}

  if (state.log) {
    state.log.levels.controller = state.log.levels
      .controller || {
      info: "debug",
    }
  }

  dot.any("controller", controller)
}

function controller(prop, arg, dot) {
  dot.any(prop[0], function(p, a, d, e, s) {
    p = p.concat([e.replace(/(Controller|Page)$/, "")])
    return arg.call(null, p, a, d, e, s)
  })
}
