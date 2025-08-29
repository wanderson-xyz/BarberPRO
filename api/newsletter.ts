import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Email inválido"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método não permitido" });
  }

  try {
    const validated = newsletterSchema.parse(req.body);

    // Here you would typically save email to newsletter list
    console.log("Nova inscrição newsletter:", validated);

    return res.status(200).json({
      success: true,
      message: "Inscrição realizada com sucesso"
    });
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return res.status(400).json({ 
        success: false, 
        message: "Erro de validação", 
        errors: error.errors 
      });
    }
    console.error(error);
    return res.status(500).json({ 
      success: false, 
      message: "Erro interno do servidor" 
    });
  }
}