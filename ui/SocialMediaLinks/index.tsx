import { medias } from "@/constants/links";
import { Button, Flex, Tooltip } from "antd";
import Link from "next/link";
import React from "react";

const SocialMediaLinks = () => {
  return (
    <Flex gap="middle">
      {medias.map((media, index) => (
        <Tooltip title={media.name} key={index}>
          <Link href={media.link} passHref target="_blank">
            <Button
              style={{
                backgroundColor: media.color,
                color: '#F5F6F6',
              }}
              type="text"
              icon={React.createElement(media.icon)}
            />
          </Link>
        </Tooltip>
      ))}
    </Flex>
  );
};

export default SocialMediaLinks;
