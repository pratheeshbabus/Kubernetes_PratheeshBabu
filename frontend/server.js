
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:5000";

app.get("/", async (req, res) => {
    try {
        const response = await fetch(`${BACKEND_URL}/`);

        if (!response.ok) {
            throw new Error(`Backend returned HTTP ${response.status}`);
        }

        const backend = await response.json();

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Tutedude AWS Assignment</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 700px;
                        margin: 60px auto;
                        padding: 20px;
                        background: #f4f6f8;
                        color: #222;
                    }
                    main {
                        background: white;
                        padding: 28px;
                        border-radius: 10px;
                        box-shadow: 0 2px 8px #0001;
                    }
                    .status {
                        color: #187a36;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <main>
                    <h1>${backend.application}</h1>
                    <p>Frontend service: <strong>Express</strong></p>
                    <p>Backend service: <strong>${backend.service}</strong></p>
                    <p>Backend status: <span class="status">${backend.status}</span></p>
                    <p>Frontend status: <span class="status">running</span></p>
                </main>
            </body>
            </html>
        `);
    } catch (error) {
        console.error("Backend connection failed:", error.message);

        res.status(502).send(`
            <h1>Frontend is running</h1>
            <p>Unable to contact the Flask backend.</p>
            <p>Check the backend service and BACKEND_URL configuration.</p>
        `);
    }
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        service: "Express Frontend"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express frontend running on port ${PORT}`);
    console.log(`Flask backend URL: ${BACKEND_URL}`);
});
