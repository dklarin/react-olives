import { createGlobalStyle } from "styled-components";

/***
 * @summary
 *          Here we can declare all our global CSS that will be applied to body, html...
 */
export const GlobalStyle = createGlobalStyle`
#root {
  width: 100%;
  height: 100%;
}

html,body{
-webkit-print-color-adjust: exact;
width:100%;
height:100%;  
margin:0;
padding:0;
color:${(props) => props.theme.color};
font-family:${(props) => props.theme.fontFamily};
font-size:11pt;

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[readOnly] {
  background: initial !important;
}
input[disabled]{background-color:#f2f2f2 !important}
input[type=number] {
  -moz-appearance:textfield; /* Firefox */
}
input{
  font-size:inherit;
  font-family:inherit
}

}


 `;
