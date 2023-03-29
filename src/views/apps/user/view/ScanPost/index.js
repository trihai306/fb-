

import Flatpickr from "react-flatpickr";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
import "flatpickr/dist/themes/material_green.css";
import { Fragment } from "react";
import FriendsTbl from "../../components/tables/FriendsTbl.js";
import Options from "../../components/forms/Options.js";
import { Row, Col, Input, Label, Button, Progress } from "reactstrap";

const ScanPost = () => {
  return (
    <Fragment>
      <Row>
        <Col md="4" xs="12">
          <Label>Link của bài viết:</Label>
          <div className="d-flex flex-wrap justify-content-space align-items-center gap-1">
            <div>
              <Input bsSize="sm" placeholder="Đường link của bài viết" />
              <div className="d-flex">
                <Label className="w-50">Ghi chú:</Label>
                <Input bsSize="sm" />
              </div>
            </div>
            <Button>Thêm</Button>
          </div>
          <Label>Danh sách bài viết:</Label>
          <FriendsTbl />
          <Options />
        </Col>

        <Col md="1" xs="12"></Col>

        <Col md="7" xs="12">
          <Label>Kết quả: 0</Label>
          <FriendsTbl />
          <Row>
            <Col md="6" xs="12">
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

              <Label>Lọc comment</Label>
              <div className="d-flex flex-wrap gap-1 align-items-center">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Có chứa SDT</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Có chứa email</Label>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-75">Có nội dung</Label>
                </div>
                <Input bsSize="sm" />
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Không trùng UserID</Label>
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Chỉ liệt kê comment của mình</Label>
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Không liệt kê comment của mình</Label>
              </div>
            </Col>

            <Col md="6" xs="12">
              <div className="d-flex flex-wrap gap-1 align-items-center">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Tư động bắt đầu vào lúc</Label>
                </div>
                <Flatpickr options={{}} className="form-control" />
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Quét trả lời của bình luận</Label>
              </div>
              <div className="d-flex flex-wrap gap-1 align-items-center">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Chỉ quét</Label>
                </div>
                <InputNumber
                  upHandler={<Plus />}
                  downHandler={<Minus />}
                  defaultValue={0}
                />
                <Label>comment sớm nhất</Label>
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Chỉ quét những comment mới nhất</Label>
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Bỏ qua UserID đã like không thể kết bạn</Label>
              </div>
              <div className="d-flex flex-wrap gap-1 align-items-center">
                <div className="form-check">
                  <Input type="radio" />
                  <Label>Quét Comment</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label>Quét like bài viết</Label>
                </div>
              </div>
              <Button className="d-flex justify-content-center">Bắt đầu</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ScanPost