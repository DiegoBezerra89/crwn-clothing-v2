import { createContext, useState } from "react"; //cria um contexto

//o Context é dividido em 2 partes

// a primeira é o storage, onde o contexto será armazenado
//é literalmente o Contexto

//esse é o valor atual que vc quer acessar
export const UserContext = createContext({
  //o contexto precisa de um valor inicial assim como o Provider
  currentUser: null, //sempre que se iniciar, vc vai checar se existe um objeto de usuário, no caso não existe, então é null, pois um objeto vazio ainda é um valor
  setCurrentUser: () => null, // uma função que retorna null
}); //passamos como parâmetros os valores default

//a segunda parte é um PROVIDER
//o provider é o componente em si
export const UserProvider = ({ children }) => {
  //UserProvider é como um alias que nos possibilita utilizar o UserContext.Provider de maneira mais legível
  const [currentUser, setCurrentUser] = useState(null); // inicia-se o valor de usuário como null, pois não há usuários ativos, !!!aqui trata-se do estado, e não do valor inicial do contexto!!!
  const value = {
    //o value recebe os dois valores que são importantes para o nosso provider
    currentUser,
    setCurrentUser,
  };
  //passando o value para o provider vc possibilita que todos os componentes encapsulados por ele(children/<App />) possuam acesso ao currentUser, e o setCurrentUser
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
    // todo contexto que é criado, possui um prop .Provider
    // este provider é o componente que irá encapsular todos os componentes que terão acesso aos valores do contexto
  );
};

/*
<UserProvider>
  <App /> //children
</UserProvider>
*/
