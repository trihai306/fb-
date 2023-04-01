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
import ManageTabTane from "./ManageTabTane/index.js";
import PostTabTane from "./PostTabTane/PostTabTane.js";
import MessTabTane from "./MessTabTane/MessTabTane.js";
import TimelineTabTane from "./TimelineTabTane/index.js";
import ScanUserTabTane from "./ScanUserTabTane/ScanUserTabTane.js";
import ScanTabTane from "./ScanTabTane/ScanTabTane.js";
import CommentTabTane from "./CommentTabTane/CommentTabTane.js";

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
    components: <CommentTabTane />,
  },
  {
    title: "Quét thông tin",
    key: "scan",
    components: <ScanTabTane />,
  },
];

const Page = () => {
  const [active, setActive] = useState(tabs[0].key);

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
