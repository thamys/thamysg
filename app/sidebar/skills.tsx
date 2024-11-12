import skiils, { ISkill } from "@/constants/skills";
import { Badge, Col, Flex, Progress, Row, Typography } from "antd";
import React from "react";



const SkiilItemComponent: React.FC<ISkill> = ({ name, percent }) => (
  <Row justify="space-between">
    <Col>
      <Typography.Text>{name}</Typography.Text>
    </Col>
    <Col>
      <Typography.Text>{percent}%</Typography.Text>
    </Col>
    <Col span={24}>
      <Progress percent={percent} showInfo={false} />
    </Col>
  </Row>
);

const SkillsComponent = () => {
  return (
    <>
      <Col span={24}>
        <Typography.Title level={5}>Skills</Typography.Title>
        <Flex gap="small" vertical>
          {skiils.slice(0, 5).map((skill, index) => (
            <SkiilItemComponent key={index} {...skill} />
          ))}
        </Flex>
      </Col>
      <Col span={24}>
        <Typography.Title level={5}>Extra Skills</Typography.Title>
        {skiils.slice(6).map((skill, index) => (
          <Badge
            status="default"
            key={index}
            count={skill.name}
            style={{ margin: "5px" }}
          />
        ))}
      </Col>
    </>
  );
};

export default SkillsComponent;
