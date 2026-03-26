import { Inngest } from "inngest";
console.log("Inngest loaded", {
    signingKey: process.env.INNGEST_SIGNING_KEY ? "✅ present" : "❌ missing",
    eventKey: process.env.INNGEST_EVENT_KEY ? "✅ present" : "❌ missing",
});
export const inngest = new Inngest({
    id: "gateway-translation-worker",
    env: "prod",
    signingKey: process.env.INNGEST_SIGNING_KEY,
    eventKey: process.env.INNGEST_EVENT_KEY,
});