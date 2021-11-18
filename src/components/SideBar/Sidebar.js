import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from "./SidebarStyle";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="chapters" onClick={toggle}>
            Chapters
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="activities" onClick={toggle}>
            Activities
          </SidebarLink>
          <SidebarLink to="awards" onClick={toggle}>
            Awards
          </SidebarLink>
          <SidebarLink to="members" onClick={toggle}>
            Members
          </SidebarLink>
          {/* <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink> */}
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to="/">Button</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
