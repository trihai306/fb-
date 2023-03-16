import { Fragment } from "react"

import { Row, Col, Form, FormGroup, Label, Input, FormText, Button  } from "reactstrap"

const ScanTabTane = () => {
    return <Fragment>
        <Row>
            <Col xl="7" xs={{ order: 0 }}>
                <Form>
                    <Row className="mb-1">
                        <Label sm={2}>Từ khóa</Label>
                        <Col sm={10}>
                            <Input type="text" name="key" placeholder="Nhập từ khóa" />
                        </Col>
                    </Row>
                    <Row className="mb-1">Tổng số lượt người thích của Page phải:</Row>
                    <Row className="mb-1">
                        <Col sm={4}>
                            <FormGroup check>
                                <Label >
                                    <Input type="checkbox" name="check-more" />
                                    Có nhiều hơn:
                                </Label>
                            </FormGroup>
                        </Col>

                        <Col sm={8}>
                            <Row>
                                <Col xl={8}>
                                    <Input bsSize="sm" type="number" name="number"  />
                                </Col>
                                <Col xl={4}>
                                    <Label className="m-0 " >Lượt thích</Label>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col sm={4}>
                            <FormGroup check>
                                <Label>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Có ít hơn:
                                </Label>
                            </FormGroup>
                        </Col>

                        <Col sm={8}>
                            <Row>
                                <Col xl={8}>
                                    <Input bsSize="sm" type="number" name="number"  />
                                </Col>
                                <Col xl={4}>
                                    <Label className="m-0 " >Lượt thích</Label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col sm={6}>
                            <FormGroup check>
                                <Label >
                                    <Input type="checkbox" name="check-more" />
                                Số lượt tìm tối đa với mỗi từ khóa
                                </Label>
                            </FormGroup>
                        </Col>

                        <Col sm={6}>
                        <Row>
                                <Col xl={8}>
                                    <Input bsSize="sm" type="number" name="number"  />
                                </Col>
                                <Col xl={4}>
                                    <Label className="m-0" >Lượt</Label>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col sm={6}>
                            <FormGroup check>
                            <Label >
                                <Input type="checkbox" id="checkbox2" />{' '}
                                Dừng khi tìm thấy vượt quá
                            </Label>
                            </FormGroup>
                        </Col>

                        <Col sm={6}>
                            <Row>
                                <Col xl={8}>
                                    <Input bsSize="sm" type="number" name="number"  />
                                </Col>
                                <Col xl={4}>
                                    <Label className="m-0" >Kết quả</Label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Label sm={6}>Sau mỗi lượt, tạm dừng từ</Label>
                        <Col sm={6}>
                            <Row>
                                <Col xl={5}>
                                    <Input bsSize="sm" type="number" name="number"  />
                                </Col>
                                <Col xl={2}>
                                    <Label>đến</Label>
                                </Col>
                                <Col xl={5}>
                                    <Input bsSize="sm" type="number" name="number"  />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Col>

            <Col xl="6" xs={{ order: 1 }}>

            </Col>
        </Row>
    </Fragment>
}

export default ScanTabTane