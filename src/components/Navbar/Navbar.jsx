import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.gericht} alt="app__logo" /> */}
        <p className='app__navbar_logo-str'>STR</p>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans btn" data-bs-toggle="modal" data-bs-target="#ModalLo">Log In / Registration</a>
        <div />
        <a href="#login" className="p__opensans btn" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
      {/* <div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div> */}
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content black"  data-bs-theme="dark">
      <div class="modal-header">
        <h1 class="modal-title fs-5 golden" id="exampleModalToggleLabel">Booking</h1>
        <button type="button" class="btn-close golden" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div class="modal-body">
  <form class="row">
  
<div className="mb-3 golden">
  <label for="Name" class="col-1 col-form-label">Name</label>
    
    <input id="Name" class="form-control col-11 bg-dark" type="text" />
    </div>
    <div class="mb-3 golden">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control golden bg-dark" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for='select' class="col-form-label golden">Number of seats</label>
<select class="form-select bg-dark" aria-label="Default select example" id='select'>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
</select>
</div>
    <div className="mb-3 golden">
    <label for="date" class="col-form-label">Date</label>
    
<input id="startDate" class="form-control bg-dark" type="date" />
</div>
  </form>

</div>
      <div class="modal-footer">
        <button class="btn golden bg-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Apply</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content black" data-bs-theme="dark">
      <div class="modal-header">
        <h1 class="modal-title fs-5 golden" id="exampleModalToggleLabel2">Ticket Sended to @Email</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body golden">
        Have a fine dining with us
      </div>
      
    </div>
  </div>
</div>

    </nav>
    
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import images from '../../constants/images';
// import './Navbar.css';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Send the selected date to the server
//     setToggleMenu(false);
//   };

//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         {/* <img src={images.gericht} alt="app__logo" /> */}
//         <p className='app__navbar_logo-str'>STR</p>
//       </div>
//       <ul className="app__navbar-links">
//         <li className="p__opensans"><a href="#home">Home</a></li>
//         <li className="p__opensans"><a href="#about">About</a></li>
//         <li className="p__opensans"><a href="#menu">Menu</a></li>
//         <li className="p__opensans"><a href="#awards">Awards</a></li>
//         <li className="p__opensans"><a href="#contact">Contact</a></li>
//       </ul>
//       <div className="app__navbar-login">
//         <a href="#login" className="p__opensans">Log In / Registration</a>
//         <div />
//         <button onClick={() => setToggleMenu(true)} className="p__opensans">Book Table</button>
//         {toggleMenu && (
//           <dialog open>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="date">Select a date:</label>
//               <DatePicker selected={selectedDate} onChange={handleDateChange} />
//               <button type="submit">Submit</button>
//             </form>
//           </dialog>
//         )}
//       </div>
//       <div className="app__navbar-smallscreen">
//         <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
//         {toggleMenu && (
//           <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
//             <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
//             <ul className="app__navbar-smallscreen_links">
//               <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
//               <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
//               <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
//               <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
//               <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
