"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navRouter = [
  { id: 1, route: "/members", title: "Matches" },
  { id: 2, route: "/lists", title: "Lists" },
  { id: 3, route: "/messages", title: "Messages" },
];

const TopNav = () => {
  const path = usePathname();
  return (
    <Navbar
      maxWidth="xl"
      // className="bg-gradient-to-r from-purple-400 to-orange-300 text-white"
      className="bg-gray-200"
      classNames={{
        item: ["text-md", "uppercase"],
      }}
    >
      <NavbarBrand as={Link} href={"/"}>
        <div className="font-semibold text-3xl">
          <span className="text-orange-500">Next</span>
          <span>Match </span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        {navRouter.map((route) => (
          <NavbarItem
            key={route.id}
            as={Link}
            href={route.route}
            className={
              path === route.route ? "font-semibold text-orange-600" : ""
            }
          >
            {route.title}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href={"/login"}
          variant="bordered"
          className="border-gray-700 bg-orange-100"
        >
          Login
        </Button>
        <Button
          as={Link}
          href={"/register"}
          variant="bordered"
          className="border-gray-700 bg-orange-100"
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNav;
