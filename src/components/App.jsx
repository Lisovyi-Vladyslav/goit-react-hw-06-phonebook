
import { useSelector, useDispatch} from 'react-redux';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import {deleteUserAction} from 'redux/users.slice';


export function App() {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.users.contacts);
  const filter = useSelector(state => state.users.filter);
  
  
const handleDelete = idx => {
 
dispatch(
      deleteUserAction(idx) ,
    );
	};
   
const handleContacts = () => {
		const normalizedFilter = filter.toLowerCase();

     return contacts.filter(contact =>
       contact.name.toLowerCase().includes(normalizedFilter)
     );
	};

  return (
   <>
         <div>
   <h1>Phonebook</h1>
           <ContactForm />

   <h2>Contacts</h2>
           <Filter  handleContacts={handleContacts} /> 
           <ContactList contacts={handleContacts()} handleDelete={ handleDelete} />
         </div>
      </>
        
  )
}


// const handleAddContact = ({ name, number }) => {
// 		const names = contacts.map(contact => contact.name);
// 		if (names.indexOf(name) >= 0) {
// 			alert(name + " is already in contacts.");
// 			return;
// 		}
//   setContacts(prevContacts => (
//       [{ name, number, id: nanoid() }, ...prevContacts]
//   ));
//   console.log(contacts)
// 	};
  // const handleFilter = (value) => {
  //   // setFilter(value);
  //    dispatch(
  //     usersFilterAction(value) ,
  //   );
  //  };