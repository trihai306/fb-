/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import FriendsTbl from "../../tables/FriendsTbl.js";
import "flatpickr/dist/themes/material_green.css";
import Select from "react-select";
import "./styles.scss";
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
        <Col md="5" xs="12">
          <FriendsTbl />
        </Col>

        <Col md="1" xs="12"></Col>

        <Col md="6" xs="12">
          <Row>
            <Col md="7" xs="12">
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
              <Row>
                <Label md="5">Độ tuổi</Label>
                <Col md="7">
                  <div className="d-flex justify-content-center gap-1 align-items-center">
                    <Label>Lớn hơn</Label>
                    <Input type="number" bsSize="sm" />
                    <Label>tuổi</Label>
                  </div>
                  <div className="d-flex justify-content-center gap-1 align-items-center">
                    <Label>Nhỏ hơn</Label>
                    <Input type="number" bsSize="sm" />
                    <Label>tuổi</Label>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ScanUserTabTane;
