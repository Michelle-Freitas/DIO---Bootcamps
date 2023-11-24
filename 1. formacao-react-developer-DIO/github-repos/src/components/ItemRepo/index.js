import React from 'react'
import {ItemContainer} from './styles'

export default function ItemRepo ( {repo, handleRemoveRepo} ) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer className='item-list' onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank" rel="no-referrer noreferrer">Ver repositório</a><br/>
        <a href={'/'} className="remove" rel='no-referrer' >Remover</a>
        <hr />
    </ItemContainer>
  )
}

