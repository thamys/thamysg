import { Avatar, Card, Carousel, Col, Flex, Rate, Row, Typography } from "antd";
import React from "react";

const RecommendationsComponent = () => {
  return (
    <Col span={24} id="recommendations">
      <Row>
        <Col span={24}>
          <Typography.Title level={3}>Recommendations</Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </Typography.Paragraph>
        </Col>
        <Col span={24}>
          <Carousel autoplay>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div>
                  <div className="grid grid-flow-row grid-cols-3 gap-4 grow">
                    {Array(3)
                      .fill(0)
                      .map((_, index) => (
                        <Card className="w-full flex-grow">
                          <Rate className="mb-4" />
                          <Typography.Title level={5}>
                            Great Quality!
                          </Typography.Title>
                          <Typography.Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Et, volutpat feugiat placerat lobortis.
                            Natoque rutrum semper sed suspendisse nunc lectus.
                          </Typography.Paragraph>
                          <Flex gap="middle">
                            <Avatar src="https://via.placeholder.com/150" />
                            <div>
                              <Typography.Text className="font-medium">
                                John Doe
                              </Typography.Text>
                              <Typography.Paragraph>
                                CEO at Company
                              </Typography.Paragraph>
                            </div>
                          </Flex>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
          </Carousel>
        </Col>
      </Row>
    </Col>
  );
};

export default RecommendationsComponent;
