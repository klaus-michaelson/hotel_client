/* eslint-disable react/display-name */
import { Row, Typography } from "antd";

import { MainLayout } from "../components/MainLayout";
import { ServiceManager } from "../components/Service/ServiceManager";
import { SideBar } from "../components/SideBar";

const { Title } = Typography;

export const Others = ({}) => {
  return (
    <div className={`d-flex flex-column flex-fill`}>
      <Row
        justify="center"
        align="middle"
        gutter={[0, 0]}
        className={`m-3 p-3 mt-4 rounded border border-light bg-dark`}
        style={{ minHeight: "300px" }}
      >
        <Title className={`text-background`}>The graph will be here</Title>
      </Row>
      <ServiceManager />
    </div>
  );
};

Others.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <SideBar />
      <div className={`d-flex flex-fill`}>{page}</div>
    </MainLayout>
  );
};

export default Others;
