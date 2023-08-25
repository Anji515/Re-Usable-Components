import logo from './logo.svg';
import './App.css';
import Accordian from './Components/Accordian';
import { useState } from 'react';

function AccordionItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleOpen}>{title}</button>
      {isOpen && <h1>{text}</h1>}
    </div>
  );
}

function App() {
  const prodItems = [
    { id: 1, title: 'Section-1', text: 'Welcome to section- 1 text' },
    { id: 2, title: 'Section-2', text: 'Welcome to section- 2 text' },
    { id: 3, title: 'Section-3', text: 'Welcome to section- 3 text' },
    { id: 4, title: 'Section-4', text: 'Welcome to section- 4 text' },
  ];

  return (
    <div className="App">
      <h1>Welcome to accordion</h1>
      {prodItems.map((el) => (
        <AccordionItem key={el.id} title={el.title} text={el.text} />
      ))}
    </div>
  );
}

export default App;