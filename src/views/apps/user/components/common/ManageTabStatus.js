import { Label } from "reactstrap";

const ManageTabStatus = ({ datas }) => {
  return (
    <>
      <Label>Trạng thái</Label>
      {datas.map((data) => {
        return (
          <div key={data.title} className="d-flex gap-1 align-items-center">
            <Label className="w-100">{data.title}</Label>
            <Label>{data.value}</Label>
          </div>
        );
      })}
    </>
  );
};

export default ManageTabStatus;
