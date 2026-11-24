
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    if (url.pathname === "/api/chat" && request.method === "POST") {
      return new Response(JSON.stringify({
        success: false,
        message: "KI-Dienst ist noch nicht angeschlossen."
      }), {
        status: 503,
        headers: {
          ...cors,
          "Content-Type": "application/json"
        }
      });
    }

    if (url.pathname === "/api/status") {
      return new Response(JSON.stringify({
        online: true,
        assistant: "J.A.R.V.I.S.",
        api: "ready"
      }), {
        headers: {
          ...cors,
          "Content-Type": "application/json"
        }
      });
    }

    return new Response("J.A.R.V.I.S. System ist online.", {
      headers: cors
    });
  }
};
