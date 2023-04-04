import "flatpickr/dist/themes/material_green.css";
import { Row, Label, Col, Input, Button } from "reactstrap";
import MonthSelect from "flatpickr/dist/plugins/monthSelect/index";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import "flatpickr/dist/plugins/monthSelect/style.css";

const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const UserTabFilter = () => {
  return (
    <>
      <Row style={{ maxHeight: "500px", overflow: "auto" }}>
        <Label>Tùy chọn để lọc</Label>
        <Row>
          <Label md="5" xs="12">
            Tên có chứa
          </Label>
          <Col md="7" xs="12">
            <Input bsSize="sm" type="text" />
          </Col>
        </Row>
        <Row>
          <Label md="5">Giới tính</Label>
          <Col md="7">
            <Select
              options={selectOptions}
              className="react-select "
              classNamePrefix="select"
            />
          </Col>
        </Row>
        <Row>
          <Label md="5">Tình trạng</Label>
          <Col md="7">
            <Select
              options={selectOptions}
              className="react-select h-50"
              classNamePrefix="select"
            />
          </Col>
        </Row>
        <Row>
          <Label md="5">Hình đại diện</Label>
          <Col md="7">
            <Select
              options={selectOptions}
              className="react-select  h-50"
              classNamePrefix="select"
            />
          </Col>
        </Row>
        <Row className="mt-1">
          <Label md="5">Độ tuổi</Label>
          <Col md="7">
            <div className="d-flex justify-content-center gap-1 align-items-center">
              <Label className="w-100 ">Lớn hơn</Label>
              <Input type="number" bsSize="sm" />
              <Label className="w-100">tuổi</Label>
            </div>
            <div className="d-flex justify-content-center gap-1 align-items-center">
              <Label className="w-100">Nhỏ hơn</Label>
              <Input type="number" bsSize="sm" />
              <Label className="w-100">tuổi</Label>
            </div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Label md="5">Nơi sống</Label>
          <Col md="7">
            <Input type="text" />
          </Col>
        </Row>
        <Row>
          <Label md="5">Quê quán</Label>
          <Col md="7">
            <Input type="text" />
          </Col>
        </Row>
        <Row>
          <Label md="5">Nơi làm việc</Label>
          <Col md="7">
            <Input type="text" />
          </Col>
        </Row>
        <Row>
          <Label md="5">Nghề nghiệp</Label>
          <Col>
            <Input type="text" />
          </Col>
        </Row>
        <Row>
          <Label md="5">Ngày sinh</Label>
          <Col md="7">
            <Flatpickr options={{}} data-enable-time className="form-control" />
          </Col>
        </Row>
        <Row>
          <Label md="5">Tháng sinh</Label>
          <Col md="7">
            <Flatpickr
              options={{
                plugins: [
                  new MonthSelect({
                    shorthand: true,
                    dateFormat: "m-Y",
                    altFormat: "F Y",
                  }),
                ],
              }}
              data-enable-time
              className="form-control"
            />
          </Col>
        </Row>
      </Row>
      <Button className="d-flex mt-1 ms-auto" size="sm">
        Lọc kết quả
      </Button>
    </>
  );
};

export default UserTabFilter;
