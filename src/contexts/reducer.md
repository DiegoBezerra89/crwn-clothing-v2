### useReducer

`function reducer(state, action) {

}`

`const [] = useReducer(reducer)`

O primeiro parâmetro do useReducer é uma função que define um valor inicial para um dos estados do componente.

`const [] = useReducer(reducer, {count: 0})`

O segundo parâmetro é o valor inicial do estado do componente.
Geralmente o segundo parâmetro é um objeto, pois o reducer trata estados mais complexos, modificando uma prop de um objeto específico.

`const [state] = useReducer(reducer, { count: 0 })`

O retorno do useReducer consiste em, um estado, e uma função chamada como _dispatch_.
Consiste no quê nós chamamos para que o estado seja atualizado, no nosso caso

`function reducer(state, action) {

}`

Na função acima _state_ é o nosso estado atual, _action_ é o _dispatch_;
Sempre que chamarmos o _dispatch_ estaremos fazendo referência ao parâmetro _action_ do nosso reducer().

_Por exemplo_

`function reducer(state, action) { return {count: state.count + 1} }`

`function increment() = { dispatch(); }`

### Passando um type para o dispatch

No caso anterior temos apenas um estado simples que é incrementado, e se quisermos decrementar o valor?
`function increment() = { dispatch({type: 'increment'}); }`

`function reducer(state, action) { switch(action.type) { case 'increment' : return { count: state.count + 1} case 'decrement' : return { count: state.count - 1} default: throw new Error(`Unhandled type ${type} in userReducer`); } }`Nota
