const fs = require('fs');
const path = require('path');

// Caminho para o arquivo index.html gerado pelo React
const indexPath = path.join(__dirname, 'build', 'index.html');

// Gera um número de versão único
const version = Date.now();

// Lê o conteúdo do arquivo index.html
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo index.html:', err);
    return;
  }

  // Substitui o valor do parâmetro 'v' em todos os URLs dos recursos estáticos
  const updatedHtml = data.replace(/(\/static\/[^\s"'?]+)/g, `$1?v=${version}`);

  // Escreve o conteúdo atualizado de volta no arquivo index.html
  fs.writeFile(indexPath, updatedHtml, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo index.html:', err);
      return;
    }
    console.log('Cache do navegador forçado com sucesso!');
  });
});