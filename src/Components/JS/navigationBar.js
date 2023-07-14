import '../CSS/navigationBarCss.css';

function NavigationBar(){

    return (
    <div className='navBar'>
        <div class="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <button class="dropdown-btn">Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-container">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <a href="#contact">Search</a>
        </div>

        <div class="main">
          <h2>Sidebar Dropdown</h2>
          <p>Click on the dropdown button to open the dropdown menu inside the side navigation.</p>
          <p>This sidebar is of full height (100%) and always shown.</p>
          <p>Some random text..</p>
        </div>


    </div>

    );
}

export default NavigationBar;

