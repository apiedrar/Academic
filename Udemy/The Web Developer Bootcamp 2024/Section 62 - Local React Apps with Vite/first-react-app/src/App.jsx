import './App.css'
/* import Greeter from './Greeter.jsx'
import Heading from './Heading.jsx'
import DieRoll from './DieRoll.jsx'
import ListPicker from './ListPicker.jsx'
import DoubleCheck from './DoubleCheck.jsx'
import ColorList from './ColorList' */
import SlotMachine from './SlotMachine'

function App() {
  return (
    <>
      <div>
        <SlotMachine val1='🔱' val2='🔱' val3='🔱' />
        <SlotMachine val1='🔱' val2='🚫' val3='🔱' />
        {/* <ColorList colors={['red', 'pink', 'teal', 'orange']} />
        <ColorList colors={['blue', 'green', 'cyan', 'magenta']} />
        <DoubleCheck/>
        <DoubleCheck/>
        <DoubleCheck/>
        <ListPicker/>
        <Greeter user='Dani ❤️' from="Ale"/>
        <Greeter user='Manchitas 🐱' from="Tigrita"/>
        <Greeter user='Tigrita 🐱' from="Manchitas"/>
        <Greeter user='Ale' from="Dani"/>
        <Heading/>
        <DieRoll numSides={6} />
        <DieRoll numSides={10} />
        <DieRoll numSides={20} /> */}
      </div>
    </>
  )
}

export default App
