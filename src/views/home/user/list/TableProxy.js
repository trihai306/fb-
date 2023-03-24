import { Fragment } from 'react'
import DataTable from 'react-data-table-component'
import BaseTable from "../../../../base/table";

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
            <div style={{ maxHeight: '500px' }} className={"mb-4"}>
             <BaseTable
             columns={columns}
             title={"Proxy"}
             link={"/proxy"}
             ></BaseTable>
            </div>
        </Fragment>
    )
}

export default ProxyTable
