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
import { Home } from "react-feather";
import CommentTabTane from "./CommentTabTane/CommentTabTane.js";
import PostTabTane from "./PostTabTane/PostTabTane.js";
import TimelineTabTane from "./TimelineTabTane/index.js";
import ScanUserTabTane from "./ScanUserTabTane/ScanUserTabTane.js";
import ManageTabTane from "./ManageTabTane/index.js";
import Groups from "./Groups/Groups.js";

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
    title: "Bình luận",
    key: "sendMsg",
    components: <CommentTabTane />,
  },
  {
    title: "Mời vào nhóm",
    key: "groups",
    components: <Groups />,
  },
];

const GroupsPage = () => {
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
                item.key === active && (
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

export default GroupsPage;
