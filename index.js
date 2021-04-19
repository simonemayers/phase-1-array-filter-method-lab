// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(d => d.toUpperCase().includes(name.toUpperCase()))
}
function fuzzyMatch(drivers, name){
    return drivers.filter(d => d[0] === name[0])

}
function matchName(drivers, driver){
    return drivers.filter(d => d.name === driver)

}