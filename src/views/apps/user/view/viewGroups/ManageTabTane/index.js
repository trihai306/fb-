/* eslint-disable import/no-unresolved */
/* eslint-disable no-tabs */
import { Fragment, useState } from "react";
import { Row, Col, Label, Button, Input, Progress, Spinner } from "reactstrap";
import "flatpickr/dist/themes/material_green.css";
import Options from "@views/apps/user/components/forms/Options.js";
import FriendsTbl from "@views/apps/user/components/tables/FriendsTbl.js";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
import ManageTabStatus from "@views/apps/user/components/common/manageTabStatus.js";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Select from "react-select";
const mockData = [
  {
    title: "Tải dữ liệu của bạn bè",
    value: "IDE",
  },
  {
    title: "Dòng thời gian",
    value: "IDE",
  },
  {
    title: "Quét UserId",
    value: "IDE",
  },
  {
    title: "Quét hồ sơ",
    value: "IDE",
  },
  {
    title: "Quét tương tác",
    value: "IDE",
  },
  {
    title: "Đăng tường",
    value: "IDE",
  },
  {
    title: "Nhắn tin",
    value: "IDE",
  },
  {
    title: "Bình luận",
    value: "IDE",
  },
];

const ManageTabTane = () => {
  const [optionsSt, setOptionSt] = useState({
    fromStopVal: 0,
    toStopVal: 0,
    finishTurn: 0,
    stopSec: 0,
    stopWhenErrStatus: false,
    stopWhenErrVal: 0,
    maxTurnStatus: false,
    maxTurnVal: 0,
    positionStartStatus: false,
    positionStartVal: 0,
    positionEndStatus: false,
    positionEndVal: 0,
    repeatStatus: 0,
    repeatVal: 0,
  });
  const store = useSelector((state) => state.users);

  const [searhcFr, setsearhcFr] = useState({
    link: "",
    nums: 5,
    options_pick: "all",
    openBrowser: false,
    loading: false,
  });
  const [friends, setFriends] = useState([]);
  return (
    <Fragment>
      <Row>
        <Col md="6" xs="12">
          <FriendsTbl dataProps={friends} />
          <div className="form-check d-flex align-items-center gap-1 mt-1">
            <Label>Tìm thành viên trong nhóm</Label>
            <div>
              <Input
                value={searhcFr.keyword}
                bsSize="sm"
                placeholder="đường link của nhóm"
                type="text"
                onChange={(e) => {
                  setsearhcFr({
                    ...searhcFr,
                    link: e.target.value,
                  });
                }}
              />
            </div>
            <InputNumber
              min={1}
              defaultValue={searhcFr.nums}
              upHandler={<Plus />}
              downHandler={<Minus />}
              onChange={(nums) => {
                setsearhcFr({
                  ...searhcFr,
                  nums,
                });
              }}
            />
            <div className="form-check">
              <Input
                type="checkbox"
                defaultChecked={searhcFr.openBrowser}
                onChange={(e) => {
                  setsearhcFr({
                    ...searhcFr,
                    openBrowser: e.target.checked,
                  });
                }}
              />
              <Label className="w-100">Dùng browser</Label>
            </div>

            <Select
              defaultValue={searhcFr.options_pick}
              onChange={(newValue) => {
                setsearhcFr({
                  ...searhcFr,
                  options_pick: newValue.value,
                });
              }}
              options={[
                { value: "all", label: "Tất cả" },
                { value: "friends", label: "Bạn bè" },
              ]}
              className="react-select h-50"
              classNamePrefix="select"
            />
            <Button
              onClick={async () => {
                setsearhcFr({
                  ...searhcFr,
                  loading: true,
                });
                if (store.current_cookies) {
                  let friendsRes = await window.eel.search_groups(
                    {
                      cookies: store.current_cookies,
                      openBrowser: searhcFr.openBrowser,
                    },
                    searhcFr.link,
                    searhcFr.options_pick,
                    searhcFr.nums
                  )();
                  friendsRes = friendsRes.map((item) => {
                    const itemParse = JSON.parse(item);
                    const keys = Object.keys(itemParse);

                    keys.forEach((key) => {
                      if (Array.isArray(itemParse[key])) {
                        const myString = itemParse[key].join(", ");
                        itemParse[key] = myString;
                      } else {
                        if (typeof itemParse[key] !== "string") {
                          const myString = Object.entries(itemParse[key])
                            .map(([key, value]) => `${key}:${value}`)
                            .join(", ");
                          itemParse[key] = myString;
                        }
                      }
                    });
                    return itemParse;
                  });
                  setFriends(friendsRes);
                } else {
                  toast.error("Đề nghị chọn tài khoản crawl");
                }
                setsearhcFr({
                  ...searhcFr,
                  loading: false,
                });
              }}
              size="sm"
            >
              {searhcFr.loading ? <Spinner size="sm" color="light" /> : "Tìm"}
            </Button>
          </div>
        </Col>

        <Col md="6" xs="12">
          <Row>
            <Col md="3" xs="6">
              <Label>Hành động</Label>
              <div className="d-flex gap-1 jusity-content-start flex-column">
                <Button size="sm">Lấy danh sách</Button>
                <Button size="sm">Lưu</Button>
                <Button size="sm">Nạp</Button>
                <Button size="sm">Xáo trộn</Button>
              </div>
            </Col>
            <Col md="9" xs="6">
              <div className="d-flex">
                <Label>Tiến trình: 0-0/0</Label>
                <Label className="ms-auto">Chờ: 00:00:00</Label>
              </div>
              <Progress value="55" className="progress-bar-danger">
                55%
              </Progress>

              <Options optionsSt={optionsSt} setOptionSt={setOptionSt} />
            </Col>
          </Row>

          <Row className="mt-1">
            <Col md="3" xs="6">
              <Label>Hành động</Label>
              <div className="d-flex gap-1 jusity-content-start flex-column gap-1">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Dùng browser</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label className="w-100">Tham gia nhóm</Label>
                </div>
                <Label>Trả lời câu hỏi:</Label>
                <Input type="text" />
                <div className="form-check">
                  <Input type="radio" />
                  <Label className="w-100">Rời nhóm</Label>
                </div>
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Chỉ nhóm có phê duyệt bài</Label>
                </div>
                <Button size="sm">Tiến hành</Button>
              </div>
            </Col>

            <Col md="9" xs="6">
              <Label>Tìm Nhóm</Label>
              <div className="d-flex gap-1">
                <Label className="w-25">Từ khóa:</Label>
                <Input
                  type="text"
                  bsSize="sm"
                  placeholder="Từ khóa; Từ khóa;..."
                />
              </div>
              <div className="d-flex gap-1 align-items-center flex-wrap mt-1">
                <Label>Loại nhóm:</Label>
                <div className="form-check">
                  <Input type="radio" />
                  <Label>Nhóm công khai</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label>Nhóm riêng tư</Label>
                </div>
                <div className="form-check">
                  <Input type="radio" />
                  <Label>Tất cả</Label>
                </div>
              </div>
              <Label>Tổng số thành viên tham gia của nhoms phải:</Label>

              <div className="d-flex align-items-center gap-1">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Có nhiều hơn: </Label>
                </div>
                <InputNumber
                  className="custom-input-number"
                  upHandler={<Plus />}
                  downHandler={<Minus />}
                  defaultValue={0}
                />
                <Label>lượt thích</Label>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label className="w-100">Có ít hơn: </Label>
                </div>
                <InputNumber
                  upHandler={<Plus />}
                  downHandler={<Minus />}
                  defaultValue={0}
                />
                <Label>lượt thích</Label>
              </div>

              <div className="form-check">
                <Input type="checkbox" />
                <Label>Chỉ tìm những nhóm đã thích</Label>
              </div>

              <div className="d-flex align-items-center gap-1">
                <div className="form-check">
                  <Input type="checkbox" />
                  <Label>Dừng khi tìm thấy vượt quá</Label>
                </div>
                <InputNumber
                  upHandler={<Plus />}
                  downHandler={<Minus />}
                  defaultValue={0}
                />
                <Label>kết quả</Label>
              </div>
              <div className="d-flex flex-wrap justify-content-space align-items-center ">
                <Button
                  className="d-flex justify-content-center ms-auto me-auto"
                  size="sm"
                >
                  Bắt đầu tìm
                </Button>
                <Button
                  className="d-flex justify-content-center ms-auto me-auto"
                  size="sm"
                >
                  Tìm nhanh
                </Button>
              </div>

              <Row>
                <Col md="6" xs="12">
                  <ManageTabStatus datas={mockData} />
                </Col>

                <Col md="6" xs="12">
                  <Label>Nhật ký hành động:</Label>
                  <FriendsTbl />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ManageTabTane;
