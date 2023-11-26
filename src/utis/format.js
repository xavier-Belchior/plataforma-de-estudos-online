

const subjects = [
    "Artes",
    "Biologias",
    "Quimicas",
    "Educação fisíca",
    "Fisíca",
    "Geografia",
    "História",
    "Matemática",
    "L.Portuguésa",
    "L.Inglesa",
    "Psicologia",
]

const weekdays=[
    "Domingo",
    "Seguna-Feira" ,    
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

// funcionaidades

function getSubject(subjectNumber){
const position= +subjectNumber-1

return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes]= time.split(":")
    return  Number((hour * 60) + minutes)
}

module.exports={
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
