
// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap Imports
import { Row, Col, Alert } from 'reactstrap'

// ** Styles
// eslint-disable-next-line import/no-unresolved
import '@styles/react/apps/app-users.scss'

import { getUser } from '../store/index'
import TabsIcons from '../components/viewAppUser/Tabs.js'


const UserView = () => {
  // ** Store Vars
  const store = useSelector(state => state.users)
  const dispatch = useDispatch()

  // ** Hooks
  const { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    console.log(id)
    dispatch(getUser(parseInt(id)))
  }, [dispatch])

  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <div className='app-user-view'>
        <TabsIcons />
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>User not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default UserView
