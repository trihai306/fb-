/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";

import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import Options from "@views/apps/user/components/forms/Options.js";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";

const TimelineTabTane = () => {
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
              <Row>
                <Label>Tùy chọn quét bài đăng trên dòng thời gian</Label>
                <Row>
                  <Label md="4" xs="12">
                    Có chứa
                  </Label>
                  <Col md="8" xs="12">
                    <Input placeholder="Từ khóa" bsSize="sm" type="text" />
                  </Col>
                </Row>
                <div className="align-items-center d-flex gap-1">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label className="w-100">Có hình ảnh</Label>
                  </div>
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label className="w-100">Có video</Label>
                  </div>
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label className="w-100">Có link website</Label>
                  </div>
                </div>
                <Row>
                  <Col md="7">
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label className="w-100">Có lượt thích nhiều hơn:</Label>
                    </div>
                  </Col>
                  <Col md="5">
                    <InputNumber
                      defaultValue={0}
                      upHandler={<Plus />}
                      downHandler={<Minus />}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="7">
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label className="w-100">Có lượt thích ít hơn:</Label>
                    </div>
                  </Col>
                  <Col md="5">
                    <InputNumber
                      defaultValue={0}
                      upHandler={<Plus />}
                      downHandler={<Minus />}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="7">
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label className="w-100">Lượt bình luận nhiều hơn:</Label>
                    </div>
                  </Col>
                  <Col md="5">
                    <InputNumber
                      defaultValue={0}
                      upHandler={<Plus />}
                      downHandler={<Minus />}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="7">
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label className="w-100">Lượt bình luận ít hơn:</Label>
                    </div>
                  </Col>
                  <Col md="5">
                    <InputNumber
                      defaultValue={0}
                      upHandler={<Plus />}
                      downHandler={<Minus />}
                    />
                  </Col>
                </Row>
                <Row className="mt-1 align-items-center">
                  <Col md="6">
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label className="w-100">
                        Thời điểm của tin đăng từ:
                      </Label>
                      <Label>đến ngày:</Label>
                    </div>
                  </Col>

                  <Col md="6">
                    <Flatpickr
                      options={{
                        dateFormat: "Y-m-d",
                      }}
                      className="form-control"
                    />
                    <Flatpickr
                      options={{
                        dateFormat: "Y-m-d",
                      }}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <div className="gap-1 align-items-center d-flex flex-wrap mt-1">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label>Chỉ quét lấy</Label>
                  </div>
                  <InputNumber
                    defaultValue={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                  />
                  <Label>bài đầu tiên</Label>
                </div>
              </Row>
            </Col>
            <Col md="6" xs="12">
              <div className="d-flex">
                <Label>Tiến trình: 0-0/0</Label>
                <Label className="ms-auto">Chờ: 00:00:00</Label>
              </div>
              <Progress value="55" className="progress-bar-danger">
                55%
              </Progress>

              <div className="d-flex align-items-center mt-1">
                <Button size="sm">Quét dòng thời gian</Button>
              </div>
              <Label>Tùy chọn thi hành- Hành động</Label>
              <Options />
              <div className="d-flex justify-content-end gap-1">
                <Button size="sm">Lưu</Button>
                <Button size="sm">Nạp</Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col md="8">
              <FriendsTbl />
            </Col>
            <Col md="1"></Col>
            <Col md="3">
              <div className="border d-flex flex-column gap-1 p-1">
                <Label>Hành động</Label>
                <div className="form-check">
                  <Input type="radio" />
                  <Label>Thích bài viết</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label>Bỏ thích bài viết</Label>
                </div>
                <Button size="sm">Tiến hành</Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TimelineTabTane;
