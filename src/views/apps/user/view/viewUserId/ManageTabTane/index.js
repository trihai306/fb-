/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment, useState } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import "flatpickr/dist/themes/material_green.css";
import Options from "@views/apps/user/components/forms/Options.js";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
import ManageTabStatus from "@views/apps/user/components/common/manageTabStatus.js";
const mockData = [
  {
    title: "Tải dữ liệu của UserID",
    value: "IDE",
  },
  {
    title: "Dòng thời gian",
    value: "IDE",
  },
  {
    title: "Quét UserID",
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
              <Progress value="55" className="progress-bar-danger mb-1 mt-1">
                55%
              </Progress>

              <Label>
                Tùy chọn thi hành - Kết bạn, theo dõi, bỏ theo dõi, tải dữ liệu
              </Label>

              <Options optionsSt={optionsSt} setOptionSt={setOptionSt} />
            </Col>
          </Row>

          <Row className="mt-1">
            <Col md="3" xs="6">
              <Label>Hành động</Label>
              <div className="d-flex gap-1 jusity-content-start flex-column gap-1">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Dùng browser</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label className="w-100">Tải dữ liệu UserID</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label className="w-100">Kết bạn</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label className="w-100">Theo dõi</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label className="w-100">Bỏ theo dõi</Label>
                </div>
                <Button size="sm">Tiến hành</Button>
              </div>
            </Col>

            <Col md="9" xs="6">
              <Label>Tải dữ liệu của UserID</Label>
              <div className="d-flex gap-1">
                <Label className="w-25">Thư mục:</Label>
                <Input
                  type="text"
                  bsSize="sm"
                  placeholder="Đường dẫn thư mục để lưu. Ví dụ: D:\ABC"
                />
              </div>
              <div className="d-flex gap-1 align-items-center flex-wrap mt-1">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Ảnh đại diện</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Danh sách bạn bè</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Album ảnh</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Tin nhắn</Label>
                </div>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Giới hạn số lượng ảnh Album</Label>
                </div>
                <InputNumber
                  className="custom-input-number"
                  upHandler={<Plus />}
                  downHandler={<Minus />}
                  defaultValue={0}
                />
                <Label>ảnh</Label>
              </div>

              <div className="d-flex flex-wrap justify-content-center align-items-center mt-1 mb-1">
                <Button
                  className="d-flex justify-content-center ms-auto me-auto"
                  size="sm"
                >
                  Bắt đầu
                </Button>
              </div>

              <Row>
                <Col md="6" xs="12">
                  <ManageTabStatus datas={mockData} />
                </Col>

                <Col md="6" xs="12">
                  <Label>Nhật ký hành động:</Label>
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
