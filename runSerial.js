const runSerial = tasks => {
    tasks.reduce((promise, task) =>
        promise.then(result => 
            task().then(
                Array.prototype.concat.bind(result)), 
                Promise.resolve([])
            )
    )
}
