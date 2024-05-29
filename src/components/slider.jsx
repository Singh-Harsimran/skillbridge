import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import Modal from './Form';
import Button from './Button';
export default function Slider( ) {
    return (<>
        <div className='skillbridge-slider lg:tw-flex '>
            <div className="lg:tw-flex lg:tw-items-center lg:tw-justify-center tw-text-center tw-flex-none lg:tw-w-[300px] tw-text-2xl tw-font-bold tw-bg-primary tw-py-6 tw-px-3 lg:tw-p-3">
            ABOUT PREP SKILLBRIDGE
            </div>
            <div  className="tw-p-8 tw-bg-light tw-grow tw-relative lg:tw-ps-20 tw-flex tw-items-center tw-justify-center" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 128" 
                className="tw-hidden lg:tw-block tw-text-primary tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-h-full">
                    <path d="m51.5 0h-51.5v127.5z" fill="currentColor"></path></svg>
                    <Splide aria-label="My Favorite Images" className="tw-w-full tw-px-14" options={ {
                        pagination: false,
                    } }>
                        <SplideSlide>
                            <div className='tw-grid lg:tw-grid-cols-3 tw-gap-10 lg:tw-gap-3'>
                                <div className='tw-text-center'>
                                    <div className='tw-text-xl tw-font-bold tw-mb-3'>PREP CONSULT</div>
                                    <Button fullWidth="true" bg="tw-bg-primary" label="Contact Us"/>
                                </div>
                                <div  className='tw-text-center'>
                                    <div className='tw-text-xl tw-font-bold tw-mb-3'>SKILLBRIDGE APPROVAL</div>
                                    <a href="" className='tw-inline-block tw-bg-primary tw-text-white tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150'>Process</a>
                                </div>
                                <div  className='tw-text-center'>
                                    <div className='tw-text-xl tw-font-bold tw-mb-3'>ENTER PREP</div>
                                    <a href="" className='tw-inline-block tw-bg-primary tw-text-white tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150'>Timeline</a>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='tw-grid lg:tw-grid-cols-3 tw-gap-10 lg:tw-gap-3'>
                                <div className='tw-text-center'>
                                    <p className='tw-text-sm'>Participants are</p>
                                    <p className='tw-text-xl tw-font-bold tw-my-1'>CONTRACTED</p>
                                    <p className='tw-text-sm'>for training first.</p>
                                </div>
                                <div className='tw-text-center'>
                                    <p className='tw-text-sm'>Within 1040 hrs (6 months) they are</p>
                                    <p className='tw-text-xl tw-font-bold tw-my-1'>TRAINED</p>
                                    <p className='tw-text-sm'>and measured in real life small unit leadership roles..</p>
                                </div>
                                <div className='tw-text-center'>
                                    <p className='tw-text-sm'>So they can be accurately</p>
                                    <p className='tw-text-xl tw-font-bold tw-my-1'>PLACED</p>
                                    <p className='tw-text-sm'>in $5 to $15 million operational units with verified talent and aligned compensation.</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={'tw-align-center'}>
                        <p className='tw-text-sm'>The PREP program <strong>eliminates resume barriers</strong>, validates experience, and identifies additional occupational talents to <strong>create accurate job placement and compensation</strong>, and provides exclusive access to quality-of-life benefits <strong>for transitioning military personnel</strong>.</p>
                        </SplideSlide>
                    </Splide>
            </div>
        </div>
    </>);
}