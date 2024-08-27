"use client";
import { fetchLinkedInData, getAuthorizationUrl, getLinkedinAccessToken } from "@/app/actions";
import { LinkedinFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const UpdateLinkedinDataPage = () => {
  const router = useRouter();
  const params = useSearchParams();

  const redirectToAuthorizationUrl = async () => {
    const authorizationUrl = await getAuthorizationUrl();
    router.push(authorizationUrl);
  };

  const getLinkedinData = async () => {
    try {
      const code = params.get("code");

      if (!code) {
        throw new Error("No code provided");
      }
      
      const accessToken = await getLinkedinAccessToken(code);

      if (!accessToken) {
        throw new Error("No access token provided");
      }
      
      const data = await fetchLinkedInData(accessToken);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    params.has("code") && getLinkedinData();
  }, [params]);

  return (
    <div>
      <Button
        type="primary"
        className="!bg-[#0A66C2]"
        icon={<LinkedinFilled />}
        onClick={redirectToAuthorizationUrl}
      >
        Update Linkedin Data
      </Button>
    </div>
  );
};

export default UpdateLinkedinDataPage;
