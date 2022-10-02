export class Users {
  id: number = 0;
  nome: string = '';
  telefones: dadosTelefones = new dadosTelefones();
  enderecos: dadosEnderecos = new dadosEnderecos();
  email: string = '';
  senha: string = '';
  acesso: string = '';
}

export class dadosTelefones {
  residencial: string = '';
  celular: string = '';
}

export class dadosEnderecos {
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
}
