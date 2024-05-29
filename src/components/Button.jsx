import { useContext, useState } from 'react';
import PageContext from './pageContext';

export default function Banner({bg,label, fullWidth}  ) {
    const { popup, togglePopup} = useContext(PageContext);
    return (<>
        <button
          className={`${bg ? bg : 'tw-bg-darkBG'} tw-text-white tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150 ${fullWidth ? 'w-full block' : ''}`}
          type="button"
          onClick={() => togglePopup(true)}
        >
          {label ? label : 'SCHEDULE CONSULT NOW'}
          
        </button>
    </>);
}