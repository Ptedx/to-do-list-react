import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './components/ui/Buttons';
import { ThemeProvider } from '@mui/material/styles';
import { addTask, removeTasks, saveAll } from './functions';
import { theme } from './theme';
import { Container } from './components/layout/Wrapper';
import { Field } from './components/form/Field';
import { Select } from './components/form/Selector';

function App() {
  const [activity, setActivity] = useState('')
  const [category, setCategory] = useState('')
  const [task, setTask] = useState([])

  const handleAddTask = ()=>{
    addTask(activity, category,task, setTask)
    setActivity('')
    setCategory('')
  }
  const handleRemoveTask = (index)=>{
    removeTasks(index, task, setTask)
  }
  const handleRemoveAll = ()=>{
    setTask([])
  }
  const handleSaveAll = ()=>{
    saveAll(task, setActivity)
  }
  useEffect(()=>{
    let lista = []
    axios.get('http://localhost:3002/')
    .then((response)=>{
      for (let i = 0; i < response.data.length; i++){
        lista.push(response.data[i].nome)
      }
      setTask(lista)
    })
    .catch(error=>(console.log(error)))
  },[])

  return (
    <ThemeProvider theme={theme}>
        <Container>
                  <h1>To-do-list</h1>
                  <div className='input'>
                    <Field
                    ph='Digite sua atividade...'
                    vl={activity}
                    oc={(e)=>{setActivity(e.target.value)}}>
                    </Field>
                    <Select vl={category} oc={(e)=>setCategory(e.target.value)}>
                      <option value={''}>Selecione uma categoria</option>
                      <option value={'Pessoal'}>Pessoal</option>
                      <option value={'Trabalho'}>Trabalho</option>
                      <option value={'Estudos'}>Estudos</option>
                    </Select>
                    <Button bg={theme.palette.success.main} onClick={handleAddTask}>Adicionar task</Button>
                    <Button bg={theme.palette.warning.main} onClick={handleRemoveAll}>Remove all</Button>
                    <Button bg={theme.palette.primary.main} onClick={handleSaveAll}>Save</Button>
                  </div>
                  <div className='tasks'>
                    <ul>
                      {task.map((task,index)=>(
                        <li key={index} className='item-list'>
                          {task[0]}
                          {`(${task[1]})`}
                          <Button bg={theme.palette.warning.main} onClick={()=>handleRemoveTask(index)}>Remover</Button>
                        </li>
                      ))}
                    </ul>
                  </div>
    </Container>
    </ThemeProvider>

  );
}

export default App;
