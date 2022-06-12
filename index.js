// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name){

return drivers.filter(function(driverName){
    return driverName.toLowerCase()===name.toLowerCase();
})
}
function fuzzyMatch(drivers, name){
const matchingNames=drivers.filter(driverNames=>{
    return driverNames.toLowerCase().startsWith(name.toLowerCase());
})
return matchingNames
}
function matchName(drivers,name){
    return drivers.filter(record=>record.name===name)
}