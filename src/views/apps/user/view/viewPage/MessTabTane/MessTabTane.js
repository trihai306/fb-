/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment, useState } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import Options from "@views/apps/user/components/forms/Options.js";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
import CommentSendMessCommon from "@views/apps/user/components/common/CommentSendMessCommon.js";


const MessTabTane = () => {
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
          <CommentSendMessCommon />

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
              <InputNumber
                defaultValue={0}
                upHandler={<Plus />}
                downHandler={<Minus />}
              />
              <Label>đến</Label>
              <InputNumber
                defaultValue={0}
                upHandler={<Plus />}
                downHandler={<Minus />}
              />
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
                <Options optionsSt={optionsSt} setOptionSt={setOptionSt} />
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
