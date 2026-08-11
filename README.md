# Site Socialy

Landing page de página única. Vite + React + TypeScript, CSS escrito à mão (sem
framework de utilitários), sem back-end.

## Rodar

```bash
npm run dev
```

```bash
npm run build
```

O build sai em `dist/` e é estático: sobe em Vercel, Netlify, Cloudflare Pages
ou qualquer hospedagem de arquivos.

## Onde mexer

| O que | Arquivo |
| --- | --- |
| Telefone, Instagram, textos de todas as seções | `src/lib/site.ts` |
| Logo (rodapé e favicon saem do mesmo arquivo) | `public/logo.svg` |
| Cores, raios, fontes, espaçamentos | `src/styles/global.css` (bloco `:root`) |
| Animações reaproveitáveis (parallax, contador, ímã, brilho) | `src/lib/motion.ts` |
| Título e descrição para Google e redes | `index.html` |

Praticamente toda a copy está em `src/lib/site.ts`. Dá para trocar texto sem
abrir nenhum componente.

## Logo

Dois arquivos, os dois recortados do original com fundo transparente:

| Arquivo | O que é | Onde aparece |
| --- | --- | --- |
| `public/logo.png` | só a marca, 235x276 | cabeçalho, rodapé, favicon |
| `public/logo-lockup.png` | marca + "Socialy", 251x252 | cortina de abertura |

Para trocar por uma versão nova, basta substituir os arquivos mantendo os
nomes. Se mudar a proporção, ajuste `width`/`height` em
`src/components/Logo.tsx` e `src/components/Intro.tsx` para evitar salto de
layout no carregamento.

O logotipo escrito que acompanha a marca no cabeçalho é texto, não imagem
(fica em `src/components/Wordmark.tsx`), para ficar nítido em tamanho pequeno.

## Colocar os prints do portfólio

1. Jogue as imagens em `public/portfolio/`.
2. Em `src/lib/site.ts`, preencha o campo `image` do projeto:

```ts
{ name: "Brasa & Mesa", segment: "Restaurante", kind: "Institucional", year: "2026", featured: true,
  image: "/portfolio/brasa-mesa.jpg" },
```

Sem `image`, o card mostra um espaço reservado neutro. Proporção sugerida:
16:8 para o card em destaque, 4:3 para os demais.

## Formulário

Não existe servidor. O formulário monta a mensagem e abre a conversa no
WhatsApp com o texto já escrito, e a pessoa confere antes de enviar. O número
fica em `WHATSAPP_NUMBER` (`src/lib/site.ts`), no formato internacional sem
sinais: `5511988406930`.

## Pendências

- `public/og.png` (1200x630) para a prévia em links de WhatsApp e redes. Depois
  de criar, reponha a meta tag `og:image` no `index.html`.
- Prints reais dos quatro projetos do portfólio.
- Trocar `https://socialy.com.br/` no `index.html` se o domínio final for outro.
