document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. FUNCIONALIDADE: ALTERNADOR DE TEMA (DARK/LIGHT)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        // Alterna a classe 'light-mode' no elemento <body>
        bodyElement.classList.toggle('light-mode');
        
        // Altera levemente o ícone ou texto do botão para feedback visual
        if (bodyElement.classList.contains('light-mode')) {
            themeToggleBtn.innerHTML = '🕶️ Modo Escuro';
        } else {
            themeToggleBtn.innerHTML = '👁️ Alternar Tema';
        }
    });

    // ==========================================
    // 2. FUNCIONALIDADE: FILTRO DE POSTS
    // ==========================================
    const filterButtons = document.querySelectorAll('.btn-filter');
    const postCards = document.querySelectorAll('.post-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões de filtro
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe 'active' ao botão que acabou de ser clicado
            button.classList.add('active');

            // Pega o valor do filtro escolhido (ex: 'espaco', 'historia', 'all')
            const filterValue = button.getAttribute('data-filter');

            postCards.forEach(card => {
                // Pega a categoria guardada no próprio card html
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    // Mostra o card de forma suave
                    card.style.display = 'block';
                    // Pequeno timeout para re-engajar animações se necessário
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Esconde o card
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    card.style.display = 'none';
                }
            });
        });
    });
});