/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment, useState } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";

import "flatpickr/dist/themes/material_green.css";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import Options from "@views/apps/user/components/forms/Options.js";
import ScanFileTabProgress from "@views/apps/user/components/common/ScanFileTabProgress.js";


const ScanFileTabTane = () => {
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
            <Col md="6">
              <Label>Tùy chọn thực thi</Label>
              <Options optionsSt={optionsSt} setOptionSt={setOptionSt} />
            </Col>
            <Col md="6">
              <ScanFileTabProgress />
            </Col>
            <Col
              md="12"
              className="d-flex align-items-center justify-content-end gap-1"
            >
              <Button size="sm">Lưu</Button>
              <Button size="sm">Nạp</Button>
            </Col>
            <Col md="12" xs="12">
              <FriendsTbl />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ScanFileTabTane;
