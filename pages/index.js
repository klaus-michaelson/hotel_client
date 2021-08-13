import { Row, Col, Divider } from "antd";

import { MainLayout } from "../components/MainLayout";

export const Index = ({}) => {
  return (
    <Row justify="center" gutter={[0, 0]}>
      <Col span={24}>Index/Root</Col>
    </Row>
  );
};

Index.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;
