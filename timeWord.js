
ONES = ["twelve", "one", "two", "three", "four", "five", "six",
"seven", "eight", "nine", "ten", "eleven", "twelve",
"thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
"eighteen", "nineteen"];

TENS = ["", "", "twenty", "thirty", "forty", "fifty"]


function timeword(time) {

    let hour = parseInt(time.split(":")[0])
    let minutes = parseInt(time.split(":")[1])
    let minutess = parseInt(time.split(":")[1][0])
    let minutesss = parseInt(time.split(":")[1][1])

    let arr = []

    if (time == "00:00")
    return "midnight"

    if (time == "12:00")
    return "noon"

    if (hour >= 24 || minutes >= 60)
    return "INVALID INPUT"

    if (hour <= 12 ) 
    arr.push(ONES[hour])

    if (hour > 12 && hour < 24)
    arr.push(ONES[hour - 12])

    if (minutes > 0 && minutes < 10)
    arr.push("oh")

    if (minutes > 0 && minutes < 20)
    arr.push(ONES[minutes])

    if (minutes >=20)
    arr.push(TENS[minutess])

    if (minutes >=20 && minutesss > 0)
    arr.push(ONES[minutesss])

    if (hour >= 0 && hour < 12){
        arr.push("am")
    } else {
        arr.push("pm")
    }
 
    let string = arr.toString()
    let newstring = string.replace(/,/g, ' ');
 
    return newstring
}



module.exports = {timeword}

    
 