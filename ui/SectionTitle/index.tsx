import { contrastColor } from "@/constants/theme";
import Title, { TitleProps } from "antd/es/typography/Title";
import { Kalam } from "next/font/google";
import React, { PropsWithChildren } from "react";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

const SectionTitle: React.FC<PropsWithChildren & TitleProps> = ({
  children,
  className,
  style,
  level = 2,
  ...props
}) => {
  return (
    <Title
      className={`!text-sm !mb-0` + (className ? ` ${className}` : "")}
      style={{
        fontFamily: kalam.style.fontFamily,
        color: contrastColor,
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        ...style,
      }}
      level={level}
      {...props}
    >
      {children}
    </Title>
  );
};

export default SectionTitle;
