//Neste arquivo ficam localizado todos os livros adicionados na biblioteca


let  biblioteca = [
    
        {
            titulo: "O Senhor dos Anéis",
            autor: "J.R.R. Tolkien",
            genero: "Fantasia",
            sinopse: "Uma jornada épica para destruir o Um Anel.",
            link: "https://www.skoob.com.br/o-senhor-dos-aneis-64ed84",
            tags: "Fantasia"
        },
        {
            titulo: "A Roda do Tempo",
            autor: "Robert Jordan",
            genero: "Fantasia",
            sinopse: "Uma saga épica ambientada em um mundo mágico.",
            link: "https://www.skoob.com.br/o-olho-do-mundo-51604ed56675",
            tags: "Fantasia"
        },
        {
            titulo: "O Leão, a Feiticeira e o Guarda-Roupa",
            autor: "C.S. Lewis",
            genero: "Fantasia",
            sinopse: "Quatro irmãos descobrem um guarda-roupa mágico que os leva para Nárnia, um mundo mágico em guerra.",
            link: "https://www.skoob.com.br/o-leao-a-feiticeira-e-o-guarda-roupa-1097ed1459",
            tags: "Fantasia" 
        },
        {
            titulo: "O Príncipe Caspian",
            autor: "C.S. Lewis",
            genero: "Fantasia",
            sinopse: "Os Pevensie retornam a Nárnia para ajudar o Príncipe Caspian a reconquistar seu reino.",
            link: "https://www.skoob.com.br/o-principe-caspian-544319ed554046",
            tags: "Fantasia" 
        },
        {
            titulo: "A Viagem do Peregrino da Alvorada",
            autor: "C.S. Lewis",
            genero: "Fantasia",
            sinopse: "Os Pevensie embarcam em um navio mágico para explorar as águas de Nárnia.",
            link: "https://www.skoob.com.br/a-viagem-do-peregrino-da-alvorada-1103ed1471",
            tags: "Fantasia" // Substitua pelo link correto
        },
        {
            titulo: "O Cavalo e seu Menino",
            autor: "C.S. Lewis",
            genero: "Fantasia",
            sinopse: "A história de Shasta, um menino que descobre sua verdadeira identidade e embarca em uma jornada épica.",
            link: "https://www.skoob.com.br/o-cavalo-e-seu-menino-1099ed1462",
            tags: "Fantasia" // Substitua pelo link correto
        },
        {
            titulo: "O sobrinho do mago",
            autor: "C.S. Lewis",
            genero: "Fantasia",
            sinopse: "Digory Kirke e sua prima Polly são transportados para um mundo mágico onde conhecem Aslan.",
            link: "https://www.skoob.com.br/o-sobrinho-do-mago-462ed591",
            tags: "Fantasia" // Substitua pelo link correto
        },
        {
            titulo: "A Última Batalha",
            autor: "C.S. Lewis",
            genero: "Fantasia",
            sinopse: "A batalha final por Nárnia e o destino dos Pevensie.",
            link: "https://www.skoob.com.br/a-ultima-batalha-1106ed1479",
            tags: "Fantasia" // Substitua pelo link correto
        },
        {
            titulo: "A cadeira de prata",
            autor: "C.S. Lewis",
            genero: "Fantasia",
            sinopse: "Eustáquio e Jill são transportados para Nárnia para ajudar Aslan a restaurar a paz.",
            link: "https://www.skoob.com.br/a-cadeira-de-prata-1104ed1474",
            tags: "Fantasia" // Substitua pelo link correto
        },
        {
            titulo: "Elantris",
            autor: "Brandon Sanderson",
            genero: "Fantasia épica",
            sinopse: "Uma cidade antiga e mágica, Elantris, está amaldiçoada. Um jovem príncipe busca curá-la e seus habitantes.",
            link: "https://www.skoob.com.br/elantris-277818ed311539",
            tags: "Fantasia"
        },
        {
            titulo: "O Império Final",
            autor: "Brandon Sanderson",
            genero: "Fantasia épica",
            sinopse: "Um mundo onde as pessoas podem controlar os metais. Um jovem com um poder único busca mudar o destino do império.",
            link: "https://www.skoob.com.br/o-imperio-final-332229ed372325",
            tags: "Fantasia"
        },
        {
            titulo: "O Nome do Vento",
            autor: "Patrick Rothfuss",
            genero: "Fantasia épica",
            sinopse: "Um jovem talentoso e misterioso narra sua vida e aventuras em uma taverna.",
            link: "https://www.skoob.com.br/o-nome-do-vento-40413ed11947376",
            tags: "Fantasia" // Link para o livro no Skoob
        },
        
        // ... mais livros de fantasia
    
    
        {
            titulo: "Duna",
            autor: "Frank Herbert",
            genero: "Ficção Científica",
            sinopse: "Uma história épica sobre política, ecologia e destino.",
            link: "https://www.skoob.com.br/duna-2278ed673523",
            tags: "ficção científica ficcao cientifica "
        },
        {
            titulo: "O Guia do Mochileiro das Galáxias",
            autor: "Douglas Adams",
            genero: "Ficção Científica Humorística",
            sinopse: "As hilárias aventuras de Arthur Dent após a Terra ser destruída para dar lugar a uma rodovia hiperespacial.",
            link: "https://www.skoob.com.br/livro/225ED321",
            tags: "ficção científica ficcao cientifica "
        },
        {
            titulo: "Neuromancer",
            autor: "William Gibson",
            genero: "Cyberpunk",
            sinopse: "Um clássico da ficção científica cyberpunk, onde um hacker é contratado para uma missão perigosa no ciberespaço.",
            link: "https://www.skoob.com.br/neuromancer-217ed603397",
            tags: "ficção científica ficcao cientifica "
        },
        {
            titulo: "A Guerra dos Mundos",
            autor: "H.G. Wells",
            genero: "Ficção Científica Clássica",
            sinopse: "Uma invasão alienígena à Terra e a luta da humanidade para sobreviver.",
            link: "https://www.skoob.com.br/a-guerra-dos-mundos-6025ed579409",
            tags: "ficção científica ficcao cientifica "
        },
        {
            titulo: "2001: Uma Odisseia no Espaço",
            autor: "Arthur C. Clarke",
            genero: "Ficção Científica Hard",
            sinopse: "Uma expedição espacial descobre um monolito alienígena que desencadeia uma jornada cósmica.",
            link: "https://www.skoob.com.br/2001-4457ed5516",
            tags: "ficção científica ficcao cientifica "
        },
        // ... mais livros de ficção científica
    
    
        {
            titulo: "Orgulho e Preconceito",
            autor: "Jane Austen",
            genero: "Romance Histórico",
            sinopse: "Uma história de amor e preconceito entre Elizabeth Bennet e o orgulhoso Sr. Darcy.",
            link: "https://www.skoob.com.br/orgulho-e-preconceito-819ed772639",
            tags: "Romance historico"
        },
        {
            titulo: "O Pequeno Príncipe",
            autor: "Antoine de Saint-Exupéry",
            genero: "Romance Filosófico",
            sinopse: "Um clássico atemporal sobre amizade, amor e a busca pelo significado da vida.",
            link: "https://www.skoob.com.br/o-pequeno-principe-693ed56597",
            tags: "Romance infantil"
        },
        {
            titulo: "A Culpa é das Estrelas",
            autor: "John Green",
            genero: "Romance Contemporâneo",
            sinopse: "Uma história de amor comovente entre dois adolescentes com doenças terminais.",
            link: "https://www.skoob.com.br/a-culpa-e-das-estrelas-247555ed277187",
            tags: "Romance triste lindo"
        },
        {
            titulo: "Cinquenta Tons de Cinza",
            autor: "E. L. James",
            genero: "Romance Erótico",
            sinopse: "Uma história de amor intensa e obscura entre uma estudante universitária e um empresário bilionário.",
            link: "https://www.skoob.com.br/cinquenta-tons-de-cinza-242567ed273945",
            tags: "Romance hot sedução seducao"
        },
        {
            titulo: "O Diário de Bridget Jones",
            autor: "Helen Fielding",
            genero: "Chick Lit",
            sinopse: "As divertidas e desventuras de Bridget Jones em busca do amor e da felicidade.",
            link: "https://www.skoob.com.br/o-diario-de-bridget-jones-917ed90113",
            tags: "Romance drama "
        },
        // ... livros de romance
    
    
        {
            titulo: "O Iluminado",
            autor: "Stephen King",
            genero: "Suspense psicológico",
            sinopse: "Um escritor recluso leva sua família para um hotel isolado no inverno, onde forças sobrenaturais começam a atormentá-los.",
            link: "https://www.skoob.com.br/o-iluminado-19733ed310380",
            tags: "Suspense terror medo morte"
        },
        {
            titulo: "Garota Exemplar",
            autor: "Gillian Flynn",
            genero: "Thriller psicológico",
            sinopse: "O desaparecimento de Amy Dunne, uma esposa aparentemente perfeita, revela um lado obscuro de seu casamento.",
            link: "https://www.skoob.com.br/garota-exemplar-301237ed664573",
            tags: "Suspense terror medo morte"
        },
        {
            titulo: "O Silêncio dos Inocentes",
            autor: "Thomas Harris",
            genero: "Thriller policial",
            sinopse: "Uma jovem agente do FBI busca a ajuda de um psicopata brilhante para capturar um serial killer.",
            link: "https://www.skoob.com.br/o-silencio-dos-inocentes-2608ed931225",
            tags: "Suspense terror medo morte"
        },
        {
            titulo: "A Garota no Trem",
            autor: "Paula Hawkins",
            genero: "Thriller psicológico",
            sinopse: "Uma mulher solitária se envolve em um mistério após testemunhar um acontecimento chocante em um trem.",
            link: "https://www.skoob.com.br/a-garota-no-trem-454388ed611208",
            tags: "Suspense terror medo morte"
        },
        {
            titulo: "O homem dos círculos azuis",
            autor: "Fred Vargas",
            genero: "Thriller policial",
            sinopse: "A detetive Adamsberg investiga uma série de assassinatos em Paris, onde cada vítima é encontrada em uma pose específica.",
            link: "https://www.skoob.com.br/o-homem-dos-circulos-azuis-12161ed13486",
            tags: "Suspense terror medo morte"
        }
        // ... livros de suspense
    
    ];