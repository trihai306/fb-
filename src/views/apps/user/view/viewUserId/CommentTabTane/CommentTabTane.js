/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";

import Select from "react-select";
import { selectThemeColors } from "@utils";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import Options from "@views/apps/user/components/forms/Options.js";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const CommentTabTane = () => {
  return (
    <Fragment>
      <Row>
        <Col md="4" xs="12">
          <FriendsTbl />
        </Col>

        <Col md="1" xs="12"></Col>

        <Col md="7" xs="12">
          <Label md="12" xs="12">
            Chọn nội dung từ tin đăng đã lưu
          </Label>
          <Row>
            <Col md="9">
              <Row>
                <Label md="2">Mục:</Label>
                <Col md="10">
                  <Select
                    theme={selectThemeColors}
                    options={selectOptions}
                    className="react-select"
                    classNamePrefix="select"
                  />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Label md="2">Tin đăng:</Label>
                <Col md="8">
                  <Select
                    theme={selectThemeColors}
                    options={selectOptions}
                    className="react-select"
                    classNamePrefix="select"
                  />
                </Col>
                <Col md="1">
                  <Button size="sm">Chọn</Button>
                </Col>
              </Row>
            </Col>

            <Col md="3">
              <Button className="h-100">Tạo nội dung ngẫu nhiên</Button>
            </Col>
          </Row>

          <Row>
            <Col md="6" sx="12">
              <Label md="12" xs="12">
                Nội dung tin nhắn
              </Label>
              <Input type="textarea" style={{ minHeight: "70%" }} />
              <Label>Hướng dẫn chèn Macro không giới hạn</Label>
              <Label>
                Gợi ý: thêm {"{rrr}"} đầu nội dung để đăng tin ngẫu nhiên
              </Label>
            </Col>

            <Col md="6" sx="12">
              <Label md="12" xs="12">
                Nhật ký nhắn tin
              </Label>
              <FriendsTbl />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <div className="form-check form-check-inline">
                <Input type="checkbox" />
                <Label className="w-100">Hình ảnh/video</Label>
              </div>
            </Col>

            <Col md="7" className="d-flex gap-1">
              <Input bsSize="sm" type="text" placeholder="Name" />
              <Button size="sm">Chọn</Button>
              <div className="form-check w-100">
                <Input type="checkbox" />
                <Label>Đăng video</Label>
              </div>
            </Col>

            <Col md="3">
              <div className="form-check form-check-inline">
                <Input type="checkbox" />
                <Label>Chọn tệp ngẫu nhiên, số lượng</Label>
              </div>
            </Col>
          </Row>

          <Row className="mt-1 justify-content-end">
            <Col md="5">
              <div className="form-check">
                <Input type="checkbox" />
                <Label className="w-100">
                  Cho phép úp tin bài đăng thành công
                </Label>
              </div>
            </Col>
            <Col
              md="3"
              className="justify-content-end d-flex align-items-center"
            >
              <div className="form-check form-check-inline">
                <Input type="checkbox" />
                <Label>Dùng Browser</Label>
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

          <div className="form-check form-check-inline">
            <Input type="checkbox" />
            <Label>Cho phép chạy tương tác chéo bài đăng thành công</Label>
          </div>

          <Row>
            <Label>Tùy chọn thực thi</Label>
            <Row>
              <Col md="6">
                <Options />
              </Col>
              <Col md="6">
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
                    <Button size="sm">Đăng tường</Button>
                  </Col>
                  <Col md="6">
                    <Button size="sm">Xem lịch sử</Button>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col md="6">
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label className="w-100">Tự động đăng lúc lúc</Label>
                    </div>
                  </Col>
                  <Col md="6">
                    <Flatpickr
                      options={{}}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Like trước khi bình luận</Label>
                </div>
                <div className="d-flex flex-wrap gap-1 align-items-center">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label className="w-100">Bình luận trong</Label>
                  </div>
                  <InputNumber
                    defaultValue={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                  />
                  <Label>bài đầu tiên</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">
                    Không bình luận các bài đã bình luận trước đây
                  </Label>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CommentTabTane;
