import { Fragment, useState } from "react"
import { Col, Row, Nav, NavLink, NavItem, TabPane, TabContent  } from "reactstrap"
import { Home, Settings, EyeOff, User } from 'react-feather'
import ScanTabTane from "./ScanTabTane.js"
const tabs = [
  {
    title: "Quản lý",
    key: "manager",
    components: <></>
  },
  {
    title: "Quét UserId",
    key: "scanUserId",
    components: <></>
  },
  {
    title: "Dòng thời gian",
    key: "timeline",
    components: <></>
  },
  {
    title: "Đăng tường",
    key: "publish",
    components: <></>
  },
  {
    title: "Nhắn tin",
    key: "sendMsg",
    components: <></>
  },
  {
    title: "Bình luận",
    key: "comment",
    components: <></>
  },
  {
    title: "Quét thông tin",
    key: "scan",
    components: <ScanTabTane />
  }
]

const Page = () => {
  const [active, setActive] = useState(tabs[6].key)

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  
  return (
    <Fragment>
      <Row>
        <Col xl="4" lg="5" xs={{ order: 1 }} md={{ order: 0, size: 5 }}>

        </Col>
        <Col xl="8" lg="7" xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
        <Nav tabs>
          {
              tabs?.map((item) => {
                return <NavItem>
                  <NavLink
                      active={active === item.key}
                      onClick={() => {
                      toggle(item.key)
                      }}
                  >
                      <Home className='font-medium-1 me-50' />
                      <span className='align-middle font-small-3 w-bold'>{item.title}</span>
                  </NavLink>
                  </NavItem>
              })
          }
      </Nav>
        <TabContent className='py-50' activeTab={active}>
          {
              tabs?.map((item) => {
                  return <TabPane tabId={item.key}>
                      {item.components}
                  </TabPane>
              })
          }
        </TabContent>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Page
