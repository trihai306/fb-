/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import "@styles/react/libs/tables/react-dataTable-component.scss"
import TableCommon from "@views/components/table/index.js"
import { useState } from "react"


const columns = [
  {
    name: "#",
    key: "#",
    selector: (row) => row.id
  },
  {
    name: "Tên trang",
    key: "pageName",
    selector: (row) => row.pageName
  },
  {
    name: "Số người thích",
    key: "likeNums",
    selector: (row) => row.likeNums
  },
  {
    name: "Page ID",
    key: "pageId",
    selector: (row) => row.pageId
  },
  {
    name: "Số điện thoại",
    key: "phone",
    selector: (row) => row.phone
  }
]

const mockData = [
  {
    id: "76",
    pageeName:
      "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
    likeNums: "81",
    pageId: "92",
    phone: "(315) 722-6112"
  },
  {
    id: "36",
    pageeName:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    likeNums: "16",
    pageId: "63",
    phone: "(498) 274-1559"
  },
  {
    id: "70",
    pageeName:
      "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
    likeNums: "3",
    pageId: "39",
    phone: "(851) 582-2321"
  },
  {
    id: "11",
    pageeName:
      "a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut",
    likeNums: "96",
    pageId: "21",
    phone: "(379) 479-3646"
  },
  {
    id: "5",
    pageeName:
      "sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus",
    likeNums: "80",
    pageId: "10",
    phone: "(331) 787-2227"
  },
  {
    id: "76",
    pageeName:
      "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
    likeNums: "81",
    pageId: "92",
    phone: "(315) 722-6112"
  },
  {
    id: "36",
    pageeName:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    likeNums: "16",
    pageId: "63",
    phone: "(498) 274-1559"
  },
  {
    id: "70",
    pageeName:
      "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
    likeNums: "3",
    pageId: "39",
    phone: "(851) 582-2321"
  },
  {
    id: "11",
    pageeName:
      "a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut",
    likeNums: "96",
    pageId: "21",
    phone: "(379) 479-3646"
  },
  {
    id: "5",
    pageeName:
      "sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus",
    likeNums: "80",
    pageId: "10",
    phone: "(331) 787-2227"
  },
  {
    id: "76",
    pageeName:
      "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
    likeNums: "81",
    pageId: "92",
    phone: "(315) 722-6112"
  },
  {
    id: "36",
    pageeName:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    likeNums: "16",
    pageId: "63",
    phone: "(498) 274-1559"
  },
  {
    id: "70",
    pageeName:
      "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
    likeNums: "3",
    pageId: "39",
    phone: "(851) 582-2321"
  },
  {
    id: "11",
    pageeName:
      "a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut",
    likeNums: "96",
    pageId: "21",
    phone: "(379) 479-3646"
  },
  {
    id: "5",
    pageeName:
      "sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus",
    likeNums: "80",
    pageId: "10",
    phone: "(331) 787-2227"
  },
  {
    id: "76",
    pageeName:
      "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
    likeNums: "81",
    pageId: "92",
    phone: "(315) 722-6112"
  },
  {
    id: "36",
    pageeName:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    likeNums: "16",
    pageId: "63",
    phone: "(498) 274-1559"
  },
  {
    id: "70",
    pageeName:
      "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
    likeNums: "3",
    pageId: "39",
    phone: "(851) 582-2321"
  },
  {
    id: "11",
    pageeName:
      "a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut",
    likeNums: "96",
    pageId: "21",
    phone: "(379) 479-3646"
  },
  {
    id: "5",
    pageeName:
      "sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus",
    likeNums: "80",
    pageId: "10",
    phone: "(331) 787-2227"
  },
  {
    id: "76",
    pageeName:
      "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
    likeNums: "81",
    pageId: "92",
    phone: "(315) 722-6112"
  },
  {
    id: "36",
    pageeName:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    likeNums: "16",
    pageId: "63",
    phone: "(498) 274-1559"
  },
  {
    id: "70",
    pageeName:
      "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
    likeNums: "3",
    pageId: "39",
    phone: "(851) 582-2321"
  },
  {
    id: "11",
    pageeName:
      "a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut",
    likeNums: "96",
    pageId: "21",
    phone: "(379) 479-3646"
  },
  {
    id: "5",
    pageeName:
      "sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus",
    likeNums: "80",
    pageId: "10",
    phone: "(331) 787-2227"
  },
  {
    id: "76",
    pageeName:
      "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
    likeNums: "81",
    pageId: "92",
    phone: "(315) 722-6112"
  },
  {
    id: "36",
    pageeName:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    likeNums: "16",
    pageId: "63",
    phone: "(498) 274-1559"
  },
  {
    id: "70",
    pageeName:
      "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
    likeNums: "3",
    pageId: "39",
    phone: "(851) 582-2321"
  },
  {
    id: "11",
    pageeName:
      "a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut",
    likeNums: "96",
    pageId: "21",
    phone: "(379) 479-3646"
  },
  {
    id: "5",
    pageeName:
      "sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus",
    likeNums: "80",
    pageId: "10",
    phone: "(331) 787-2227"
  }
]

const RECORDS_PER_PAGE = 3

const PageTbl = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePagination = (page) => {
    console.log(page)
    setCurrentPage(page.selected)
  }
  const [data, setData] = useState(mockData)

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

export default PageTbl
