import { Col, Descriptions, DescriptionsProps, Typography } from "antd";
import Link from "next/link";
import React from "react";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Age",
    children: <Typography.Text className="text-right w-full">33</Typography.Text>,
    span: 3,
  },
  {
    key: "2",
    label: "Residence",
    children: <Typography.Text className="text-right w-full">Brazil</Typography.Text>,
    span: 3,
  },
  { 
    key: "3",
    label: "Availability",
    children: <Typography.Text className="text-right w-full" type="success">Freelance</Typography.Text>,
    span: 3,
  },
  {
    key: "4",
    label: "Current Job", 
    children: (
      <Link
        href="http://lumx.io"
        className="text-right w-full"
        target="_blank"
      >
        Lumx
      </Link>
    ),
    span: 3,
  },
];

const DetailsComponent = () => {
  return (
    <Col span={24}>
      <Descriptions items={items} />
    </Col>
  );
};

export default DetailsComponent;
