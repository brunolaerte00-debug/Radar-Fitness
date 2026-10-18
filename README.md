# Radar Fitness

Cópia estática da página https://radarfitt.lovable.app/, com os estilos e o logo originais, layout responsivo, link do grupo de WhatsApp e Pixel da Meta (1416867833771889).

## Publicar no GitHub Pages

1. Envie os arquivos desta pasta para a raiz do repositório `Radar-Fitness`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.

Não há instalação de dependências nem etapa de build. Os caminhos relativos também funcionam em uma página de projeto do GitHub Pages.

## Editar

- Textos e link do WhatsApp: `index.html`.
- Estilos originais, incluindo regras para celulares: `styles.css`.
- Logo: `logo.png`.
- Eventos de conversão: `main.js`.

O botão abre o grupo em outra aba. O Pixel registra `PageView` e o clique registra `Lead`, com intervalo mínimo de dois segundos entre eventos, conforme a página de referência. O código não depende do Lovable.

