import MenuItems from "./MenuItems"

const Dropdown = ({ submenus, dropdown, depth }) => {
  depth = depth + 1;
  const dropdownClass = depth > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        
          <MenuItems depth={depth} items={submenu} key={index} />
        
      ))}
    </ul>
  )
}

export default Dropdown