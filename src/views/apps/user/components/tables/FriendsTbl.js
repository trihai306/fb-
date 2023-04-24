/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import "@styles/react/libs/tables/react-dataTable-component.scss";
import TableCommon from "@views/components/table/index.js";
import { useEffect, useState } from "react";

const columns = [
  {
    name: "Tên bạn bè",
    key: "name",
    selector: (row) => row.name,
    noWrap: true,
  },
  {
    name: "Học vấn",
    key: "education",
    selector: (row) => row?.education,
    noWrap: true,
  },
  {
    name: "Công viẹc",
    key: "work",
    selector: (row) => row?.work,
    noWrap: true,
  },
  {
    name: "Nơi sinh sống",
    key: "living",
    selector: (row) => row?.living,
    noWrap: true,
  },
  {
    name: "Thông tin liên lạc",
    key: "contactInfo",
    selector: (row) => row?.contactInfo,
    noWrap: true,
  },
  {
    name: "Thông tin cơ bản",
    key: "basicInfo",
    selector: (row) => row?.basicInfo,
    noWrap: true,
  },
  {
    name: "Biệt danh",
    key: "nicknames",
    selector: (row) => row?.nicknames,
    noWrap: true,
  },
  {
    name: "Gia đình",
    key: "family",
    selector: (row) => row?.family,
    noWrap: true,
  },
  {
    name: "Quan hệ",
    key: "relationship",
    selector: (row) => row?.relationship,
    noWrap: true,
  },
  {
    name: "Tóm tắt",
    key: "bio",
    selector: (row) => row?.bio,
    noWrap: true,
  },

  {
    name: "Tổng quan",
    key: "yearOverviews",
    selector: (row) => row?.yearOverviews,
    noWrap: true,
  },
  {
    name: "Câu nói",
    key: "quote",
    selector: (row) => row?.quote,
    noWrap: true,
  },
];

const RECORDS_PER_PAGE = 10;

const FriendsTbl = ({ dataProps }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePagination = (page) => {
    console.log(page);
    setCurrentPage(page.selected);
  };
  const [data, setData] = useState(dataProps || []);

  useEffect(() => {
    setData(dataProps);
  }, [dataProps]);

  return (
    <TableCommon
      data={data}
      columns={columns}
      RECORDS_PER_PAGE={RECORDS_PER_PAGE}
      handlePagination={handlePagination}
      current_page={currentPage}
      className={"mt-1"}
    />
  );
};

export default FriendsTbl;
