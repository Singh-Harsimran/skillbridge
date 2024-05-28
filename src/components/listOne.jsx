import { useState } from 'react';
export default function ListOne( data ) {
    const section = data.data;

    const reqs = [
        'PREP consult',
        `Unit CO approval for Skillbridge (6 month's prior to contact start)`,
        'Identified as competitive with your peers and ontrack for promotion or honorable discharge',
        'PREP training contract with official start date',
        'PREP official commitment letter'
      ]

    return (<>
    <div className='skillbridge-list-1 tw-bg-lightBG tw-p-10 tw-max-w-[1120px] tw-mx-auto'>
        <h2 className="tw-text-2xl tw-font-bold tw-text-left tw-mb-3">Here's what you'll need</h2>
        <div className="tw-border-4 tw-border-solid tw-border-primary tw-p-10 tw-flex tw-flex-wrap md:tw-flex-nowrap tw-gap-6">
            <div className="md:tw-grow">
            {reqs.length && <ul className='tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-3 md:tw-gap-4'>
                {reqs.map(
                        (
                        item,
                        index,
                        ) => (
                            <li key={index} className='tw-flex tw-align-top tw-gap-3'>
                                <svg aria-hidden="true" className="tw-w-5 tw-h-7 tw-flex-none" viewBox="0 0 512 512" style={{'color':'#46A97B'}} xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                                {item}</li>
                        ))}
                
            </ul>}
            </div>
            <div className="lg:tw-flex-none md:tw-w-[300px]">
                <img src={section.reqImage}/>
            </div>
        </div>
    </div>
    </>);
}