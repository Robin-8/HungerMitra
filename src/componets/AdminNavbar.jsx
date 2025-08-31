import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiChartPie,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
  HiLogin,
  HiUserAdd,
} from "react-icons/hi";

import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <Sidebar className="h-screen w-64 bg-gray-900 text-white shadow-lg">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="admin" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <Link to={"orderAdmin"}>
            <SidebarItem icon={HiViewBoards}>Order</SidebarItem>
          </Link>
          <SidebarItem href="#" icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <Link to={"userDetails"}>
            <SidebarItem icon={HiUser}>Users</SidebarItem>
          </Link>
          <SidebarItem as={Link} to="/admin/adminLogin" icon={HiLogin}>
            Sign In
          </SidebarItem>
          <SidebarItem as={Link} to="/admin/adminSignup" icon={HiUserAdd}>
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};

export default AdminNavbar;
