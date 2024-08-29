"use client";
import {
  fetchLinkedInData,
  getAuthorizationUrl,
  getLinkedinAccessToken,
} from "@/app/actions";
import { LinkedinFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useEffect } from "react";

const UpdateLinkedinDataComponent = () => {
  const router = useRouter();
  const params = useSearchParams();

  const redirectToAuthorizationUrl = async () => {
    const authorizationUrl = await getAuthorizationUrl();
    console.log(authorizationUrl);
    // router.push(authorizationUrl);
    // https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77ttv92j6ejpon&redirect_uri=http://localhost:3000/cmd/update-linkedin-data&state=randomstring&scope=r_liteprofile%20r_emailaddress%20w_member_social
  };

  const getLinkedinData = useCallback(async () => {
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
  }, [params]);

  useEffect(() => {
    params.has("code") && getLinkedinData();
  }, [params, getLinkedinData]);

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

const UpdateLinkedinDataPage = () => {
  return (
    <Suspense>
      <UpdateLinkedinDataComponent />
    </Suspense>
  );
};

export default UpdateLinkedinDataPage;
