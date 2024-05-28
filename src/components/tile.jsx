import { useState } from 'react';
export default function Tile( {text, list} ) {

    const [t1, setText] = useState(text)

    return (<>
        {list.length && <div className='tw-flex tw-flex-wrap xl:tw-flex-nowrap tw-items-center tw-mb-3 tw-gap-3 xl:tw-gap-10'>
            <div className='tw-grid tw-grid-cols-2 lg:tw-flex tw-gap-3 tw-w-full xl:tw-w-3/5 tw-justify-center tw-flex-wrap lg:tw-flex-nowrap'>
            {list.map(
                    (
                      {title,text,icon},
                      index,
                    ) => (
                        <div key={index} className='tw-bg-iconBG tw-w-full lg:tw-w-28 tw-flex tw-p-3 tw-text-center tw-justify-center tw-flex-wrap hover:tw-bg-primary tw-cursor-pointer' onClick={()=>setText(text)}>
                            {icon && <img src={icon} className='tw-w-auto tw-h-12 tw-mb-2'/>}
                            <div className='tw-text-[10px] tw-leading-tight tw-font-semibold tw-text-light'>{title}</div>
                        </div>
                    ))}
            </div>
            <div className='tw-w-full tw-text-light tw-bg-primary tw-p-2 tw-text-sm xl:tw-w-2/5'>{t1}</div>
            
        </div>}
    </>);
}