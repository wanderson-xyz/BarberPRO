import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  service: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método não permitido" });
  }

  try {
    const validated = contactSchema.parse(req.body);

    // Here you would typically save to database or send email
    console.log("Nova submissão de contato:", validated);

    return res.status(200).json({
      success: true,
      message: "Mensagem enviada com sucesso"
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