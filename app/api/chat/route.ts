import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Get the user's message from the frontend's request body.
    const { message } = await request.json();

    // 2. Define the URL of your running Python FastAPI server.
    const pythonServerUrl = "http://127.0.0.1:8000/get-response";

    // 3. Forward the message to the Python server.
    const pythonResponse = await fetch(pythonServerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    // 4. Check if the request to the Python server was successful.
    if (!pythonResponse.ok) {
      const errorBody = await pythonResponse.text();
      console.error("Error from Python server:", errorBody);
      throw new Error(`Python server returned an error: ${pythonResponse.status}`);
    }

    // 5. Get the JSON response from the Python server and send it back to the frontend.
    const contentType = pythonResponse.headers.get("content-type") || "";
    if (contentType.includes("text/event-stream") || contentType.includes("text/plain")) {
      // Stream back to client unchanged
      const stream = pythonResponse.body;
      return new NextResponse(stream, {
        headers: { "Content-Type": contentType },
      });
    } else {
      const data = await pythonResponse.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error("Error in /api/chat route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}