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

const AutoCommentPage = () => {
  return (
    <Fragment>
      <Row>
        <Col md="4" xs="12">
          <Col span="12">
            <Label md="12" xs="12">
              Thêm Comment
            </Label>
            <Label md="12" xs="12">
              Nội dung bình luận
            </Label>
            <Input type="textarea" style={{ minHeight: "70%" }} />
            <Label>
              Gợi ý: thêm {"{rrr}"} đầu nội dung để đăng tin ngẫu nhiên
            </Label>
            <Label>Hướng dẫn chèn Macro không giới hạn</Label>
            <Label>Link của bài viết:</Label>
            <div className="d-flex gap-1 align-items-center">
              <Input bsSize="sm" placeholder="Đường link của bài viết" />
              <Button size="sm">Thêm</Button>
            </div>
          </Col>
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
            <Col md="12" sx="12">
              <Label md="12" xs="12">
                Nội dung bình luận
              </Label>
              <FriendsTbl />
            </Col>
          </Row>

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
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label className="w-100">Tự động bắt đầu lúc</Label>
                    </div>
                  </Col>
                  <Col md="6">
                    <Flatpickr options={{}} className="form-control" />
                  </Col>
                </Row>

                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">
                    Chỉ thực hiện với những bình luận chưa có trả lời
                  </Label>
                </div>
                <div className="d-flex flex-wrap gap-1 align-items-center">
                  <div className="form-check">
                    <Input type="checkbox" />
                    <Label className="w-100">
                      Tạm dừng mỗi lượt trả lời bình luận
                    </Label>
                  </div>
                  <InputNumber
                    defaultValue={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                  />
                  <Label>giây</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Dùng Browser</Label>
                </div>
                <Button className="d-flex justify-content-center">
                  Bắt đầu
                </Button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AutoCommentPage;
