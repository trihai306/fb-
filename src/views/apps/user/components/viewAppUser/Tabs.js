// ** React Imports
import { Fragment, useState } from 'react'

// ** Icons Imports
import { Home, Settings, EyeOff, User } from 'react-feather'

// ** Reactstrap Imports
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import Page from './PageTabTane/index.js'
// eslint-disable-next-line import/no-unresolved
import Profile from "@views/apps/user/components/viewAppUser/Profile";


const headerTitles = [
    {
        title: "Cá nhân",
        key: "persional",
        components: <>
            <Profile></Profile>
        </>
    },
    {
        title: "Bạn bè",
        key: "friends",
        components: <>
         <h1>Hello worlds 2</h1></>
    },
    {
        title: "Nhóm",
        key: "group",
        components: <></>
    },
    {
        title: "Page",
        key: "page",
        components: <Page />
    },
    {
        title: "User Id",
        key: "userId",
        components: <></>
    },
    {
        title: "Úp tin",
        key: "sendMess",
        components: <></>
    },
    {
        title: "Auto Comment",
        key: "autoComment",
        components: <></>
    },
    {
        title: "Quét bài viết",
        key: "scan",
        components: <></>
    },
    {
        title: "Trình duyệt",
        key: "browser",
        components: <></>
    }
  ]

const TabsIcons = () => {
  // ** State
  const [active, setActive] = useState(headerTitles[0].key)

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <Fragment>
      <Nav tabs>
        {
            headerTitles?.map((item) => {
               return <NavItem key={item.key}>
                <NavLink
                    active={active === item.key}
                    onClick={() => {
                    toggle(item.key)
                    }}
                >
                    <Home className='font-medium-3 me-50' />
                    <span className='align-middle w-bold'>{item.title}</span>
                </NavLink>
                </NavItem>
            })
        }
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        {
            headerTitles?.map((item) => {
                return <TabPane key={item.key} tabId={item.key}>
                    {item.components}
                </TabPane>
             })
        }
      </TabContent>
    </Fragment>
  )
}
export default TabsIcons
