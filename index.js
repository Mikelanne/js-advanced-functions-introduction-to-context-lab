// Your code here
function createEmployeeRecord(array) {
    const employee = {
        firstName: (array[0]),
        familyName: (array[1]),
        title: (array[2]),
        payPerHour: (array[3]),
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(arrays) {
    let employee = arrays.map(a => createEmployeeRecord(a))
    return employee
}

function createTimeInEvent(obj, timeObj) {
    let punchIn = {
        type: "TimeIn",
        hour: parseInt(timeObj.split(" ")[1]),
        date: timeObj.split(" ")[0]
    }
    obj.timeInEvents.push(punchIn)
    return obj
}

function createTimeOutEvent(obj, timeObj) {
    let punchIn = {
        type: "TimeOut",
        hour: parseInt(timeObj.split(" ")[1]),
        date: timeObj.split(" ")[0]
    }
    obj.timeOutEvents.push(punchIn)
    return obj
}

function hoursWorkedOnDate(empObj, day) {
    let clockInDay = (empObj.timeInEvents[0].date)
    let clockInHour = (empObj.timeInEvents[0].hour)
    let clockOutHour = (empObj.timeOutEvents[0].hour)
    if (clockInDay === day) {
        let hoursWorked = (clockOutHour - clockInHour)
        return (hoursWorked / 100)
    }
}

function wagesEarnedOnDate(empObj, day) {
    let hourlyPay = (empObj.payPerHour)
    let clockInDay = (empObj.timeInEvents[0].date)
    if (clockInDay === day) {
        let hoursWorked = (hoursWorkedOnDate(empObj, day))
        return (hoursWorked * hourlyPay)
    }
}

function allWagesFor(empObj) {
    
}

function findEmployeeByFirstName(srcArray, firstName) {
    const empObj = srcArray.find(employee => employee.firstName === firstName)
    if (empObj) {
       return empObj
    }
}