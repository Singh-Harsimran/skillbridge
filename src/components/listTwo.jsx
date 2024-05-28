import { useState } from 'react';
export default function ListTwo( ) {

    const expComDur = [
        'You keep your base salary',
        'You keep your allowance for housing (plus COLA)',
        'You keep all of your military benefits'
      ];

    const expComAft = [
        'Merit base pay improvements as much as 30% over your military pay',
        'Access to roles that also offer work vehicle & phone allowances',
        'Continued PREP advocacy for accelerated professional & financial growth'
      ];

    return (<>
        <div className='skillbridge-list-2 tw-bg-lightBG tw-p-10 tw-pt-0 tw-max-w-[1120px] tw-mx-auto'>
            <h2 className="tw-text-2xl tw-font-bold tw-text-left tw-mb-3">What to expect</h2>
            <div className="tw-border-4 tw-border-solid tw-border-darkBG tw-p-10">
                <p className='tw-mb-6'>Every PREP graduate is a leader of people and projects first. It is their every day routine. Their specialty is effective command of occupational talents. This is where they create the greatest financial return for their team, their peers, their company, AND their family.</p>
                <div className="tw-flex tw-flex-wrap md:tw-flex-nowrap tw-gap-6 tw-w-full">
                    <div className="lg:tw-flex-none md:tw-w-1/2">
                        <h3 className='tw-font-bold tw-mb-2'>Compensation during PREP Skillbridge:</h3>
                        {expComDur.length && <ul className=''>
                            {expComDur.map(
                                    (
                                    item,
                                    index,
                                    ) => (
                                        <li key={index} className='tw-mb-1 tw-flex tw-gap-2'>
                                        <span className='tw-block tw-w-2 tw-h-2 tw-bg-primary tw-flex-none tw-mt-2'> </span>
                                            {item}</li>
                                    ))}
                            
                        </ul>}
                    </div>
                    <div className="lg:tw-flex-none md:tw-w-1/2">
                        <h3 className='tw-font-bold tw-mb-2'>Compensation after PREP:</h3>
                        {expComAft.length && <ul className=''>
                            {expComAft.map(
                                    (
                                    item,
                                    index,
                                    ) => (
                                        <li key={index} className='tw-mb-1 tw-flex tw-gap-2 '>
                                            <span className='tw-block tw-w-2 tw-h-2 tw-bg-primary tw-flex-none tw-mt-2'> </span>
                                            {item}</li>
                                    ))}
                            
                        </ul>}
                    </div>
                </div>
            </div>
        </div>
    </>);
}