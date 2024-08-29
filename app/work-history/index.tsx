"use client";
import {
  Avatar,
  Button,
  Col,
  List,
  Row,
  Skeleton,
  Tag,
  Timeline,
  Typography,
} from "antd";
import React, { useState } from "react";
import { workHistory, WorkHistoryEntry } from "./data";

const { Item } = List;

const count = 2;

const WorkHistoryComponent = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<WorkHistoryEntry[]>(
    workHistory.slice(0, count)
  );

  const onLoadMore = () => {
    setLoading(true);
    const start = list.length;
    const end = start + count;
    setList(list.concat(...workHistory.slice(start, end)));
    setLoading(false);
  };

  const loadMore = !loading ? (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
  ) : null;
  return (
    <Col id="work-history" span={24}>
      <Row>
        <Col span={24} className="text-center">
          <Typography.Title level={3}>Professional Journey</Typography.Title>
          <Typography.Paragraph className="text-lg">
            Discover the diverse roles and impactful projects that have shaped
            my decade-long career in technology and design.
          </Typography.Paragraph>
        </Col>
        <Col span={24}>
          <List
            className="w-full px-12"
            loading={loading}
            itemLayout="horizontal"
            loadMore={list.length < workHistory.length ? loadMore : false}
            dataSource={list}
            renderItem={(item) => (
              <Skeleton avatar title={false} loading={loading} active>
                <Item
                  key={item.company}
                  className="w-full flex flex-col justify-start items-start"
                >
                  <div className="flex gap-4 justify-start items-start w-full mt-2 mb-8">
                    <a href={item.companyUrl} target="_blank">
                      <Avatar
                        size={60}
                        src={"https://via.placeholder.com/60"}
                      />
                    </a>
                    <div>
                      <Typography.Title level={5}>
                        {item.company}
                      </Typography.Title>
                      <Typography.Paragraph>
                        {item.companyDescription}
                      </Typography.Paragraph>
                    </div>
                  </div>
                  <Timeline
                    className="w-full px-12"
                    mode="left"
                    items={item.roles.map((role) => ({
                      children: (
                        <div className="mb-4">
                          <Typography.Title level={4}>
                            {role.title}
                          </Typography.Title>
                          <Typography.Paragraph>
                            {role.period} <br /> {role.location}
                          </Typography.Paragraph>
                          <ul>
                            {role.responsibilities.map((responsibility) => (
                              <li key={responsibility}>{responsibility}</li>
                            ))}
                          </ul>
                          <div className="flex gap-2 mt-4">
                            {role.skills.map((skill) => (
                              <Tag
                                className="!rounded"
                                color="blue"
                                key={skill}
                              >
                                {skill}
                              </Tag>
                            ))}
                          </div>
                        </div>
                      ),
                    }))}
                  />
                </Item>
              </Skeleton>
            )}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default WorkHistoryComponent;
