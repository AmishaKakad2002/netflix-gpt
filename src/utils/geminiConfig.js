import { GoogleGenerativeAI } from '@google/generative-ai';

// Replace with your actual API key

const googleGenerativeAI = new GoogleGenerativeAI({
  apiKey: process.env.REACT_APP_GOOGLE_GENERATIVE_API_KEY,
});

export default googleGenerativeAI;
