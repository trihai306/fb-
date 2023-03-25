/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";

import Select from "react-select";
import { selectThemeColors } from "@utils";
import Flatpickr from "react-flatpickr";
import PickerDateTime from "@views/forms/form-elements/datepicker/PickerDateTime.js";
import "flatpickr/dist/themes/material_green.css";

import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import Options from "@views/apps/user/components/forms/Options.js";
const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const MessTabTane = () => {
  return (
    <Fragment>
      <Row>
        <Col md="4" xs="12">
          <FriendsTbl />
        </Col>

        <Col md="1" xs="12"></Col>

        <Col md="7" xs="12">
          <Label md="12" xs="12">
            Chọn nội dung từ tin đăng đã lưu
          </Label>
          <Row>
            <Col md="9">
              <Row>
                <Label md="2">Mục:</Label>
                <Col md="10">
                  <Select
                    theme={selectThemeColors}
                    options={selectOptions}
                    className="react-select"
                    classNamePrefix="select"
                  />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Label md="2">Tin đăng:</Label>
                <Col md="8">
                  <Select
                    theme={selectThemeColors}
                    options={selectOptions}
                    className="react-select"
                    classNamePrefix="select"
                  />
                </Col>
                <Col md="1">
                  <Button size="sm">Chọn</Button>
                </Col>
              </Row>
            </Col>

            <Col md="3">
              <Button className="h-100">Tạo nội dung ngẫu nhiên</Button>
            </Col>
          </Row>

          <Row>
            <Col md="6" sx="12">
              <Label md="12" xs="12">
                Nội dung tin nhắn
              </Label>
              <Input type="textarea" style={{ minHeight: "70%" }} />
              <Label>Hướng dẫn chèn Macro không giới hạn</Label>
              <Label>
                Gợi ý: thêm {"{rrr}"} đầu nội dung để đăng tin ngẫu nhiên
              </Label>
            </Col>

            <Col md="6" sx="12">
              <Label md="12" xs="12">
                Nhật ký nhắn tin
              </Label>
              <FriendsTbl />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <div className="form-check form-check-inline">
                <Input type="checkbox" />
                <Label>Hình ảnh</Label>
              </div>
            </Col>

            <Col md="6" className="d-flex gap-1">
              <Input bsSize="sm" type="text" placeholder="Name" />
              <Button size="sm">Chọn</Button>
            </Col>

            <Col md="4">
              <div className="form-check form-check-inline">
                <Input type="checkbox" />
                <Label>Chọn tệp ngẫu nhiên, số lượng</Label>
              </div>
            </Col>
          </Row>

          <Row className="mt-1 justify-content-end gap-1">
            <Col
              md="4"
              className="justify-content-end d-flex align-items-center"
            >
              <div className="form-check form-check-inline">
                <Input type="checkbox" />
                <Label>Browser</Label>
              </div>
              <Button size="sm">Ảnh</Button>
            </Col>
            <Col md="4" className="d-flex align-items-center gap-1">
              <Input bsSize="sm" type="number" />
              <Label>đến</Label>
              <Input bsSize="sm" type="number" />
            </Col>
          </Row>

          <Row className="align-items-center  mt-1">
            <Col md="2">
              <div className="form-check form-check-inline">
                <Input type="checkbox" />
                <Label>Gửi sticker</Label>
              </div>
            </Col>
            <Col md="8">
              <Input bsSize="sm" type="text" />
            </Col>
            <Col md="2">
              <Button size="sm">Chọn sticker</Button>
            </Col>
          </Row>

          <Row>
            <Label>Tùy chọn thực thi</Label>
            <Row>
              <Col md="8">
                <Options />
              </Col>
              <Col md="4">
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

                <Row className="mt-1">
                  <Col md="6">
                    <Button size="sm">Gửi tin</Button>
                  </Col>
                  <Col md="6">
                    <Button size="sm">Xem lịch sử</Button>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col md="6">
                    <div className="form-check form-check-inline">
                      <Input type="checkbox" />
                      <Label className="w-100">Tự động nhắn tin lúc</Label>
                    </div>
                  </Col>
                  <Col>
                    <Flatpickr
                      options={{}}
                      data-enable-time
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default MessTabTane;
