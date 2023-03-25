/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import "flatpickr/dist/themes/material_green.css";
import MonthSelect from "flatpickr/dist/plugins/monthSelect/index";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import "flatpickr/dist/plugins/monthSelect/style.css";
import "./styles.scss";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import Options from "@views/apps/user/components/forms/Options.js";
const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const ScanUserTabTane = () => {
  return (
    <Fragment>
      <Row>
        <Col md="4" xs="12">
          <FriendsTbl />
        </Col>

        <Col md="1" xs="12"></Col>

        <Col md="7" xs="12">
          <Row>
            <Col md="6" xs="12">
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
                    <Flatpickr
                      options={{}}
                      data-enable-time
                      className="form-control"
                    />
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
            </Col>
            <Col md="6" xs="12">
              <div className="d-flex">
                <Label>Tiến trình: 0-0/0</Label>
                <Label className="ms-auto">Chờ: 00:00:00</Label>
              </div>
              <Progress value="55" className="progress-bar-danger">
                55%
              </Progress>

              <div className="form-check">
                <Input type="radio" />
                <Label className="w-100">Từ danh sách bạn của bạn bè</Label>
              </div>

              <div className="form-check">
                <Input type="radio" />
                <Label className="w-100">
                  Từ lượt thích bài viết trên dòng thời gian
                </Label>
              </div>

              <div className="form-check">
                <Input type="radio" />
                <Label className="w-100">
                  Từ lượt bình luận bài viết trên dòng thời gian
                </Label>
              </div>
              <div className="d-flex align-items-center">
                <Button size="sm">Quét và lọc</Button>
                <Button size="sm">Quét nhanh</Button>
                <Button size="sm" className="ms-auto">
                  Dừng lại
                </Button>
              </div>
              <Options />
              <div className="d-flex justify-content-end gap-1">
                <Button size="sm">Lưu</Button>
                <Button size="sm">Nạp</Button>
              </div>
            </Col>
          </Row>
          <FriendsTbl />
        </Col>
      </Row>
    </Fragment>
  );
};

export default ScanUserTabTane;
