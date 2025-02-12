import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div>nav</div>
      <div><Outlet /></div>
      <div>footer</div>
    </div>
  )
}

export default Layout