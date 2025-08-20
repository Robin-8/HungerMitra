

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

import React from 'react'
import { Link } from "react-router-dom";

const AdminNavbar = () => {
 return (
    <Sidebar className="h-screen w-64 bg-gray-900 text-white shadow-lg ">
      <SidebarItems className="">
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards}>
            Order
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag} >
           Products
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem as={Link} to="/admin/adminLogin"con={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem as={Link} to="/admin/adminSignup" icon={HiTable}>
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}

export default AdminNavbar
