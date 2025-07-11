export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "你是一位親切又有耐心的老師，要用簡單方式解釋學生的問題。" },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
