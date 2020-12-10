import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        
    }
    body {
        font-family:'Noto Sans','맑은 고딕','Malgun Gothic',Arial,Helvetica,sans-serif,Lucida,Grande,'Microsoft YaHei','Hiragino Sans GB',SimSun,Meiryo;
        font-size:14px;
    }
`

export default GlobalStyles;