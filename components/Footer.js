import { Row, Col, Typography, List } from "antd";

const { Title, Text } = Typography;
export const Footer = ({}) => {
  const data = [
    "Racing car sprays ",
    "Japanese princess ",
    "Australian walks 1 crash.",
    "Man charged over missing wedding girl.",
  ];
  return (
    <Row justify="center" className={`pt-3 pb-5 pl-5 pr-5 bg-primary text-bg`}>
      <Col span={8} className={`bordered`}>
        <List
          size="small"
          header={
            <Title level={3} className={`text-bg`}>
              Book online or call
            </Title>
          }
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Col>
      <Col span={8} className={`bordered`}>
        <Title level={3} className={`text-bg`}>
          adfasf
        </Title>
      </Col>
      <Col span={8} className={`bordered`}>
        <Title level={3} className={`text-bg`}>
          Location
        </Title>
      </Col>
    </Row>
  );
};

export default Footer;
