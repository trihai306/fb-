import {Fragment} from "react";
import {Button, Col, Input, Label, Progress, Row} from "reactstrap";

const Search = () => {
    return (
        <Fragment>
            <Row>
                <Col lg={12}>
                    <Col md="6" xs="12">
                        <div className="d-flex">
                            <Label>Tiến trình: 0-0/0</Label>
                            <Label className="ms-auto">Chờ: 00:00:00</Label>
                        </div>
                        <Progress value="55" className="progress-bar-danger">
                            55%
                        </Progress>

                        <div className="form-check mt-1">
                            <Input type="radio" />
                            <Label className="w-100">Tìm theo gợi ý facebook</Label>
                        </div>
                        <div className="form-check mt-1">
                            <Input type="radio" />
                            <Label className="w-100">Tìm theo Từ khoá</Label>
                            <Input type='text' className='mt-1 mb-1' />
                            <Input type="checkbox" />
                            <Input type='number' className='mt-1 mb-1' />
                        </div>
                    </Col>
                </Col>
            </Row>
        </Fragment>
    )
}
export default Search
