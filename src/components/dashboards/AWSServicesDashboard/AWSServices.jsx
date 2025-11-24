import { useContext } from "react";
import ServicesButtonGroup from "./component/ButtonGroup";
import ServicesTable from "./component/ServicesTable";
import {
  asgColumns,
  asgRows,
  ec2Columns,
  ec2Rows,
  rdsColumns,
  rdsRows,
} from "./component/tableData";
import { ServicesContext } from "./context/ServicesProvider";

const AWSServices = () => {
  const [selectedService, setSelectedService] = useContext(ServicesContext);
  return (
    <div className="table-wrapper">
      <ServicesButtonGroup setSelectedService={setSelectedService} />
      <ServicesTable
        key={selectedService}
        rows={
          selectedService == "EC2"
            ? ec2Rows
            : selectedService == "RDS"
            ? rdsRows
            : asgRows
        }
        columns={
          selectedService == "EC2"
            ? ec2Columns
            : selectedService == "RDS"
            ? rdsColumns
            : asgColumns
        }
      />
    </div>
  );
};

export default AWSServices;
