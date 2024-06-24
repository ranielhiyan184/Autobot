const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: true,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  
const input = args.join(' ');
  if (!input) {
    api.sendmessage(`Please provide a question or statement after 'ai'. For example: 'ai what is the capital of France?'`, event.threadid, event.messageid);
    return;
  }
  api.sendmessage(`🔍 "${input}"`, event.threadid, event.messageid);
  try {
    const {
      data
    } = await axios.get(`https://api.ai-list.tech/chat?model=llama2&message=${encodeURIComponent(input)}&lang=en&key=YOUR_API_KEY`);
    const response = data.response;
    api.sendmessage(response + '\n\n📌Bot developed by Raniel Bigdick', event.threadid, event.messageid);
  } catch (error) {
    console.error(error);
    api.sendmessage(`Sorry, I couldn't process your request. Please try again later.`, event.threadid, event.messageid);
  }

};