import { Row, Col, Label, Input } from "reactstrap";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";

const Options = ({ optionsSt, setOptionSt }) => {
  const {
    fromStopVal,
    toStopVal,
    finishTurn,
    stopSec,
    stopWhenErrStatus,
    stopWhenErrVal,
    maxTurnStatus,
    maxTurnVal,
    positionStartStatus,
    positionStartVal,
    positionEndStatus,
    positionEndVal,
    repeatStatus,
    repeatVal,
  } = optionsSt;

  const changeOptionsVal = (body) => {
    setOptionSt({
      ...optionsSt,
      ...body,
    });
  };

  return (
    <>
      <Row>
        <Col md="12" className="d-flex align-items-center gap-1 flex-wrap">
          <Label>Sau mỗi lượt, tạm dừng từ </Label>
          <InputNumber
            value={fromStopVal || 0}
            min={0}
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
            onChange={(num) => {
              changeOptionsVal({
                fromStopVal: num,
              });
            }}
          />
          <Label>đến</Label>
          <InputNumber
            min={0}
            value={toStopVal || 0}
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
            onChange={(num) => {
              changeOptionsVal({
                toStopVal: num,
              });
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col md="12" className="d-flex align-items-center gap-1 flex-wrap">
          <Label>Sau khi đạt</Label>
          <InputNumber
            min={0}
            value={finishTurn || 0}
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
            onChange={(num) => {
              changeOptionsVal({
                finishTurn: num,
              });
            }}
          />
          <Label>lượt, tạm dừng</Label>
          <InputNumber
            min={0}
            value={stopSec || 0}
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
            onChange={(num) => {
              changeOptionsVal({
                stopSec: num,
              });
            }}
          />
          <Label>giây</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check">
            <Input
              value={stopWhenErrStatus || false}
              onChange={(e) => {
                changeOptionsVal({
                  stopWhenErrStatus: e.target.checked,
                });
              }}
              type="checkbox"
            />
            <Label>Tạm dừng khi gặp lỗi</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            min={0}
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
            value={stopWhenErrVal || 0}
            onChange={(value) => {
              changeOptionsVal({
                stopWhenErrVal: value,
              });
            }}
          />
          <Label className="">phút</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check ">
            <Input
              type="checkbox"
              value={maxTurnStatus || false}
              onChange={(e) => {
                changeOptionsVal({
                  maxTurnStatus: e.target.checked,
                });
              }}
            />
            <Label className="">Tổng lượt tối đa</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            min={0}
            value={maxTurnVal || 0}
            onChange={(num) => {
              changeOptionsVal({
                maxTurnVal: num,
              });
            }}
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
            <Input
              value={positionStartStatus || false}
              type="checkbox"
              onChange={(e) => {
                changeOptionsVal({
                  positionStartStatus: e.target.checked,
                });
              }}
            />
            <Label className="">Bắt đầu từ vị trí</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            min={0}
            value={positionStartVal || 0}
            onChange={(num) => {
              changeOptionsVal({
                positionStartVal: num,
              });
            }}
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
            <Input
              type="checkbox"
              value={positionEndStatus || false}
              onChange={(e) => {
                changeOptionsVal({
                  positionEndStatus: e.target.checked,
                });
              }}
            />
            <Label className="">Kết thúc từ vị trí</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            min={0}
            value={positionEndVal || 0}
            defaultValue={0}
            upHandler={<Plus />}
            downHandler={<Minus />}
            onChange={(num) => {
              changeOptionsVal({
                positionEndVal: num,
              });
            }}
          />
          <Label className="">trong danh sách</Label>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <div className="form-check ">
            <Input
              type="checkbox"
              value={repeatStatus || 0}
              onChange={(e) => {
                changeOptionsVal({
                  repeatStatus: e.target.value,
                });
              }}
            />
            <Label className="">Lặp lại khi hết danh sách sau</Label>
          </div>
        </Col>
        <Col md="7" className="d-flex align-items-center flex-wrap gap-1">
          <InputNumber
            min={0}
            value={repeatVal || 0}
            onChange={(nums) => {
              changeOptionsVal({
                repeatVal: nums,
              });
            }}
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
