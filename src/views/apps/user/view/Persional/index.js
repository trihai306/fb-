import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";

import Select from "react-select";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
import Options from "../../components/forms/Options.js";
import FriendsTbl from "../../components/tables/FriendsTbl.js";
const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];
const Persional = () => {
  return (
    <>
      <Row>
        <Col md="6">
          <Row>
            <Col md="6">
              <Label>Tiến trình 0/0</Label>
            </Col>
            <Col md="6">
              <Label>Chờ: 00:00:00</Label>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Progress value="55" className="progress-bar-danger">
              55%
            </Progress>
          </Row>

          <Row className="mb-1">
            <Col md="9">
              <div className="d-flex gap-1 align-items-center">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Tìm theo gợi ý của Facebook</Label>
                </div>
              </div>

              <div className="d-flex gap-1 align-items-center">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Tìm theo từ khóa</Label>
                </div>
                <Input bsSize="sm" />
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Có số lượng bạn bè nhiều hơn</Label>
                </div>
                <Select
                  options={selectOptions}
                  className="react-select "
                  classNamePrefix="select"
                />
                <Label>bạn bè</Label>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Chèn thêm vào danh sách</Label>
                </div>
              </div>
            </Col>

            <Col md="3">
                <Button>Tìm</Button>
            </Col>
          </Row>

          <Label className="mb-1">Tùy chọn thi hành - tìm kiếm</Label>
          <Options />
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
                <Flatpickr options={{}} className="form-control" />
              </Col>
            </Row>
          </Row>
        </Col>

        <Col md="6">
          <Row>
            <Col md="6">
              <Label>Tiến trình 0/0</Label>
            </Col>
            <Col md="6">
              <Label>Chờ: 00:00:00</Label>
            </Col>
          </Row>

          <Row className="mt-1">
            <Progress value="55" className="progress-bar-danger">
              55%
            </Progress>
          </Row>
          <Label>Tùy chọn thi hành - Kết bạn</Label>
          <Options />
          <Row>
            <Col md="7">
              <FriendsTbl />
              <Label>Nhật kí kết bạn:</Label>
              <FriendsTbl />
            </Col>

            <Col md="5">
              <div className="d-flex flex-column gap-1 align-items-center">
                <Button size="sm">Kết bạn</Button>
                <Button size="sm">Lưu(*.xls, *.txt)</Button>
                <Button size="sm">Nạp(*.xls, *.txt)</Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Persional;
