import React from 'react'

import { ReactComponent as LogoEsi } from "./../assets/logoESIWhite.svg"

import { navListEsiMenuItems, navListEtudeMenuItems, navListRelexMenuItems, navListVieMenuItems } from '../constants/navbar'

//components
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

//Icons
import {
  ChevronDownIcon,   //flesh navbar icon
  Bars3Icon,  //burger menu navbar
  XMarkIcon,   //x mark navbar
} from "@heroicons/react/24/outline";

function NavListMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = props.menuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-start gap-3 rounded-lg lg:w-[280px]">
          <div className="flex items-center justify-center">
            {" "}
            {icon}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-[16px] font-bold mb-1"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-bold text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {props.menuItemTitle}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block mt-5">
          <div className='flex flex-col m-5 mt-7'>
            <p className='mb-3 pl-3'>{props.menuItemSubTitle}</p>
            <ul className="grid grid-cols-2 gap-3 outline-none outline-0">
              {renderItems}
            </ul>
          </div>
        </MenuList>
      </Menu>

      {/* menusublist mobile vue*/}
      <div className="block bg-lightblue bg-opacity-90 rounded-lg lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu menuItems={navListEsiMenuItems} menuItemTitle={"Esi"} menuItemSubTitle={"l'Ecole"} />
      <NavListMenu menuItems={navListEtudeMenuItems} menuItemTitle={"Etudes"} menuItemSubTitle={"Etudes"} />
      <NavListMenu menuItems={navListEsiMenuItems} menuItemTitle={"Post-Graduation et Recherche"} menuItemSubTitle={"Post-Graduation & Recherche"} />
      <NavListMenu menuItems={navListRelexMenuItems} menuItemTitle={"Coopération et Formation"} menuItemSubTitle={"Coopération & formation"} />
      <NavListMenu menuItems={navListVieMenuItems} menuItemTitle={"Vie à l’école"} menuItemSubTitle={"l'Ecole"} />

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white font-bold">
          Nos Alumni
        </ListItem>
      </Typography>
    </List>
  );
}

const NavbarComponent = () => {

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="w-full px-[3rem] py-5 bg-[#00172B]" fullWidth color="blue">
      <div className="flex items-center justify-between text-white">
        <LogoEsi />
        <div className='flex'>
          <div className="hidden lg:block mr-6">
            <NavList />
          </div>
          <div className="hidden lg:flex">
            <Menu>
              <MenuHandler>
                <Button size="md" className="rounded-full bg-blue flex justify-center items-center gap-1">
                  <Bars3Icon className="h-4 w-4" strokeWidth={2} />
                  Outils
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Documents</MenuItem>
                <MenuItem>Règlementation</MenuItem>
                <MenuItem>Index</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <IconButton
          variant="text"
          color="white"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center lg:hidden">
          <Menu>
            <MenuHandler>
              <Button size="md" fullWidth className="rounded-full bg-blue flex justify-center items-center gap-1" >
                <Bars3Icon className="h-4 w-4" strokeWidth={2} />
                Outils
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Documents</MenuItem>
              <MenuItem>Règlementation</MenuItem>
              <MenuItem>Index</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent