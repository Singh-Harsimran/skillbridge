import { createContext } from 'react';

// set the defaults
const PageContext = createContext({
    popup: false,
    togglePopup: () => {}
});

export default PageContext;