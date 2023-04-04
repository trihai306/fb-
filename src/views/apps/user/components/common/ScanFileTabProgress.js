import { Row, Col, Label, Button, Input, Progress } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
const mockOptions = [
  {
    title: "Email",
  },
  {
    title: "Nơi sống",
  },
  {
    title: "Giới tính",
  },
  {
    title: "Nghề nghiệp",
  },
  {
    title: "Ngày sinh",
  },
  {
    title: "Trường trung học",
  },
  {
    title: "Quê quán",
  },
  {
    title: "Trường đại học",
  },
  {
    title: "Số điện thoại",
  },
];

const ScanFileTabProgress = () => {
  return (
    <>
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
        <Col md="4">
          <Button size="sm">Quét thông tin</Button>
        </Col>
        <Col md="4">
          <div className="form-check">
            <Input type="checkbox" />
            <Label className="w-100">Sử dụng Offline</Label>
          </div>
        </Col>
        <Col md="4">
          <Button size="sm">Xóa Offline</Button>
        </Col>
      </Row>

      <Label md="12" xs="12">
        Thông tin cần lấy
      </Label>
      <Row>
        {mockOptions.map((option) => (
          <Col md="6" xs="6" key={uuidv4()}>
            <div className="form-check">
              <Input type="checkbox" />
              <Label className="w-100">{option.title}</Label>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ScanFileTabProgress;
