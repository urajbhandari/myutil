import React from 'react';
import {render} from '@testing-library/react';
import Task from "./Task";


test("Fetched data is rendered", () => {

    const rend = render(<Task/>);
    // console.log(rend);
    const {getByText} = rend;
    // let byText = getByText("Amazon AWS");
    // console.log('output: ' + byText);byText

})