import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export was dropped because the team portal needs a real server
  // to check the password before ever sending the page — a client-side
  // gate on a static site can't actually hide anything.
};

export default nextConfig;
