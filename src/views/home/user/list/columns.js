// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { getUser, deleteUser } from '../store'

// ** Icons Imports
import {User, Settings, Edit2, MoreVertical, FileText, Trash2, Archive, Play} from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Renders User Columns
const renderUser = row => {
    return (
        <div className='d-flex justify-content-left align-items-center'>
            { row.avatar ? (
                <Avatar className='me-1' img={row.avatar} width='32' height='32' />
            ) : (
                <div className='me-1'>{row.fullname.charAt(0).toUpperCase()}</div>
            )}
            <div className='d-flex flex-column'>
                <Link
                    to={`/users/${row.id}`}
                    className='user_name text-truncate text-body'
                    onClick={() => store.dispatch(getUser(row.id))}
                >
                    <span className='fw-bolder'>{row.fullname}</span>
                </Link>
                <small className='text-truncate text-muted mb-0'>{row.email}</small>
            </div>
        </div>
    )
}

// ** Renders Status Columns
const renderStatus = row => {
    const statusObj = {
        active: {
            color: 'light-success',
            text: 'Active'
        },
        inactive: {
            color: 'light-secondary',
            text: 'Inactive'
        }
    }

    return (
        <Badge className='text-capitalize' color={statusObj[row.status].color} pill>
            {statusObj[row.status].text}
        </Badge>
    )
}

export const columns = [
    {
        name: 'User',
        sortable: true,
        minWidth: '300px',
        sortField: 'fullname',
        selector: row => row.fullname,
        cell: row => renderUser(row)
    },
    {
        name: 'Email',
        minWidth: '200px',
        sortable: true,
        sortField: 'email',
        selector: row => row.email,
        cell: row => <span className='text-capitalize'>{row.email}</span>
    },
    {
        name: 'Phone',
        minWidth: '200px',
        sortable: true,
        sortField: 'phone',
        selector: row => row.phone,
        cell: row => <span className='text-capitalize'>{row.phone}</span>
    },
    {
        name: 'Password',
        minWidth: '200px',
        sortable: true,
        sortField: 'password',
        selector: row => row.password,
        cell: row => <span className='text-capitalize'>{row.password}</span>
    },
    {
        name: 'Status',
        minWidth: '138px',
        sortable: true,
        sortField: 'status',
        selector: row => row.status,
        cell: row => renderStatus(row)
    },
    {
        name: 'Actions',
        minWidth: '100px',
        cell: row => (
            <div className='column-action'>
                <UncontrolledDropdown>
                    <DropdownToggle tag='div' className='btn btn-sm'>
                        <MoreVertical size={14} className='cursor-pointer' />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            tag={Link}
                            className='w-100'
                            to={`/users/${row.id}`}
                            onClick={() => store.dispatch(getUser(row.id))}
                        >
                            <Play size={14} className='me-50' />
                            <span className='align-middle'>Chạy hoạt động</span>
                        </DropdownItem>
                        <DropdownItem
                            tag={Link}
                            className='w-100'
                            to={`/users/${row.id}`}
                            onClick={() => store.dispatch(getUser(row.id))}
                        >
                            <FileText size={14} className='me-50' />
                            <span className='align-middle'>Details</span>
                        </DropdownItem>
                        <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                            <Edit2 size={14} className='me-50' />
                            <span className='align-middle'>Edit</span>
                        </DropdownItem>
                        <DropdownItem
                            tag='a'
                            href='/'
                            className='w-100'
                            onClick={e => {
                                e.preventDefault()
                                store.dispatch(deleteUser(row.id))
                            }}
                        >
                            <Trash2 size={14} className='me-50' />
                            <span className='align-middle'>Delete</span>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
]
