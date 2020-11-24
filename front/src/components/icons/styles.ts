import styled from 'styled-components';

export const Container = styled.div`
    /* height: 100%;
    width: 100%;
    font-family: 'Zilla Slab', serif;
    color: #FFF; */

    .parent {
        display: grid;
        grid-template-columns: 0.5fr repeat(2, 1fr) 0.2fr;
        grid-template-rows: 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 0px;
    }

    .div1 { grid-area: 1 / 2 / 2 / 3; }
    .div2 { grid-area: 1 / 3 / 2 / 4; }
    .div3 { grid-area: 1 / 1 / 2 / 2; }
    .div4 { grid-area: 1 / 4 / 2 / 5; }
`
