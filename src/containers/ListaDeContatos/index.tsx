import Contato from '../../components/Contato'
import * as S from '../../styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.MainContainer>
      <S.Titulo as="p">Lista de Contatos</S.Titulo>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            <Contato
              email={item.email}
              nomeCompleto={item.nomeCompleto}
              telefone={item.telefone}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}

export default ListaDeContatos
