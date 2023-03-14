import {lazy} from "react"

const UserList = lazy(() => import('../../views/apps/user/list'))
const HomeRoutes = [
    {
        element: <UserList />,
        path: '/home'
    }
]
export default HomeRoutes
