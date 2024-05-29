import { useState, createContext } from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Slider from './components/slider';
import Tiles from './components/tiles';
import ListOne from './components/listOne';
import ListTwo from './components/listTwo';
import Modal from './components/Form';
import Button from './components/Button';
import PageContext from './components/pageContext';

function App() {
  const [data, setdata] = useState(window.skillbridge ? window.skillbridge : {})

  const [popup, togglePopup] = useState(false);
  const value = { popup, togglePopup };
  
  return (
    <><PageContext.Provider value={value}>{data &&
      <div className='skillbridge-container' style={{'--color-primary':data.color.primary, '--color-darkBackground':data.color.darkBackground,'--color-lightBackground':data.color.lightBackground,'--color-iconBackground':data.color.iconBackground, '--color-textLight':data.color.textLight}}>
        <Header data={data.data} />
        <Banner data={data.data} />
        <Slider data={data.data} />
        <Tiles data={data.data} />
        <ListOne data={data.data} />
        <ListTwo data={data.data} />
        <Modal data={data.data} />
        <div className='tw-flex tw-justify-center tw-mb-8'><Button fullWidth="true" bg="tw-bg-primary"/></div>
      </div>
      }
    </PageContext.Provider></>
  )
}

export default App
