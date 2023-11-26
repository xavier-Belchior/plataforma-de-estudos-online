
const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    //inserir dados
    proffyValue = {
        name: "Xavier Belchior",
        avatar: "https://avatars.githubusercontent.com/u/140497869?v=4",
        whatsapp: "955195350",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", 
   
    }

     classValue ={
        subject:1, 
        cost:"20", 
       // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

//   await createProffy(db, {proffyValue, classValue, classScheduleValues})
   
//consultar dados inseridos

//todos os proffys
const selectedProffys=await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

//consultar as classes determinado dos proffys
//E retornar junto com os dados do proffy
const selectedProffysClasses= await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON(classes.proffy_id= proffys.id)
    WHERE classes.proffy_id= 1;
`)
// console.log(selectedProffysClasses)

//O horario que passeoa trabalha podeser 8h ate 10h
//O horario do time_from(8h) tem que ser menor ou igual o horario solicitado
//O time_to precisa ser acima 
const selectClassesSchedules=await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND  class_schedule.weekday ="0" 
    AND  class_schedule.time_from <= "1300" 
    AND  class_schedule.time_to > "1300"
`)
console.log(selectClassesSchedules)
  
})