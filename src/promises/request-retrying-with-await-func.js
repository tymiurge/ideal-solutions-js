function wait (timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve()
        }, timeout)
    })
}
  
async function requestWithRetry (url) {
    const MAX_RETRIES = 10
    for (let i = 0; i <= MAX_RETRIES; i++) {
        try {
            return await request(url)
        } catch (err) {
            const timeout = Math.pow(2, i)
            console.log('Waiting', timeout, 'ms')
            await wait(timeout)
            console.log('Retrying', err.message, i)
        }
    }
}
