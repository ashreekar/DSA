// "use strict"

function loglog() { console.log(this) }

function ano() { loglog() }

const obj = new ano()