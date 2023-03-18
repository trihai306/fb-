import { Row, Col, Label, Input } from "reactstrap";

const Options = () => {
  return (
    <>
      <Row>
        <Label md="6">Sau mỗi lượt, tạm dừng từ </Label>
        <Col md="6" className="d-flex align-items-center gap-1">
          <Input bsSize="sm" type="number" />
          <Label>đến</Label>
          <Input bsSize="sm" type="number" />
        </Col>
      </Row>
      <Row>
        <Col md="2">
          <Label>Sau khi đạt</Label>
        </Col>
        <Col md="10" className="d-flex align-items-center gap-1">
          <Input bsSize="sm" type="number" />
          <Label className="w-100">lượt, tạm dừng</Label>
          <Input bsSize="sm" type="number" />
          <Label>giây</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check form-check-inline">
            <Input type="checkbox" />
            <Label className="w-100">Tạm dừng khi gặp lỗi</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center gap-1">
          <Input bsSize="sm" type="number" />
          <Label className="w-100">phút</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check form-check-inline">
            <Input type="checkbox" />
            <Label className="w-100">Tổng lượt tối đa</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center gap-1">
          <Input bsSize="sm" type="number" />
          <Label className="w-100">lượt</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check form-check-inline">
            <Input type="checkbox" />
            <Label className="w-100">Bắt đầu từ vị trí</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center gap-1">
          <Input bsSize="sm" type="number" />
          <Label className="w-100">trong danh sách</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check form-check-inline">
            <Input type="checkbox" />
            <Label className="w-100">Kết thúc từ vị trí</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center gap-1">
          <Input bsSize="sm" type="number" />
          <Label className="w-100">trong danh sách</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check form-check-inline">
            <Input type="checkbox" />
            <Label className="w-100">Lặp lại khi hết danh sách sau</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center gap-1">
          <Input bsSize="sm" type="number" />
          <Label className="w-100">giây</Label>
        </Col>
      </Row>
    </>
  );
};

export default Options;
