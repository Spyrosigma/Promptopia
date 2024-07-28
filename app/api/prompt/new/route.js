import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {

    const { prompt, tag, userId } = await req.json();

    if (!prompt || !tag || !userId) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        }); 

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {
            status: 201,
        });

    } catch (error) {
        console.log(error);
        return new Response("Failed to create New prompt", {status: 500});
    }
}