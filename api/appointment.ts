import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  service: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método não permitido" });
  }

  try {
    const validated = appointmentSchema.parse(req.body);

    // Here you would typically save to database
    console.log("Novo agendamento:", validated);

    return res.status(200).json({
      success: true,
      message: "Agendamento realizado com sucesso"
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