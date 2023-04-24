import { Button, Row } from "reactstrap";
import ReactPaginate from "react-paginate";
import DataTable from "react-data-table-component";
import { downloadExcel } from "../../../utility/excel.js";
import { toast } from "react-hot-toast";

const TableCommon = ({
  className,
  columns,
  data,
  current_page,
  handlePagination,
  RECORDS_PER_PAGE,
}) => {
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={""}
      nextLabel={""}
      forcePage={current_page}
      onPageChange={(page) => handlePagination(page)}
      pageCount={Math.ceil(data.length / RECORDS_PER_PAGE) || 1}
      breakLabel={"..."}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      containerClassName={
        "pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
      }
    />
  );

  return (
    <Row className={`react-dataTable ${className}`}>
      <div className="d-flex align-items-center mb-1">
        <Button
          onClick={() => {
            if (data.length > 0) {
              downloadExcel("Example", data);
            } else {
              toast.error("Không có dữ liệu để tải!")
            }
          }}
          className="btn btn-sm "
          size="sm"
        >
          Tải Excel
        </Button>
      </div>
      <DataTable
        noHeader
        pagination
        columns={columns}
        selectableRows
        paginationPerPage={RECORDS_PER_PAGE}
        className="react-dataTable"
        paginationDefaultPage={current_page + 1}
        paginationComponent={CustomPagination}
        data={data}
      />
    </Row>
  );
};

export default TableCommon;
