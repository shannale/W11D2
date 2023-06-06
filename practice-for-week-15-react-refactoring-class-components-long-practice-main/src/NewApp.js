import {React,useState} from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';
import NewFolder from './components/NewFolder'
const names = [
    'Abba',
    'Barbara',
    'Barney',
    'Jeff',
    'Jenny',
    'Sally',
    'Sarah',
    'Xander'
  ];
  
  const folders = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second folder here' },
    { title: 'three', content: 'Third folder here' }
  ];
const NewApp = () =>{
    const [showClock,setShowClock] = useState(true);
    
    const toggleClock = () =>{
        setShowClock(prev => !prev);
    }

    return(
        <div className="widgets">
        <NewFolder folders={folders} />
        <Weather />
        <ClockToggle toggleClock={toggleClock} />
        {showClock && <Clock />}
        <Autocomplete names={names} />
      </div>
    )

}

export default NewApp;