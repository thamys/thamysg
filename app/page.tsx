
import React from "react";
import LandingPage from "./home";

async function getData() {
  const res = await fetch('https://api.linkedin.com/v2/me')
  console.log(res)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Page() {
  return (
    <LandingPage />
  );
};
