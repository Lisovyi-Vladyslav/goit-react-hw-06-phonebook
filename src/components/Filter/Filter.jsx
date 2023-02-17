import PropTypes from "prop-types";
import {usersFilterAction} from 'redux/users.slice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

export const Filter = (props) => {
 const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      usersFilterAction(values.filter) ,
    );
    props.handleContacts()
        actions.resetForm();
    };
  

    return (
      <>
        <Formik
       initialValues={{ filter: ''}}
       onSubmit={handleSubmit}
        >
                <Form>

            <h2>Filter</h2>
           <Field type="text" name="filter" />
           <ErrorMessage name="filter" component="div" />
           <button type="submit">
            Submit
           </button>
         </Form>   
     </Formik>
      </>
          
    );
}

Filter.propTypes = {
  handleContacts: PropTypes.func.isRequired,
};