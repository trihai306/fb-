// ** User List Component
import Table from "./Table";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Input,
  Label,
} from "reactstrap";

// ** Custom Components
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from "react-feather";

// ** Styles
// eslint-disable-next-line import/no-unresolved
import "@styles/react/apps/app-users.scss";
import ProxyTable from "./TableProxy";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const UsersList = () => {
  const store = useSelector((state) => state.users);
  const [statsData, setStartsData] = useState([
    {
      color: "primary",
      title: "Tổng tài khoản",
      icon: <User size={20} />,
      stat: "21,459",
    },
    {
      color: "danger",
      title: "Thêm mới",
      icon: <UserPlus size={20} />,
      stat: "4,567",
    },
    {
      color: "success",
      title: "Đang hoạt động",
      icon: <UserCheck size={20} />,
      stat: "19,860",
    },
    {
      color: "warning",
      title: "Bị khoá",
      icon: <UserX size={20} />,
      stat: "237",
    },
  ]);

  const checkCookies = async () => {
    console.log(store.data);
    store.data.forEach(async (item) => {
      try {
        const res = await window.eel.check_cookies_fe(
          item.cookies_cuser,
          item.username,
          item.password
        )();
        console.log(res);
        toast.success(`Success check cookies of username ${item.username}`)
      } catch (error) {
        // console.log(error)
        toast.error(error.errorText)
      }
    });
  };

  return (
    <div className="app-user-list">
      <Row>
        <Col md={6}>
          <Row>
            {statsData.map((stat) => (
              <Col lg="6" sm="6">
                <StatsHorizontal
                  color={stat.color}
                  statTitle={stat.title}
                  icon={stat.icon}
                  renderStats={<h3 className="fw-bolder mb-75">{stat.stat}</h3>}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle tag="h4">Special title treatment</CardTitle>
                  <CardText className="mb-2">
                    <Row>
                      <Col md={3}>
                        <div className="form-check form-check-primary">
                          <Input
                            type="checkbox"
                            id="primary-checkbox"
                            defaultChecked
                          />
                          <Label
                            className="form-check-label"
                            for="primary-checkbox"
                          >
                            Chạy proxy
                          </Label>
                        </div>
                      </Col>
                    </Row>
                  </CardText>
                  <Button onClick={checkCookies} color="primary" outline>
                    Kiểm tra cookies
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <ProxyTable data={store.proxyData}></ProxyTable>
        </Col>
      </Row>
      <Table />
    </div>
  );
};

export default UsersList;
