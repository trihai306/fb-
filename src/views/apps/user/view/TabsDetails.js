// ** React Imports
import { Fragment, useState } from "react";

// ** Icons Imports
import { Home, Settings, EyeOff, User } from "react-feather";

// ** Reactstrap Imports
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Friends from "./viewFriends/index.js";
import Page from "./viewPage/index.js";
import GroupsPage from "./viewGroups/index.js";
import UserIdTab from './viewUserId';
import ScanPost from "./ScanPost/index.js";
import AutoCommentPage from "./AutoComment/index.js";

const headerTitles = [
  {
    title: "Cá nhân",
    key: "persional",
    components: (
      <>
        <h1>Hello worlds</h1>
      </>
    ),
  },
  {
    title: "Bạn bè",
    key: "friends",
    components: <Friends />,
  },
  {
    title: "Nhóm",
    key: "group",
    components: <GroupsPage />,
  },
  {
    title: "Page",
    key: "page",
    components: <Page />,
  },
  {
    title: "User Id",
    key: "userId",
    components: <UserIdTab />,
  },
  {
    title: "Úp tin",
    key: "sendMess",
    components: <></>,
  },
  {
    title: "Auto Comment",
    key: "autoComment",
    components: <AutoCommentPage />,
  },
  {
    title: "Quét bài viết",
    key: "scan",
    components: <ScanPost />,
  },
  {
    title: "Trình duyệt",
    key: "browser",
    components: <></>,
  },
];

const TabsIcons = () => {
  // ** State
  const [active, setActive] = useState(headerTitles[6].key);

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <Fragment>
      <Nav tabs>
        {headerTitles?.map((item) => {
          return (
            <NavItem key={item.key}>
              <NavLink
                active={active === item.key}
                onClick={() => {
                  toggle(item.key);
                }}
              >
                <Home className="font-medium-3 me-50" />
                <span className="align-middle w-bold">{item.title}</span>
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        {headerTitles?.map((item) => {
          return active === item.key && (
            <TabPane key={item.key} tabId={item.key}>
              {item.components}
            </TabPane>
          );
        })}
      </TabContent>
    </Fragment>
  );
};
export default TabsIcons;
