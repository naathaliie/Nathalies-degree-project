import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { NavbarMenuItem } from "../../../types/types";
import Link from "next/link";

type HamburgerMenuProps = {
  menuItems: NavbarMenuItem[];
};

const HamburgerMenu = ({ menuItems }: HamburgerMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DehazeIcon sx={{ color: "white", width: 30, height: 30 }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => {
          return (
            <MenuItem key={index} onClick={handleClose}>
              <Link href={`/info/${item.route}`} key={index}>
                <div className=" hover:underline underline-offset-8 decoration-2 font-bold">
                  {item.title}
                </div>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
