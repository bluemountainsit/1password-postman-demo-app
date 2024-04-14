
import { createClient } from "@1password/sdk";
import OpenAI from "openai";

// Creates an authenticated client.
const client = await createClient({
    auth: process.env.OP_SERVICE_ACCOUNT_TOKEN,
    integrationName: "Postman and 1Password Demo",
    integrationVersion: "v1.0.0",
  });

  // Feteches a secret.
const secret = await client.secrets.resolve();

// Creates an OpenAI instance.
const openai = new OpenAI({
    apiKey: secret,
  });

// Sends the API request.
async function main() {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "What is 1Password?" }],
        model: "gpt-3.5-turbo",
        temperature: 0,
        max_tokens: 1000,
      });

      console.log(completion.choices[0]);
  };

main();