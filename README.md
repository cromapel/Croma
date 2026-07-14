# Croma — Home v1

Home estática da Croma Gráfica & Papelaria, preparada para GitHub Pages.

## Estrutura

```text
Croma/
├── index.html
├── README.md
└── assets/
    ├── css/style.css
    ├── js/script.js
    └── img/
        ├── croma-identidade.webp
        └── favicon.svg
```

## Publicar pelo Codespaces

Depois de enviar o ZIP para a raiz do repositório, execute:

```bash
unzip -o croma-home-v1.zip -d .
rm croma-home-v1.zip
git add .
git commit -m "Cria home profissional da Croma"
git push
```

Depois aguarde o GitHub Pages atualizar e acesse:

```text
https://cromapel.github.io/Croma/
```

Use `Ctrl + F5` para forçar a atualização.

## Formulário

O formulário abre o WhatsApp da Croma com a mensagem preenchida. Ele não armazena dados e não precisa de servidor.


## Atualização v2 — identidade visual

- Logo oficial aplicada no cabeçalho e no rodapé.
- Favicon oficial em PNG.
- Imagem `croma-identidade.webp` mantida, agora exibida inteira e centralizada.
- Cartões do banner reposicionados abaixo da imagem, evitando sobreposição e cortes.
