"use client";

import { useRouter } from "next/navigation";

export default function TeamLogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/team/logout", { method: "POST" });
    router.push("/team/login");
    router.refresh();
  }

  return (
    <button type="button" className="btn" onClick={handleLogout}>
      Log out
    </button>
  );
}
