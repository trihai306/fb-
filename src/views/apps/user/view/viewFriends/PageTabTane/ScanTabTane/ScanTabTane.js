/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import PageTbl from "@views/apps/user/components/tables/PageTbl.js";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Progress,
  FormText,
  Button,
} from "reactstrap";


const ScanTabTane = () => {
  const onSubmit = (data) => console.log(data);

  const { control, handleSubmit } = useForm({});

  return (
    <Fragment>
      <Row>
        <Col md="4" xs="12">
          <PageTbl />
        </Col>

        <Col md="1" xs="12"></Col>

        <Col md="7" xs="12">
          <Row>
            <Col xl="7" xs={{ order: 0 }}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-1">
                  <Label sm={2}>Từ khóa</Label>
                  <Col sm={10}>
                    <Controller
                      name="keyword"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          name="key"
                          placeholder="Nhập từ khóa"
                          {...field}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row className="mb-1">
                  Tổng số lượt người thích của Page phải:
                </Row>
                <Row className="mb-1">
                  <Col sm={4}>
                    <FormGroup check>
                      <Label>
                        <Controller
                          name="checkBoxMore"
                          control={control}
                          render={({ field }) => (
                            <Input type="checkbox" {...field} />
                          )}
                        />
                        Có nhiều hơn:
                      </Label>
                    </FormGroup>
                  </Col>

                  <Col sm={8}>
                    <Row>
                      <Col xl={8}>
                        <Controller
                          name="moreLikesNums"
                          control={control}
                          render={({ field }) => (
                            <Input bsSize="sm" type="number" {...field} />
                          )}
                        />
                      </Col>
                      <Col xl={4}>
                        <Label className="m-0 ">Lượt thích</Label>
                      </Col>
                    </Row>
                  </Col>

                  <Col sm={4}>
                    <FormGroup check>
                      <Label>
                        <Controller
                          name="checkBoxLess"
                          control={control}
                          render={({ field }) => (
                            <Input type="checkbox" {...field} />
                          )}
                        />
                        Có ít hơn:
                      </Label>
                    </FormGroup>
                  </Col>

                  <Col sm={8}>
                    <Row>
                      <Col xl={8}>
                        <Controller
                          name="lessLikesNum"
                          control={control}
                          render={({ field }) => (
                            <Input bsSize="sm" type="number" {...field} />
                          )}
                        />
                      </Col>
                      <Col xl={4}>
                        <Label className="m-0 ">Lượt thích</Label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mb-1">
                  <Col sm={6}>
                    <FormGroup check>
                      <Label>
                        <Controller
                          name="checkBoxMaxKeyWords"
                          control={control}
                          render={({ field }) => (
                            <Input type="checkbox" {...field} />
                          )}
                        />
                        Số lượt tìm tối đa với mỗi từ khóa
                      </Label>
                    </FormGroup>
                  </Col>

                  <Col sm={6}>
                    <Row>
                      <Col xl={8}>
                        <Controller
                          name="maxKeyWords"
                          control={control}
                          render={({ field }) => (
                            <Input bsSize="sm" type="number" {...field} />
                          )}
                        />
                      </Col>
                      <Col xl={4}>
                        <Label className="m-0">Lượt</Label>
                      </Col>
                    </Row>
                  </Col>

                  <Col sm={6}>
                    <FormGroup check>
                      <Label>
                        <Controller
                          name="checkBoxOverLoad"
                          control={control}
                          render={({ field }) => (
                            <Input type="checkbox" {...field} />
                          )}
                        />
                        Dừng khi tìm thấy vượt quá
                      </Label>
                    </FormGroup>
                  </Col>

                  <Col sm={6}>
                    <Row>
                      <Col xl={8}>
                        <Controller
                          name="overLoadRes"
                          control={control}
                          render={({ field }) => (
                            <Input bsSize="sm" type="number" {...field} />
                          )}
                        />
                      </Col>
                      <Col xl={4}>
                        <Label className="m-0">Kết quả</Label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mb-1">
                  <Label sm={6}>Sau mỗi lượt, tạm dừng từ</Label>
                  <Col sm={6}>
                    <Row>
                      <Col xl={5}>
                        <Input bsSize="sm" type="number" name="number" />
                      </Col>
                      <Col xl={2}>
                        <Label>đến</Label>
                      </Col>
                      <Col xl={5}>
                        <Input bsSize="sm" type="number" name="number" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button className="me-1" size="sm" type="submit">
                    Lưu
                  </Button>
                  <Button size="sm">Nạp</Button>
                </div>
              </Form>
            </Col>

            <Col xl="5" xs={{ order: 1 }}>
              <div className="demo-vertical-spacing">
                <Row>
                  <Col md={6} xs={12}>
                    Tiến trình: 358/NA
                  </Col>

                  <Col md={6} xs={12}>
                    Chờ: 00:00:00
                  </Col>
                </Row>

                <Progress value="55" className="progress-bar-danger">
                  55%
                </Progress>
                <Button color="danger">Dừng</Button>
              </div>
            </Col>
          </Row>

          <PageTbl />
        </Col>
      </Row>
    </Fragment>
  );
};

export default ScanTabTane;
