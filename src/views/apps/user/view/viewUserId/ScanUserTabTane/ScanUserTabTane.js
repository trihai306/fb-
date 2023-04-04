/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment, useState } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import "flatpickr/dist/themes/material_green.css";
import MonthSelect from "flatpickr/dist/plugins/monthSelect/index";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import "flatpickr/dist/plugins/monthSelect/style.css";
import "./styles.scss";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import Options from "@views/apps/user/components/forms/Options.js";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
import UserTabFilter from "@views/apps/user/components/common/UserTabFilter.js";
const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const ScanUserTabTane = () => {
  const [optionsSt, setOptionSt] = useState({
    fromStopVal: 0,
    toStopVal: 0,
    finishTurn: 0,
    stopSec: 0,
    stopWhenErrStatus: false,
    stopWhenErrVal: 0,
    maxTurnStatus: false,
    maxTurnVal: 0,
    positionStartStatus: false,
    positionStartVal: 0,
    positionEndStatus: false,
    positionEndVal: 0,
    repeatStatus: 0,
    repeatVal: 0,
  });
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
              <UserTabFilter />
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
                <Label className="w-100">Từ danh sách bạn của UserID</Label>
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
              <div className="d-flex align-items-center gap-1 mb-1 mt-1">
                <Button size="sm">Quét và lọc</Button>
                <Button size="sm">Quét nhanh</Button>
                <Button size="sm" className="ms-auto">
                  Dừng lại
                </Button>
              </div>
              <Options optionsSt={optionsSt} setOptionSt={setOptionSt} />
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
