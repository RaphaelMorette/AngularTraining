export class Clients {
  id: number = 0;
  nome: string = '';
  telefones: dadosTelefones = new dadosTelefones();
  email: string = '';
  enderecos: dadosEnderecos = new dadosEnderecos();
  documentos: dadosDocumentos = new dadosDocumentos();
}

export class dadosTelefones {
  residencial: string = '';
  comercial: string = '';
  celular: string = '';
}

export class dadosEnderecos {
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
}

export class dadosDocumentos {
  rg: string = '';
  cpf: string = '';
}
