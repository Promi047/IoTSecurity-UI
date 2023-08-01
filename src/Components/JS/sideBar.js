import SideBarItem from './sideBarItem.js';
import menuData from '../JSON/menuData.json';

function SideBar(){

    return (
 <div class="sidebar">
        { menuData.map((item, index) => <SideBarItem key={index} item={item} />) }
  </div>

    );
}

export default SideBar;

