import {lazy} from "react"

const UserList = lazy(() => import('../../views/home/user/list'))
const HomeRoutes = [
    {
        element: <UserList />,
        path: '/home'
    }
]
export default HomeRoutes
