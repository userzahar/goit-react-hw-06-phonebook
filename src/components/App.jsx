import { Form } from "./Form/Form";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux/es/exports";

export function App() {
  const dispatch = useDispatch();
  const {filter, contacts} = useSelector(state => state);
  const createContacts = (data) => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is alredy in contacts`)
      return false;
    } else {
      dispatch(
        {
          type: 'contacts/add',
          payload: {
            id: nanoid(),
            name: data.name,
            number: data.number,
          }
        }
      )
    }
  }
  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "filter") {
      dispatch({ type: 'contacts/filter', payload: value })
    }

  }
  const filteredContacts =()=> {
        if (!filter.length) {
            return contacts;
        }
        return contacts.filter(({name}) => {
      return name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        })
  }
  const handleDelete = (id) => {
    dispatch({
    type: 'contacts/remove',
    payload: {
      id: id,
    },
  })
  }        
  //  useEffect(() => {

  //   localStorage.setItem('contacts', JSON.stringify(contacts))

  // }, [contacts])
  
  return <>
      <h1>Phonebook</h1>
      <Form createContacts={createContacts} />
      <h2>Contacts</h2>
    <Filter handleChange={handleChange} />
    <ContactList deleteItem={handleDelete} filterList={()=>filteredContacts()}  />
  </>
}
  
