const posts = [
  {
    title: "🚀 Transformando Ideias em Código",
    content: "Veja como peguei um conceito maluco e transformei em um protótipo funcional."
  },
  {
    title: "🎨 Design com Propósito",
    content: "Design não é só beleza — é experiência. Descubra como pensar design como solução."
  },
  {
    title: "⚙️ Ferramentas que Uso no Dia a Dia",
    content: "Do VS Code ao Figma, aqui estão minhas ferramentas favoritas e como elas aceleram meu fluxo de trabalho."
  }
];

const postContainer = document.getElementById("posts");
posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
  postContainer.appendChild(div);
});