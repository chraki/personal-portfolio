import About from './components/About';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useRef, useState } from 'react';

const App = () => {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(null);

  useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start'})
  },[toggle])

  return (
    <>
      <Header setToggle={setToggle} />
      <About scrollRef={ toggle === 'About' ? ref : null} />
      <Education scrollRef={ toggle == 'Education' ? ref : null} />
      <Experience scrollRef={ toggle == 'Experience' ? ref : null} />
      <Projects  scrollRef={ toggle == 'Projects' ? ref : null}/>
      <Contact scrollRef={ toggle == 'Contact' ? ref : null} />
    </>
  )
}

export default App;
