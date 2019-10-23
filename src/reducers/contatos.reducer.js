export const initialState = { listaContatos: [] };

export function reducer(state, action) {
  switch (action.type) {
    case "ADICIONAR":
      let novaListaContatos = state.listaContatos.concat(action.contato);

      return { listaContatos: novaListaContatos };
    case "EXCLUIR":
      let novaListaContatos = [
        ...state.listaContatos.slice(0, action.index),
        ...state.listaContatos.slice(action.index + 1)
      ];

      return { listaContatos: novaListaContatos };
    case "BUSCAR":
      let novaListaContatos = state.listaContatos.filter(
        contato => contato.Id === action.contato.Id
      );
      return { listaContatos: [novaListaContatos] };
    case "ALTERAR":
      let novaListaContatos = state.listaContatos.map(contato => {
        if (contato.Id === action.contato.Id) {
          return Object.assign({}, contato, {
            Nome: action.contato.Nome,
            Endereco: action.contato.Endereco,
            Email: action.contato.Email,
            Telefone: action.contato.Telefone,
            Telemovel: action.contato.Telemovel
          });
        } else {
          return contato;
        }
      });
      return { listaContatos: novaListaContatos };
    default:
      throw new Error();
  }
}
