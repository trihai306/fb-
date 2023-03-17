/* eslint-disable no-tabs */
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
// eslint-disable-next-line import/no-unresolved
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { useState } from 'react'

const columns = [
    {
        name: "#",
        key: "#",
        selector: row => row.id
    },
    {
        name: "Tên trang",
        key: "pageName",
        selector: row => row.pageName
    },
    {
        name: "Số người thích",
        key: "likeNums",
        selector: row => row.likeNums
    },
    {
        name: "Page ID",
        key: "pageId",
        selector: row => row.pageId
    },
    {
        name: "Số điện thoại",
        key: "phone",
        selector: row => row.phone
    }
]

const mockData = [
	{
		id: "76",
		pageeName: "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
		likeNums: "81",
		pageId: "92",
		phone: "(315) 722-6112"
	},
	{
		id: "36",
		pageeName: "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
		likeNums: "16",
		pageId: "63",
		phone: "(498) 274-1559"
	},
	{
		id: "70",
		pageeName: "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
		likeNums: "3",
		pageId: "39",
		phone: "(851) 582-2321"
	},
	{
		id: "11",
		pageeName: "a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut",
		likeNums: "96",
		pageId: "21",
		phone: "(379) 479-3646"
	},
	{
		id: "5",
		pageeName: "sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus",
		likeNums: "80",
		pageId: "10",
		phone: "(331) 787-2227"
	}
]

const RECORDS_PER_PAGE = 5

const TableScan = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const handlePagination = page => setCurrentPage(page.selected)

    const CustomPagination = () => (
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          forcePage={currentPage}
          onPageChange={page => handlePagination(page)}
          pageCount={Math.ceil(mockData.length / RECORDS_PER_PAGE) || 1}
          breakLabel={'...'}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          activeClassName='active'
          pageClassName='page-item'
          breakClassName='page-item'
          nextLinkClassName='page-link'
          pageLinkClassName='page-link'
          breakLinkClassName='page-link'
          previousLinkClassName='page-link'
          nextClassName='page-item next-item'
          previousClassName='page-item prev-item'
          containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'}
        />
      )


    return  <DataTable
        noHeader
        pagination
        columns={columns}
        paginationPerPage={RECORDS_PER_PAGE}
        className='react-dataTable'
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={mockData}
    />
}

export default TableScan