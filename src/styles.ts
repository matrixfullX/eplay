import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#333',
  preto: '#111',
  cinza: '#EEEEEE',
  verde: '#10AC84'
}

const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
  }
`

export default GlobalCSS
