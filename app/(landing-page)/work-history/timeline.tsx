"use client";
import {
  Avatar,
  Button,
  List,
  Skeleton,
  Tag,
  Timeline,
  Typography,
} from "antd";
import React, { useState } from "react";
import {
  workHistoryByRole,
  WorkHistoryByRoleEntry,
  WorkHistoryEntry,
} from "./data";
import { contrastColor } from "@/constants/theme";

const { Item } = List;

const count = 2;

const TimelinePerTitle = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<WorkHistoryByRoleEntry[]>(
    workHistoryByRole.slice(0, count)
  );

  const onLoadMore = () => {
    setLoading(true);
    const start = list.length;
    const end = start + count;
    setList(list.concat(...workHistoryByRole.slice(start, end)));
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
      <Button onClick={onLoadMore}>Load more</Button>
    </div>
  ) : null;
  return (
    <List
      className="w-full"
      loading={loading}
      itemLayout="horizontal"
      loadMore={list.length < workHistoryByRole.length ? loadMore : false}
      dataSource={list}
      renderItem={(role) => (
        <Skeleton avatar title={false} loading={loading} active>
          <Timeline.Item className="w-full timeline-item">
            <div className="mb-4">
              <Typography.Title level={4} className="!mb-0">
                {role.title}
                <span className="text-xs ml-4 font-normal uppercase">
                  {role.period}
                </span>
              </Typography.Title>
              <Typography.Paragraph
                className="!font-normal !mb-4"
                style={{ color: contrastColor }}
              >
                {role.company}
              </Typography.Paragraph>
              <ul>
                {role.responsibilities.map((responsibility) => (
                  <li
                    className="!font-extralight"
                    key={responsibility}
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </Timeline.Item>
        </Skeleton>
      )}
    />
  );
};

export default TimelinePerTitle;
