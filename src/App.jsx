import React, { useState } from 'react';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router';
import EditUserForm from './EditUserForm';
import UserTable from './UserTable';

const Home = () => (
  <section className='bmain'>
    <div className='bmain-content'>
      <h1>Home Your</h1>
      <h2>Small, Medium, Large Doghouse</h2>
      <p>
        Find the perfect doghouse for your furry friend. Customizable designs
        available.
      </p>
      <Link to='/shop' className='btn'>
        Shop Now
      </Link>
    </div>
    <div className='bmain-image'>
      <img src='images/large_dog.jpg' alt='Dog in a cozy doghouse' />
    </div>
  </section>
);

const Shop = () => {
  const initialFormState = {
    id: null,
    name: '',
    email: '',
    size: 'Medium',
    color: 'Brown',
    accessories: [],
    customNote: '',
  };

  const [orders, setOrders] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(initialFormState);
  const [formMessage, setFormMessage] = useState('');

  const addOrder = order => {
    order.id = orders.length + 1;
    setOrders([...orders, order]);
    setFormMessage(`Thank you ${order.name}, your order has been placed!`);
  };

  const updateOrder = (id, updatedOrder) => {
    setEditing(false);
    setOrders(orders.map(order => (order.id === id ? updatedOrder : order)));
  };

  return (
    <div className='container'>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>{editing ? 'Edit Order' : 'Place New Order'}</h2>
          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentOrder}
            setCurrentUser={setCurrentOrder}
            updateUser={updateOrder}
            addUser={addOrder}
          />
          <p style={{ color: 'green', textAlign: 'center' }}>{formMessage}</p>
        </div>
        <div className='flex-large'>
          <h2>Order List</h2>
          <UserTable users={orders} />
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <header>
    <div className='logo-container'>
      <img
        src='images/dog_logo2.png'
        alt='Dog House Logo'
        className='logo-img'
      />
      <h1>Doghouse Haven</h1>
    </div>
    <p>Find the Perfect Home for Your Furry Friend!</p>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='about'>About</Link>
      <Link to='faq'>FAQ</Link>
      <Link to='contact'>Contact</Link>
    </nav>
  </header>
);

const About = () => (
  <div className='about'>
    <h1>About Dog House</h1>
    <p>
      Welcome to Dog House, your go-to destination for high-quality,
      comfortable, and durable doghouses for your furry friends. We are
      passionate about providing pets with the best shelter options that suit
      their needs.
    </p>
    <h2>Why Choose Us?</h2>
    <ul>
      <li>
        <strong>Premium Quality:</strong> Our doghouses are made with
        high-quality, weather-resistant materials.
      </li>
      <li>
        <strong>Customizable Options:</strong> Choose from various sizes,
        colors, and personalization options.
      </li>
      <li>
        <strong>Fast &amp Reliable Shipping:</strong> We ensure quick delivery
        and hassle-free returns.
      </li>
      <li>
        <strong>Eco-Friendly:</strong> Our products are made using sustainable
        and non-toxic materials.
      </li>
    </ul>
    <h2>Our Mission</h2>
    <p>
      Our mission is to provide safe and cozy homes for dogs of all sizes while
      maintaining sustainability and affordability. We believe that every dog
      deserves a comfortable and secure place to rest.
    </p>
    <h2>Our Selection</h2>
    <div class='doghouse-options'>
      <div class='option'>
        <img src='images/small_dog.jpg' alt='Small Doghouse' />
        <h3>Small</h3>
        <p>Compact and cozy, perfect for small breeds.</p>
      </div>
      <div class='option'>
        <img src='images/medium_dog.jpg' alt='Medium Doghouse' />
        <h3>Medium</h3>
        <p>Spacious enough for medium-sized dogs.</p>
      </div>
      <div class='option'>
        <img src='images/large_dog2.jpg' alt='Large Doghouse' />
        <h3>Large</h3>
        <p>Perfect for large breeds needing extra room.</p>
      </div>
    </div>
  </div>
);

const FAQ = () => (
  <div className='faq'>
    <h1>Frequently Asked Questions</h1>
    <details class='faq-item'>
      <summary>What sizes of doghouses do you offer?</summary>
      <p>
        We offer small, medium, and large doghouses to accommodate all breeds.
      </p>
    </details>
    <details class='faq-item'>
      <summary>Are your doghouses weatherproof?</summary>
      <p>
        Yes! Our doghouses are made with weather-resistant materials to keep
        your pet comfortable in any season.
      </p>
    </details>
    <details class='faq-item'>
      <summary>Can I customize my doghouse?</summary>
      <p>
        Absolutely! We offer customization options such as color, material, and
        even personalized nameplates.
      </p>
    </details>
    <details class='faq-item'>
      <summary>How long does shipping take?</summary>
      <p>
        Orders typically take 5-7 business days for standard shipping. Custom
        orders may take 7-14 business days.
      </p>
    </details>
    <details class='faq-item'>
      <summary>What is your return policy?</summary>
      <p>We offer a 30-day return policy for unused and undamaged products.</p>
    </details>
  </div>
);

const Contact = () => {
  const [formMessage, setFormMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormMessage(
      'Thank you for your message, ' +
        form.name +
        '! We will get back to you soon.'
    );
    setForm({ name: '', email: '', inquiry: '', message: '' });
  };

  return (
    <section className='contact'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='name'
          placeholder='Your Name'
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          id='email'
          placeholder='Your Email'
          value={form.email}
          onChange={handleChange}
          required
        />
        <select id='inquiry' value={form.inquiry} onChange={handleChange}>
          <option value=''>Select Inquiry Type</option>
          <option value='General Inquiry'>General Inquiry</option>
          <option value='Complain'>Complain</option>
          <option value='Partnership'>Partnership</option>
          <option value='Customization'>Customization</option>
        </select>
        <textarea
          id='message'
          placeholder='Your Message'
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type='submit'>Send</button>
      </form>
      <p style={{ color: 'green' }}>{formMessage}</p>
    </section>
  );
};

const Footer = () => (
  <footer>&copy; 2025 Dog House. All rights reserved.</footer>
);

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/about' element={<About />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
