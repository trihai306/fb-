import {Fragment, useState} from "react";
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
// eslint-disable-next-line import/no-unresolved
import Search from "@views/apps/user/components/viewAppUser/Profile/components/search";
const headerTitles = [
    {
        title: "Tìm bạn",
        key: "searchfriend",
        components: <Search></Search>
    },
    {
        title: "Dòng thời gian",
        key: "story",
        components: <></>
    },
    {
        title: "Đăng tường",
        key: "upstory",
        components: <></>
    },
    {
        title: "Quản lí kết bạn",
        key: "friendmanager",
        components: <></>
    },
]
const Profile = () => {
    const [active, setActive] = useState(headerTitles[0].key)
    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <Fragment>
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
        </Fragment>
    )
}
export default Profile
