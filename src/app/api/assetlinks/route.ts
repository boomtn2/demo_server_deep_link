import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/.well-known/assetlinks.json");
  const fileContent = await fs.readFile(filePath, "utf8");

  const headers = new Headers();
  headers.set("Content-Type", "application/json"); // Xóa charset=UTF-8
  headers.set("Cache-Control", "public, max-age=0");
  headers.set("Accept-Ranges", "bytes");

  return new NextResponse(fileContent, { headers });
}
