import { Table } from "reactstrap"
import { v4 as uuidv4 } from 'uuid'

const TableCommon = ({ className, columns, data }) => {
    
   return <Table className={className} hover responsive>
            <thead>
                <tr>
                    {
                        columns.map((column) => {
                            return <th key={column.key}>{column.title}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((dataItem) => {
                        return (
                            <tr>
                                {
                                    columns.map((column) => {
                                        return <td key={uuidv4()}>{dataItem[column.dataIndex]}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
}

export default TableCommon