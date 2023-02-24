import PropTypes from "prop-types";
import {usersFilterAction} from 'redux/users.slice';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const Filter = (props) => {
 const dispatch = useDispatch();

  const { register, watch } = useForm({
    defaultValues: {
     filter: '',
    }
  });
let filter = watch('filter');

  
  useEffect(() => {
  dispatch(
    usersFilterAction(filter),
    );
     props.handleContacts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

    return (
      <>
       <form >
        <h2>Filter</h2>
          <input {...register("filter")} type="text" />
        </form>
      </>
          
    );
}

Filter.propTypes = {
  handleContacts: PropTypes.func.isRequired,
};