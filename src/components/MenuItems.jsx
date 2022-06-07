import Dropdown from './Dropdown'
import { useState, useEffect, useRef } from 'react'



const MenuItems = ({items, depth}) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);

    };
  }, [dropdown]);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  }
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  }
  return (
    <li className='menu-items' ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
          <button type='button' aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"} 
           onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{" "}
            {depth > 0 ? <span>&raquo;</span> : <span className='arrow' />}
          </button>
          <Dropdown depth={depth} submenus={items.submenu} dropdown={dropdown}/>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;