/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment } from "react";
import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import Select from "react-select";
import { selectThemeColors } from "@utils";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
import PageTbl from "../../components/tables/PageTbl.js";
const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const CrossInteraction = () => {
  return (
    <Fragment>
      <Row>
        <Col md="4" xs="12">
          <PageTbl />
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
                Nội dung bình luận
              </Label>
              <Input type="textarea" style={{ minHeight: "70%" }} />
              <Label>Hướng dẫn chèn Macro không giới hạn</Label>
              <Label>
                Gợi ý: thêm {"{rrr}"} đầu nội dung để đăng tin ngẫu nhiên
              </Label>
            </Col>

            <Col md="6" sx="12">
              <Label md="12" xs="12">
                Nhật ký tương tác
              </Label>
              <PageTbl />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md="2">
              <div className="form-check form-check-inline">
                <Input type="checkbox" />
                <Label>Hình ảnh</Label>
              </div>
            </Col>

            <Col md="6" className="d-flex gap-1">
              <Input bsSize="sm" type="text" placeholder="Name" />
            </Col>

            <Col md="4" className="gap-1 d-flex">
              <Button size="sm">Chọn</Button>
              <Button size="sm">Xem ảnh</Button>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <Label>Bình luận khi có bài đăng lên</Label>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Trang cá nhân</Label>
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Trường bạn bè</Label>
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Nhóm</Label>
              </div>
              <div className="form-check">
                <Input type="checkbox" />
                <Label>Page</Label>
              </div>
            </Col>

            <Col md="8">
              <Label>Tùy chọn</Label>
              <div className="form-check">
                <Input type="checkbox" />
                <Label className="w-100">
                  Thích bài viết trước khi bình luận
                </Label>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="form-check w-100">
                  <Input type="checkbox" />
                  <Label className="w-100">Tạm dừng giữa 2 lượt</Label>
                </div>
                <div className="d-flex-wrap-center">
                  <InputNumber
                    defaultValue={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                  />
                </div>
                <Label>đến</Label>
                <div className="d-flex-wrap-center">
                  <InputNumber
                    defaultValue={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CrossInteraction;
