import css from 'styled-jsx/css'
import { colors, fonts, breakpoints } from '../../styles/theme';
import { addOpacityColors } from '../../styles/utils';

/* calcular la opacidad con un utils */
const backgroundColor = addOpacityColors(colors.primary, 0.7)

export const globalStyles = css.global` 
html,
body {
  background-image: 
    radial-gradient(${backgroundColor} 1px, transparent 1px),
    radial-gradient(${backgroundColor} 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
  padding: 0;
  margin: 0;
  font-family: ${fonts.base}
},

a {
  color: inherit;
  text-decoration: none;
},

* {
  box-sizing: border-box;
}

`
export default css`
div {
    display: grid;
    height: 100vh;
    place-items: center;
  },

  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,  0, 0, .1);
    height: 100%;
    width: 100%;
    
  }

  @media(min-width: ${breakpoints.mobile}){
    main{
      width: ${breakpoints.mobile};
      height: 90vh;
    }
  }
`