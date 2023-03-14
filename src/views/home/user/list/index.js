// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import {Row, Col, Card, CardText, CardBody, CardTitle, Button, Input, Label} from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import {User, UserPlus, UserCheck, UserX} from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import ProxyTable from "./TableProxy"
import {spinnerTextAlignment} from "../../../components/spinners/SpinnerSourceCode";
import SpinnerTextAlignment from "../../../components/spinners/SpinnerTextAlignment";

const UsersList = () => {
    const proxyData = [
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        },
        {
            domain: 'example.com',
            port: 8080,
            username: 'myuser',
            password: 'mypassword'
        }
        // other proxy objects
    ]
    return (
        <div className='app-user-list'>
            <Row>
                <Col md={6}>
                    <Row>
                        <Col lg='6' sm='6'>
                            <StatsHorizontal
                                color='primary'
                                statTitle='Tổng tài khoản'
                                icon={<User size={20}/>}
                                renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
                            />
                        </Col>
                        <Col lg='6' sm='6'>
                            <StatsHorizontal
                                color='danger'
                                statTitle='Thêm mới'
                                icon={<UserPlus size={20}/>}
                                renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
                            />
                        </Col>
                        <Col lg='6' sm='6'>
                            <StatsHorizontal
                                color='success'
                                statTitle='Đang hoạt động'
                                icon={<UserCheck size={20}/>}
                                renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
                            />
                        </Col>
                        <Col lg='6' sm='6'>
                            <StatsHorizontal
                                color='warning'
                                statTitle='Bị khoá'
                                icon={<UserX size={20}/>}
                                renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
                            />
                        </Col>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <CardTitle tag='h4'>Special title treatment</CardTitle>
                                    <CardText className='mb-2'>
                                        <Row>
                                            <Col md={3}>
                                                <div className='form-check form-check-primary'>
                                                    <Input type='checkbox' id='primary-checkbox' defaultChecked/>
                                                    <Label className='form-check-label' for='primary-checkbox'>
                                                        Chạy proxy
                                                    </Label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardText>
                                    <Button color='primary' outline>
                                        Chạy nuôi acc
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <ProxyTable data={proxyData}></ProxyTable>
                </Col>
            </Row>
            <Table/>
        </div>
    )
}

export default UsersList
