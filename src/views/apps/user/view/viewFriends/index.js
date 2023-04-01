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

import CrossInteraction from "../CrossInteraction/index.js";
import ManageTabTane from "./PageTabTane/ManageTabTane/index.js";
import ScanUserTabTane from "./PageTabTane/ScanUserTabTane/ScanUserTabTane.js";
import TimelineTabTane from "./PageTabTane/TimelineTabTane/index.js";
import ScanFileTabTane from "./PageTabTane/ScanFileTabTane/ScanFileTabTane.js";
import PostTabTane from "./PageTabTane/PostTabTane/PostTabTane.js";
import MessTabTane from "./PageTabTane/MessTabTane/MessTabTane.js";
import SendMessage from "../SendMessage/index.js";
import CommentTabTane from "./PageTabTane/CommentTabTane/CommentTabTane.js";
const tabs = [
  {
    title: "Quản lý",
    key: "manager",
    components: <ManageTabTane />,
  },
  {
    title: "Quét UserId",
    key: "scanUserId",
    components: <ScanUserTabTane />,
  },
  {
    title: "Dòng thời gian",
    key: "timeline",
    components: <TimelineTabTane />,
  },
  {
    title: "Quét hồ sơ",
    key: "scan_file",
    components: <ScanFileTabTane />,
  },
  {
    title: "Đăng tường",
    key: "publish",
    components: <PostTabTane />,
  },
  {
    title: "Nhắn tin",
    key: "sendMsg",
    components: <MessTabTane />,
  },
  {
    title: "Bình luận",
    key: "comment",
    components: <CommentTabTane/>,
  },
  {
    title: "Tương tác chéo",
    key: "crossInteraction",
    components: <CrossInteraction />,
  },
  {
    title: "Soạn tin",
    key: "sendMessage",
    components: <SendMessage />,
  },
];

const Page = () => {
  const [active, setActive] = useState(tabs[7].key);

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
                <TabPane key={item.key} tabId={item.key}>
                  {item.components}
                </TabPane>
              );
            })}
          </TabContent>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Page;
