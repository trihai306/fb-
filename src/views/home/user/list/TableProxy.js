import { Fragment } from 'react'
import DataTable from 'react-data-table-component'

const ProxyTable = ({ data }) => {
    const columns = [
        {
            name: 'Domain',
            selector: 'domain',
            sortable: true
        },
        {
            name: 'Port',
            selector: 'port',
            sortable: true
        },
        {
            name: 'Username',
            selector: 'username',
            sortable: true
        },
        {
            name: 'Password',
            selector: 'password',
            sortable: false
        }
    ]

    return (
        <Fragment>
            <div style={{ height: '400px', overflowY: 'scroll' }} className={"mb-4"}>
                <DataTable
                    title="Proxy"
                    noHeader
                    defaultSortField="domain"
                    defaultSortAsc={false}
                    pagination={false}
                    highlightOnHover
                    striped
                    className='react-dataTable'
                    data={data}
                    columns={columns}
                />
            </div>
        </Fragment>
    )
}

export default ProxyTable
