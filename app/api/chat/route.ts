import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const pythonResponse = await fetch(
      "https://astrik10-my-portfolio-backend.hf.space/get-response",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      }
    );

    if (!pythonResponse.ok) {
      const errorBody = await pythonResponse.text();
      console.error("Error from Python server:", errorBody);
      return NextResponse.json(
        { error: "Python server error" },
        { status: pythonResponse.status }
      );
    }

    const data = await pythonResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/chat route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
