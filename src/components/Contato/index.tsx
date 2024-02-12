import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  email: emailProp,
  id,
  nomeCompleto: nomeCompletoProp,
  telefone: telefoneProp
}: Props) => {
  const dispatch = useDispatch()
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (
      emailProp.length > 0 &&
      nomeCompletoProp.length > 0 &&
      telefoneProp.length > 0
    ) {
      setNomeCompleto(nomeCompletoProp)
      setTelefone(telefoneProp)
      setEmail(emailProp)
    }
  }, [nomeCompletoProp, telefoneProp, emailProp])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeCompleto(nomeCompletoProp)
    setTelefone(telefoneProp)
    setEmail(emailProp)
  }

  return (
    <S.Card>
      <S.Titulo>{nomeCompleto}</S.Titulo>
      <S.InputComponent
        disabled={!estaEditando}
        value={nomeCompleto}
        placeholder="Nome Completo"
        onChange={(e) => setNomeCompleto(e.target.value)}
        type="text"
      />
      <S.InputComponent
        disabled={!estaEditando}
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <S.InputComponent
        disabled={!estaEditando}
        value={telefone}
        placeholder="Telefone"
        onChange={(e) => setTelefone(e.target.value)}
        type="tel"
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    id,
                    nomeCompleto,
                    telefone
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
