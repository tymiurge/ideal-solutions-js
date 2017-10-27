function mandatory() {
    throw 'missing argument'
}

function neverLand(arg = mandatory()) {
    console.log('ok')
}

neverLand('defined') // -> ok
neverLand() // throws missing argument