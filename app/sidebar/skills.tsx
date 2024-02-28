import { Badge, Col, Flex, Progress, Row, Typography } from "antd";
import React from "react";

interface ISkill {
  name: string;
  percent: number;
}

const skiils: ISkill[] = [
  {
    name: "React",
    percent: 90,
  },
  {
    name: "Next.js",
    percent: 90,
  },

  {
    name: "TypeScript",
    percent: 90,
  },
  {
    name: "JavaScript",
    percent: 90,
  },
  {
    name: "HTML5",
    percent: 90,
  },
  {
    name: "CSS3",
    percent: 90,
  },
  {
    name: "TailwindCSS",
    percent: 90,
  },
  {
    name: "Material UI",
    percent: 90,
  },
  {
    name: "Ant Design",
    percent: 90,
  },

  {
    name: "SASS",
    percent: 70,
  },
  {
    name: "Nest.js",
    percent: 90,
  },
  {
    name: "Firebase",
    percent: 90,
  },
  {
    name: "PostgreSQL",
    percent: 90,
  },
  {
    name: "REST API",
    percent: 90,
  },
];

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
