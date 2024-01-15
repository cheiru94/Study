import React from "react";
import { SidebarData } from "./SidebarData";
import SlidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    /* 사이드바 각 버튼에는 icon , title , link의 내용들이 담겨있다. */
    <div className="Sidebar">
      <SlidebarIcon />
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
