import express from "express"
import { json } from "node:stream/consumers";
import {grade ,namep ,task} from './data'
import { v4 as uuidv4 } from 'uuid';


 const app =express();

 let names: namep[]=[];
 let grade1:grade[]=[];
 let tasks:task[]=[];

 
 app.use(express.json());

//  get section

 
app.get('/name', function (req, res) {
 return res.json(names)
  })

app.get('/grade', function (req, res) {
  return res.json(grade1)
     })
 app.get('/task', function (req, res) {
      return res.json(tasks)
       })

app.get('/task:title', function (req, res) {
  const newName = req.body ;
  const title = req.params.title;
  const Stitle = tasks.filter((taskT)=> taskT.title === title);
   return res.json(Stitle)
   })
  
// ________________________________________________________________________________________________
// post section
  app.post('/name', function (req, res) {
  const newName = req.body ;
  names.push(newName);
  return res.json({
    message: 'New name  added !',
  });
 })

 app.post('/grade', function (req, res) {
  const newGreade = req.body ;
  grade1.push(newGreade);
  res.send(`the new Gread ${newGreade} add to array`)

 })



 app.post('/task', function (req, res) {
  const newTask = req.body as task;
  newTask.id =uuidv4();
  tasks.push(newTask);
  return res.json({
    message: 'New task added !',
  });
 })


//   _____________________________________________________________________________________________________
// Put section
app.put('/name/:id', (req, res) => {
  const updatedName  = req.body as namep;
  const { id } = req.params;

  const updatedNameList  = names.filter((name) => {
    return  name.id !== id
 
  });

  updatedNameList.push(updatedName);

  names = updatedNameList;
  res.send(` the new name ${updatedName} updata to array `)
    })

// ________________________________________________________________

  app.put('/grade/:id', function (req, res) {

    const updatedrade = req.body as grade;
    const {id} = req.params;
  
    const updatedGreadList = grade1.filter((grade1) => {
      return grade1.id !== id;
    });
  
    updatedGreadList.push( updatedrade);
  
    grade1= updatedGreadList;
  
res.send(` the new gread ${updatedrade} updata to array `)
  })
// ______________________________________________________________________

  app.put('/task/:id', function (req, res) {

    const updatedtask = req.body as task;
    const{ id }= req.params;
  
    const updatedTaskList = tasks.filter((tasks) => {
      return tasks.id !== id;
    });
  
    updatedTaskList.push( updatedtask);
  
    tasks= updatedTaskList;
  
res.send(` the new task ${updatedtask} updata to array `)
  })



//   _________________________________________________________________________________________________________
  // delete section

app.delete('/name/:id', function (req, res) {

  const { id } = req.params;
  names= names.filter((name) => name.id !== id);
  res.send(` the  Name with ${id} is deleted  `)
  })
// _______________________________________________________________________________

  app.delete('/grade/:id', function (req, res) {
    const { id } = req.params;
  grade1 = grade1.filter((grade) => grade.id !== id);
  res.send(` the gread with ${id} is deleted  `)
  })

  // __________________________________________________________
  app.delete('/task/:id', function (req, res) {

    const { id } = req.params;
    tasks= tasks.filter((task) => task.id !== id);
    res.send(` the Task with ${id} is deleted  `)
    })


//   __________________________________________________________________________________________________________
  app.listen(5000 , ()=> console.log("successfully work "))