import { Client } from 'node-appwrite';
import cron from 'node-cron';
import axios from 'axios';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  const { actionBlockId, time } = req.payload;

  // Schedule the cron job
  cron.schedule(time, async () => {
    try {
      // Perform the actions based on the actionBlockId
      // ...

      // Call the endpoint after the job is finished
      await axios.post("https://b20a-2409-40e2-1028-a807-3052-881f-7e56-fe71.ngrok-free.app/api/action_block/cron", { actionBlockId, status: 'completed' });

      console.log(
        `Job completed and callback sent for actionBlockId: ${actionBlockId}`
      );
    } catch (error) {
      console.error('Error during cron job execution:', error);
    }
  });

  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
