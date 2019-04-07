/*prettier-ignore*/
"use strict"

module.exports = function(emit) {
  if (emit.controller) {
    return
  }

  emit("logLevel", "controller", { info: "debug" })

  emit.any("controller", controller)
}

function controller(arg, prop, emit) {
  emit.any(prop[0], function(a, p, e, s) {
    p = p.concat([s.event.replace(/[A-Z][a-z]*$/, "")])
    return arg.call(null, a, p, e, s)
  })
}
