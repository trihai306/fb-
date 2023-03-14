import mock from '../mock'

// ** Utils
import {paginateArray} from '../utils'

// Avatars Imports
import avatar1 from '@src/assets/images/avatars/1.png'
import avatar2 from '@src/assets/images/avatars/2.png'
import avatar3 from '@src/assets/images/avatars/3.png'
import avatar4 from '@src/assets/images/avatars/4.png'
import avatar5 from '@src/assets/images/avatars/5.png'
import avatar6 from '@src/assets/images/avatars/6.png'
import avatar7 from '@src/assets/images/avatars/7.png'
import avatar8 from '@src/assets/images/avatars/8.png'
import avatar9 from '@src/assets/images/avatars/9.png'
import avatar10 from '@src/assets/images/avatars/10.png'

const data = {
    users: [
        {
            id: 1,
            fullname: "John Doe",
            email: "johndoe@example.com",
            phone: "+1 (555) 123-4567",
            password: "mysecretpassword",
            status: "active",
            cookie: "somerandomstring",
            avatar: ""
        },
        {
            id: 2,
            fullname: "Jane Smith",
            email: "janesmith@example.com",
            phone: "+1 (555) 234-5678",
            password: "anothersecretpassword",
            status: "inactive",
            cookie: "anotherrandomstring",
            avatar: ""
        },
        {
            id: 3,
            fullname: "Bob Johnson",
            email: "bobjohnson@example.com",
            phone: "+1 (555) 345-6789",
            password: "yetanothersecretpassword",
            status: "active",
            cookie: "yetanotherrandomstring",
            avatar: ""
        },
        {
            id: 4,
            fullname: "Emily Brown",
            email: "emilybrown@example.com",
            phone: "+1 (555) 456-7890",
            password: "mypassword123",
            status: "inactive",
            cookie: "randomcookievalue",
            avatar: ""
        },
        {
            id: 5,
            fullname: "Mike Johnson",
            email: "mikejohnson@example.com",
            phone: "+1 (555) 567-8901",
            password: "secret123",
            status: "active",
            cookie: "cookievalue123",
            avatar: ""
        },
        {
            id: 6,
            fullname: "Sarah Lee",
            email: "sarahlee@example.com",
            phone: "+1 (555) 678-9012",
            password: "ilovepizza",
            status: "inactive",
            cookie: "randomstringvalue",
            avatar: ""
        },
        {
            id: 7,
            fullname: "Tom Smith",
            email: "tomsmith@example.com",
            phone: "+1 (555) 789-0123",
            password: "password1234",
            status: "active",
            cookie: "cookievaluexyz",
            avatar: ""
        },
        {
            id: 8,
            fullname: "Alex Kim",
            email: "alexkim@example.com",
            phone: "+1 (555) 890-1234",
            password: "mypassword",
            status: "inactive",
            cookie: "randomvaluedata",
            avatar: ""
        },
        {
            id: 9,
            fullname: "Mary Johnson",
            email: "maryjohnson@example.com",
            phone: "+1 (555) 901-2345",
            password: "secretpassword",
            status: "active",
            cookie: "randomdatastring",
            avatar: ""
        },
        {
            id: 10,
            fullname: "David Lee",
            email: "davidlee@example.com",
            phone: "+1 (555) 012-3456",
            password: "mypassword1",
            status: "inactive",
            cookie: "randomcookievalue1",
            avatar: ""
        },
        {
            id: 11,
            fullname: "Linda Kim",
            email: "lindakim@example.com",
            phone: "+1 (555) 123-4567",
            password: "mypassword2",
            status: "active",
            cookie: "randomcookievalue2",
            avatar: ""
        },
        {
            id: 12,
            fullname: "Mark Johnson",
            email: "markjohnson@example.com",
            phone: "+1 (555) 234-5678",
            password: "mypassword3",
            status: "inactive",
            cookie: "randomcookievalue3",
            avatar: ""
        },
        {
            id: 13,
            fullname: "Maggie Brown",
            email: "maggiebrown@example.com",
            phone: "+1 (555) 345-6789",
            password: "mypassword4",
            status: "active",
            cookie: "randomcookievalue4",
            avatar: ""
        },
        {
            id: 14,
            fullname: "Billy Lee",
            email: "billylee@example.com",
            phone: "+1 (555) 456-7890",
            password: "mypassword5",
            status: "inactive",
            cookie: "randomcookievalue5",
            avatar: ""
        }
    ]
}

// GET ALL DATA
mock.onGet('/api/users/list/all-data').reply(200, data.users)

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
    // Get event from post data
    const user = JSON.parse(config.data)
    const highestValue = data.users.reduce((a, b) => (a.id > b.id ? a : b)).id

    user.id = highestValue + 1

    data.users.push(user)

    return [201, {user}]
})

// GET Updated DATA
mock.onGet('/api/users/list/data').reply(config => {
    const {
        q = '',
        page = 1,
        role = null,
        perPage = 10,
        sort = 'asc',
        status = null,
        currentPlan = null,
        sortColumn = 'fullName'
    } = config

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()

    const dataAsc = data.users.sort((a, b) => (a[sortColumn] < b[sortColumn] ? -1 : 1))

    const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()

    const filteredData = dataToFilter.filter(
        user =>
            (user.email.toLowerCase().includes(queryLowered) ||
                user.fullName.toLowerCase().includes(queryLowered) ||
                user.billing.toLowerCase().includes(queryLowered)) &&
            user.role === (role || user.role) &&
            user.currentPlan === (currentPlan || user.currentPlan) &&
            user.status === (status || user.status)
    )
    /* eslint-enable  */

    return [
        200,
        {
            total: filteredData.length,
            users: paginateArray(filteredData, perPage, page)
        }
    ]
})

// GET USER
mock.onGet('/api/users/user').reply(config => {
    const {id} = config
    const user = data.users.find(i => i.id === id)
    return [200, {user}]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
    // Get user id from URL
    let userId = config.id

    // Convert Id to number
    userId = Number(userId)

    const userIndex = data.users.findIndex(t => t.id === userId)
    data.users.splice(userIndex, 1)

    return [200]
})
