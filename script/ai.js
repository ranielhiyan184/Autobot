const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
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
  const axios = require('axios');

const payload = {
  model: 'gpt-4', // gpt-4o or gpt-4
  messages: [
    {
      role: 'user',
      content: 'hello'
    }
  ],
  apikey: `https://ai-list.onrender.com/chat?model=llama2&message=what%20is%20love%3F=${input}`
// get here apikey for gpt-4o: https://gpt4o-apikey.vercel.app/gen and use sk-hiroshikim for gpt-4
};

axios.post('http://openai-api.replit.app/v1/chat/completions', payload)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    api.sendMessage('Error:', error.response.data);
 
  });