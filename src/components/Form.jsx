import { useContext, useState } from 'react';
import PageContext from './pageContext';
import axios from "axios";

export default function Modal({label, bg, fullWidth}) {
  const [status, setStatus] = useState('');
  const { popup, togglePopup} = useContext(PageContext);

  const [form, setForm] = useState({
    changed: false,
    firstName_value: '',
    firstName_valid: false,
    firstName_changed: false,
    lastName_value: '',
    lastName_valid: false,
    lastName_changed: false,
    email_value: '',
    email_valid: false,
    email_changed: false,
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: form.firstName_value,
      lastName: form.lastName_value,
      email:  form.email_value,
      message: form.message
    };
    axios({
        "method": "POST",
        "url": "https://hhmelements.com/contact/",
        "data": userData
    }).then((response) => {
        if(response.data.status = "success"){
            setStatus('Form submitted successfully!');
            setTimeout(()=>{togglePopup(false);setStatus('');},3000);
        }
        console.log(response);
    });
    //console.log(userData)
    /*
    axios.post("https://reqres.in/api/login", userData).then((response) => {
      console.log(response.status, response.data.token);
    });
    */
  };
  return (
    <>
      {popup ? (
        <>
          <div
            className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none"
          >
            <div className="tw-relative tw-my-6 tw-mx-auto tw-w-full tw-max-w-xl">
              {/*content*/}
              <div className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-white tw-outline-none focus:tw-outline-none">
                {/*header*/}
                <div className="tw-flex tw-items-start tw-justify-between tw-p-8 border-b tw-border-solid tw-border-blueGray-200 tw-rounded-t">
                  <h3 className="tw-text-2xl tw-font-semibold">
                  Contact Us
                  </h3>
                  <button
                    className="tw-p-1 tw-ml-auto tw-bg-transparent tw-border-0 tw-text-black tw-opacity-50 tw-float-right tw-text-3xl tw-leading-none tw-font-semibold tw-outline-none focus:tw-outline-none"
                    onClick={() => togglePopup(false)}
                  >
                    <span className="tw-bg-transparent tw-text-black tw-h-6 tw-w-6 tw-text-2xl tw-block tw-outline-none focus:tw-outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                { !!!status ?
                <form className="tw-px-8 tw-pb-8" onSubmit={handleSubmit}>
                    <div className="tw-grid tw-grid-cols-2 tw-gap-3 tw-mb-4">
                        <input name="firstName" className={`${!form.firstName_valid && form.firstName_changed ? 'tw-border-primary' : 'tw-border-darkBG'} tw-w-full tw-border  tw-p-2 tw-rounded-sm`}  placeholder="First name*" type="text" required value={form.firstName_value} onChange={(firstName)=>{
                            let isValid = !!firstName.target.value.trim() ? true : false;
                            setForm({...form, firstName_value: firstName.target.value, firstName_changed: true, firstName_valid: isValid });
                        }}/>
                        <input name="lastName" className={`${!form.lastName_valid && form.lastName_changed ? 'tw-border-primary' : 'tw-border-darkBG'} tw-w-full tw-border  tw-p-2 tw-rounded-sm`}  placeholder="Last name*"  type="text" required value={form.lastName_value} onChange={(lastName)=>{
                            let isValid = !!lastName.target.value.trim() ? true : false;
                            setForm({...form, lastName_value: lastName.target.value, lastName_changed: true, lastName_valid: isValid });
                        }}/>
                    </div>
                    <div className="tw-mb-4">
                        <input name="email"  className={`${!form.email_valid && form.email_changed ? 'tw-border-primary' : 'tw-border-darkBG'} tw-w-full tw-border  tw-p-2 tw-rounded-sm`} placeholder="Email*" required value={form.email_value} onChange={(email_value)=>{
                            let isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                            let emailValue = email_value.target.value.trim();
                            let isValid = email_value.target?.value && email_value.target.value.match(isValidEmail) ? true : false;
                            setForm({...form, email_value: emailValue, email_changed: true, email_valid: isValid });
                            console.log(form)
                        }}/>
                    </div>
                    <div className="tw-mb-4">
                        <textarea className="tw-w-full tw-border tw-border-darkBG tw-p-2 tw-rounded-sm" placeholder="Message" value={form.message} onChange={(message)=>{
                            setForm({...form, message: message.target.value });
                        }}></textarea>
                    </div>
                    <button type="submit" disabled={!form.firstName_valid || !form.lastName_valid || !form.email_valid} className={`${form.firstName_valid && form.lastName_valid && form.email_valid ? '' : 'tw-opacity-40'} tw-bg-darkBG tw-text-white tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150`}>Submit</button>
                </form>
                : 
                <div className='tw-px-8 tw-pb-8'>{status}</div>
                }
              </div>
            </div>
          </div>
          <div className="tw-opacity-25 tw-fixed tw-inset-0 tw-z-40 tw-bg-black" onClick={() => togglePopup(false)}></div>
        </>
      ) : null}
    </>
  );
}