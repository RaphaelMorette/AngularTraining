export class Fornecedor {
  id: number = 0;
  nome: string = '';
  telefones: dadosTelefones = new dadosTelefones();
  email: string = '';
  website: string = '';
  enderecos: dadosEnderecos = new dadosEnderecos();
  documentos: dadosDocumentos = new dadosDocumentos();
}

export class dadosTelefones {
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
  cnpj: string = '';
  inscricaoEstadual: string = '';
}
