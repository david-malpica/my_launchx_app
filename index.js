const MissionComander = require ('./app/missionCommander');
const carlo = new MissionComander("Carlo")
const fernanda = new MissionComander("Fernanda")
const rodrigo = new MissionComander("Rodrigo")
console.log('Mission Comander, misión intro Python: ' + fernanda.name)
console.log('Mission Comander, misión frontend JavaScript: ' + rodrigo.name)
console.log('Mission Comander, misión backend NodeJS: ' + carlo.name)