import { FormEvent, useState } from 'react'
import {
  Titulo,
  MainContainer,
  Campo,
  BotaoSalvar,
  BotaoCancelarNovoContato
} from '../../styles'
import { Form } from './styles'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  function cadastrarContato(e: FormEvent) {
    e.preventDefault()

    dispatch(
      adicionar({
        email,
        nomeCompleto,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          type="text"
          placeholder="Nome completo"
          required
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
        />
        <Campo
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="tel"
          placeholder="Telefone"
          required
        />
        <BotaoSalvar type="submit">Salvar novo contato</BotaoSalvar>
        <BotaoCancelarNovoContato to="/">Cancelar</BotaoCancelarNovoContato>
      </Form>
    </MainContainer>
  )
}

export default Formulario
