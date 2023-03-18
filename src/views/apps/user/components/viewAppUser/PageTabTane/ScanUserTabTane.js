/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import FriendsTbl from "../tables/FriendsTbl.js";
import "flatpickr/dist/themes/material_green.css";
import Options from "../forms/Options.js";
import { selectThemeColors } from "@utils";
import Select from "react-select";

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
            <Col md="6" xs="12">
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
                    className="react-select h-50"
                    classNamePrefix="select"
                  />
                </Col>
              </Row>
              <Row>
                <Label md="5">Độ tuổi</Label>
                <Col md="7" className="d-flex">
                    <Label>Lớn hơn</Label>
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
