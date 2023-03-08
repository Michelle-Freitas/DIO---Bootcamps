import { useState } from 'react';
import logo from '../assets/logo.png'
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';

import { Container } from './styles'
import {api} from '../services/api'


function App() {

  const [repos, setRepos] = useState([])
  const [currentRepo, setCurrentRepo] = useState('')

  //funções
  const handleSearchRepos = async () => {
    const  {data} = await api.get(`repos/${currentRepo}`)

    if (data.id){
      const isExist = repos.find(repo => repo.id === repo.id)

      if(!isExist){
        setRepos(previous => [...previous, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositório não encontrado ')
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo o registro', id)
    //TO_DO: utilizar o filter
    const newRepo = []
    setCurrentRepo(newRepo.filter(repo => repo.id !== repo.id))

  }

  return (
    <Container className="App">
      <img src={logo} alt="Logo Github" width={72} height={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value) } />
      <Button onClick={handleSearchRepos}/>
      {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}

    </Container>
  );
}

export default App;


//pablohdev/git-explorer
