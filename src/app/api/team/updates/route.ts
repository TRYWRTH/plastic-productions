import { NextRequest, NextResponse } from "next/server";
import {
  AUTHOR_MAX_LENGTH,
  BODY_MAX_LENGTH,
  addUpdate,
} from "@/lib/team-updates";

// Auth is already enforced by src/middleware.ts (matcher includes this
// route), so a request reaching here already carries a valid session.

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const author = typeof body?.author === "string" ? body.author.trim() : "";
  const text = typeof body?.body === "string" ? body.body.trim() : "";

  if (!author || !text) {
    return NextResponse.json({ error: "Name and update text are required." }, { status: 400 });
  }
  if (author.length > AUTHOR_MAX_LENGTH || text.length > BODY_MAX_LENGTH) {
    return NextResponse.json({ error: "Entry is too long." }, { status: 400 });
  }

  const entry = await addUpdate(author, text);
  return NextResponse.json({ entry });
}
