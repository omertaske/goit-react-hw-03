import './App.css'
import { useState,useEffect  } from "react";
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
const defaltusers =  [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

 const [filtre, setFiltre] = useState("");
 const [kisiler1, setKisiler1] = useState(() => {
  const stored = localStorage.getItem("kisiler1"); 
  return stored ? JSON.parse(stored) : defaltusers; 
});
  const kisilerifiltresi = kisiler1.filter(con=>con.name.toLowerCase().includes(filtre.toLowerCase()));
  const contactekleme = (newContact) => {
    setKisiler1(prev => [...prev, newContact]);
  };
  const contactsilme = (id) => {
  setKisiler1(prev => prev.filter(k => k.id !== id));
};


  useEffect(() => {
    localStorage.setItem("kisiler1", JSON.stringify(kisiler1));
  }, [kisiler1]);
  return (
    <>
  <h1 className="text-5xl font-extrabold text-amber-500 text-center mt-10 mb-6 
               bg-gradient-to-r from-blue-300 via-amber-400 to-blue-300 
               py-7 rounded-xl shadow-lg text-fuchsia-950 animate-bounce hover:from-amber-400 hover:to-amber-400 hover:via-blue-300 transition-colors duration-500">
  PhoneBook
</h1>
<ContactForm onAddContact={contactekleme}/>
<SearchBox filter={filtre} setFilter={setFiltre}/>

<ContactList waitinguser={kisilerifiltresi} ondelete={contactsilme}/>
<div className='mb-15'/>
    </>
  )
}

export default App
