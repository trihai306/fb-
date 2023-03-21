/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import FriendsTbl from "../../tables/FriendsTbl.js";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import Options from "../../forms/Options.js";
import PageTbl from "../../tables/PageTbl.js";

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
  return (
    <Fragment>
      <Row>
        <Col md="5" xs="12">
          <FriendsTbl />
        </Col>

        <Col md="1" xs="12"></Col>

        <Col md="6" xs="12">
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

              <Options />
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
                  <Input type="radio" />
                  <Label className="w-100">Theo dõi</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label className="w-100">Bỏ theo dõi</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label className="w-100">Hủy kết bạn</Label>
                </div>
                <Button size="sm">Tiến hành</Button>
              </div>
            </Col>

            <Col md="9" xs="6">
              <Label>Tải dữ liệu của bạn bè</Label>
              <div className="d-flex  align-items-center gap-1">
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
                    <Input bsSize="sm" type="checkbox" />
                    <Label>Ảnh đại diện</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input bsSize="sm" type="checkbox" />
                    <Label>Danh sách bạn bè</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input bsSize="sm" type="checkbox" />
                    <Label>Album ảnh</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input bsSize="sm" type="checkbox" />
                    <Label>Tin nhắn</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input bsSize="sm" type="checkbox" />
                    <Label>Giới hạn số lượng ảnh Album</Label>
                  </div>
                </Col>
                <Col md="4" xs="6">
                  <div className="form-check">
                    <Input bsSize="sm" type="number" />
                    <Label>ảnh</Label>
                  </div>
                </Col>
                <Button size="sm">Bắt đầu</Button>
              </Row>

              <Row>
                <Col md="6" xs="12">
                  <Label>Trạng thái</Label>
                  {mockData.map((data) => {
                    return (
                      <div className="d-flex gap-1 align-items-center">
                        <Label className="w-100">{data.title}</Label>
                        <Label>{data.value}</Label>
                      </div>
                    );
                  })}
                </Col>

                <Col md="6" xs="12">
                  <PageTbl />
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
