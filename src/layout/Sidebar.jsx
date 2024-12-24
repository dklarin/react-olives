import React, { useState, useLayoutEffect } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledProSidebar = styled(ProSidebar)`
  position: fixed;
`;

export const Sidebar = () => {
  let collapsed = false;
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
  }

  function ShowWindowDimensions() {
    const [width] = useWindowSize();

    if (width < 1128) {
      collapsed = true;
    }
  }

  ShowWindowDimensions();

  return (
    <StyledProSidebar collapsed={collapsed}>
      <Menu iconShape="square">
        <SubMenu title="Polja" defaultOpen>
          <MenuItem>
            Polja
            <Link to="/olives" />
          </MenuItem>
          <MenuItem>
            Mapa <Link to="/mapa" />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Korisne stranice" defaultOpen>
          <MenuItem>
            Korisni linkovi
            <Link to="/arkod" />
          </MenuItem>
      
        </SubMenu>
        <SubMenu title="Danijel" defaultOpen>
          <MenuItem>
            Field List View
            <Link to="/fieldlistview" />
          </MenuItem>
        </SubMenu>
      </Menu>
    </StyledProSidebar>
  );
};

export default Sidebar;
