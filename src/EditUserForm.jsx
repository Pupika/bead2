import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const initialFormState = {
    id: null,
    name: '',
    email: '',
    size: 'Medium',
    color: 'Brown',
    accessories: [],
    customNote: '',
  };

  const [order, setOrder] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  useEffect(() => {
    setOrder(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };

  const resetForm = () => {
    props.setEditing(false);
    setOrder(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  const handleAccessorySelect = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, option => option.value);
    setOrder({ ...order, accessories: selectedValues });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!order.name || !order.email) return;

        props.editing
          ? props.updateUser(order.id, order)
          : props.addUser(order);
        resetForm();
      }}
    >
      <input
        type='text'
        name='name'
        placeholder='Customer Name'
        value={order.name}
        onChange={handleInputChange}
        required
      />
      <input
        type='email'
        name='email'
        placeholder='Customer Email'
        value={order.email}
        onChange={handleInputChange}
        required
      />
      <label> Size </label>
      <select name='size' value={order.size} onChange={handleInputChange}>
        <option value='Small'>Small ( - 10 kg)</option>
        <option value='Medium'>Medium (11 - 25 kg)</option>
        <option value='Large'>Large (25 - 40 kg)</option>
      </select>
      <label> Color </label>
      <select name='color' value={order.size} onChange={handleInputChange}>
        <option value='Brown'>Brown</option>
        <option value='White'>White</option>
        <option value='Black'>Black</option>
        <option value='Blue'>Blue</option>
        <option value='Red'>Red</option>
        <option value='Grey'>Grey</option>
      </select>
      <label htmlFor="accessories">Accessories</label>
      <select
        name="accessories"
        id="accessories"
        multiple
        value={order.accessories}
        onChange={handleAccessorySelect}
        style={{ display: "block", width: "80%", margin: "10px auto", padding: "10px", height: "100px" }}
      >
        <option value="Terrace">Terrace</option>
        <option value="Heated Door">Heated Door</option>
        <option value="Window">Window</option>
        <option value="Insulated Floor">Insulated Floor</option>
        <option value="Solar Light">Solar Light</option>
      </select>
      <textarea
        name='customNote'
        placeholder='Any special instructions?'
        value={order.customNote}
        onChange={handleInputChange}
      />
      <button type='submit'>
        {props.editing ? 'Update Order' : 'Place Order'}
      </button>
      {props.editing && (
        <button
          type='button'
          onClick={resetForm}
          className='button muted-button'
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditUserForm;
