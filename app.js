document.addEventListener('DOMContentLoaded', () => {
    const repositoriesContainer = document.querySelector('.projetos .interface');

    function getApiApiGitHub() {
        fetch('https://api.github.com/users/VitorMilani/repos')
            .then(response => response.json())
            .then(data => {
                data.forEach(repo => {
                    let project = document.createElement('div');
                    project.classList.add('projeto');

                    project.innerHTML = `
                        <div class="imagem-container">
                            <a href="${repo.html_url}">
                                <img src="Assets/${repo.name}.png" href="${repo.html_url} alt="${repo.name}">
                            </a>
                        </div>
                        <div class="conteudo">
                            <h5 class="imagemSubtitulo" onclick="window.open('${repo.html_url}', '_blank');">${repo.name}</h5>
                            <p>${repo.description || 'Descrição não disponível.'}</p>
                        </div>
                    `;

                    repositoriesContainer.appendChild(project);
                });
            })
            .catch(error => console.error('Erro:', error));
    }

    getApiApiGitHub();
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('.Nome', {duration: 1500 });


sr.reveal('.sobre', {
    rotate: {x: 0, y:80, z:0},
    duration: 2000})

 
