export default function Banner( data ) {
    const banner = data.data;
    return (<>
    <div className='skillbridge-banner tw-bg-darkBG md:tw-flex'>
        <div className="tw-p-8 md:tw-w-2/5 lg:tw-w-1/3">
            <div className="tw-text-light tw-border-4 tw-border-primary tw-border-solid tw-p-4 md:tw-p-6 lg:tw-p-12 md:tw-max-w-[400px] tw-mx-auto">
                <h1 className="tw-text-4xl tw-uppercase tw-font-bold tw-mb-5">Our Mission</h1>
                <p>Translate military experience into key performance indicators (KPIs) that identifies a veteran’s current supervisor capacity and range of occupational talents to establish their professional value and compensation package.</p>
            </div>
        </div>
        <div  className="md:tw-w-2/5 lg:tw-w-2/3 tw-bg-darkBG tw-grow tw-relative tw-overflow-hidden tw-h-72 md:tw-h-auto" >
            <img src={banner.bannerImage} className="tw-absolute tw-object-cover tw-inset-0 tw-object-center tw-w-full tw-h-full"/>
        </div>
    </div>
    </>);
}