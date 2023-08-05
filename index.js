// DOM 操作
const clock = document.querySelector('.time')
const date = document.querySelector('.date')
const weekDay = document.querySelector('.week')
const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')

// 新增參數
const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// 更新時鐘
const updateClock = ()=>{
    const times = new Date()
    const hour = times.getHours()
    const minute = times.getMinutes()
    const second = times.getSeconds()
    const year = times.getFullYear()
    const month = times.getMonth() + 1
    const day = times.getDate()
    const week = times.getDay()

    const currentTime = `${hour}:${minute}:${second}`
    const currentDate = `${year} / ${month} / ${day}`
    const currentWeek = weeks[week]

    const secondDeg = (second / 60) * 360 - 90
    const minDeg = (minute / 60) * 360 - 90
    const hourDeg = (hour / 12) * 360 - 90

    clock.innerHTML = currentTime
    date.innerHTML = currentDate
    weekDay.innerHTML = currentWeek

    secondHand.style.transform = `rotate(${secondDeg}deg)`
    minHand.style.transform = `rotate(${minDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}

// 每隔一秒執行更新時中的函式
setInterval(updateClock, 1000)