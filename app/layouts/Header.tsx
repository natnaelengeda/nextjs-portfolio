"use client"

import {
  IconMenu2,
} from "@tabler/icons-react";
import Image from 'next/image'
import NavLinks from "./components/NavLinks";

// Icons
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";

export default function Header() {
  return (
    <header className="z-40 w-full h-20 md:h-24 flex flex-row gap-20 items-center justify-center fixed md:px-20 glassy-header">
      <div className="container flex flex-row md:gap-20 items-center justify-between px-5 md:px-0 ">
        <div className="transition duration-300  md:px-5 md:py-1  flex flex-row gap-2 items-center justify-center">
          <div className="w-full hidden">
            <Image
              priority={false}
              className="w-12 md:w-10 h-auto"
              src="/assets/images/logo.png"
              width={500}
              height={500}
              alt="Logo"
            />
          </div>
          <h1 className="link-underline text-3xl font-bold font-VT323 text-white">
            Natnael.Engeda
          </h1>
        </div>

        <div className="hidden lg:block px-10 py-3 text-white">
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
            {/* <NavLinks href="/contact" exact className="normal-header link-underline hover:line-height-normal">
              Contact
            </NavLinks> */}
            <NavLinks
              href="/resume" exact className="transition px-6 py-3 bg-gradient-to-r from-[#F7971E] to-[#FFD200] rounded-lg hover:bg-transparent hover:text-white outline-none text-black">
              Resume
            </NavLinks>
          </ul>
        </div>

        <div className="lg:hidden block">
          <Dropdown>
            <DropdownTrigger>
              <div
                className="w-12 h-12 bg-gradient-to-r from-[#F7971E] to-[#FFD200] rounded-lg flex items-center justify-center">
                <IconMenu2
                  size={25}
                  className="text-white" />
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Link Actions"
              className="rounded">
              <DropdownItem
                key="home"
                href="/"
                className="h-12">
                Home
              </DropdownItem>
              <DropdownItem
                key="skills"
                href="/skills"
                className="h-12">
                Skills
              </DropdownItem>
              <DropdownItem
                key="portfolio"
                href="/portfolio"
                className="h-12">
                Portfolio
              </DropdownItem>
              {/* <DropdownItem key="contact" href="/contact"> Contact</DropdownItem> */}
              <DropdownSection>
                <DropdownItem key="resume" href="/resume" >
                  <div className="w-full flex flex-row items-center justify-center bg-gradient-to-r from-[#F7971E] to-[#FFD200]  py-3 rounded-lg">
                    <p className="text-white">Resume</p>
                  </div>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header >
  )
}
