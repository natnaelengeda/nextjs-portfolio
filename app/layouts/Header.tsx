"use client"

import {
  IconMenu2,
} from "@tabler/icons-react";
import { Menu } from "@mantine/core";
import Image from 'next/image'
import NavLinks from "./components/NavLinks";


export default function Header() {
  return (
    <header className="z-40 w-full h-20 md:h-24 flex flex-row gap-20 items-center justify-center fixed md:px-20 glassy-header">
      <div className="container flex flex-row gap-20 items-center justify-between px-5 md:px-0 ">
        <div className="transition duration-300  md:px-5 md:py-1  flex flex-row gap-2 items-center justify-center">
          <div className="w-full">
            <Image
              className="w-12 md:w-12 h-auto"
              src="/assets/images/logo.png"
              width={500}
              height={500}
              alt="Logo"
            />
          </div>
          <h1 className="hidden md:block link-underline text-3xl font-bold font-VT323 text-black">
            Natty.Engeda
          </h1>
        </div>

        <div className="hidden lg:block px-10 py-3 ">
          <ul className="flex flex-row items-center gap-10 font-semibold">
            <NavLinks href="/" exact className="normal-header link-underline hover:line-height-normal">
              Home
            </NavLinks>
            <NavLinks href="/skills" exact className="normal-header link-underline hover:line-height-normal">
              Skills
            </NavLinks>
            <NavLinks href="/portfolio" exact className="normal-header link-underline hover:line-height-normal">
              Portfolio
            </NavLinks>
            <NavLinks href="/contact" exact className="normal-header link-underline hover:line-height-normal">
              Contact
            </NavLinks>
            <NavLinks href="/resume" exact className="transition px-5 py-4 bg-[#017f6c] rounded-lg text-white hover:bg-transparent border hover:border-[#017f6c] hover:text-[#017f6c] outline-none">
              Resume
            </NavLinks>
          </ul>
        </div>

        <div className="lg:hidden block">
          <Menu
            shadow="md"
            width={200}>
            <Menu.Target>
              {/* <Button className="bg-violet-500 active:bg-violet-600 p-0 w-12 h-10"> */}
              <div className="w-12 h-12 glassy-header rounded-full flex items-center justify-center">
                <IconMenu2 size={25} />
              </div>
              {/* </Button> */}
            </Menu.Target>

            {/* <Menu.Dropdown>
              <Menu.Item className="active:bg-gray-300" component={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item
                className="active:bg-gray-300"
                component={Link}
                to="/skills"
              >
                Skills
              </Menu.Item>
              <Menu.Item
                className="active:bg-gray-300"
                component={Link}
                to="/contact"
              >
                Contact
              </Menu.Item>
              <Menu.Item
                className="active:bg-gray-300"
                component={Link}
                to="/portfolio"
              >
                Portfolio
              </Menu.Item>
              <Menu.Item
                className="active:bg-gray-300"
                component={Link}
                to="/resume"
              >
                Resume
              </Menu.Item>
            </Menu.Dropdown> */}
          </Menu>
        </div>
      </div>
    </header >
  )
}
