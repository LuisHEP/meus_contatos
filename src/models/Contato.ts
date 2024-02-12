class Contato {
  id: number
  nomeCompleto: string
  email: string
  telefone: string

  constructor(
    id: number,
    nomeCompleto: string,
    email: string,
    telefone: string
  ) {
    this.id = id
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.telefone = telefone
  }
}

export default Contato
