import { Row, Col, Label, Input } from "reactstrap";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";

const Options = () => {
  return (
    <>
      <Row>
        <Col md="12" className="d-flex align-items-center gap-1 flex-wrap">
          <Label>Sau mỗi lượt, tạm dừng từ </Label>
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
      <Row>
        <Col md="12" className="d-flex align-items-center gap-1 flex-wrap">
          <Label>Sau khi đạt</Label>
          <InputNumber
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
          />
          <Label>lượt, tạm dừng</Label>
          <InputNumber
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
          />
          <Label>giây</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check">
            <Input type="checkbox" />
            <Label>Tạm dừng khi gặp lỗi</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
          />
          <Label className="">phút</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check ">
            <Input type="checkbox" />
            <Label className="">Tổng lượt tối đa</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
          />
          <Label className="">lượt</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check ">
            <Input type="checkbox" />
            <Label className="">Bắt đầu từ vị trí</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
          />
          <Label className="">trong danh sách</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check ">
            <Input type="checkbox" />
            <Label className="">Kết thúc từ vị trí</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
          />
          <Label className="">trong danh sách</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check ">
            <Input type="checkbox" />
            <Label className="">Lặp lại khi hết danh sách sau</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
          />
          <Label className="">giây</Label>
        </Col>
      </Row>
    </>
  );
};

export default Options;
