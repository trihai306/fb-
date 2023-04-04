import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import Select from "react-select";
import FriendsTbl from "../tables/FriendsTbl.js";
const selectOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];
const CommentSendMessCommon = () => {
  return (
    <>
      <Label md="12" xs="12">
        Chọn nội dung từ tin đăng đã lưu
      </Label>
      <Row>
        <Col md="9">
          <Row>
            <Label md="2">Mục:</Label>
            <Col md="10">
              <Select
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
    </>
  );
};

export default CommentSendMessCommon;
