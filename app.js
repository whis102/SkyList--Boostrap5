function updateTime() {
    const now = new Date()
    const date = document.getElementById('current-date')
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }
    const format = now.toLocaleDateString('en-US', options)

    date.innerText = `Today, ${format}`
}

updateTime()

setInterval(updateTime, 1000)