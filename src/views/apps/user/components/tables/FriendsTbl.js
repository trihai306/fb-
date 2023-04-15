/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import "@styles/react/libs/tables/react-dataTable-component.scss"
import TableCommon from "@views/components/table/index.js"
import { useEffect, useState } from "react"


const columns = [
  {
    name: "Tên bạn bè",
    key: "name",
    selector: (row) => row.name
  },
  {
    name: "Thông tin khác",
    key: "other_info",
    selector: (row) => row.other_info
  },
]


const RECORDS_PER_PAGE = 10

const FriendsTbl = ({ dataProps }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePagination = (page) => {
    console.log(page)
    setCurrentPage(page.selected)
  }
  const [data, setData] = useState(dataProps || [])

  useEffect(() => {
    setData(dataProps)
  }, [dataProps])

  return (
    <TableCommon
      data={data}
      columns={columns}
      RECORDS_PER_PAGE={RECORDS_PER_PAGE}
      handlePagination={handlePagination}
      current_page={currentPage}
      className={"mt-1"}
    />
  )
}

export default FriendsTbl
