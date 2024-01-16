import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const openai = new OpenAI(
    {
        apiKey: "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",
        organization: "org-3QQTIL4wLgI4u6hHhILBdbT1"
    }
);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const {message} = req.body;
    console.log(message)
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `${message}` }],
        model: "gpt-3.5-turbo",
      });

      res.json({
        completion:completion.choices[0].message
      })
});

app.listen(port, () => {
    console.log(`Server is running on port at http://localhost:${port}`);
  });


  


