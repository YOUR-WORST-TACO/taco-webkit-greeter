import * as React from 'react';
import '../helpers/mock';

/* use the following to access elements of lock screen:
 *      window.lightdm      -- our interface of lightdm
 *      window.config       -- the config for lightdm
 *      window.greeter_util -- the utils for working with lightdm
 */

const App = () => {
    console.log(window.lightdm);
    console.log(window.config);
    console.log(window.greeter_util.txt2html("test&<>123"));
    return (
        <h1>Hello world</h1>
    )
};

export default App;
