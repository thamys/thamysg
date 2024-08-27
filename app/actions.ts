'use server';

export async function getAuthorizationUrl() {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const state = "randomstring"; // You should generate this dynamically and store it to validate later

  const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;

  return authorizationUrl;
}

export async function getLinkedinAccessToken(code: string) {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;

  try {
    if (!code || !clientId || !clientSecret || !redirectUri) {
      throw new Error("No code provided");
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("grant_type", "authorization_code");
    myHeaders.append("code", code);
    myHeaders.append("redirect_uri", redirectUri);
    myHeaders.append("client_id", clientId);
    myHeaders.append("client_secret", clientSecret);

    const response = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        headers: myHeaders,
      }
    );

    const responseJson = await response.json();
    console.log(responseJson);

    return responseJson.access_token;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchLinkedInData(accessToken: string) {
  try {
    const profileResponse = await fetch("https://api.linkedin.com/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const emailResponse = await fetch(
      "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!profileResponse.ok || !emailResponse.ok) {
      throw new Error("Failed to fetch LinkedIn data");
    }

    const profileData = await profileResponse.json();
    const emailData = await emailResponse.json();

    return {
      profile: profileData,
      email: emailData.elements[0]["handle~"].emailAddress,
    };
  } catch (error) {
    console.error("Error fetching LinkedIn data:", error);
    throw new Error("Failed to fetch LinkedIn data");
  }
}