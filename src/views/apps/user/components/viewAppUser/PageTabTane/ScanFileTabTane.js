/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import FriendsTbl from "../tables/FriendsTbl.js";
import "flatpickr/dist/themes/material_green.css";
import Options from "../forms/Options.js";
import PageTbl from "../tables/PageTbl.js";

const optionsCheck = [
  {
    title: "Email",
  },
  {
    title: "Nơi sống",
  },
  {
    title: "Giới tính",
  },
  {
    title: "Nghề nghiệp",
  },
  {
    title: "Ngày sinh",
  },
  {
    title: "Trường trung học",
  },
  {
    title: "Quê quán",
  },
  {
    title: "Trường đại học",
  },
  {
    title: "Số điện thoại",
  },
];

const ScanFileTabTane = () => {
  return (
    <Fragment>
      <Row>
        <Col md="5" xs="12">
          <FriendsTbl />
        </Col>

        <Col md="1" xs="12"></Col>

        <Col md="6" xs="12">
          <Row>
            <Col md="6">
              <Label>Tùy chọn thực thi</Label>
              <Options />
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

              <Row className="mt-1">
                <Col md="4">
                  <Button size="sm">Quét thông tin</Button>
                </Col>
                <Col md="4">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label className="w-100">Sử dụng Offline</Label>
                  </div>
                </Col>
                <Col md="4">
                  <Button size="sm">Xóa Offline</Button>
                </Col>
              </Row>

              <Label md="12" xs="12">
                Thông tin cần lấy
              </Label>
              <Row>
                {optionsCheck.map((option) => (
                  <Col md="6" xs="6">
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label className="w-100">{option.title}</Label>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col
              md="12"
              className="d-flex align-items-center justify-content-end gap-1"
            >
              <Button size="sm">Lưu</Button>
              <Button size="sm">Nạp</Button>
            </Col>
            <Col md="12" xs="12">
              <PageTbl />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ScanFileTabTane;
