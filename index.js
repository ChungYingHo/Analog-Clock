// DOM 操作
const digital = document.querySelector('.digital-time')
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
    let hour = times.getHours()
    let minute = times.getMinutes()
    let second = times.getSeconds()
    let year = times.getFullYear()
    let month = times.getMonth() + 1
    let day = times.getDate()
    let week = times.getDay()

    second = second < 10 ? '0' + second : second
    minute = minute < 10 ? '0' + minute : minute
    hour = hour < 10 ? '0' + hour : hour
    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day


    const secondDeg = (second / 60) * 360 - 90
    const minDeg = (minute / 60) * 360 - 90
    const hourDeg = (hour / 12) * 360 - 90

    const currentTime = `${hour} : ${minute} : ${second}`
    const currentDate = `${year} / ${month} / ${day}`
    const currentWeek = weeks[week]

    digital.innerHTML = currentTime
    date.innerHTML = currentDate
    weekDay.innerHTML = currentWeek

    secondHand.style.transform = `rotate(${secondDeg}deg)`
    minHand.style.transform = `rotate(${minDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}

// 每隔一秒執行更新時中的函式
setInterval(updateClock, 1000)