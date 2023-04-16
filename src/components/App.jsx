import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { filterContacts } from "redux/filter/filterSlice";
import { addContact, deleteContact } from "redux/contacts/contactSlice";


export function App() {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => {
     console.log("🚀 ~ state:", state.filter)
    return state.filter
  });

  console.log("💦 ~ filter:", filter)

  const { contacts } = useSelector(state => state);
  console.log("💢 ~ contacts:", contacts)
  
  const createContacts = (data) => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is alredy in contacts`)
      return false;
    } else {
      console.log("💥", data);
      dispatch(addContact(data))
    }
  }
  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "filter") {
      dispatch(filterContacts(value))
    }

  }
  const filteredContacts = () => {

        if (!filter?.length) {
            return contacts;
        }
        return contacts?.filter(({name}) => {
      return name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        })
  }
  const handleDelete = (id) => {
    dispatch(deleteContact(id))
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
 

  
