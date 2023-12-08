import SideBarTask from "./SideBarTask"
import SidebarList from "./SidebarList"

const SideBar = () => {
  return (
    <div className="sideBar">
        <SideBarTask/>
        <SidebarList/>
    </div>
  )
}

export default SideBar