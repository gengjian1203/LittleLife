function SayHello(name) {
  console.log(name + " say hello.")
}

function SayBye(name) {
  console.log(name + " say bye.")
}

module.exports.SayHello = SayHello
module.exports.SayBye = SayBye

