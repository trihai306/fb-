import { Row, Col, Label, Button, Input } from "reactstrap";
import PageTbl from "../viewAppUser/tables/PageTbl.js";
import Select from "react-select";
const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];
const SendMessage = () => {
  return (
    <>
      <Row>
        <Col md="4" xs="12">
          <Row className="align-items-center">
            <Col md="3">
              <Label className="w-100">Giới tính</Label>
            </Col>

            <Col md="5">
              <Select
                options={selectOptions}
                className="react-select "
                classNamePrefix="select"
              />
            </Col>
            <Col md="4">
              <Button className="sm">Xóa mục</Button>
            </Col>
          </Row>
          <PageTbl />
        </Col>

        <Col md="8" xs="12">
          <Row>
            <Col md="8" xs="12" className="d-flex align-items-center gap-1">
              <Label>Tạo mục chứa tin đăng</Label>
              <Input type="text" />
              <Button size="sm">Thêm mục</Button>
            </Col>

            <Col md="2" xs="12" className="d-flex flex-column gap-1 ms-auto">
              <Button>Nạp {"<<"} </Button>
              <Button>Xuất {">>"} </Button>
            </Col>
          </Row>
          <p>Tạo tin</p>
          <Label>
            Thông báo: Chúng tôi không chịu trách nhiệm với nội dung đăng tải
            lên mạng của người dùng
          </Label>
          <div className="d-flex align-items-center gap-1">
            <Label className="w-100">Tiêu đề</Label>
            <Input bsSize="sm" type="text" />
          </div>
          <Label>Nội dung</Label>
          <Input type="textarea" style={{ minHeight: "100px" }} />
          <Label>
            Gợi ý: Thêm {"{rrr}"} đầu nội dung để đăng tin ngẫu nhiên{" "}
          </Label>
          <Label>Hướng dẫn chèn Macro không giới hạn</Label>
          <Row>
            <Col md="3">
              <div className="form-check w-100">
                <Input type="checkbox" />
                <Label className="w-100">Đính kèm hình ảnh</Label>
              </div>
            </Col>
            <Col md="6">
              <Input bsSize="sm" type="text" />
            </Col>
            <Col md="3" className="d-flex gap-1">
              <Button size="sm">Chọn ảnh</Button>
              <Button size="sm">Xem ảnh</Button>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <div className="form-check">
                <Input type="checkbox" />
                <Label className="w-100">Đính kèm Sticker</Label>
              </div>
            </Col>
            <Col md="6">
              <Input bsSize="sm" type="text" />
            </Col>
            <Col md="3">
              <Button size="sm">Chọn Sticker</Button>
            </Col>
          </Row>
          <div className="d-flex justify-content-space gap-1 mt-1">
            <Button>Lưu</Button>
            <Button>Sửa</Button>
            <Button>Xóa</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SendMessage;
