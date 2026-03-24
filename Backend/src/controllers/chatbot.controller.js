import { VIKRAM_KUMAR } from "../services/systemPrompt.js";
import client from "../services/openAI.service.js";

const vikramPrompt = { "Vikram Kumar": VIKRAM_KUMAR };
export const chat = async (req, res) => {
  try {
    const { persona, messages } = req.body;
    if (!vikramPrompt[persona]) {
      return res.status(400).json({
        success: false,
        error: "Invalid persona selected!",
      });
    }
    const systemPrompt = vikramPrompt[persona];
    const conversation = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];
    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: conversation,
    });
    const reply = response.choices[0].message.content;
    res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
