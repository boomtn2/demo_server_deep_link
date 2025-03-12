"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    const appLink = "https://audioquanhonngontinh.com"; // Universal Link
    const fallbackIOS = "https://apps.apple.com/us/app/facebook/id284882215";
    const fallbackAndroid =
      "https://play.google.com/store/apps/details?id=com.facebook.katana";

    if (isIOS || isAndroid) {
      window.location.href = appLink; // Điều hướng đến Universal Link/App Link
      setTimeout(() => {
        if (document.visibilityState !== "visible") {
          window.location.href = isIOS ? fallbackIOS : fallbackAndroid;
        }
      }, 2000); // Nếu app không mở sau 2 giây, chuyển sang link tải app
    }
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <p>Đang mở ứng dụng...</p>
    </div>
  );
}
