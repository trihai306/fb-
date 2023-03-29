import { Fragment, useState } from "react";
import {
  Col,
  Row,
  Nav,
  NavLink,
  NavItem,
  TabPane,
  TabContent,
} from "reactstrap";
import { Home, Settings, EyeOff, User } from "react-feather";
import ScanFileTabTane from "./ScanFileTabTane/ScanFileTabTane.js";
import MessTabTane from "./MessTabTane/MessTabTane.js";
import CommentTabTane from "./CommentTabTane/CommentTabTane.js";
import ManageTabTane from "./ManageTabTane/index.js";
import TimelineTabTane from "./TimelineTabTane/index.js";
import ScanUserTabTane from "./ScanUserTabTane/ScanUserTabTane.js";

const tabs = [
  {
    title: "Quản lý",
    key: "manage",
    components: <ManageTabTane />,
  },
  {
    title: "Dòng thời gian",
    key: "timeline",
    components: <TimelineTabTane />,
  },
  {
    title: "Quét UserID",
    key: "scanUserId",
    components: <ScanUserTabTane />,
  },
  {
    title: "Quét hồ sơ",
    key: "scanFile",
    components: <ScanFileTabTane />,
  },
  {
    title: "Nhắn tin",
    key: "sendMess",
    components: <MessTabTane />,
  },
  {
    title: "Bình luận",
    key: "comment",
    components: <CommentTabTane />,
  },
];

const UserIdTab = () => {
  const [active, setActive] = useState(tabs[2].key);

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <Fragment>
      <Row>
        <Col xl="12" lg="12" md="12" xs="12">
          <Nav tabs className="justify-content-end">
            {tabs?.map((item) => {
              return (
                <NavItem key={item.key}>
                  <NavLink
                    active={active === item.key}
                    onClick={() => {
                      toggle(item.key);
                    }}
                  >
                    <Home className="font-medium-1 me-50" />
                    <span className="align-middle font-small-3 w-bold">
                      {item.title}
                    </span>
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
          <TabContent className="py-50" activeTab={active}>
            {tabs?.map((item) => {
              return (
                active === item.key && (
                  <TabPane key={item.key} tabId={item.key}>
                    {item.components}
                  </TabPane>
                )
              );
            })}
          </TabContent>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserIdTab;
