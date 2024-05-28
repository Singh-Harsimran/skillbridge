import { useState } from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Slider from './components/slider';
import Tiles from './components/tiles';
import ListOne from './components/listOne';
import ListTwo from './components/listTwo';

function App() {
  const [data, setdata] = useState(window.skillbridge ? window.skillbridge : {})

  return (
    <>{data &&
      <div className='skillbridge-container' style={{'--color-primary':data.color.primary, '--color-darkBackground':data.color.darkBackground,'--color-lightBackground':data.color.lightBackground,'--color-iconBackground':data.color.iconBackground, '--color-textLight':data.color.textLight}}>
        <Header data={data.data} />
        <Banner data={data.data} />
        <Slider data={data.data} />
        <Tiles data={data.data} />
        <ListOne data={data.data} />
        <ListTwo data={data.data} />
      </div>
      }
    </>
  )
}

export default App
