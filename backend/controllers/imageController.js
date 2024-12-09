import axios from "axios";
import userModel from "../models/UserModel.js";
import FormData from "form-data";
import Replicate from "replicate";
import { writeFile } from "node:fs/promises";
import fs from 'fs';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export const generateImage = async (req, res) => {


  try {

    const { userId, prompt } = req.body;
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: 'Missing Details' });
    }

    if (user.creditBalance === 0 || user.creditBalance < 0) {
      return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance })
    }

    const output = await replicate.run(
      "nvidia/sana:c6b5d2b7459910fec94432e9e1203c3cdce92d6db20f714f1355747990b52fa6",
      {
        input: {
          width: 1024,
          height: 1024,
          prompt: prompt,
          model_variant: "1600M-1024px",
          guidance_scale: 5,
          negative_prompt: "",
          pag_guidance_scale: 2,
          num_inference_steps: 18
        }
      }
    );
    await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })
    res.json({
      success: true, message: "Image generated",
      creditBalance: user.creditBalance - 1, resultImage: output.url()
    })

  } catch (error) {

    console.log(error);
    res.json({ success: false, message: error.message })
  }
}