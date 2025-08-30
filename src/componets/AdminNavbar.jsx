import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminNavbar = () => {

  return (
    <Sidebar className="h-screen w-64 bg-gray-900 text-white shadow-lg ">
      <SidebarItems className="">
        <SidebarItemGroup>
          <SidebarItem href="layout" icon={HiChartPie}>
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
          <SidebarItem as={Link} to="/admin/adminLogin" con={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem as={Link} to="/admin/adminSignup" icon={HiTable}>
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};

export default AdminNavbar;
