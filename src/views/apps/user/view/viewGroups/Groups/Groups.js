import Options from "@views/apps/user/components/forms/Options.js";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import { Fragment, useState } from "react";
import { Col, Row, Button, Progress, Label, Input } from "reactstrap";

const Groups = () => {
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

        <Col md="8" xs="12">
          <div className="d-flex justify-content-between align-items-center">
            <Label>Danh sách bạn bè:</Label>
            <Button size="sm">Lấy danh sách bạn bè</Button>
          </div>
          <FriendsTbl />

          <Row>
            <Col md="6" xs="12">
              <Label>Tùy chọn thi hành</Label>
              <Options optionsSt={optionsSt} setOptionSt={setOptionSt} />
            </Col>

            <Col md="6" xs="12">
              <div className="d-flex">
                <Label>Tiến trình: 0-0/0</Label>
                <Label className="ms-auto">Chờ: 00:00:00</Label>
              </div>
              <Progress value="55" className="progress-bar-danger mt-1">
                55%
              </Progress>
              <div className="form-check mt-1">
                <Input type="checkbox" />
                <Label>Dùng Browser</Label>
              </div>
              <Button className="mt-1">Bắt đầu</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Groups;
