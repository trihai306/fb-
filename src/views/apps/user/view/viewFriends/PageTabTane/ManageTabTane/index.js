/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment, useState } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import "flatpickr/dist/themes/material_green.css";
import Options from "@views/apps/user/components/forms/Options.js";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import ManageTabStatus from "@views/apps/user/components/common/manageTabStatus.js";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";

const mockData = [
  {
    title: "Tải dữ liệu của bạn bè",
    value: "IDE",
  },
  {
    title: "Dòng thời gian",
    value: "IDE",
  },
  {
    title: "Quét UserId",
    value: "IDE",
  },
  {
    title: "Quét hồ sơ",
    value: "IDE",
  },
  {
    title: "Quét tương tác",
    value: "IDE",
  },
  {
    title: "Đăng tường",
    value: "IDE",
  },
  {
    title: "Nhắn tin",
    value: "IDE",
  },
  {
    title: "Bình luận",
    value: "IDE",
  },
];

const ManageTabTane = () => {
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
            <Col md="3" xs="6">
              <Label>Hành động</Label>
              <div className="d-flex gap-1 jusity-content-start flex-column">
                <Button size="sm">Lấy danh sách</Button>
                <Button size="sm">Lưu</Button>
                <Button size="sm">Nạp</Button>
                <Button size="sm">Xáo trộn</Button>
              </div>
            </Col>
            <Col md="9" xs="6">
              <div className="d-flex">
                <Label>Tiến trình: 0-0/0</Label>
                <Label className="ms-auto">Chờ: 00:00:00</Label>
              </div>
              <Progress value="55" className="progress-bar-danger">
                55%
              </Progress>

              <Options optionsSt={optionsSt} setOptionSt={setOptionSt} />
            </Col>
          </Row>

          <Row className="mt-1">
            <Col md="3" xs="6">
              <div className="d-flex gap-1 jusity-content-start flex-column gap-1">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Dùng browser</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Theo dõi</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Bỏ theo dõi</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Hủy kết bạn</Label>
                </div>
                <Button size="sm">Tiến hành</Button>
              </div>
            </Col>

            <Col md="9" xs="6">
              <Label>Tải dữ liệu của bạn bè</Label>
              <div className="d-flex  align-items-center gap-1 mb-1">
                <Label className="w-25">Thư mục</Label>
                <Input
                  type="text"
                  bsSize="sm"
                  placeholder="Đường dãn thư mục để lưu. Ví dụ: D:\ABC"
                />
                <Button size="sm">Chọn</Button>
              </div>
              <Row>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label>Ảnh đại diện</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label>Danh sách bạn bè</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label>Album ảnh</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label>Tin nhắn</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label>Giới hạn số lượng ảnh Album</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="d-flex gap-1 align-items-center">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      upHandler={<Plus />}
                      downHandler={<Minus />}
                    />
                    <Label>ảnh</Label>
                  </div>
                </Col>
                <Button size="sm">Bắt đầu</Button>
              </Row>

              <Row>
                <Col md="6" xs="12">
                  <ManageTabStatus datas={mockData} />
                </Col>

                <Col md="6" xs="12">
                  <FriendsTbl />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ManageTabTane;
