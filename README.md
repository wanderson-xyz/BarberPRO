# BarberPro - Modern Barbershop Landing Page

## Overview

BarberPro é uma landing page moderna para barbearia construída com React, TypeScript e TailwindCSS. O projeto foi otimizado para SEO e conversão de leads através de formulários de agendamento e newsletter.

## Tecnologias

- **Frontend**: React 18, Vite, TailwindCSS, shadcn/ui
- **Backend**: Funções serverless (Vercel)
- **Validação**: Zod
- **Formulários**: React Hook Form
- **Ícones**: Lucide React, React Icons

## Funcionalidades

- Landing page responsiva com design moderno
- Seção de serviços e preços
- Galeria de fotos
- Depoimentos de clientes
- Formulário de agendamento
- Newsletter
- Botão flutuante do WhatsApp
- Otimização para SEO

## Deploy no Vercel

### Pré-requisitos
- Conta no Vercel
- Repositório no GitHub/GitLab/Bitbucket

### Passos para Deploy

1. **Faça push do repositório para o GitHub/GitLab/Bitbucket**

2. **No Vercel, crie um novo projeto a partir do repositório**

3. **Configure as seguintes opções:**
   - **Install Command**: `npm install`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Confirme que o arquivo `vercel.json` está na raiz do projeto**

5. **Deploy automático será feito**

### Estrutura do Projeto

```
├── api/                    # Funções serverless
│   ├── appointment.ts      # API de agendamentos
│   ├── contact.ts          # API de contato
│   └── newsletter.ts       # API de newsletter
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── lib/           # Utilities
│   │   └── ...
├── dist/                   # Build do frontend (gerado)
├── vercel.json            # Configuração do Vercel
└── package.json
```

### Testes

#### Frontend
Acesse a URL principal do projeto após o deploy.

#### APIs
Teste os endpoints da API:

**Teste de Agendamento:**
```bash
curl -X POST https://SEU-PROJETO.vercel.app/api/appointment \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "11999999999",
    "service": "standard",
    "date": "2024-01-15",
    "time": "14:00"
  }'
```

**Teste de Contato:**
```bash
curl -X POST https://SEU-PROJETO.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos",
    "email": "maria@example.com",
    "phone": "11888888888",
    "message": "Gostaria de mais informações"
  }'
```

**Teste de Newsletter:**
```bash
curl -X POST https://SEU-PROJETO.vercel.app/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com"
  }'
```

Resposta esperada para todas as APIs:
```json
{
  "success": true,
  "message": "Operação realizada com sucesso"
}
```

## Desenvolvimento Local

1. **Clone o repositório**
```bash
git clone <URL_DO_REPOSITORIO>
cd barberpro
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse o projeto**
- Frontend: `http://localhost:5173`

## Estrutura das APIs

### POST /api/appointment
Cria um novo agendamento.

**Body:**
```json
{
  "name": "string (min: 2)",
  "email": "string (email válido)",
  "phone": "string (min: 10)",
  "service": "string (opcional)",
  "date": "string (opcional)",
  "time": "string (opcional)"
}
```

### POST /api/contact
Envia uma mensagem de contato.

**Body:**
```json
{
  "name": "string (obrigatório)",
  "email": "string (email válido)",
  "phone": "string (obrigatório)",
  "message": "string (opcional)"
}
```

### POST /api/newsletter
Inscreve um email na newsletter.

**Body:**
```json
{
  "email": "string (email válido)"
}
```

## Personalização

### Cores
As cores principais podem ser alteradas em `client/src/index.css`:
- `--primary`: Cor dourada principal
- `--background`: Cor de fundo (preto)
- `--foreground`: Cor do texto (branco)

### Conteúdo
- **Serviços**: Edite `client/src/components/Services.tsx`
- **Preços**: Edite `client/src/components/Pricing.tsx`
- **Equipe**: Edite `client/src/components/Team.tsx`
- **Depoimentos**: Edite `client/src/components/Testimonials.tsx`

### WhatsApp
O número do WhatsApp pode ser alterado em:
- `client/src/components/WhatsAppFloat.tsx`
- `client/src/components/Footer.tsx`

## Licença

MIT License