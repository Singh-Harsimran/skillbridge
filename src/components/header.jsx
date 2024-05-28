export default function Header(  ) {
    return (<>
    <div className='skillbridge-header md:tw-flex '>
        <div className="tw-flex tw-items-center ms:tw-justify-center tw-text-center tw-flex-none md:tw-w-[300px] tw-text-2xl tw-font-bold tw-bg-lightBG tw-p-3">
            SKILLBRIDGE
        </div>
        <div  className="tw-p-3 tw-bg-darkBG tw-grow tw-relative md:tw-ps-20 tw-flex tw-items-center tw-justify-center" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 128" 
            className="tw-hidden md:tw-block tw-text-lightBG tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-h-full">
                <path d="m51.5 0h-51.5v127.5z" fill="currentColor"></path></svg>
            <div className="tw-text-light tw-text-md" 
            ><span className="tw-text-primary tw-font-bold">POWERED BY “PREP”</span>– <span className="tw-font-bold">PREDICTIVE EMPLOYMENT PLACEMENT PROGRAM</span> <span className="tw-text-primary">(Transition accuracy through live training with employers)</span></div>
        </div>
    </div>
    </>);
}