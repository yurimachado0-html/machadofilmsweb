# Machado Films — site

Site da Machado Films, produtora audiovisual em Ijuí, RS.
Feito com [Astro](https://astro.build), hospedado no Cloudflare Pages.

## Onde mudar o conteúdo

Quase tudo o que muda fica em **`src/data/site.ts`**:

- número do WhatsApp e mensagem padrão
- link do Instagram
- ID do showreel no Vimeo (topo do site)
- trabalhos do carrossel, serviços, etapas do processo
- reels (IDs do Vimeo) e logos de clientes (arquivos em `public/clientes/`)

## Rodar no computador

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera o site final em dist/
```

## Publicação (Cloudflare Pages)

- Framework: Astro
- Comando de build: `npm run build`
- Pasta de saída: `dist`

Cada envio para a branch `main` atualiza o site automaticamente.
