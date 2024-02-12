import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomeCompleto: 'Luis Paladino',
      email: 'luispaladino@email.com',
      telefone: '21998876334'
    },
    {
      id: 2,
      nomeCompleto: 'Lucas Oliveira',
      email: 'lcoliver@email.com',
      telefone: '21997647746'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nomeCompleto.toLowerCase() ===
          action.payload.nomeCompleto.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 0
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, adicionar } = contatosSlice.actions

export default contatosSlice.reducer
