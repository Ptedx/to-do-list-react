import axios from 'axios'

export function addTask(activity, category, task, setTask){
  if (activity.trim() !== '' && category.trim() !== ''){
    return(setTask([...task,[activity,category]]))
  }
}

export function removeTasks(index, task, setTask){
  const updateTask = task.filter((_,i)=>i !== index) 
  return(setTask(updateTask))
}

export function saveAll(task, setActivity){
  axios.post('http://localhost:3002/send',task)
  .then(response =>{
    console.log('Resposta: ', response.data)
  })
  .catch(error=>{
    console.log('ERROR: ', error)
  })
  return(setActivity(''))
}
