let opcCurso = ["Análise e Desenvolvimento de Sistemas (ADS)", "Gestão da Produção Industrial (GPI)", "Gestão de Recursos Humanos", "Desenvolvimento de Software Multiplataforma"]
let opcPeriodo = ['Matutino', 'Noturno'];
let opcEstado = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'];
let opcCidade = ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino'];
let opcGenero = ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro'];
let opcDataNascimento = [];
let opcEstadoCivil = ['Solteiro(a)', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'];
let opcPortador = ['Nenhuma', 'Visual', 'Física', 'Auditiva', 'Autismo', 'De fala'];
let opcConvivePort = ['Autismo', 'Síndrome de Down', 'Deficiência', 'Auditiva', 'Visual', 'De fala', 'Física', 'Não convivo ou não moro com alguém com deficiência'];
let opcQtdFilhos = ['Nenhum', 'Um', 'Dois', 'Três', 'Quatro', 'Mais de quatro'];
let opcMoraCom = ['Com pais e(ou) parentes', 'Com esposa(o) e(ou) filho(s)', 'Com amigos (compartilhando despesas) ou de favor', 'Sozinho'];
let opcQtdMoradores = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
let opcSituacaoDomi = ['Próprio', 'Alugado', 'Cedido', 'Financiado', 'Arrendado', 'Mensalista'];
let opcTempoMoradia = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '55', '55', '56', '57', '58', '59', '60', '61', '62', '63', '66', '65', '66', '67', '68', '69', '70']
let opcRendaMensal = ['Até dois salários mínimos', 'Mais de dois até cinco salários mínimos', 'Mais de cinco até dez salários mínimos', 'Mais de dez até vinte salários mínimos', 'Mais de vinte salários mínimos', 'Prefiro não responder'];
let opc17QtdeCadaCoisa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']; // Para todas as questões dentro da questão 17
let opcTemNoDomicilio = ['Telefone fixo', 'Internet', 'Tv por assinatura', 'Empregada mensalista', 'Nenhuma das opções acima', 'Telefone fixo, Internet', 'Telefone fixo, Internet, Tv por assinatura', 'Telefone fixo, Internet, Tv por assinatura, Empregada mensalista', 'Internet, Tv por assinatura, Empregada mensalista', 'Internet, Tv por assinatura', 'Internet, Empregada mensalista', 'Telefone fixo, Tv por assinatura', 'Telefone fixo, Empregada mensalista'];
let opcTrabalha = ['Sim', 'Não'];
let opcVinculoEmprego = ['Não trabalho', 'Sou registrado em indústria (calçados/confecções/outras)', 'Sou registrado no comércio', 'Sou registrado em empresa prestadora de serviços', 'Sou registrado em empresa pública (federal/estadual/municipal)', 'Sou autônomo', 'Sou empresário', 'Sou estagiário'];
let opcAreaTrabalho = ['Não trabalho', 'Trabalho na área do curso', 'Trabalho fora da área do curso'];
let opcHorarioTrabalho = ['Não trabalho', 'Manhã', 'Tarde', 'Noite', 'Manhã e tarde', 'Manhã e noite', 'Tarde e noite', 'Regime de turnos'];
let opcPlanoDeSaude = ['Não tenho, uso o SUS', 'Tenho e é pago integralmente pela empresa', 'Tenho e é pago parcialmente pela empresa', 'Tenho e é um plano familiar', 'Tenho e é um plano individual'];
let opcEscolaridade = ['Nenhuma escolaridade', 'Ensino fundamental I (1º ao 5º anos)', 'Ensino fundamental II (6º ao 9º anos)', 'Ensino Médio', 'Ensino Superior', 'Pós-graduação', 'Prefiro não responder'];
let opcEstudou = ['Sempre em escola pública', 'A maior parte em escola pública', 'Sempre em escola particular paga pela família', 'Sempre em escola particular com bolsa', 'A maior parte em escola particular paga pela família', 'A maior parte em escola particular com bolsa'];
let opcUsaMicroComp = ['Nunca', 'Pouco', 'Ás vezes', 'Muito', 'Sempre'];
let opcOndeUsaMicroComp = ['Em casa', 'No trabalho', 'Na escola', 'Em outros lugares', 'Em casa, No trabalho', 'Em casa, Na escola', 'Em casa, Na escola, Em outros lugares', 'Em casa, Em outros lugares', 'Em casa, No trabalho, Na escola', 'Em casa, No trabalho, Em outros lugares', 'Em casa, No trabalho, Na escola, Em outros lugares', 'No trabalho, Na escola', 'No trabalho, Em outros lugares', 'No trabalho, Na escola, Em outros lugares', 'Na escola, Em outros lugares'];
let opcFinalizadeUsaMicroComp = ['Para trabalhos profissionais', 'Para trabalhos escolares', 'Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para comunicação por e-mail', 'Para operações bancárias', 'Para compras eletrônicas', ' Para trabalhos profissionais, Para trabalhos escolares', 'Para trabalhos profissionais, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos profissionais, Para comunicação por e-mail', 'Para trabalhos profissionais, Para operações bancárias', 'Para trabalhos profissionais, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail', 'Para trabalhos profissionais, Para trabalhos escolares, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos escolares, Para comunicação por e-mail', 'Para trabalhos escolares, Para operações bancárias', 'Para trabalhos escolares, Para compras eletrônicas', 'Para comunicação por e-mail, Para operações bancárias', 'Para comunicação por e-mail, Para compras eletrônicas', 'Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para operações bancárias, Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para operações bancárias', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos escolares, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas'];
let opcConhecimentoInformatica = ['Nenhum', 'Pouco', 'Intermediário', 'Muito Avançado'];
let opcConhecimentoLinguas = ['Leio, escrevo e falo bem', 'Leio, escrevo e falo razoavelmente', 'Leio e escrevo mas não falo', 'Leio mas não escrevo nem falo', 'Praticamente nula'];
let opcBuscaInformação = ['Nunca', 'Pouco', 'Às vezes', 'Muito', 'Sempre']
let opcLeJornal = ['Diariamente', 'Algumas vezes por semana', 'Somente aos domingos', 'Raramente', 'Não leio'];
let opcAssuntosJornal = ['Não leio jornal', 'Todos os assuntos', 'Notícia locais', 'Notícias nacionais', 'Notícias internacionais', 'Esporte', 'Lazer, arte e cultura', 'Notícias policiais', 'Classificados', 'Moda', 'Sociais', "Notícia locais, Notícias nacionais, Notícias internacionais, Lazer, arte e cultura, Classificados, Moda, Sociais", "Notícia locais, Notícias nacionais, Notícias internacionais, Notícias policiais, Moda", "Notícia locais, Esporte, Notícias policiais", "Notícias internacionais, Esporte, Lazer, arte e cultura, Classificados", "Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Sociais", "Notícia locais, Notícias nacionais, Notícias internacionais, Sociais", "Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Notícias policiais, Sociais", "Notícias nacionais, Notícias internacionais, Classificados", "Esporte, Lazer, arte e cultura", "Notícias nacionais, Notícias internacionais, Notícias policiais", "Notícia locais, Notícias nacionais, Notícias internacionais, Lazer, arte e cultura, Notícias policiais, Sociais", "Notícia locais, Notícias nacionais, Notícias internacionais", "Notícia locais, Notícias nacionais, Lazer, arte e cultura, Notícias policiais", "Todos os assuntos, Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura", "Notícia locais, Notícias nacionais, Notícias internacionais, Notícias policiais", "Todos os assuntos, Notícias internacionais, Esporte, Lazer, arte e cultura", "Notícia locais, Notícias nacionais, Notícias internacionais, Lazer, arte e cultura, Notícias policiais, Classificados", 'Esporte, Notícias policiais', 'Esporte, Classificados', 'Esporte, Moda', 'Esporte, Sociais', 'Lazer, arte e cultura, Notícias policiais', 'Lazer, arte e cultura, Classificados', 'Lazer, arte e cultura, Moda', 'Lazer, arte e cultura, Sociais', 'Notícias policiais, Classificados', 'Notícias policiais, Moda', 'Notícias policiais, Sociais', 'Classificados, Moda', 'Classificados, Sociais', 'Moda, Sociais', 'Notícia locais, Notícias nacionais', 'Notícia locais, Notícias internacionais', 'Notícia locais, Esporte', 'Notícia locais, Lazer, arte e cultura', 'Notícia locais, Notícias policiais', 'Notícia locais, Classificados', 'Notícia locais, Moda', 'Notícia locais, Sociais', 'Notícia locais, Notícias nacionais, Esporte', 'Notícia locais, Notícias nacionais, Lazer, arte e cultura', 'Notícia locais, Notícias nacionais, Notícias policiais', 'Notícia locais, Notícias nacionais, Classificados', 'Notícia locais, Notícias nacionais, Moda', 'Notícia locais, Notícias nacionais, Sociais', 'Notícias nacionais, Notícias internacionais', 'Notícias nacionais, Esporte', 'Notícias nacionais, Lazer, arte e cultura', 'Notícias nacionais, Notícias policiais', 'Notícias nacionais, Classificados', 'Notícias nacionais, Moda', 'Notícias nacionais, Sociais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte', 'Notícia locais, Notícias nacionais, Notícias internacionais, Lazer, arte e cultura', 'Notícia locais, Notícias nacionais, Notícias internacionais, Classificados', 'Notícia locais, Notícias nacionais, Notícias internacionais, Moda', 'Notícias nacionais, Notícias internacionais, Esporte', 'Notícias nacionais, Notícias internacionais, Lazer, arte e cultura', 'Notícias nacionais, Notícias internacionais, Moda', 'Notícias nacionais, Notícias internacionais, Sociais', 'Notícias internacionais, Esporte', 'Notícias internacionais, Lazer, arte e cultura', 'Notícias internacionais, Notícias policiais', 'Notícias internacionais, Classificados', 'Notícias internacionais, Moda', 'Notícias internacionais, Sociais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Moda', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Sociais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados, Moda', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados, Sociais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Classificados', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Moda', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Sociais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Notícias policiais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Classificados', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Moda', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Sociais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura', 'Notícias nacionais, Notícias internacionais, Esporte, Notícias policiais', 'Notícias nacionais, Notícias internacionais, Esporte, Classificados', 'Notícias nacionais, Notícias internacionais, Esporte, Moda', 'Notícias nacionais, Notícias internacionais, Esporte, Sociais', 'Notícias internacionais, Esporte, Lazer, arte e cultura', 'Notícias internacionais, Esporte, Notícias policiais', 'Notícias internacionais, Esporte, Classificados', 'Notícias internacionais, Esporte, Moda', 'Notícias internacionais, Esporte, Sociais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Classificados', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Moda', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Moda', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Sociais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados, Moda', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados, Sociais'];
let opcQtdLivros = ['Nenhum', 'Até 2', 'De 3 até 6', 'De 7 até 10', 'Mais de 10'];
let opcLeLivros = ['Não leio', 'Romance', 'Ficção', 'Policial', 'Biográfico', 'Aventura', 'Autoajuda', 'Outros', 'Romance, Ficção', 'Romance, Policial', 'Romance, Biográfico', 'Romance, Aventura', 'Romance, Autoajuda', 'Romance, Outros', 'Ficção, Policial', 'Ficção, Biográfico', 'Ficção, Aventura', 'Ficção, Autoajuda', 'Ficção, Outros', 'Policial, Biográfico', 'Policial, Aventura', 'Policial, Autoajuda', 'Policial, Outros', 'Biográfico, Aventura', 'Biográfico, Autoajuda', 'Biográfico, Outros', 'Aventura, Autoajuda', 'Aventura, Outros', 'Autoajuda, Outros', 'Romance, Ficção, Policial', 'Romance, Ficção, Biográfico', 'Romance, Ficção, Aventura', 'Romance, Ficção, Autoajuda', 'Romance, Ficção, Outros', 'Romance, Ficção, Policial, Biográfico', 'Romance, Ficção, Policial, Aventura', 'Romance, Ficção, Policial, Autoajuda', 'Romance, Ficção, Policial, Outros', 'Ficção, Policial, Biográfico', 'Ficção, Policial, Aventura', 'Ficção, Policial, Autoajuda', 'Ficção, Policial, Outros', 'Ficção, Policial, Aventura, Autoajuda', 'Ficção, Policial, Aventura, Autoajuda, Outros', 'Ficção, Policial, Aventura, Outros', 'Ficção, Policial, Autoajuda, Outros', 'Romance, Ficção, Policial, Aventura, Autoajuda', 'Romance, Ficção, Policial, Aventura, Autoajuda, Outros', 'Romance, Ficção, Policial, Aventura, Outros', 'Romance, Ficção, Policial, Autoajuda', 'Romance, Ficção, Policial, Autoajuda, Outros', 'Romance, Ficção, Aventura, Autoajuda', 'Romance, Ficção, Aventura, Autoajuda, Outros', 'Romance, Ficção, Aventura, Outros', 'Romance, Ficção, Autoajuda, Outros', 'Romance, Ficção, Policial, Biográfico, Autoajuda', 'Romance, Ficção, Policial, Biográfico, Autoajuda, Outros', 'Romance, Ficção, Policial, Biográfico, Aventura', 'Romance, Ficção, Policial, Biográfico, Aventura, Autoajuda', 'Romance, Ficção, Policial, Biográfico, Aventura, Autoajuda, Outros', "Ficção, Biográfico, Aventura", "Ficção, Aventura, Outros", "Ficção, Policial, Biográfico, Aventura, Autoajuda", 'Romance, Ficção, Biográfico, Aventura', 'Romance, Policial, Biográfico, Autoajuda', 'Biográfico, Autoajuda, Outros', 'Ficção, Autoajuda, Outros', 'Ficção, Biográfico, Autoajuda', 'Ficção, Aventura, Autoajuda'];
let opcAtividadeVolun = ['Sim', 'Não'];
let opcReligiao = ['Nenhuma', 'Católica', 'Espírita', 'Evangélica', 'Protestante', 'Outra'];
let opcEntretenimento = ['Cinema', 'Exposições de arte', 'Filmes na internet', 'Literatura', 'Museus', 'Música', 'Teatro', 'TV', 'Viagens', 'Nenhuma', 'Cinema, Exposições de arte', 'Cinema, Literatura', 'Cinema, Museus', 'Cinema, Música', 'Cinema, Teatro', 'Cinema, TV', 'Cinema, Viagens', 'Cinema, Exposições de arte, Filmes na internet', 'Cinema, Exposições de arte, Filmes na internet, Literatura', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, TV, Viagens', 'Cinema, Filmes na internet', 'Cinema, Filmes na internet, Literatura', 'Cinema, Filmes na internet, Literatura, Museus', 'Cinema, Filmes na internet, Literatura, Museus, Música, Teatro', 'Cinema, Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Cinema, Filmes na internet, Literatura, Museus, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Literatura', 'Cinema, Exposições de arte, Literatura, Museus', 'Cinema, Exposições de arte, Literatura, Museus, Música', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro, TV', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Museus', 'Cinema, Exposições de arte, Filmes na internet, Museus, Música', 'Cinema, Exposições de arte, Filmes na internet, Museus, Música, Teatro', 'Cinema, Exposições de arte, Filmes na internet, Museus, Música, Teatro, TV', 'Cinema, Exposições de arte, Filmes na internet, Museus, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Música', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Música, Teatro', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Música, Teatro, TV', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Teatro', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Teatro, TV', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Viagens', 'Exposições de arte, Filmes na internet', 'Exposições de arte, Filmes na internet, Literatura', 'Exposições de arte, Filmes na internet, Literatura, Museus', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, TV, Viagens', 'Filmes na internet', 'Filmes na internet, Literatura, Museus', 'Filmes na internet, Literatura, Museus, Música', 'Filmes na internet, Literatura, Museus, Música, Teatro', 'Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Filmes na internet, Literatura, Museus, Música, Teatro, TV, Viagens', 'Exposições de arte, Literatura', 'Exposições de arte, Literatura, Museus', 'Exposições de arte, Literatura, Museus, Música', 'Exposições de arte, Literatura, Museus, Música, Teatro', 'Exposições de arte, Literatura, Museus, Música, Teatro, TV', 'Exposições de arte, Literatura, Museus, Música, Teatro, TV, Viagens', 'Exposições de arte, Filmes na internet, Museus', 'Exposições de arte, Filmes na internet, Museus, Música', 'Exposições de arte, Filmes na internet, Museus, Música, Teatro', 'Exposições de arte, Filmes na internet, Museus, Música, Teatro, TV', 'Exposições de arte, Filmes na internet, Museus, Música, Teatro, TV, Viagens', 'Exposições de arte, Filmes na internet, Literatura, Música', 'Exposições de arte, Filmes na internet, Literatura, Música, Teatro', 'Exposições de arte, Filmes na internet, Literatura, Música, Teatro, TV', 'Exposições de arte, Filmes na internet, Literatura, Música, Teatro, TV, Viagens', 'Exposições de arte, Filmes na internet, Literatura, Museus, Teatro', 'Exposições de arte, Filmes na internet, Literatura, Museus, Teatro, TV', 'Exposições de arte, Filmes na internet, Literatura, Museus, Teatro, TV, Viagens', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música, Viagens', 'Filmes na internet, Literatura, Museus', 'Filmes na internet, Literatura, Museus, Música', 'Filmes na internet, Literatura, Museus, Música, Teatro', 'Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Filmes na internet, Literatura', 'Filmes na internet, Literatura, Museus', 'Filmes na internet, Literatura, Museus, Música', 'Filmes na internet, Literatura, Museus, Música, Teatro', 'Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Literatura, Museus', 'Literatura, Museus, Música', 'Literatura, Museus, Música, Teatro', 'Literatura, Museus, Música, Teatro, TV', 'Literatura, Museus, Música, Teatro, TV, Viagens', 'Filmes na internet, Museus', 'Filmes na internet, Museus, Música', 'Filmes na internet, Museus, Música, Teatro', 'Filmes na internet, Museus, Música, Teatro, TV', 'Filmes na internet, Museus, Música, Teatro, TV, Viagens', 'Filmes na internet, Literatura, Música', 'Filmes na internet, Literatura, Música, Teatro', 'Filmes na internet, Literatura, Música, Teatro, TV', 'Filmes na internet, Literatura, Música, Teatro, TV, Viagens', 'Filmes na internet, Literatura, Museus, Teatro', 'Filmes na internet, Literatura, Museus, Teatro, TV', 'Filmes na internet, Literatura, Museus, Teatro, TV, Viagens', 'Filmes na internet, Literatura, Museus, Música, Viagens', 'Literatura, Museus', 'Literatura, Museus, Música', 'Literatura, Museus, Música, Teatro', 'Literatura, Museus, Música, Teatro, TV', 'Literatura, Museus, Música, Teatro, TV, Viagens', 'Literatura, Museus', 'Literatura, Museus, Música', 'Literatura, Museus, Música, Teatro', 'Literatura, Museus, Música, Teatro, TV', 'Literatura, Museus, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Literatura', 'Cinema, Exposições de arte, Literatura, Museus', 'Cinema, Exposições de arte, Literatura, Museus, Música', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro, TV', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro, TV, Viagens', 'Museus, Música', 'Museus, Música, Teatro', 'Museus, Música, Teatro, TV', 'Museus, Música, Teatro, TV, Viagens', 'Literatura, Música', 'Literatura, Música, Teatro', 'Literatura, Música, Teatro, TV', 'Literatura, Música, Teatro, TV, Viagens', 'Literatura, Museus, Teatro', 'Literatura, Museus, Teatro, TV', 'Literatura, Museus, Teatro, TV, Viagens', 'Literatura, Museus, Música, Viagens', 'Cinema, Filmes na internet, Música, TV', 'Cinema, Filmes na internet, Literatura, Música, TV', 'Filmes na internet, Música', 'Cinema, Filmes na internet, Literatura, Música', 'Cinema, Filmes na internet, Literatura, Música, Teatro, Viagens', 'Cinema, Filmes na internet, Literatura, Música, Teatro, TV', 'Cinema, Filmes na internet, Literatura, Música, TV, Viagens', 'Exposições de arte, Filmes na internet, Música', 'Cinema, Filmes na internet, Música', 'Filmes na internet, Música, TV', 'Cinema, Filmes na internet, Música, Teatro, TV', 'Cinema, Filmes na internet, Música, Viagens', 'Cinema, Música, TV, Viagens', 'Filmes na internet, Literatura, Música, TV', 'Filmes na internet, Literatura, Música, TV, Viagens', 'Filmes na internet, Música, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, Viagens', 'Literatura, Música, TV', 'Cinema, Filmes na internet, Museus, Música, TV', 'Cinema, Filmes na internet, TV', 'Cinema, Filmes na internet, Literatura, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, TV, Viagens', 'Cinema, Filmes na internet, Música, TV, Viagens'];
let opcConheceuFatec = ['Cartaz de divulgação', 'Indicação de familiar/amigo', 'Pelo Facebook', 'Por algum dos jornais', 'Por alguma das rádios', 'Por outdoor', 'Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo', 'Cartaz de divulgação, Pelo Facebook', 'Cartaz de divulgação, Por algum dos jornais', 'Cartaz de divulgação, Por alguma das rádios', 'Cartaz de divulgação, Por outdoor', 'Cartaz de divulgação, Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios, Por outdoor', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios, Propaganda na escola que estudava', 'Indicação de familiar/amigo, Pelo Facebook', 'Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais', 'Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios', 'Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios, Propaganda na escola que estudava', 'Cartaz de divulgação, Pelo Facebook, Por algum dos jornais', 'Cartaz de divulgação, Pelo Facebook, Por algum dos jornais, Por alguma das rádios', 'Cartaz de divulgação, Pelo Facebook, Por algum dos jornais, Por alguma das rádios, Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo, Por algum dos jornais', 'Cartaz de divulgação, Indicação de familiar/amigo, Por algum dos jornais, Por alguma das rádios', 'Cartaz de divulgação, Indicação de familiar/amigo, Por algum dos jornais, Por alguma das rádios, Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por alguma das rádios', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por alguma das rádios, Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Propaganda na escola que estudava', 'Indicação de familiar/amigo, Pelo Facebook, Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo, Por alguma das rádios', 'Indicação de familiar/amigo, Propaganda na escola que estudava', 'Indicação de familiar/amigo, Por algum dos jornais, Propaganda na escola que estudava', 'Indicação de familiar/amigo, Pelo Facebook, Por alguma das rádios'];
let opcEscolheuCurso = ['Este curso forma profissionais facilmente absorvidos pelo mercado', 'Este curso forma profissionais que são bem remunerados', 'Minha vocação é seguir esta carreira', 'Este curso é gratuito', 'Este curso é de média duração', 'É um curso bem conceituado na região', 'Porque já trabalho na área', 'Sugestão ou vontade familiar', 'Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Minha vocação é seguir esta carreira', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é gratuito', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é de média duração', 'Este curso forma profissionais facilmente absorvidos pelo mercado, É um curso bem conceituado na região', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Porque já trabalho na área', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Sugestão ou vontade familiar', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos', 'Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira', 'Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito', 'Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração ', 'Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração', 'Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região', 'Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área', 'Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar', 'Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos', 'Minha vocação é seguir esta carreira, Este curso é gratuito', 'Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração', 'Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração', 'Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região', 'Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área', 'Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar', 'Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos', 'Este curso é gratuito, Este curso é de média duração', 'Este curso é gratuito, Este curso é de média duração, Este curso é de média duração', 'Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região', 'Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área', 'Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar', 'Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos', 'É um curso bem conceituado na região, Porque já trabalho na área', 'É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar', 'É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos', 'Porque já trabalho na área, Sugestão ou vontade familiar', 'Porque já trabalho na área, Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Este curso é gratuito, É um curso bem conceituado na região', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Este curso é de média duração, É um curso bem conceituado na região', 'Este curso forma profissionais que são bem remunerados, Este curso é de média duração, É um curso bem conceituado na região', 'Este curso é gratuito, Sugestão ou vontade familiar', 'Minha vocação é seguir esta carreira, É um curso bem conceituado na região', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é gratuito, Este curso é de média duração, É um curso bem conceituado na região', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, É um curso bem conceituado na região', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é gratuito, É um curso bem conceituado na região, Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Este curso é gratuito, Este curso é de média duração, É um curso bem conceituado na região', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Sugestão ou vontade familiar', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Minha vocação é seguir esta carreira, É um curso bem conceituado na região', 'Este curso forma profissionais que são bem remunerados, Este curso é gratuito', 'Minha vocação é seguir esta carreira, Porque já trabalho na área', 'Minha vocação é seguir esta carreira, É um curso bem conceituado na região, Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é gratuito, Este curso é de média duração', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Este curso é gratuito', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Minha vocação é seguir esta carreira, Este curso é gratuito, É um curso bem conceituado na região', 'Este curso forma profissionais que são bem remunerados, Outros motivos', 'Sugestão ou vontade familiar, Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é gratuito, É um curso bem conceituado na região, Sugestão ou vontade familiar', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é gratuito, É um curso bem conceituado na região', 'Este curso forma profissionais facilmente absorvidos pelo mercado, É um curso bem conceituado na região, Sugestão ou vontade familiar, Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é gratuito, Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área', 'Minha vocação é seguir esta carreira, Este curso é gratuito, Sugestão ou vontade familiar', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos'];
let opcExpectativa = ['Obter novos conhecimentos', 'Obter competências para exercício de uma profissão', 'Conhecer novas pessoas', 'Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter um diploma de nível superior', 'Outra expectativa', 'Não tenho expectativa alguma', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão', 'Obter novos conhecimentos, Conhecer novas pessoas', 'Obter novos conhecimentos, Obter um diploma de nível superior', 'Obter novos conhecimentos, Outra expectativa', 'Obter competências para exercício de uma profissão, Conhecer novas pessoas', 'Obter competências para exercício de uma profissão, Outra expectativa', 'Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros', 'Conhecer novas pessoas, Obter um diploma de nível superior', 'Conhecer novas pessoas, Outra expectativa', 'Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior', 'Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior, Outra expectativa', 'Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Outra expectativa', 'Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior', 'Melhorar-me como pessoa para bons relacionamentos futuros, Outra expectativa', 'Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior, Outra expectativa', 'Obter um diploma de nível superior, Outra expectativa', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Conhecer novas pessoas', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior, Outra expectativa', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior, Outra expectativa', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Melhorar-me como pessoa para bons relacionamentos futuros, Outra expectativa', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Conhecer novas pessoas, Obter um diploma de nível superior', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Conhecer novas pessoas, Outra expectativa', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Conhecer novas pessoas, Obter um diploma de nível superior, Outra expectativa', 'Obter competências para exercício de uma profissão, Obter um diploma de nível superior', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Obter um diploma de nível superior', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Outra expectativa', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Obter um diploma de nível superior, Outra expectativa', 'Obter novos conhecimentos, Obter competências para exercício de uma profissão, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Outra expectativa', 'Obter competências para exercício de uma profissão, Conhecer novas pessoas', 'Obter competências para exercício de uma profissão, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter competências para exercício de uma profissão, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior', 'Obter competências para exercício de uma profissão, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior, Outra expectativa', 'Obter competências para exercício de uma profissão, Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter competências para exercício de uma profissão, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior', 'Obter competências para exercício de uma profissão, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior, Outra expectativa', 'Obter competências para exercício de uma profissão, Melhorar-me como pessoa para bons relacionamentos futuros, Outra expectativa', 'Obter novos conhecimentos, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter novos conhecimentos, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior', 'Obter novos conhecimentos, Conhecer novas pessoas, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior, Outra expectativa', 'Obter novos conhecimentos, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior', 'Obter novos conhecimentos, Melhorar-me como pessoa para bons relacionamentos futuros, Obter um diploma de nível superior, Outra expectativa', 'Obter novos conhecimentos, Melhorar-me como pessoa para bons relacionamentos futuros, Outra expectativa'];
let opcFormar = ['Conquistar vaga em empresa privada', 'Prestar concurso público', 'Melhorar cargo e salário na empresa que trabalho', 'Abrir meu próprio negócio', 'Ingressar na carreira acadêmica', 'Outra expectativa', 'Nenhuma expectativa', 'Conquistar vaga em empresa privada, Prestar concurso público', 'Conquistar vaga em empresa privada, Melhorar cargo e salário na empresa que trabalho', 'Conquistar vaga em empresa privada, Abrir meu próprio negócio', 'Conquistar vaga em empresa privada, Ingressar na carreira acadêmica', 'Conquistar vaga em empresa privada, Outra expectativa', 'Prestar concurso público, Abrir meu próprio negócio, Ingressar na carreira acadêmica', 'Prestar concurso público, Melhorar cargo e salário na empresa que trabalho', 'Prestar concurso público, Abrir meu próprio negócio', 'Prestar concurso público, Ingressar na carreira acadêmica', 'Prestar concurso público, Outra expectativa', 'Outra expectativa, Nenhuma expectativa', 'Melhorar cargo e salário na empresa que trabalho, Abrir meu próprio negócio', 'Melhorar cargo e salário na empresa que trabalho, Ingressar na carreira acadêmica', 'Melhorar cargo e salário na empresa que trabalho, Outra expectativa', 'Conquistar vaga em empresa privada, Abrir meu próprio negócio, Outra expectativa', 'Abrir meu próprio negócio, Ingressar na carreira acadêmica', 'Abrir meu próprio negócio, Outra expectativa', 'Conquistar vaga em empresa privada, Prestar concurso público, Abrir meu próprio negócio', 'Ingressar na carreira acadêmica, Outra expectativa', 'Conquistar vaga em empresa privada, Prestar concurso público, Melhorar cargo e salário na empresa que trabalho', 'Conquistar vaga em empresa privada, Prestar concurso público, Melhorar cargo e salário na empresa que trabalho, Abrir meu próprio negócio', 'Conquistar vaga em empresa privada, Prestar concurso público, Melhorar cargo e salário na empresa que trabalho, Abrir meu próprio negócio, Ingressar na carreira acadêmica', 'Conquistar vaga em empresa privada, Prestar concurso público, Melhorar cargo e salário na empresa que trabalho, Abrir meu próprio negócio, Outra expectativa', 'Conquistar vaga em empresa privada, Prestar concurso público, Melhorar cargo e salário na empresa que trabalho, Abrir meu próprio negócio, Ingressar na carreira acadêmica, Outra expectativa', 'Prestar concurso público, Melhorar cargo e salário na empresa que trabalho, Abrir meu próprio negócio', 'Conquistar vaga em empresa privada, Prestar concurso público, Outra expectativa', 'Conquistar vaga em empresa privada, Prestar concurso público, Abrir meu próprio negócio, Outra expectativa', 'Conquistar vaga em empresa privada, Melhorar cargo e salário na empresa que trabalho, Outra expectativa', 'Conquistar vaga em empresa privada, Melhorar cargo e salário na empresa que trabalho, Ingressar na carreira acadêmica', 'Abrir meu próprio negócio, Ingressar na carreira acadêmica, Outra expectativa', 'Conquistar vaga em empresa privada, Melhorar cargo e salário na empresa que trabalho, Abrir meu próprio negócio'];
let opcEstudoNaEscola = ['Sim', 'Não'];
let opcCursoTecnico = ['Não fiz', 'Sim, em uma ETEC', 'Sim, no SENAC', 'Sim, no SENAI', 'Sim, em outra instituição']
let opcTransporte = ['Caminhando', 'Carona', 'Bicicleta', 'Moto', 'Carro', 'Ônibus', 'Transporte escolar']

let DivGeral = ["curso", "periodo", "estado", "cidade", "moram_com", "QTD_de_pessoas_moram_junto", "situacao_domicilio", "tempo_moradia", "genero", "estado_civil", "Portador_de_Necessidade", "convive_com_portador", "qtd_de_filhos", "salario_min", "DataNascimento", "Oque_tem_No_Domicilio", "qtd_geladeira", "qtd_celular_comum", "qtd_micro_ondas", "qtd_notebooks", "qtd_Maquina_de_Lavar", "qtd_motocicletas", "qtd_Automoveis", "qtd_DVD", "qtd_TV", "qtd_Smartphones", "Plano_Saude", "Religiao", "Trabalho", "Vinculo_Emprego", "Area_trabalho", "Horario_Trabalho", "Escolaridade_Pai", "Escolaridade_Mae", "Estudou_Em", "Ingles", "Espanhol", "Outros", "Estudou_Fatec", "Curso_Tecnico", "Frequencia_Microcomputadores", "Onde_Microcomputadores", "Finalidade_Microcomputadores", "Conhecimento_Informatica", "Conhecimento_Windows", "Conhecimento_Linux", "Conhecimento_Word", "Conhecimento_Excel", "Conhecimento_PowerPoint", "Conhecimento_GestaoEmpresarial", "Televisores", "Internet", "Revistas", "Jornais", "Radio", "Redes_Sociais", "Conversas_com_Amigos", "Le_Jornal", "Qtd_Livros", "Assuntos_que_Le", "Le_Livros", "Fontes_Entretenimento", "Atividade_Voluntaria", "Transporte", "Conheceu_Fatec", "Escolheu_Curso", "Expectativa_Curso", "Expectativa_Formar"];
let DivNoturno = ["Noturno_curso", "Noturno_Periodo", "Noturno_Estado", "Noturno_Cidade", "Noturno_Moram_com", "Noturno_QTD_de_pessoas_moram_junto", "Noturno_Situacao_domicilio", "Noturno_Tempo_moradia", "Noturno_Genero", "Noturno_Estado_civil", "Noturno_Portador_de_Necessidade", "Noturno_Convive_com_portador", "Noturno_Qtd_de_filhos", "Noturno_Salario_min", "Noturno_DataNascimento", "Noturno_Oque_tem_No_Domicilio", "Noturno_Qtd_geladeira", "Noturno_Qtd_celular_comum", "Noturno_Qtd_micro_ondas", "Noturno_Qtd_notebooks", "Noturno_Qtd_Maquina_de_Lavar", "Noturno_Qtd_motocicletas", "Noturno_Qtd_Automoveis", "Noturno_Qtd_DVD", "Noturno_Qtd_TV", "Noturno_Qtd_Smartphones", "Noturno_Plano_Saude", "Noturno_Religiao", "Noturno_Trabalho", "Noturno_Vinculo_Emprego", "Noturno_Area_trabalho", "Noturno_Horario_Trabalho", "Noturno_Escolaridade_Pai", "Noturno_Escolaridade_Mae", "Noturno_Estudou_Em", "Noturno_Ingles", "Noturno_Espanhol", "Noturno_Outros", "Noturno_Estudou_Fatec", "Noturno_Curso_Tecnico", "Noturno_Frequencia_Microcomputadores", "Noturno_Onde_Microcomputadores", "Noturno_Finalidade_Microcomputadores", "Noturno_Conhecimento_Informatica", "Noturno_Conhecimento_Windows", "Noturno_Conhecimento_Linux", "Noturno_Conhecimento_Word", "Noturno_Conhecimento_Excel", "Noturno_Conhecimento_PowerPoint", "Noturno_Conhecimento_GestaoEmpresarial", "Noturno_Televisores", "Noturno_Internet", "Noturno_Revistas", "Noturno_Jornais", "Noturno_Radio", "Noturno_Redes_Sociais", "Noturno_Conversas_com_Amigos", "Noturno_Le_Jornal", "Noturno_Qtd_Livros", "Noturno_Assuntos_que_Le", "Noturno_Le_Livros", "Noturno_Fontes_Entretenimento", "Noturno_Atividade_Voluntaria", "Noturno_Transporte", "Noturno_Conheceu_Fatec", "Noturno_Escolheu_Curso", "Noturno_Expectativa_Curso", "Noturno_Expectativa_Formar"];
let DivMatutino = ["Matutino_curso", "Matutino_Periodo", "Matutino_Estado", "Matutino_Cidade", "Matutino_Moram_com", "Matutino_QTD_de_pessoas_moram_junto", "Matutino_Situacao_domicilio", "Matutino_Tempo_moradia", "Matutino_Genero", "Matutino_Estado_civil", "Matutino_Portador_de_Necessidade", "Matutino_Convive_com_portador", "Matutino_Qtd_de_filhos", "Matutino_Salario_min", "Matutino_DataNascimento", "Matutino_Oque_tem_No_Domicilio", "Matutino_Qtd_geladeira", "Matutino_Qtd_celular_comum", "Matutino_Qtd_micro_ondas", "Matutino_Qtd_notebooks", "Matutino_Qtd_Maquina_de_Lavar", "Matutino_Qtd_motocicletas", "Matutino_Qtd_Automoveis", "Matutino_Qtd_DVD", "Matutino_Qtd_TV", "Matutino_Qtd_Smartphones", "Matutino_Plano_Saude", "Matutino_Religiao", "Matutino_Trabalho", "Matutino_Vinculo_Emprego", "Matutino_Area_trabalho", "Matutino_Horario_Trabalho", "Matutino_Escolaridade_Pai", "Matutino_Escolaridade_Mae", "Matutino_Estudou_Em", "Matutino_Ingles", "Matutino_Espanhol", "Matutino_Outros", "Matutino_Estudou_Fatec", "Matutino_Curso_Tecnico", "Matutino_Frequencia_Microcomputadores", "Matutino_Onde_Microcomputadores", "Matutino_Finalidade_Microcomputadores", "Matutino_Conhecimento_Informatica", "Matutino_Conhecimento_Windows", "Matutino_Conhecimento_Linux", "Matutino_Conhecimento_Word", "Matutino_Conhecimento_Excel", "Matutino_Conhecimento_PowerPoint", "Matutino_Conhecimento_GestaoEmpresarial", "Matutino_Televisores", "Matutino_Internet", "Matutino_Revistas", "Matutino_Jornais", "Matutino_Radio", "Matutino_Redes_Sociais", "Matutino_Conversas_com_Amigos", "Matutino_Le_Jornal", "Matutino_Qtd_Livros", "Matutino_Assuntos_que_Le", "Matutino_Le_Livros", "Matutino_Fontes_Entretenimento", "Matutino_Atividade_Voluntaria", "Matutino_Transporte", "Matutino_Conheceu_Fatec", "Matutino_Escolheu_Curso", "Matutino_Expectativa_Curso", "Matutino_Expectativa_Formar"];

console.log('DivGeral', DivGeral)
console.log('DivMatutino', DivMatutino)
console.log('DivNoturno', DivNoturno)


// Criar Grafico de Pizza
function ChartPie(id, labels, dados, title) {
    var ctx = document.getElementById(id).getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: labels,
            datasets: [{
                label: '',
                backgroundColor: [
                    '#12239E', '#FF0005', '#EA4335',
                    '#1D96CC', '#3DFF64', '#FBBC05',
                    '#9657FF', '#6B007B', '#1E90FF',
                    '#FFF28C', '#F59AF2', '#5BE8F5',
                    '#F50F51', '#9ED3E4', '#00F6A0',
                    '#CEF6A0', '#FF91A0', '#FF0046',
                    '#4A0046', '#BA00B1', '#22BDD4',
                    '#2300BA', '#FFF766', '#FFF713',
                    '#10B92C', '#EB0D0D', '#FF700F',
                    '#FFB7F3', '#EE7AE9', '#FFBBFF',
                    '#912CEE', '#008B8B', '#00008B',
                    '#90EE90', '#CD2626', '#EE7621',
                    '#00008B', '#20B2AA', '#8B2500',
                    '#8B0000', '#FFD39B', '#008B8B',
                    '#90EE90', '#FFE1FF', '#8B008B',
                    '#FF82AB', '#4EEE94', '#00FFFF',
                    '#7CFC00', '#CD5C5C', '#FF6347',
                    '#FF69B4', '#DDA0DD', '#E0EEEE',
                ],
                borderColor: [
                    '#12239E', '#FF0005', '#EA4335',
                    '#1D96CC', '#3DFF64', '#FBBC05',
                    '#9657FF', '#6B007B', '#1E90FF',
                    '#FFF28C', '#F59AF2', '#5BE8F5',
                    '#F50F51', '#9ED3E4', '#00F6A0',
                    '#CEF6A0', '#FF91A0', '#FF0046',
                    '#4A0046', '#BA00B1', '#22BDD4',
                    '#2300BA', '#FFF766', '#FFF713',
                    '#10B92C', '#EB0D0D', '#FF700F',
                    '#FFB7F3', '#EE7AE9', '#FFBBFF',
                    '#912CEE', '#008B8B', '#00008B',
                    '#90EE90', '#CD2626', '#EE7621',
                    '#00008B', '#20B2AA', '#8B2500',
                    '#8B0000', '#FFD39B', '#008B8B',
                    '#90EE90', '#FFE1FF', '#8B008B',
                    '#FF82AB', '#4EEE94', '#00FFFF',
                    '#7CFC00', '#CD5C5C', '#FF6347',
                    '#FF69B4', '#DDA0DD', '#E0EEEE',
                ],
                data: dados,
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 40,
                text: title
            },
            legend: {
                position: 'left',
                display: true,
                labels: {
                    fontColor: '#BFBFBF'
                }
            }
        }
    });
}

// Criar grafico de barras
function ChartBar(id, tipo, periodo, labels, dados, title) {
    var ctx = document.getElementById(id).getContext('2d');
    var chart = new Chart(ctx, {

        type: tipo,

        data: {
            labels: labels,
            datasets: [{
                label: periodo,
                backgroundColor: [
                    '#12239E', '#FF0005', '#EA4335',
                    '#1D96CC', '#3DFF64', '#FBBC05',
                    '#9657FF', '#6B007B', '#1E90FF',
                    '#FFF28C', '#F59AF2', '#5BE8F5',
                    '#F50F51', '#9ED3E4', '#00F6A0',
                    '#CEF6A0', '#FF91A0', '#FF0046',
                    '#4A0046', '#BA00B1', '#22BDD4',
                    '#2300BA', '#FFF766', '#FFF713',
                    '#10B92C', '#EB0D0D', '#FF700F',
                    '#FFB7F3', '#EE7AE9', '#FFBBFF',
                    '#912CEE', '#008B8B', '#00008B',
                    '#90EE90', '#CD2626', '#EE7621',
                    '#00008B', '#20B2AA', '#8B2500',
                    '#8B0000', '#FFD39B', '#008B8B',
                    '#90EE90', '#FFE1FF', '#8B008B',
                    '#FF82AB', '#4EEE94', '#00FFFF',
                    '#7CFC00', '#CD5C5C', '#FF6347',
                    '#FF69B4', '#DDA0DD', '#E0EEEE',
                ],
                borderColor: ['#12239E'],
                data: dados,
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 40,
                text: title,
            },
            legend: {
                display: true,
                labels: {
                    fontColor: '#BFBFBF'
                }
            },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: false,
                    gridLines: {
                        display: true,
                        color: "#8B8B8C"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: true,
                        color: '#8B8B8C',
                    }
                }]
            }
        },
    });
}

function GerarGraficoPie(variavel, opcao, Resp, num, labels, Dados, id, title) {
    for (let i = 0; i < opcao.length; i++) {
        variavel[i] = new Array()
    }

    for (j = 0; j < opcao.length; j++) {
        for (k = 0; k < Resp[num].length; k++) {
            if (Resp[num][k] === opcao[j]) {
                variavel[j].push(Resp[num][k])
            }
        }
        if (variavel[j].length > 0) {
            Dados.push(variavel[j].length)
        }
    }

    for (j = 0; j < 1; j++) {
        for (k = 0; k < opcao.length; k++) {
            if (variavel[k][j] != undefined) {
                labels.push(variavel[k][j])
            }
        }
    }

    ChartPie(id, labels, Dados, title)
}

function GerarGraficoBar(variavel, opcao, Resp, num, labels, Dados, id, tipo, periodo, title) {
    for (let i = 0; i < opcao.length; i++) {
        variavel[i] = new Array()
    }

    for (j = 0; j < opcao.length; j++) {
        for (k = 0; k < Resp[num].length; k++) {
            if (Resp[num][k] === opcao[j]) {
                variavel[j].push(Resp[num][k])
            }
        }
        if (variavel[j].length > 0) {
            Dados.push(variavel[j].length)
        }
    }

    for (j = 0; j < 1; j++) {
        for (k = 0; k < opcao.length; k++) {
            if (variavel[k][j] != undefined) {
                labels.push(variavel[k][j])
            }
        }
    }

    ChartBar(id, tipo, periodo, labels, Dados, title)
}


async function generateChart() {
    const file = await fetch('script/json/forms.json')

    const json = await file.json()
    const forms = json.forms

    let i = 0;
    let questoes

    // Pegar todas as questões
    for (quest of forms) {
        questoes = Object.getOwnPropertyNames(quest)
        i++
    }

    // Pegas as questões so com respostas do noturno
    let Noturno = forms.filter(function (periodo) {
        return periodo[questoes[3]] === 'Noturno'
    })

    // Pegas as questões so com respostas do matutino
    let Matutino = forms.filter(function (periodo) {
        return periodo[questoes[3]] === 'Matutino'
    })

    let respostas = new Array(questoes.length)
    let respMatutino = new Array(Matutino.length)
    let respNoturno = new Array(Noturno.length)

    for (let j = 0; j < questoes.length; j++) {
        respMatutino[j] = new Array(Matutino.length)
        respNoturno[j] = new Array(Noturno.length)
        respostas[j] = new Array(forms.length)
    }

    // Array com todas as questões
    for (let k = 0; k < forms.length; k++) {
        for (let j = 0; j < questoes.length; j++) {
            respostas[j][k] = forms[k][questoes[j]]
        }
    }

    // Array com todas as questões Matutino
    for (let k = 0; k < Matutino.length; k++) {
        for (let j = 0; j < questoes.length; j++) {
            respMatutino[j][k] = Matutino[k][questoes[j]]
        }
    }

    // Array com todas as questões Noturno
    for (let k = 0; k < Noturno.length; k++) {
        for (let j = 0; j < questoes.length; j++) {
            respNoturno[j][k] = Noturno[k][questoes[j]]
        }
    }




    // 1. Qual o seu curso?
    let curso = [];
    let DadosCurso = [];
    let labelsCurso = [];

    GerarGraficoPie(curso, opcCurso, respostas, 2, labelsCurso, DadosCurso, 'curso', 'Cursos')


    // 2. Qual o período que cursa?
    let DadosPeriodo = [];
    let labelsPeriodo = [];

    if (respMatutino[2].length >= 0) {
        DadosPeriodo.push(respMatutino[2].length)
    }
    if (respNoturno[2].length >= 0) {
        DadosPeriodo.push(respNoturno[2].length)
    }

    for (j = 0; j < 2; j++) {
        if (DadosPeriodo[j] >= 0) {
            labelsPeriodo.push(opcPeriodo[j])
        }
    }

    ChartPie('periodo', labelsPeriodo, DadosPeriodo, "Periodo");

    // 4. Qual o estado do Brasil que você nasceu?
    let estado = [];
    let DadosEstados = [];
    let labelsEstado = [];

    GerarGraficoBar(estado, opcEstado, respostas, 5, labelsEstado, DadosEstados, 'estado', 'bar', 'Geral', 'Estados');

    // 5 - Cidades
    let cidade = [];
    let DadosCidade = [];
    let labelsCidade = [];

    GerarGraficoBar(cidade, opcCidade, respostas, 6, labelsCidade, DadosCidade, 'cidade', 'bar', 'Geral', 'Cidades');

    // 6 - Genero
    let genero = [];
    let DadosGenero = [];
    let labelsGenero = [];

    GerarGraficoPie(genero, opcGenero, respostas, 7, labelsGenero, DadosGenero, 'genero', 'Gênero');

    // 7 - Data Nascimento
    /*let k = 3
    let data = ""
    console.log(respostas[8][k])
    for (let j = 0; j < 2; j++) {
        //data += respostas[8][k][respostas[8][k].length - 2] + respostas[8][k][respostas[8][k].length - 1]
        data += respostas[8][k][respostas[8][k].length - 2 + j]

    }
    if (data[0] === "0") {
        console.log("20" + data)
    } else {
        console.log(Number("19" + data))
    }

    let DataNascimento = [];
    let DadosDataNasciemnto = [];
    let labelsDataNascimento = [];

    GerarGraficoBar(DataNascimento, opcDataNascimento, respostas, 8, labelsDataNascimento, DadosDataNasciemnto, 'DataNascimento', 'Datas de Nascimento(Em Anos)')*/

    // 8 - Estado Civil
    let estadoCivil = [];
    let DadosEstadoCivil = [];
    let labelsEstadoCivil = [];

    GerarGraficoPie(estadoCivil, opcEstadoCivil, respostas, 9, labelsEstadoCivil, DadosEstadoCivil, 'estado_civil', 'Estado Civil');

    // 9 - Portadores de Necessidades especiais
    let portadores = [];
    let DadosPortadores = [];
    let labelsPortadores = [];

    GerarGraficoPie(portadores, opcPortador, respostas, 10, labelsPortadores, DadosPortadores, 'Portador_de_Necessidade', 'Portadores de Necessidades Especiais');

    // 10 - Convive com Portadores de Necessidades especiais
    let ConvivePort = [];
    let DadosConvivePort = [];
    let labelsConvivePort = [];

    GerarGraficoPie(ConvivePort, opcConvivePort, respostas, 11, labelsConvivePort, DadosConvivePort, 'convive_com_portador', 'Convive com Portadores de Necessidades Especiais');

    // 11 - Quantidade de filhos
    let QtdFilhos = [];
    let DadosQtdFilhos = [];
    let labelsQtdFilhos = [];

    GerarGraficoPie(QtdFilhos, opcQtdFilhos, respostas, 12, labelsQtdFilhos, DadosQtdFilhos, 'qtd_de_filhos', "Quantidade de filhos de cada estudante");

    // 12. Com quem você mora atualmente?
    let moraCom = [];
    let DadosMoraCom = [];
    let labelsMoraCom = [];

    GerarGraficoPie(moraCom, opcMoraCom, respostas, 13, labelsMoraCom, DadosMoraCom, 'moram_com', "Com quem cada estudante mora");

    //13. Quantas pessoas, incluindo você, moram no seu domicílio?
    let QtdMoradores = [];
    let DadosQtdMoradores = [];
    let labelsQtdMoradores = [];

    GerarGraficoPie(QtdMoradores, opcQtdMoradores, respostas, 14, labelsQtdMoradores, DadosQtdMoradores, 'QTD_de_pessoas_moram_junto', "Quantidade de pessoas que moram com cada aluno");

    // 14. Qual a situação do domicílio onde mora?
    let SituacaoDomicilio = [];
    let DadosSituacaoDomi = [];
    let labelsSituacaoDomi = [];

    GerarGraficoPie(SituacaoDomicilio, opcSituacaoDomi, respostas, 15, labelsSituacaoDomi, DadosSituacaoDomi, 'situacao_domicilio', "Situação do Domicílio")

    // 15. Tempo de moradia neste domicílio (Em anos)
    let TempoMoradia = [];
    let DadosTempoMoradia = [];
    let labelsTempoMoradia = [];

    GerarGraficoBar(TempoMoradia, opcTempoMoradia, respostas, 16, labelsTempoMoradia, DadosTempoMoradia, 'tempo_moradia', 'bar', 'Geral', 'Tempo de moradia no domicílio(Em anos)');

    // 16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)
    let RendaMensal = [];
    let DadosRendaMensal = [];
    let labelsRendaMensal = [];

    GerarGraficoPie(RendaMensal, opcRendaMensal, respostas, 17, labelsRendaMensal, DadosRendaMensal, 'salario_min', "Faixa de renda mensal da família do estudante (em Salários Mínimos)");

    //17.1. Quantas geladeiras há em seu domicílio
    let QtdGeladeira = [];
    let DadosQtdGeladeira = [];
    let labelsQtdGeladeira = [];

    GerarGraficoPie(QtdGeladeira, opc17QtdeCadaCoisa, respostas, 18, labelsQtdGeladeira, DadosQtdGeladeira, 'qtd_geladeira', "Quantidade de Geladeiras de cada aluno");

    // 17.2. Quantos celulares comuns há em seu domicílio?
    let QtdCelular = [];
    let DadosQtdCelular = [];
    let labelsQtdCelular = [];

    GerarGraficoPie(QtdCelular, opc17QtdeCadaCoisa, respostas, 19, labelsQtdCelular, DadosQtdCelular, 'qtd_celular_comum', "Quantidade de celulares comuns de cada aluno");

    // 17.3. Quantos micro-ondas há em seu domicílio?
    let QtdMicroOndas = [];
    let DadosQtdMicroOndas = [];
    let labelsQtdMicroOndas = [];

    GerarGraficoPie(QtdMicroOndas, opc17QtdeCadaCoisa, respostas, 20, labelsQtdMicroOndas, DadosQtdMicroOndas, 'qtd_micro_ondas', 'Quantidade de micro-ondas de cada aluno');

    // 17.4. Quantos notebooks há em seu domicílio?
    let QtdNotebooks = [];
    let DadosQtdNotebooks = [];
    let labelsQtdNotebook = [];

    GerarGraficoPie(QtdNotebooks, opc17QtdeCadaCoisa, respostas, 21, labelsQtdNotebook, DadosQtdNotebooks, 'qtd_notebooks', 'Quantidade de Notebooks de cada aluno');

    // 17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?
    let Qtd_Maquina_de_Lavar = [];
    let DadosMaquinaLavar = [];
    let labelsMaquinaLavar = [];

    GerarGraficoPie(Qtd_Maquina_de_Lavar, opc17QtdeCadaCoisa, respostas, 22, labelsMaquinaLavar, DadosMaquinaLavar, 'qtd_Maquina_de_Lavar', 'Quantidade de Máquinas de lavar roupa de cada aluno');

    // 17.6. Quantas motocicletas há em seu domicílio?
    let Qtd_motoclicletas = [];
    let DadosMotocicletas = [];
    let labelsMotocicletas = [];

    GerarGraficoPie(Qtd_motoclicletas, opc17QtdeCadaCoisa, respostas, 23, labelsMotocicletas, DadosMotocicletas, 'qtd_motocicletas', 'Quantidade de Motocicletas de cada aluno');

    // 17.7. Quantos automóveis há em seu domicílio?
    let QtdAutomoveis = [];
    let DadosAutomoveis = [];
    let labelsAutomoveis = [];

    GerarGraficoPie(QtdAutomoveis, opc17QtdeCadaCoisa, respostas, 24, labelsAutomoveis, DadosAutomoveis, 'qtd_Automoveis', 'Quantidade de Automóveis de cada aluno');

    // 17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?
    let QtdDVD = [];
    let DadosDVD = [];
    let labelsDvd = [];

    GerarGraficoPie(QtdDVD, opc17QtdeCadaCoisa, respostas, 25, labelsDvd, DadosDVD, 'qtd_DVD', 'Quantidade de DVD players');

    // 17.9. Quantos televisores há em seu domicílio?
    let QtdTV = [];
    let DadosTV = [];
    let labelsQtdTV = [];

    GerarGraficoPie(QtdTV, opc17QtdeCadaCoisa, respostas, 26, labelsQtdTV, DadosTV, 'qtd_TV', 'Quantidade de TVs de cada aluno');

    // 17.10. Quantos smartphones há em seu domicílio?
    let Qtd_Smartphones = [];
    let DadosSmatphones = [];
    let labelsQtdSmartphone = [];

    GerarGraficoPie(Qtd_Smartphones, opc17QtdeCadaCoisa, respostas, 27, labelsQtdSmartphone, DadosSmatphones, 'qtd_Smartphones', 'Quantidade de Smartphones de cada aluno');

    // 18. No seu domicílio tem? questão com mais de uma alternativa, n esta terminada
    let DomicilioTem = [];
    let DadosDomicilioTem = [];
    let labelsDomicilioTem = [];

    GerarGraficoBar(DomicilioTem, opcTemNoDomicilio, respostas, 28, labelsDomicilioTem, DadosDomicilioTem, 'Oque_tem_No_Domicilio', 'horizontalBar', 'Geral', 'Na casa de cada estudante tem');

    // 19.1. Você trabalha?
    let trabalha = [];
    let DadosTrabalho = [];
    let labelsTrabalho = [];

    GerarGraficoPie(trabalha, opcTrabalha, respostas, 29, labelsTrabalho, DadosTrabalho, 'Trabalho', 'Você trabalha?');

    //19.2. Qual o seu vínculo com o emprego?
    let VinculoEmprego = [];
    let DadosVinculo = [];
    let labelsVinculo = [];

    GerarGraficoPie(VinculoEmprego, opcVinculoEmprego, respostas, 30, labelsVinculo, DadosVinculo, 'Vinculo_Emprego', "Vinculo com o emprego");

    // 19.3. Qual a área do seu trabalho?
    let AreaTrabalho = [];
    let DadosAreaTrabalho = [];
    let labelsAreaTrabalho = [];

    GerarGraficoPie(AreaTrabalho, opcAreaTrabalho, respostas, 31, labelsAreaTrabalho, DadosAreaTrabalho, 'Area_trabalho', "Qual a área do seu trabalho?");

    // 19.4. Qual seu horário de trabalho?
    let HorarioTrabalho = [];
    let DadosHorario = [];
    let labelsHorario = [];

    GerarGraficoPie(HorarioTrabalho, opcHorarioTrabalho, respostas, 32, labelsHorario, DadosHorario, 'Horario_Trabalho', "Horários de Trabalho");

    // 19.5. Qual a empresa que você está contratado agora
    let CabecalhoTabela = '';
    let DadosTabela = '';
    let Empresa = [];

    CabecalhoTabela = '<tr class = "thead__row"> <td class = "thead__data"> Empresas: </td> </tr>'
    document.getElementById('thead').innerHTML = CabecalhoTabela;

    for (quest of forms) {

        Empresa[i] = quest["19.5. Qual a empresa que você está contratado agora?"]

        DadosTabela = DadosTabela + `<tr "tbody__row"> <td "tbody__data"> ${Empresa[i]} </td> </tr>`

        i++
    }

    document.getElementById('tbody').innerHTML = DadosTabela;


    // 20. Você tem plano de saúde privado?
    let PlanoSaude = [];
    let DadosPlanoSaude = [];
    let labelsPlanoSaude = [];

    GerarGraficoPie(PlanoSaude, opcPlanoDeSaude, respostas, 34, labelsPlanoSaude, DadosPlanoSaude, 'Plano_Saude', 'Planos de Saúde');

    // 21.1. Qual o grau de escolaridade do seu pai?
    let EscolaridadePai = [];
    let DadosEscolaridadePai = [];
    let LabelsEscolaPai = [];

    GerarGraficoPie(EscolaridadePai, opcEscolaridade, respostas, 35, LabelsEscolaPai, DadosEscolaridadePai, 'Escolaridade_Pai', 'Grau de Escolaridade do Pai dos Alunos');

    // 21.2. Qual o grau de escolaridade da sua mãe?
    let EscolaridadeMae = [];
    let DadosEscolaridadeMae = [];
    let LabelsEscolaMae = [];

    GerarGraficoPie(EscolaridadeMae, opcEscolaridade, respostas, 36, LabelsEscolaMae, DadosEscolaridadeMae, 'Escolaridade_Mae', 'Grau de Escolaridade da Mãe dos Alunos');

    // 22. Na sua vida escolar você estudou
    let EstudouEm = [];
    let DadosEstudouEm = [];
    let labelsEstudouEm = [];

    GerarGraficoPie(EstudouEm, opcEstudou, respostas, 37, labelsEstudouEm, DadosEstudouEm, 'Estudou_Em', "Na sua vida escolar você estudou");

    // 23.1. Com que frequência você utiliza microcomputadores?
    let FrequenciaMicrocomputadores = [];
    let DadosFrequenciaComp = [];
    let labelsFrequenciaComp = [];

    GerarGraficoPie(FrequenciaMicrocomputadores, opcUsaMicroComp, respostas, 38, labelsFrequenciaComp, DadosFrequenciaComp, 'Frequencia_Microcomputadores', 'Com que frequência você utiliza microcomputadores?');


    // 23.2. Onde você utiliza microcomputadores?
    let OndeUtilizaMicro = [];
    let DadosOndeUtilizaMicro = [];
    let labelsUtilizaMicro = [];

    GerarGraficoBar(OndeUtilizaMicro, opcOndeUsaMicroComp, respostas, 39, labelsUtilizaMicro, DadosOndeUtilizaMicro, 'Onde_Microcomputadores', 'horizontalBar', 'Geral', 'Onde você utiliza microcomputadores?');

    // 23.3. Com qual finalidade você utiliza microcomputadores?
    let FinalidadeUtiliMicro = [];
    let DadosFinalidadeUtiliMicro = [];
    let labelsFinalidadeUtiliza = [];

    GerarGraficoBar(FinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, respostas, 40, labelsFinalidadeUtiliza, DadosFinalidadeUtiliMicro, 'Finalidade_Microcomputadores', 'horizontalBar', 'Geral', 'Com qual finalidade você utiliza microcomputadores?');

    // 24. Como você classifica seu conhecimento em informática
    let ConhecimentoInformatica = [];
    let DadosConhecimentoInformatica = [];
    let labelsInformatica = [];

    GerarGraficoPie(ConhecimentoInformatica, opcConhecimentoInformatica, respostas, 41, labelsInformatica, DadosConhecimentoInformatica, 'Conhecimento_Informatica', 'Conhecimento em Informática');

    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Windows]
    let ConhecimentoWindows = [];
    let DadosWindows = [];
    let labelsWindows = [];

    GerarGraficoPie(ConhecimentoWindows, opcConhecimentoInformatica, respostas, 42, labelsWindows, DadosWindows, 'Conhecimento_Windows', 'Conhecimento no Windows');


    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Linux]
    let ConhecimentoLinux = [];
    let DadosLinux = [];
    let labelsLinux = [];

    GerarGraficoPie(ConhecimentoLinux, opcConhecimentoInformatica, respostas, 43, labelsLinux, DadosLinux, 'Conhecimento_Linux', 'Conhecimento no Linux');

    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Editores de textos (Word, Writer, etc.)]
    let ConhecimentoWord = [];
    let DadosWord = [];
    let labelsWord = [];

    GerarGraficoPie(ConhecimentoWord, opcConhecimentoInformatica, respostas, 44, labelsWord, DadosWord, 'Conhecimento_Word', 'Conhecimento em Editores de textos (Word, Writer, etc.)');

    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Planilhas eletrônicas (Excel, Calc, etc.)]
    let ConhecimentoExcel = [];
    let DadosExcel = [];
    let labelsExcel = [];

    GerarGraficoPie(ConhecimentoExcel, opcConhecimentoInformatica, respostas, 45, labelsExcel, DadosExcel, 'Conhecimento_Excel', 'Conhecimento em Planilhas eletrônicas (Excel, Calc, etc.)');


    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Apresentadores (Powerpoint, Impress, Prezzi, etc.)]
    let ConhecimentoPowerPoint = [];
    let DadosPowerPoint = [];
    let labelsPowerPoint = [];

    GerarGraficoPie(ConhecimentoPowerPoint, opcConhecimentoInformatica, respostas, 46, labelsPowerPoint, DadosPowerPoint, 'Conhecimento_PowerPoint', 'Conhecimento em Apresentadores (Powerpoint, Impress, Prezzi, etc.)');


    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Sistemas de Gestão Empresaria]
    let ConhecimentoGestaoEmpresarial = [];
    let DadosGestaoEmpresarial = [];
    let labelsGestaoEmpresarial = [];

    GerarGraficoPie(ConhecimentoGestaoEmpresarial, opcConhecimentoInformatica, respostas, 47, labelsGestaoEmpresarial, DadosGestaoEmpresarial, 'Conhecimento_GestaoEmpresarial', 'Conhecimento em Sistemas de Gestão Empresaria');

    //26. Agora, considere seu conhecimento sobre idiomas [Inglês]
    let conhecimentoIngles = [];
    let DadosIngles = [];
    let labelsInlges = [];

    GerarGraficoPie(conhecimentoIngles, opcConhecimentoLinguas, respostas, 48, labelsInlges, DadosIngles, 'Ingles', 'Conhecimento em inglês');

    // 26. Agora, considere seu conhecimento sobre idiomas [Espanhol]
    let conhecimentoEspanhol = [];
    let DadosEspanhol = [];
    let labelsEspanhol = [];

    GerarGraficoPie(conhecimentoEspanhol, opcConhecimentoLinguas, respostas, 49, labelsEspanhol, DadosEspanhol, 'Espanhol', 'Conhecimento em Espanhol');

    // 26. Agora, considere seu conhecimento sobre idiomas [Outros]
    let conhecimentoIdioma = [];
    let DadosIdioma = [];
    let labelsIdioma = [];

    GerarGraficoPie(conhecimentoIdioma, opcConhecimentoLinguas, respostas, 50, labelsIdioma, DadosIdioma, 'Outros', 'Conhecimento em outros idiomas');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Televisores]
    let Televisores = [];
    let DadosTelevisores = [];
    let labelsTelevisores = [];

    GerarGraficoPie(Televisores, opcBuscaInformação, respostas, 51, labelsTelevisores, DadosTelevisores, 'Televisores', 'Busca por informação no seguinte meio de comunicação(Televisores)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Internet]
    let internet = [];
    let DadosInternet = [];
    let labelsInternet = [];

    GerarGraficoPie(internet, opcBuscaInformação, respostas, 52, labelsInternet, DadosInternet, 'Internet', 'Busca por informação no seguinte meio de comunicação(Internet)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Revistas]
    let revistas = [];
    let DadosRevistas = [];
    let labelsRevistas = [];

    GerarGraficoPie(revistas, opcBuscaInformação, respostas, 53, labelsRevistas, DadosRevistas, 'Revistas', 'Busca por informação no seguinte meio de comunicação(Revistas)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Jornais]
    let jornais = [];
    let DadosJornais = [];
    let labelsJornais = [];

    GerarGraficoPie(jornais, opcBuscaInformação, respostas, 54, labelsJornais, DadosJornais, 'Jornais', 'Busca por informação no seguinte meio de comunicação(Jornais)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Rádio]
    let Radio = [];
    let DadosRadio = [];
    let labelsRadio = [];

    GerarGraficoPie(Radio, opcBuscaInformação, respostas, 55, labelsRadio, DadosRadio, 'Radio', 'Busca por informação no seguinte meio de comunicação(Rádio)');


    // 27. Considere a busca por informação nos seguintes meios de comunicação [Redes socias]
    let RedesSociais = [];
    let DadosRedesSociais = [];
    let labelsRedesSociais = [];

    GerarGraficoPie(RedesSociais, opcBuscaInformação, respostas, 56, labelsRedesSociais, DadosRedesSociais, 'Redes_Sociais', 'Busca por informação no seguinte meio de comunicação(Redes Sociais)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Conversas com Amigos]
    let ConversaComAmigos = [];
    let DadosConversaComAmigos = [];
    let labelsConversaComAmigos = [];

    GerarGraficoPie(ConversaComAmigos, opcBuscaInformação, respostas, 57, labelsConversaComAmigos, DadosConversaComAmigos, 'Conversas_com_Amigos', 'Busca por informação no seguinte meio de comunicação(Conversas com Amigos)');

    // 28. Se você lê jornal, qual a frequência?
    let LeJornal = [];
    let DadosLeJornal = [];
    let labelsLeJornal = [];

    GerarGraficoPie(LeJornal, opcLeJornal, respostas, 58, labelsLeJornal, DadosLeJornal, 'Le_Jornal', ' Frequência que leem jornal');

    // 29. Se você lê jornal, quais os assuntos que mais lê?
    let assuntosQueLeem = [];
    let DadosAssuntosQueLeem = [];
    let labelsAssuntosQueLeem = [];

    GerarGraficoBar(assuntosQueLeem, opcAssuntosJornal, respostas, 59, labelsAssuntosQueLeem, DadosAssuntosQueLeem, 'Assuntos_que_Le', 'horizontalBar', 'Geral', 'Assuntos que mais leem');

    // 30. Não considerando os livros escolares, quantos livros você lê por ano (em média)
    let QtdLivros = [];
    let DadosQtdLivros = [];
    let labelsQtdLivros = [];

    GerarGraficoPie(QtdLivros, opcQtdLivros, respostas, 60, labelsQtdLivros, DadosQtdLivros, 'Qtd_Livros', 'Quantos livros cada aluno lê por ano (em média)');

    // 31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?
    let leLivros = [];
    let DadosLeLivros = [];
    let labelsLeLivros = [];

    GerarGraficoBar(leLivros, opcLeLivros, respostas, 61, labelsLeLivros, DadosLeLivros, 'Le_Livros', 'horizontalBar', 'Geral', "Gêneros de livros preferidos de cada aluno");

    // 32. Você dedica parte do seu tempo para atividades voluntárias?
    let atividadesVolutaria = [];
    let DadosAtiviadeVoluntaria = [];
    let labelsAtividadeVoluntaria = [];

    GerarGraficoPie(atividadesVolutaria, opcAtividadeVolun, respostas, 62, labelsAtividadeVoluntaria, DadosAtiviadeVoluntaria, 'Atividade_Voluntaria', "Dedica parte do tempo para atividades Voluntárias");

    //33. Qual religião você professa?": "Evangélica"
    let religiao = [];
    let DadosReligiao = [];
    let lablesReligiao = [];

    GerarGraficoPie(religiao, opcReligiao, respostas, 63, lablesReligiao, DadosReligiao, 'Religiao', 'Religião');

    // 34. Quais fontes de entretenimento cultural você usa?
    let FontesEntretenimento = [];
    let DadosFontesEntretenimento = [];
    let labelsFontesEntretenimento = [];

    GerarGraficoBar(FontesEntretenimento, opcEntretenimento, respostas, 64, labelsFontesEntretenimento, DadosFontesEntretenimento, "Fontes_Entretenimento", 'horizontalBar', 'Geral', 'Fontes de Entretenimento');

    //35. Estamos quase acabando... Como conheceu a FATEC Franca?
    let ConheceuFatec = [];
    let DadosConheceuFatec = [];
    let labelsConheceuFatec = [];

    GerarGraficoBar(ConheceuFatec, opcConheceuFatec, respostas, 65, labelsConheceuFatec, DadosConheceuFatec, 'Conheceu_Fatec', 'horizontalBar', 'Geral', 'Como conheceu a FATEC Franca?')

    // 36. Porque você escolheu este curso?
    let EscolheuCurso = [];
    let DadosEscolheuCurso = [];
    let labelsEscolheuCurso = [];

    GerarGraficoBar(EscolheuCurso, opcEscolheuCurso, respostas, 66, labelsEscolheuCurso, DadosEscolheuCurso, 'Escolheu_Curso', 'horizontalBar', 'Geral', 'Porque você escolheu este curso?')

    // 37. Qual sua maior expectativa quanto ao curso?
    let ExpectativaCurso = [];
    let DadosExpectativaCurso = [];
    let labelsExpectativaCurso = [];

    GerarGraficoBar(ExpectativaCurso, opcExpectativa, respostas, 67, labelsExpectativaCurso, DadosExpectativaCurso, 'Expectativa_Curso', 'horizontalBar', 'Geral', 'Qual sua maior expectativa quanto ao curso?')

    // 38. Qual sua expectativa após se formar?
    let ExpectativaFormar = [];
    let DadosExpectativaFormar = [];
    let labelsExpectativaFormar = [];

    GerarGraficoBar(ExpectativaFormar, opcFormar, respostas, 68, labelsExpectativaFormar, DadosExpectativaFormar, 'Expectativa_Formar', 'horizontalBar', 'Geral', 'Qual sua expectativa após se formar?')

    //39. Você já estudou nesta escola?
    let estudouNaFatec = [];
    let DadosEstudouFatec = [];
    let labelsEstudouFatec = [];

    GerarGraficoPie(estudouNaFatec, opcEstudoNaEscola, respostas, 69, labelsEstudouFatec, DadosEstudouFatec, 'Estudou_Fatec', 'Você já estudou nesta escola?');

    //40. Você fez algum curso técnico?
    let cursoTecnico = [];
    let DadosCursoTecnico = [];
    let labelsCursoTecnico = [];

    GerarGraficoPie(cursoTecnico, opcCursoTecnico, respostas, 70, labelsCursoTecnico, DadosCursoTecnico, 'Curso_Tecnico', 'Você fez algum curso técnico?');

    // 41. Qual o meio de transporte você usa para vir à escola?
    let transporte = [];
    let DadosTransporte = [];
    let labelsTransporte = [];

    GerarGraficoPie(transporte, opcTransporte, respostas, 71, labelsTransporte, DadosTransporte, 'Transporte', 'Meios de transportes');

}


generateChart()

function Matutino() {
    async function generateChart() {
        const file = await fetch('script/json/forms.json')

        const json = await file.json()
        const forms = json.forms

        let i = 0;
        let questoes

        // Pegar todas as questões
        for (quest of forms) {
            questoes = Object.getOwnPropertyNames(quest)
            i++
        }

        // Pegas as questões so com respostas do noturno
        let Noturno = forms.filter(function (periodo) {
            return periodo[questoes[3]] === 'Noturno'
        })

        // Pegas as questões so com respostas do matutino
        let Matutino = forms.filter(function (periodo) {
            return periodo[questoes[3]] === 'Matutino'
        })

        let respostas = new Array(questoes.length)
        let respMatutino = new Array(Matutino.length)
        let respNoturno = new Array(Noturno.length)

        for (let j = 0; j < questoes.length; j++) {
            respMatutino[j] = new Array(Matutino.length)
            respNoturno[j] = new Array(Noturno.length)
            respostas[j] = new Array(forms.length)
        }

        // Array com todas as questões
        for (let k = 0; k < forms.length; k++) {
            for (let j = 0; j < questoes.length; j++) {
                respostas[j][k] = forms[k][questoes[j]]
            }
        }

        // Array com todas as questões Matutino
        for (let k = 0; k < Matutino.length; k++) {
            for (let j = 0; j < questoes.length; j++) {
                respMatutino[j][k] = Matutino[k][questoes[j]]
            }
        }

        // Array com todas as questões Noturno
        for (let k = 0; k < Noturno.length; k++) {
            for (let j = 0; j < questoes.length; j++) {
                respNoturno[j][k] = Noturno[k][questoes[j]]
            }
        }




        // 1. Qual o seu curso?
        let curso = [];
        let DadosCurso = [];
        let labelsCurso = [];

        GerarGraficoPie(curso, opcCurso, respMatutino, 2, labelsCurso, DadosCurso, 'Matutino_curso', 'Cursos')


        // 2. Qual o período que cursa?
        let DadosPeriodo = [];
        let labelsPeriodo = [];

        if (respMatutino[2].length >= 0) {
            DadosPeriodo.push(respMatutino[2].length)
        }

        for (j = 0; j < 2; j++) {
            if (DadosPeriodo[j] >= 0) {
                labelsPeriodo.push(opcPeriodo[j])
            }
        }

        ChartPie('Matutino_Periodo', labelsPeriodo, DadosPeriodo, "Periodo");

        // 4. Qual o estado do Brasil que você nasceu?
        let estado = [];
        let DadosEstados = [];
        let labelsEstado = [];

        GerarGraficoBar(estado, opcEstado, respMatutino, 5, labelsEstado, DadosEstados, 'Matutino_Estado', 'bar', 'Matutino', 'Estados');

        // 5 - Cidades
        let cidade = [];
        let DadosCidade = [];
        let labelsCidade = [];

        GerarGraficoBar(cidade, opcCidade, respMatutino, 6, labelsCidade, DadosCidade, 'Matutino_Cidade', 'bar', 'Matutino', 'Cidades');

        // 6 - Genero
        let genero = [];
        let DadosGenero = [];
        let labelsGenero = [];

        GerarGraficoPie(genero, opcGenero, respMatutino, 7, labelsGenero, DadosGenero, 'Matutino_Genero', 'Gênero');

        // 7 - Data Nascimento
        /*let k = 3
        let data = ""
        console.log(respMatutino[8][k])
        for (let j = 0; j < 2; j++) {
            //data += respMatutino[8][k][respMatutino[8][k].length - 2] + respMatutino[8][k][respMatutino[8][k].length - 1]
            data += respMatutino[8][k][respMatutino[8][k].length - 2 + j]
    
        }
        if (data[0] === "0") {
            console.log("20" + data)
        } else {
            console.log(Number("19" + data))
        }
    
        let DataNascimento = [];
        let DadosDataNasciemnto = [];
        let labelsDataNascimento = [];
    
        GerarGraficoBar(DataNascimento, opcDataNascimento, respMatutino, 8, labelsDataNascimento, DadosDataNasciemnto, 'DataNascimento', 'Datas de Nascimento(Em Anos)')*/

        // 8 - Estado Civil
        let estadoCivil = [];
        let DadosEstadoCivil = [];
        let labelsEstadoCivil = [];

        GerarGraficoPie(estadoCivil, opcEstadoCivil, respMatutino, 9, labelsEstadoCivil, DadosEstadoCivil, 'Matutino_Estado_civil', 'Estado Civil');

        // 9 - Portadores de Necessidades especiais
        let portadores = [];
        let DadosPortadores = [];
        let labelsPortadores = [];

        GerarGraficoPie(portadores, opcPortador, respMatutino, 10, labelsPortadores, DadosPortadores, 'Matutino_Portador_de_Necessidade', 'Portadores de Necessidades Especiais');

        // 10 - Convive com Portadores de Necessidades especiais
        let ConvivePort = [];
        let DadosConvivePort = [];
        let labelsConvivePort = [];

        GerarGraficoPie(ConvivePort, opcConvivePort, respMatutino, 11, labelsConvivePort, DadosConvivePort, 'Matutino_Convive_com_portador', 'Convive com Portadores de Necessidades Especiais');

        // 11 - Quantidade de filhos
        let QtdFilhos = [];
        let DadosQtdFilhos = [];
        let labelsQtdFilhos = [];

        GerarGraficoPie(QtdFilhos, opcQtdFilhos, respMatutino, 12, labelsQtdFilhos, DadosQtdFilhos, 'Matutino_Qtd_de_filhos', "Quantidade de filhos de cada estudante");

        // 12. Com quem você mora atualmente?
        let moraCom = [];
        let DadosMoraCom = [];
        let labelsMoraCom = [];

        GerarGraficoPie(moraCom, opcMoraCom, respMatutino, 13, labelsMoraCom, DadosMoraCom, 'Matutino_Moram_com', "Com quem cada estudante mora");

        //13. Quantas pessoas, incluindo você, moram no seu domicílio?
        let QtdMoradores = [];
        let DadosQtdMoradores = [];
        let labelsQtdMoradores = [];

        GerarGraficoPie(QtdMoradores, opcQtdMoradores, respMatutino, 14, labelsQtdMoradores, DadosQtdMoradores, 'Matutino_QTD_de_pessoas_moram_junto', "Quantidade de pessoas que moram com cada aluno");

        // 14. Qual a situação do domicílio onde mora?
        let SituacaoDomicilio = [];
        let DadosSituacaoDomi = [];
        let labelsSituacaoDomi = [];

        GerarGraficoPie(SituacaoDomicilio, opcSituacaoDomi, respMatutino, 15, labelsSituacaoDomi, DadosSituacaoDomi, 'Matutino_Situacao_domicilio', "Situação do Domicílio")

        // 15. Tempo de moradia neste domicílio (Em anos)
        let TempoMoradia = [];
        let DadosTempoMoradia = [];
        let labelsTempoMoradia = [];

        GerarGraficoBar(TempoMoradia, opcTempoMoradia, respMatutino, 16, labelsTempoMoradia, DadosTempoMoradia, 'Matutino_Tempo_moradia', 'bar', 'Matutino', 'Tempo de moradia no domicílio(Em anos)');

        // 16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)
        let RendaMensal = [];
        let DadosRendaMensal = [];
        let labelsRendaMensal = [];

        GerarGraficoPie(RendaMensal, opcRendaMensal, respMatutino, 17, labelsRendaMensal, DadosRendaMensal, 'Matutino_Salario_min', "Faixa de renda mensal da família do estudante (em Salários Mínimos)");

        //17.1. Quantas geladeiras há em seu domicílio
        let QtdGeladeira = [];
        let DadosQtdGeladeira = [];
        let labelsQtdGeladeira = [];

        GerarGraficoPie(QtdGeladeira, opc17QtdeCadaCoisa, respMatutino, 18, labelsQtdGeladeira, DadosQtdGeladeira, 'Matutino_Qtd_geladeira', "Quantidade de Geladeiras de cada aluno");

        // 17.2. Quantos celulares comuns há em seu domicílio?
        let QtdCelular = [];
        let DadosQtdCelular = [];
        let labelsQtdCelular = [];

        GerarGraficoPie(QtdCelular, opc17QtdeCadaCoisa, respMatutino, 19, labelsQtdCelular, DadosQtdCelular, 'Matutino_Qtd_celular_comum', "Quantidade de celulares comuns de cada aluno");

        // 17.3. Quantos micro-ondas há em seu domicílio?
        let QtdMicroOndas = [];
        let DadosQtdMicroOndas = [];
        let labelsQtdMicroOndas = [];

        GerarGraficoPie(QtdMicroOndas, opc17QtdeCadaCoisa, respMatutino, 20, labelsQtdMicroOndas, DadosQtdMicroOndas, 'Matutino_Qtd_micro_ondas', 'Quantidade de micro-ondas de cada aluno');

        // 17.4. Quantos notebooks há em seu domicílio?
        let QtdNotebooks = [];
        let DadosQtdNotebooks = [];
        let labelsQtdNotebook = [];

        GerarGraficoPie(QtdNotebooks, opc17QtdeCadaCoisa, respMatutino, 21, labelsQtdNotebook, DadosQtdNotebooks, 'Matutino_Qtd_notebooks', 'Quantidade de Notebooks de cada aluno');

        // 17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?
        let Qtd_Maquina_de_Lavar = [];
        let DadosMaquinaLavar = [];
        let labelsMaquinaLavar = [];

        GerarGraficoPie(Qtd_Maquina_de_Lavar, opc17QtdeCadaCoisa, respMatutino, 22, labelsMaquinaLavar, DadosMaquinaLavar, 'Matutino_Qtd_Maquina_de_Lavar', 'Quantidade de Máquinas de lavar roupa de cada aluno');

        // 17.6. Quantas motocicletas há em seu domicílio?
        let Qtd_motoclicletas = [];
        let DadosMotocicletas = [];
        let labelsMotocicletas = [];

        GerarGraficoPie(Qtd_motoclicletas, opc17QtdeCadaCoisa, respMatutino, 23, labelsMotocicletas, DadosMotocicletas, 'Matutino_Qtd_motocicletas', 'Quantidade de Motocicletas de cada aluno');

        // 17.7. Quantos automóveis há em seu domicílio?
        let QtdAutomoveis = [];
        let DadosAutomoveis = [];
        let labelsAutomoveis = [];

        GerarGraficoPie(QtdAutomoveis, opc17QtdeCadaCoisa, respMatutino, 24, labelsAutomoveis, DadosAutomoveis, 'Matutino_Qtd_Automoveis', 'Quantidade de Automóveis de cada aluno');

        // 17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?
        let QtdDVD = [];
        let DadosDVD = [];
        let labelsDvd = [];

        GerarGraficoPie(QtdDVD, opc17QtdeCadaCoisa, respMatutino, 25, labelsDvd, DadosDVD, 'Matutino_Qtd_DVD', 'Quantidade de DVD players');

        // 17.9. Quantos televisores há em seu domicílio?
        let QtdTV = [];
        let DadosTV = [];
        let labelsQtdTV = [];

        GerarGraficoPie(QtdTV, opc17QtdeCadaCoisa, respMatutino, 26, labelsQtdTV, DadosTV, 'Matutino_Qtd_TV', 'Quantidade de TVs de cada aluno');

        // 17.10. Quantos smartphones há em seu domicílio?
        let Qtd_Smartphones = [];
        let DadosSmatphones = [];
        let labelsQtdSmartphone = [];

        GerarGraficoPie(Qtd_Smartphones, opc17QtdeCadaCoisa, respMatutino, 27, labelsQtdSmartphone, DadosSmatphones, 'Matutino_Qtd_Smartphones', 'Quantidade de Smartphones de cada aluno');

        // 18. No seu domicílio tem? questão com mais de uma alternativa, n esta terminada
        let DomicilioTem = [];
        let DadosDomicilioTem = [];
        let labelsDomicilioTem = [];

        GerarGraficoBar(DomicilioTem, opcTemNoDomicilio, respMatutino, 28, labelsDomicilioTem, DadosDomicilioTem, 'Matutino_Oque_tem_No_Domicilio', 'horizontalBar', 'Matutino', 'Na casa de cada estudante tem');

        // 19.1. Você trabalha?
        let trabalha = [];
        let DadosTrabalho = [];
        let labelsTrabalho = [];

        GerarGraficoPie(trabalha, opcTrabalha, respMatutino, 29, labelsTrabalho, DadosTrabalho, 'Matutino_Trabalho', 'Você trabalha?');

        //19.2. Qual o seu vínculo com o emprego?
        let VinculoEmprego = [];
        let DadosVinculo = [];
        let labelsVinculo = [];

        GerarGraficoPie(VinculoEmprego, opcVinculoEmprego, respMatutino, 30, labelsVinculo, DadosVinculo, 'Matutino_Vinculo_Emprego', "Vinculo com o emprego");

        // 19.3. Qual a área do seu trabalho?
        let AreaTrabalho = [];
        let DadosAreaTrabalho = [];
        let labelsAreaTrabalho = [];

        GerarGraficoPie(AreaTrabalho, opcAreaTrabalho, respMatutino, 31, labelsAreaTrabalho, DadosAreaTrabalho, 'Matutino_Area_trabalho', "Qual a área do seu trabalho?");

        // 19.4. Qual seu horário de trabalho?
        let HorarioTrabalho = [];
        let DadosHorario = [];
        let labelsHorario = [];

        GerarGraficoPie(HorarioTrabalho, opcHorarioTrabalho, respMatutino, 32, labelsHorario, DadosHorario, 'Matutino_Horario_Trabalho', "Horários de Trabalho");

        // 19.5. Qual a empresa que você está contratado agora
        let CabecalhoTabela = '';
        let DadosTabela = '';
        let Empresa = [];

        CabecalhoTabela = '<tr class = "thead__row"> <td class = "thead__data"> Empresas: </td> </tr>'
        document.getElementById('thead').innerHTML = CabecalhoTabela;

        for (quest of forms) {

            Empresa[i] = quest["19.5. Qual a empresa que você está contratado agora?"]

            DadosTabela = DadosTabela + `<tr "tbody__row"> <td "tbody__data"> ${Empresa[i]} </td> </tr>`

            i++
        }

        document.getElementById('tbody').innerHTML = DadosTabela;


        // 20. Você tem plano de saúde privado?
        let PlanoSaude = [];
        let DadosPlanoSaude = [];
        let labelsPlanoSaude = [];

        GerarGraficoPie(PlanoSaude, opcPlanoDeSaude, respMatutino, 34, labelsPlanoSaude, DadosPlanoSaude, 'Matutino_Plano_Saude', 'Planos de Saúde');

        // 21.1. Qual o grau de escolaridade do seu pai?
        let EscolaridadePai = [];
        let DadosEscolaridadePai = [];
        let LabelsEscolaPai = [];

        GerarGraficoPie(EscolaridadePai, opcEscolaridade, respMatutino, 35, LabelsEscolaPai, DadosEscolaridadePai, 'Matutino_Escolaridade_Pai', 'Grau de Escolaridade do Pai dos Alunos');

        // 21.2. Qual o grau de escolaridade da sua mãe?
        let EscolaridadeMae = [];
        let DadosEscolaridadeMae = [];
        let LabelsEscolaMae = [];

        GerarGraficoPie(EscolaridadeMae, opcEscolaridade, respMatutino, 36, LabelsEscolaMae, DadosEscolaridadeMae, 'Matutino_Escolaridade_Mae', 'Grau de Escolaridade da Mãe dos Alunos');

        // 22. Na sua vida escolar você estudou
        let EstudouEm = [];
        let DadosEstudouEm = [];
        let labelsEstudouEm = [];

        GerarGraficoPie(EstudouEm, opcEstudou, respMatutino, 37, labelsEstudouEm, DadosEstudouEm, 'Matutino_Estudou_Em', "Na sua vida escolar você estudou");

        // 23.1. Com que frequência você utiliza microcomputadores?
        let FrequenciaMicrocomputadores = [];
        let DadosFrequenciaComp = [];
        let labelsFrequenciaComp = [];

        GerarGraficoPie(FrequenciaMicrocomputadores, opcUsaMicroComp, respMatutino, 38, labelsFrequenciaComp, DadosFrequenciaComp, 'Matutino_Frequencia_Microcomputadores', 'Com que frequência você utiliza microcomputadores?');


        // 23.2. Onde você utiliza microcomputadores?
        let OndeUtilizaMicro = [];
        let DadosOndeUtilizaMicro = [];
        let labelsUtilizaMicro = [];

        GerarGraficoBar(OndeUtilizaMicro, opcOndeUsaMicroComp, respMatutino, 39, labelsUtilizaMicro, DadosOndeUtilizaMicro, 'Matutino_Onde_Microcomputadores', 'horizontalBar', 'Matutino', 'Onde você utiliza microcomputadores?');

        // 23.3. Com qual finalidade você utiliza microcomputadores?
        let FinalidadeUtiliMicro = [];
        let DadosFinalidadeUtiliMicro = [];
        let labelsFinalidadeUtiliza = [];

        GerarGraficoBar(FinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, respMatutino, 40, labelsFinalidadeUtiliza, DadosFinalidadeUtiliMicro, 'Matutino_Finalidade_Microcomputadores', 'horizontalBar', 'Matutino', 'Com qual finalidade você utiliza microcomputadores?');

        // 24. Como você classifica seu conhecimento em informática
        let ConhecimentoInformatica = [];
        let DadosConhecimentoInformatica = [];
        let labelsInformatica = [];

        GerarGraficoPie(ConhecimentoInformatica, opcConhecimentoInformatica, respMatutino, 41, labelsInformatica, DadosConhecimentoInformatica, 'Matutino_Conhecimento_Informatica', 'Conhecimento em Informática');

        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Windows]
        let ConhecimentoWindows = [];
        let DadosWindows = [];
        let labelsWindows = [];

        GerarGraficoPie(ConhecimentoWindows, opcConhecimentoInformatica, respMatutino, 42, labelsWindows, DadosWindows, 'Matutino_Conhecimento_Windows', 'Conhecimento no Windows');


        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Linux]
        let ConhecimentoLinux = [];
        let DadosLinux = [];
        let labelsLinux = [];

        GerarGraficoPie(ConhecimentoLinux, opcConhecimentoInformatica, respMatutino, 43, labelsLinux, DadosLinux, 'Matutino_Conhecimento_Linux', 'Conhecimento no Linux');

        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Editores de textos (Word, Writer, etc.)]
        let ConhecimentoWord = [];
        let DadosWord = [];
        let labelsWord = [];

        GerarGraficoPie(ConhecimentoWord, opcConhecimentoInformatica, respMatutino, 44, labelsWord, DadosWord, 'Matutino_Conhecimento_Word', 'Conhecimento em Editores de textos (Word, Writer, etc.)');

        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Planilhas eletrônicas (Excel, Calc, etc.)]
        let ConhecimentoExcel = [];
        let DadosExcel = [];
        let labelsExcel = [];

        GerarGraficoPie(ConhecimentoExcel, opcConhecimentoInformatica, respMatutino, 45, labelsExcel, DadosExcel, 'Matutino_Conhecimento_Excel', 'Conhecimento em Planilhas eletrônicas (Excel, Calc, etc.)');


        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Apresentadores (Powerpoint, Impress, Prezzi, etc.)]
        let ConhecimentoPowerPoint = [];
        let DadosPowerPoint = [];
        let labelsPowerPoint = [];

        GerarGraficoPie(ConhecimentoPowerPoint, opcConhecimentoInformatica, respMatutino, 46, labelsPowerPoint, DadosPowerPoint, 'Matutino_Conhecimento_PowerPoint', 'Conhecimento em Apresentadores (Powerpoint, Impress, Prezzi, etc.)');


        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Sistemas de Gestão Empresaria]
        let ConhecimentoGestaoEmpresarial = [];
        let DadosGestaoEmpresarial = [];
        let labelsGestaoEmpresarial = [];

        GerarGraficoPie(ConhecimentoGestaoEmpresarial, opcConhecimentoInformatica, respMatutino, 47, labelsGestaoEmpresarial, DadosGestaoEmpresarial, 'Matutino_Conhecimento_GestaoEmpresarial', 'Conhecimento em Sistemas de Gestão Empresaria');

        //26. Agora, considere seu conhecimento sobre idiomas [Inglês]
        let conhecimentoIngles = [];
        let DadosIngles = [];
        let labelsInlges = [];

        GerarGraficoPie(conhecimentoIngles, opcConhecimentoLinguas, respMatutino, 48, labelsInlges, DadosIngles, 'Matutino_Ingles', 'Conhecimento em inglês');

        // 26. Agora, considere seu conhecimento sobre idiomas [Espanhol]
        let conhecimentoEspanhol = [];
        let DadosEspanhol = [];
        let labelsEspanhol = [];

        GerarGraficoPie(conhecimentoEspanhol, opcConhecimentoLinguas, respMatutino, 49, labelsEspanhol, DadosEspanhol, 'Matutino_Espanhol', 'Conhecimento em Espanhol');

        // 26. Agora, considere seu conhecimento sobre idiomas [Outros]
        let conhecimentoIdioma = [];
        let DadosIdioma = [];
        let labelsIdioma = [];

        GerarGraficoPie(conhecimentoIdioma, opcConhecimentoLinguas, respMatutino, 50, labelsIdioma, DadosIdioma, 'Matutino_Outros', 'Conhecimento em outros idiomas');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Televisores]
        let Televisores = [];
        let DadosTelevisores = [];
        let labelsTelevisores = [];

        GerarGraficoPie(Televisores, opcBuscaInformação, respMatutino, 51, labelsTelevisores, DadosTelevisores, 'Matutino_Televisores', 'Busca por informação no seguinte meio de comunicação(Televisores)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Internet]
        let internet = [];
        let DadosInternet = [];
        let labelsInternet = [];

        GerarGraficoPie(internet, opcBuscaInformação, respMatutino, 52, labelsInternet, DadosInternet, 'Matutino_Internet', 'Busca por informação no seguinte meio de comunicação(Internet)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Revistas]
        let revistas = [];
        let DadosRevistas = [];
        let labelsRevistas = [];

        GerarGraficoPie(revistas, opcBuscaInformação, respMatutino, 53, labelsRevistas, DadosRevistas, 'Matutino_Revistas', 'Busca por informação no seguinte meio de comunicação(Revistas)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Jornais]
        let jornais = [];
        let DadosJornais = [];
        let labelsJornais = [];

        GerarGraficoPie(jornais, opcBuscaInformação, respMatutino, 54, labelsJornais, DadosJornais, 'Matutino_Jornais', 'Busca por informação no seguinte meio de comunicação(Jornais)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Rádio]
        let Radio = [];
        let DadosRadio = [];
        let labelsRadio = [];

        GerarGraficoPie(Radio, opcBuscaInformação, respMatutino, 55, labelsRadio, DadosRadio, 'Matutino_Radio', 'Busca por informação no seguinte meio de comunicação(Rádio)');


        // 27. Considere a busca por informação nos seguintes meios de comunicação [Redes socias]
        let RedesSociais = [];
        let DadosRedesSociais = [];
        let labelsRedesSociais = [];

        GerarGraficoPie(RedesSociais, opcBuscaInformação, respMatutino, 56, labelsRedesSociais, DadosRedesSociais, 'Matutino_Redes_Sociais', 'Busca por informação no seguinte meio de comunicação(Redes Sociais)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Conversas com Amigos]
        let ConversaComAmigos = [];
        let DadosConversaComAmigos = [];
        let labelsConversaComAmigos = [];

        GerarGraficoPie(ConversaComAmigos, opcBuscaInformação, respMatutino, 57, labelsConversaComAmigos, DadosConversaComAmigos, 'Matutino_Conversas_com_Amigos', 'Busca por informação no seguinte meio de comunicação(Conversas com Amigos)');

        // 28. Se você lê jornal, qual a frequência?
        let LeJornal = [];
        let DadosLeJornal = [];
        let labelsLeJornal = [];

        GerarGraficoPie(LeJornal, opcLeJornal, respMatutino, 58, labelsLeJornal, DadosLeJornal, 'Matutino_Le_Jornal', ' Frequência que leem jornal');

        // 29. Se você lê jornal, quais os assuntos que mais lê?
        let assuntosQueLeem = [];
        let DadosAssuntosQueLeem = [];
        let labelsAssuntosQueLeem = [];

        GerarGraficoBar(assuntosQueLeem, opcAssuntosJornal, respMatutino, 59, labelsAssuntosQueLeem, DadosAssuntosQueLeem, 'Matutino_Assuntos_que_Le', 'horizontalBar', 'Matutino', 'Assuntos que mais leem');

        // 30. Não considerando os livros escolares, quantos livros você lê por ano (em média)
        let QtdLivros = [];
        let DadosQtdLivros = [];
        let labelsQtdLivros = [];

        GerarGraficoPie(QtdLivros, opcQtdLivros, respMatutino, 60, labelsQtdLivros, DadosQtdLivros, 'Matutino_Qtd_Livros', 'Quantos livros cada aluno lê por ano (em média)');

        // 31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?
        let leLivros = [];
        let DadosLeLivros = [];
        let labelsLeLivros = [];

        GerarGraficoBar(leLivros, opcLeLivros, respMatutino, 61, labelsLeLivros, DadosLeLivros, 'Matutino_Le_Livros', 'horizontalBar', 'Matutino', "Gêneros de livros preferidos de cada aluno");

        // 32. Você dedica parte do seu tempo para atividades voluntárias?
        let atividadesVolutaria = [];
        let DadosAtiviadeVoluntaria = [];
        let labelsAtividadeVoluntaria = [];

        GerarGraficoPie(atividadesVolutaria, opcAtividadeVolun, respMatutino, 62, labelsAtividadeVoluntaria, DadosAtiviadeVoluntaria, 'Matutino_Atividade_Voluntaria', "Dedica parte do tempo para atividades Voluntárias");

        //33. Qual religião você professa?": "Evangélica"
        let religiao = [];
        let DadosReligiao = [];
        let lablesReligiao = [];

        GerarGraficoPie(religiao, opcReligiao, respMatutino, 63, lablesReligiao, DadosReligiao, 'Matutino_Religiao', 'Religião');

        // 34. Quais fontes de entretenimento cultural você usa?
        let FontesEntretenimento = [];
        let DadosFontesEntretenimento = [];
        let labelsFontesEntretenimento = [];

        GerarGraficoBar(FontesEntretenimento, opcEntretenimento, respMatutino, 64, labelsFontesEntretenimento, DadosFontesEntretenimento, "Matutino_Fontes_Entretenimento", 'horizontalBar', 'Matutino', 'Fontes de Entretenimento');

        //35. Estamos quase acabando... Como conheceu a FATEC Franca?
        let ConheceuFatec = [];
        let DadosConheceuFatec = [];
        let labelsConheceuFatec = [];

        GerarGraficoBar(ConheceuFatec, opcConheceuFatec, respMatutino, 65, labelsConheceuFatec, DadosConheceuFatec, 'Matutino_Conheceu_Fatec', 'horizontalBar', 'Matutino', 'Como conheceu a FATEC Franca?')

        // 36. Porque você escolheu este curso?
        let EscolheuCurso = [];
        let DadosEscolheuCurso = [];
        let labelsEscolheuCurso = [];

        GerarGraficoBar(EscolheuCurso, opcEscolheuCurso, respMatutino, 66, labelsEscolheuCurso, DadosEscolheuCurso, 'Matutino_Escolheu_Curso', 'horizontalBar', 'Matutino', 'Porque você escolheu este curso?')

        // 37. Qual sua maior expectativa quanto ao curso?
        let ExpectativaCurso = [];
        let DadosExpectativaCurso = [];
        let labelsExpectativaCurso = [];

        GerarGraficoBar(ExpectativaCurso, opcExpectativa, respMatutino, 67, labelsExpectativaCurso, DadosExpectativaCurso, 'Matutino_Expectativa_Curso', 'horizontalBar', 'Matutino', 'Qual sua maior expectativa quanto ao curso?')

        // 38. Qual sua expectativa após se formar?
        let ExpectativaFormar = [];
        let DadosExpectativaFormar = [];
        let labelsExpectativaFormar = [];

        GerarGraficoBar(ExpectativaFormar, opcFormar, respMatutino, 68, labelsExpectativaFormar, DadosExpectativaFormar, 'Matutino_Expectativa_Formar', 'horizontalBar', 'Matutino', 'Qual sua expectativa após se formar?')

        //39. Você já estudou nesta escola?
        let estudouNaFatec = [];
        let DadosEstudouFatec = [];
        let labelsEstudouFatec = [];

        GerarGraficoPie(estudouNaFatec, opcEstudoNaEscola, respMatutino, 69, labelsEstudouFatec, DadosEstudouFatec, 'Matutino_Estudou_Fatec', 'Você já estudou nesta escola?');

        //40. Você fez algum curso técnico?
        let cursoTecnico = [];
        let DadosCursoTecnico = [];
        let labelsCursoTecnico = [];

        GerarGraficoPie(cursoTecnico, opcCursoTecnico, respMatutino, 70, labelsCursoTecnico, DadosCursoTecnico, 'Matutino_Curso_Tecnico', 'Você fez algum curso técnico?');

        // 41. Qual o meio de transporte você usa para vir à escola?
        let transporte = [];
        let DadosTransporte = [];
        let labelsTransporte = [];

        GerarGraficoPie(transporte, opcTransporte, respMatutino, 71, labelsTransporte, DadosTransporte, 'Matutino_Transporte', 'Meios de transportes');

    }

    // Esconder respostas Geral
    document.getElementById("curso").style.display = "none";
    document.getElementById("periodo").style.display = "none";
    document.getElementById("estado").style.display = "none";
    document.getElementById("cidade").style.display = "none";
    document.getElementById("moram_com").style.display = "none";
    document.getElementById("QTD_de_pessoas_moram_junto").style.display = "none";
    document.getElementById("situacao_domicilio").style.display = "none";
    document.getElementById("tempo_moradia").style.display = "none";
    document.getElementById("genero").style.display = "none";
    document.getElementById("estado_civil").style.display = "none";
    document.getElementById("Portador_de_Necessidade").style.display = "none";
    document.getElementById("convive_com_portador").style.display = "none";
    document.getElementById("qtd_de_filhos").style.display = "none";
    document.getElementById("salario_min").style.display = "none";
    document.getElementById("DataNascimento").style.display = "none";
    document.getElementById("Oque_tem_No_Domicilio").style.display = "none";
    document.getElementById("qtd_geladeira").style.display = "none";
    document.getElementById("qtd_celular_comum").style.display = "none";
    document.getElementById("qtd_micro_ondas").style.display = "none";
    document.getElementById("qtd_notebooks").style.display = "none";
    document.getElementById("qtd_Maquina_de_Lavar").style.display = "none";
    document.getElementById("qtd_motocicletas").style.display = "none";
    document.getElementById("qtd_Automoveis").style.display = "none";
    document.getElementById("qtd_DVD").style.display = "none";
    document.getElementById("qtd_TV").style.display = "none";
    document.getElementById("qtd_Smartphones").style.display = "none";
    document.getElementById("Plano_Saude").style.display = "none";
    document.getElementById("Religiao").style.display = "none";
    document.getElementById("Trabalho").style.display = "none";
    document.getElementById("Vinculo_Emprego").style.display = "none";
    document.getElementById("Area_trabalho").style.display = "none";
    document.getElementById("Horario_Trabalho").style.display = "none";
    document.getElementById("Escolaridade_Pai").style.display = "none";
    document.getElementById("Escolaridade_Mae").style.display = "none";
    document.getElementById("Estudou_Em").style.display = "none";
    document.getElementById("Ingles").style.display = "none";
    document.getElementById("Espanhol").style.display = "none";
    document.getElementById("Outros").style.display = "none";
    document.getElementById("Estudou_Fatec").style.display = "none";
    document.getElementById("Curso_Tecnico").style.display = "none";
    document.getElementById("Frequencia_Microcomputadores").style.display = "none";
    document.getElementById("Onde_Microcomputadores").style.display = "none";
    document.getElementById("Finalidade_Microcomputadores").style.display = "none";
    document.getElementById("Conhecimento_Informatica").style.display = "none";
    document.getElementById("Conhecimento_Windows").style.display = "none";
    document.getElementById("Conhecimento_Linux").style.display = "none";
    document.getElementById("Conhecimento_Word").style.display = "none";
    document.getElementById("Conhecimento_Excel").style.display = "none";
    document.getElementById("Conhecimento_PowerPoint").style.display = "none";
    document.getElementById("Conhecimento_GestaoEmpresarial").style.display = "none";
    document.getElementById("Televisores").style.display = "none";
    document.getElementById("Internet").style.display = "none";
    document.getElementById("Revistas").style.display = "none";
    document.getElementById("Jornais").style.display = "none";
    document.getElementById("Radio").style.display = "none";
    document.getElementById("Redes_Sociais").style.display = "none";
    document.getElementById("Conversas_com_Amigos").style.display = "none";
    document.getElementById("Le_Jornal").style.display = "none";
    document.getElementById("Qtd_Livros").style.display = "none";
    document.getElementById("Assuntos_que_Le").style.display = "none";
    document.getElementById("Le_Livros").style.display = "none";
    document.getElementById("Fontes_Entretenimento").style.display = "none";
    document.getElementById("Atividade_Voluntaria").style.display = "none";
    document.getElementById("Transporte").style.display = "none";
    document.getElementById("Conheceu_Fatec").style.display = "none";
    document.getElementById("Escolheu_Curso").style.display = "none";
    document.getElementById("Expectativa_Curso").style.display = "none";
    document.getElementById("Expectativa_Formar").style.display = "none";

    // Mostrar respostas do do Matutino
    document.getElementById("Matutino_curso").style.display = "block";
    document.getElementById("Matutino_Periodo").style.display = "block";
    document.getElementById("Matutino_Estado").style.display = "block";
    document.getElementById("Matutino_Cidade").style.display = "block";
    document.getElementById("Matutino_Moram_com").style.display = "block";
    document.getElementById("Matutino_QTD_de_pessoas_moram_junto").style.display = "block";
    document.getElementById("Matutino_Situacao_domicilio").style.display = "block";
    document.getElementById("Matutino_Tempo_moradia").style.display = "block";
    document.getElementById("Matutino_Genero").style.display = "block";
    document.getElementById("Matutino_Estado_civil").style.display = "block";
    document.getElementById("Matutino_Portador_de_Necessidade").style.display = "block";
    document.getElementById("Matutino_Convive_com_portador").style.display = "block";
    document.getElementById("Matutino_Qtd_de_filhos").style.display = "block";
    document.getElementById("Matutino_Salario_min").style.display = "block";
    document.getElementById("Matutino_DataNascimento").style.display = "block";
    document.getElementById("Matutino_Oque_tem_No_Domicilio").style.display = "block";
    document.getElementById("Matutino_Qtd_geladeira").style.display = "block";
    document.getElementById("Matutino_Qtd_celular_comum").style.display = "block";
    document.getElementById("Matutino_Qtd_micro_ondas").style.display = "block";
    document.getElementById("Matutino_Qtd_notebooks").style.display = "block";
    document.getElementById("Matutino_Qtd_Maquina_de_Lavar").style.display = "block";
    document.getElementById("Matutino_Qtd_motocicletas").style.display = "block";
    document.getElementById("Matutino_Qtd_Automoveis").style.display = "block";
    document.getElementById("Matutino_Qtd_DVD").style.display = "block";
    document.getElementById("Matutino_Qtd_TV").style.display = "block";
    document.getElementById("Matutino_Qtd_Smartphones").style.display = "block";
    document.getElementById("Matutino_Plano_Saude").style.display = "block";
    document.getElementById("Matutino_Religiao").style.display = "block";
    document.getElementById("Matutino_Trabalho").style.display = "block";
    document.getElementById("Matutino_Vinculo_Emprego").style.display = "block";
    document.getElementById("Matutino_Area_trabalho").style.display = "block";
    document.getElementById("Matutino_Horario_Trabalho").style.display = "block";
    document.getElementById("Matutino_Escolaridade_Pai").style.display = "block";
    document.getElementById("Matutino_Escolaridade_Mae").style.display = "block";
    document.getElementById("Matutino_Estudou_Em").style.display = "block";
    document.getElementById("Matutino_Ingles").style.display = "block";
    document.getElementById("Matutino_Espanhol").style.display = "block";
    document.getElementById("Matutino_Outros").style.display = "block";
    document.getElementById("Matutino_Estudou_Fatec").style.display = "block";
    document.getElementById("Matutino_Curso_Tecnico").style.display = "block";
    document.getElementById("Matutino_Frequencia_Microcomputadores").style.display = "block";
    document.getElementById("Matutino_Onde_Microcomputadores").style.display = "block";
    document.getElementById("Matutino_Finalidade_Microcomputadores").style.display = "block";
    document.getElementById("Matutino_Conhecimento_Informatica").style.display = "block";
    document.getElementById("Matutino_Conhecimento_Windows").style.display = "block";
    document.getElementById("Matutino_Conhecimento_Linux").style.display = "block";
    document.getElementById("Matutino_Conhecimento_Word").style.display = "block";
    document.getElementById("Matutino_Conhecimento_Excel").style.display = "block";
    document.getElementById("Matutino_Conhecimento_PowerPoint").style.display = "block";
    document.getElementById("Matutino_Conhecimento_GestaoEmpresarial").style.display = "block";
    document.getElementById("Matutino_Televisores").style.display = "block";
    document.getElementById("Matutino_Internet").style.display = "block";
    document.getElementById("Matutino_Revistas").style.display = "block";
    document.getElementById("Matutino_Jornais").style.display = "block";
    document.getElementById("Matutino_Radio").style.display = "block";
    document.getElementById("Matutino_Redes_Sociais").style.display = "block";
    document.getElementById("Matutino_Conversas_com_Amigos").style.display = "block";
    document.getElementById("Matutino_Le_Jornal").style.display = "block";
    document.getElementById("Matutino_Qtd_Livros").style.display = "block";
    document.getElementById("Matutino_Assuntos_que_Le").style.display = "block";
    document.getElementById("Matutino_Le_Livros").style.display = "block";
    document.getElementById("Matutino_Fontes_Entretenimento").style.display = "block";
    document.getElementById("Matutino_Atividade_Voluntaria").style.display = "block";
    document.getElementById("Matutino_Transporte").style.display = "block";
    document.getElementById("Matutino_Conheceu_Fatec").style.display = "block";
    document.getElementById("Matutino_Escolheu_Curso").style.display = "block";
    document.getElementById("Matutino_Expectativa_Curso").style.display = "block";
    document.getElementById("Matutino_Expectativa_Formar").style.display = "block";

    // Esconder respostas do Noturno
    document.getElementById("Noturno_curso").style.display = "none";
    document.getElementById("Noturno_Periodo").style.display = "none";
    document.getElementById("Noturno_Estado").style.display = "none";
    document.getElementById("Noturno_Cidade").style.display = "none";
    document.getElementById("Noturno_Moram_com").style.display = "none";
    document.getElementById("Noturno_QTD_de_pessoas_moram_junto").style.display = "none";
    document.getElementById("Noturno_Situacao_domicilio").style.display = "none";
    document.getElementById("Noturno_Tempo_moradia").style.display = "none";
    document.getElementById("Noturno_Genero").style.display = "none";
    document.getElementById("Noturno_Estado_civil").style.display = "none";
    document.getElementById("Noturno_Portador_de_Necessidade").style.display = "none";
    document.getElementById("Noturno_Convive_com_portador").style.display = "none";
    document.getElementById("Noturno_Qtd_de_filhos").style.display = "none";
    document.getElementById("Noturno_Salario_min").style.display = "none";
    document.getElementById("Noturno_DataNascimento").style.display = "none";
    document.getElementById("Noturno_Oque_tem_No_Domicilio").style.display = "none";
    document.getElementById("Noturno_Qtd_geladeira").style.display = "none";
    document.getElementById("Noturno_Qtd_celular_comum").style.display = "none";
    document.getElementById("Noturno_Qtd_micro_ondas").style.display = "none";
    document.getElementById("Noturno_Qtd_notebooks").style.display = "none";
    document.getElementById("Noturno_Qtd_Maquina_de_Lavar").style.display = "none";
    document.getElementById("Noturno_Qtd_motocicletas").style.display = "none";
    document.getElementById("Noturno_Qtd_Automoveis").style.display = "none";
    document.getElementById("Noturno_Qtd_DVD").style.display = "none";
    document.getElementById("Noturno_Qtd_TV").style.display = "none";
    document.getElementById("Noturno_Qtd_Smartphones").style.display = "none";
    document.getElementById("Noturno_Plano_Saude").style.display = "none";
    document.getElementById("Noturno_Religiao").style.display = "none";
    document.getElementById("Noturno_Trabalho").style.display = "none";
    document.getElementById("Noturno_Vinculo_Emprego").style.display = "none";
    document.getElementById("Noturno_Area_trabalho").style.display = "none";
    document.getElementById("Noturno_Horario_Trabalho").style.display = "none";
    document.getElementById("Noturno_Escolaridade_Pai").style.display = "none";
    document.getElementById("Noturno_Escolaridade_Mae").style.display = "none";
    document.getElementById("Noturno_Estudou_Em").style.display = "none";
    document.getElementById("Noturno_Ingles").style.display = "none";
    document.getElementById("Noturno_Espanhol").style.display = "none";
    document.getElementById("Noturno_Outros").style.display = "none";
    document.getElementById("Noturno_Estudou_Fatec").style.display = "none";
    document.getElementById("Noturno_Curso_Tecnico").style.display = "none";
    document.getElementById("Noturno_Frequencia_Microcomputadores").style.display = "none";
    document.getElementById("Noturno_Onde_Microcomputadores").style.display = "none";
    document.getElementById("Noturno_Finalidade_Microcomputadores").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Informatica").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Windows").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Linux").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Word").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Excel").style.display = "none";
    document.getElementById("Noturno_Conhecimento_PowerPoint").style.display = "none";
    document.getElementById("Noturno_Conhecimento_GestaoEmpresarial").style.display = "none";
    document.getElementById("Noturno_Televisores").style.display = "none";
    document.getElementById("Noturno_Internet").style.display = "none";
    document.getElementById("Noturno_Revistas").style.display = "none";
    document.getElementById("Noturno_Jornais").style.display = "none";
    document.getElementById("Noturno_Radio").style.display = "none";
    document.getElementById("Noturno_Redes_Sociais").style.display = "none";
    document.getElementById("Noturno_Conversas_com_Amigos").style.display = "none";
    document.getElementById("Noturno_Le_Jornal").style.display = "none";
    document.getElementById("Noturno_Qtd_Livros").style.display = "none";
    document.getElementById("Noturno_Assuntos_que_Le").style.display = "none";
    document.getElementById("Noturno_Le_Livros").style.display = "none";
    document.getElementById("Noturno_Fontes_Entretenimento").style.display = "none";
    document.getElementById("Noturno_Atividade_Voluntaria").style.display = "none";
    document.getElementById("Noturno_Transporte").style.display = "none";
    document.getElementById("Noturno_Conheceu_Fatec").style.display = "none";
    document.getElementById("Noturno_Escolheu_Curso").style.display = "none";
    document.getElementById("Noturno_Expectativa_Curso").style.display = "none";
    document.getElementById("Noturno_Expectativa_Formar").style.display = "none";

    generateChart()

}

function Noturno() {
    async function generateChart() {
        const file = await fetch('script/json/forms.json')

        const json = await file.json()
        const forms = json.forms

        let i = 0;
        let questoes

        // Pegar todas as questões
        for (quest of forms) {
            questoes = Object.getOwnPropertyNames(quest)
            i++
        }

        // Pegas as questões so com respostas do noturno
        let Noturno = forms.filter(function (periodo) {
            return periodo[questoes[3]] === 'Noturno'
        })

        // Pegas as questões so com respostas do matutino
        let Matutino = forms.filter(function (periodo) {
            return periodo[questoes[3]] === 'Matutino'
        })

        let respostas = new Array(questoes.length)
        let respMatutino = new Array(Matutino.length)
        let respNoturno = new Array(Noturno.length)

        for (let j = 0; j < questoes.length; j++) {
            respMatutino[j] = new Array(Matutino.length)
            respNoturno[j] = new Array(Noturno.length)
            respostas[j] = new Array(forms.length)
        }

        // Array com todas as questões
        for (let k = 0; k < forms.length; k++) {
            for (let j = 0; j < questoes.length; j++) {
                respostas[j][k] = forms[k][questoes[j]]
            }
        }

        // Array com todas as questões Matutino
        for (let k = 0; k < Matutino.length; k++) {
            for (let j = 0; j < questoes.length; j++) {
                respMatutino[j][k] = Matutino[k][questoes[j]]
            }
        }

        // Array com todas as questões Noturno
        for (let k = 0; k < Noturno.length; k++) {
            for (let j = 0; j < questoes.length; j++) {
                respNoturno[j][k] = Noturno[k][questoes[j]]
            }
        }




        // 1. Qual o seu curso?
        let curso = [];
        let DadosCurso = [];
        let labelsCurso = [];

        GerarGraficoPie(curso, opcCurso, respNoturno, 2, labelsCurso, DadosCurso, 'Noturno_curso', 'Cursos')


        // 2. Qual o período que cursa?
        let DadosPeriodo = [];
        let labelsPeriodo = [];

        if (respNoturno[2].length >= 0) {
            DadosPeriodo.push(respNoturno[2].length)
        }

        labelsPeriodo.push(opcPeriodo[1])

        ChartPie('Noturno_Periodo', labelsPeriodo, DadosPeriodo, "Periodo");

        // 4. Qual o estado do Brasil que você nasceu?
        let estado = [];
        let DadosEstados = [];
        let labelsEstado = [];

        GerarGraficoBar(estado, opcEstado, respNoturno, 5, labelsEstado, DadosEstados, 'Noturno_Estado', 'bar', 'Noturno', 'Estados');

        // 5 - Cidades
        let cidade = [];
        let DadosCidade = [];
        let labelsCidade = [];

        GerarGraficoBar(cidade, opcCidade, respNoturno, 6, labelsCidade, DadosCidade, 'Noturno_Cidade', 'bar', 'Noturno', 'Cidades');

        // 6 - Genero
        let genero = [];
        let DadosGenero = [];
        let labelsGenero = [];

        GerarGraficoPie(genero, opcGenero, respNoturno, 7, labelsGenero, DadosGenero, 'Noturno_Genero', 'Gênero');

        // 7 - Data Nascimento
        /*let k = 3
        let data = ""
        console.log(respNoturno[8][k])
        for (let j = 0; j < 2; j++) {
            //data += respNoturno[8][k][respNoturno[8][k].length - 2] + respNoturno[8][k][respNoturno[8][k].length - 1]
            data += respNoturno[8][k][respNoturno[8][k].length - 2 + j]
    
        }
        if (data[0] === "0") {
            console.log("20" + data)
        } else {
            console.log(Number("19" + data))
        }
    
        let DataNascimento = [];
        let DadosDataNasciemnto = [];
        let labelsDataNascimento = [];
    
        GerarGraficoBar(DataNascimento, opcDataNascimento, respNoturno, 8, labelsDataNascimento, DadosDataNasciemnto, 'DataNascimento', 'Datas de Nascimento(Em Anos)')*/

        // 8 - Estado Civil
        let estadoCivil = [];
        let DadosEstadoCivil = [];
        let labelsEstadoCivil = [];

        GerarGraficoPie(estadoCivil, opcEstadoCivil, respNoturno, 9, labelsEstadoCivil, DadosEstadoCivil, 'Noturno_Estado_civil', 'Estado Civil');

        // 9 - Portadores de Necessidades especiais
        let portadores = [];
        let DadosPortadores = [];
        let labelsPortadores = [];

        GerarGraficoPie(portadores, opcPortador, respNoturno, 10, labelsPortadores, DadosPortadores, 'Noturno_Portador_de_Necessidade', 'Portadores de Necessidades Especiais');

        // 10 - Convive com Portadores de Necessidades especiais
        let ConvivePort = [];
        let DadosConvivePort = [];
        let labelsConvivePort = [];

        GerarGraficoPie(ConvivePort, opcConvivePort, respNoturno, 11, labelsConvivePort, DadosConvivePort, 'Noturno_Convive_com_portador', 'Convive com Portadores de Necessidades Especiais');

        // 11 - Quantidade de filhos
        let QtdFilhos = [];
        let DadosQtdFilhos = [];
        let labelsQtdFilhos = [];

        GerarGraficoPie(QtdFilhos, opcQtdFilhos, respNoturno, 12, labelsQtdFilhos, DadosQtdFilhos, 'Noturno_Qtd_de_filhos', "Quantidade de filhos de cada estudante");

        // 12. Com quem você mora atualmente?
        let moraCom = [];
        let DadosMoraCom = [];
        let labelsMoraCom = [];

        GerarGraficoPie(moraCom, opcMoraCom, respNoturno, 13, labelsMoraCom, DadosMoraCom, 'Noturno_Moram_com', "Com quem cada estudante mora");

        //13. Quantas pessoas, incluindo você, moram no seu domicílio?
        let QtdMoradores = [];
        let DadosQtdMoradores = [];
        let labelsQtdMoradores = [];

        GerarGraficoPie(QtdMoradores, opcQtdMoradores, respNoturno, 14, labelsQtdMoradores, DadosQtdMoradores, 'Noturno_QTD_de_pessoas_moram_junto', "Quantidade de pessoas que moram com cada aluno");

        // 14. Qual a situação do domicílio onde mora?
        let SituacaoDomicilio = [];
        let DadosSituacaoDomi = [];
        let labelsSituacaoDomi = [];

        GerarGraficoPie(SituacaoDomicilio, opcSituacaoDomi, respNoturno, 15, labelsSituacaoDomi, DadosSituacaoDomi, 'Noturno_Situacao_domicilio', "Situação do Domicílio")

        // 15. Tempo de moradia neste domicílio (Em anos)
        let TempoMoradia = [];
        let DadosTempoMoradia = [];
        let labelsTempoMoradia = [];

        GerarGraficoBar(TempoMoradia, opcTempoMoradia, respNoturno, 16, labelsTempoMoradia, DadosTempoMoradia, 'Noturno_Tempo_moradia', 'bar', 'Noturno', 'Tempo de moradia no domicílio(Em anos)');

        // 16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)
        let RendaMensal = [];
        let DadosRendaMensal = [];
        let labelsRendaMensal = [];

        GerarGraficoPie(RendaMensal, opcRendaMensal, respNoturno, 17, labelsRendaMensal, DadosRendaMensal, 'Noturno_Salario_min', "Faixa de renda mensal da família do estudante (em Salários Mínimos)");

        //17.1. Quantas geladeiras há em seu domicílio
        let QtdGeladeira = [];
        let DadosQtdGeladeira = [];
        let labelsQtdGeladeira = [];

        GerarGraficoPie(QtdGeladeira, opc17QtdeCadaCoisa, respNoturno, 18, labelsQtdGeladeira, DadosQtdGeladeira, 'Noturno_Qtd_geladeira', "Quantidade de Geladeiras de cada aluno");

        // 17.2. Quantos celulares comuns há em seu domicílio?
        let QtdCelular = [];
        let DadosQtdCelular = [];
        let labelsQtdCelular = [];

        GerarGraficoPie(QtdCelular, opc17QtdeCadaCoisa, respNoturno, 19, labelsQtdCelular, DadosQtdCelular, 'Noturno_Qtd_celular_comum', "Quantidade de celulares comuns de cada aluno");

        // 17.3. Quantos micro-ondas há em seu domicílio?
        let QtdMicroOndas = [];
        let DadosQtdMicroOndas = [];
        let labelsQtdMicroOndas = [];

        GerarGraficoPie(QtdMicroOndas, opc17QtdeCadaCoisa, respNoturno, 20, labelsQtdMicroOndas, DadosQtdMicroOndas, 'Noturno_Qtd_micro_ondas', 'Quantidade de micro-ondas de cada aluno');

        // 17.4. Quantos notebooks há em seu domicílio?
        let QtdNotebooks = [];
        let DadosQtdNotebooks = [];
        let labelsQtdNotebook = [];

        GerarGraficoPie(QtdNotebooks, opc17QtdeCadaCoisa, respNoturno, 21, labelsQtdNotebook, DadosQtdNotebooks, 'Noturno_Qtd_notebooks', 'Quantidade de Notebooks de cada aluno');

        // 17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?
        let Qtd_Maquina_de_Lavar = [];
        let DadosMaquinaLavar = [];
        let labelsMaquinaLavar = [];

        GerarGraficoPie(Qtd_Maquina_de_Lavar, opc17QtdeCadaCoisa, respNoturno, 22, labelsMaquinaLavar, DadosMaquinaLavar, 'Noturno_Qtd_Maquina_de_Lavar', 'Quantidade de Máquinas de lavar roupa de cada aluno');

        // 17.6. Quantas motocicletas há em seu domicílio?
        let Qtd_motoclicletas = [];
        let DadosMotocicletas = [];
        let labelsMotocicletas = [];

        GerarGraficoPie(Qtd_motoclicletas, opc17QtdeCadaCoisa, respNoturno, 23, labelsMotocicletas, DadosMotocicletas, 'Noturno_Qtd_motocicletas', 'Quantidade de Motocicletas de cada aluno');

        // 17.7. Quantos automóveis há em seu domicílio?
        let QtdAutomoveis = [];
        let DadosAutomoveis = [];
        let labelsAutomoveis = [];

        GerarGraficoPie(QtdAutomoveis, opc17QtdeCadaCoisa, respNoturno, 24, labelsAutomoveis, DadosAutomoveis, 'Noturno_Qtd_Automoveis', 'Quantidade de Automóveis de cada aluno');

        // 17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?
        let QtdDVD = [];
        let DadosDVD = [];
        let labelsDvd = [];

        GerarGraficoPie(QtdDVD, opc17QtdeCadaCoisa, respNoturno, 25, labelsDvd, DadosDVD, 'Noturno_Qtd_DVD', 'Quantidade de DVD players');

        // 17.9. Quantos televisores há em seu domicílio?
        let QtdTV = [];
        let DadosTV = [];
        let labelsQtdTV = [];

        GerarGraficoPie(QtdTV, opc17QtdeCadaCoisa, respNoturno, 26, labelsQtdTV, DadosTV, 'Noturno_Qtd_TV', 'Quantidade de TVs de cada aluno');

        // 17.10. Quantos smartphones há em seu domicílio?
        let Qtd_Smartphones = [];
        let DadosSmatphones = [];
        let labelsQtdSmartphone = [];

        GerarGraficoPie(Qtd_Smartphones, opc17QtdeCadaCoisa, respNoturno, 27, labelsQtdSmartphone, DadosSmatphones, 'Noturno_Qtd_Smartphones', 'Quantidade de Smartphones de cada aluno');

        // 18. No seu domicílio tem? questão com mais de uma alternativa, n esta terminada
        let DomicilioTem = [];
        let DadosDomicilioTem = [];
        let labelsDomicilioTem = [];

        GerarGraficoBar(DomicilioTem, opcTemNoDomicilio, respNoturno, 28, labelsDomicilioTem, DadosDomicilioTem, 'Noturno_Oque_tem_No_Domicilio', 'horizontalBar', 'Noturno', 'Na casa de cada estudante tem');

        // 19.1. Você trabalha?
        let trabalha = [];
        let DadosTrabalho = [];
        let labelsTrabalho = [];

        GerarGraficoPie(trabalha, opcTrabalha, respNoturno, 29, labelsTrabalho, DadosTrabalho, 'Noturno_Trabalho', 'Você trabalha?');

        //19.2. Qual o seu vínculo com o emprego?
        let VinculoEmprego = [];
        let DadosVinculo = [];
        let labelsVinculo = [];

        GerarGraficoPie(VinculoEmprego, opcVinculoEmprego, respNoturno, 30, labelsVinculo, DadosVinculo, 'Noturno_Vinculo_Emprego', "Vinculo com o emprego");

        // 19.3. Qual a área do seu trabalho?
        let AreaTrabalho = [];
        let DadosAreaTrabalho = [];
        let labelsAreaTrabalho = [];

        GerarGraficoPie(AreaTrabalho, opcAreaTrabalho, respNoturno, 31, labelsAreaTrabalho, DadosAreaTrabalho, 'Noturno_Area_trabalho', "Qual a área do seu trabalho?");

        // 19.4. Qual seu horário de trabalho?
        let HorarioTrabalho = [];
        let DadosHorario = [];
        let labelsHorario = [];

        GerarGraficoPie(HorarioTrabalho, opcHorarioTrabalho, respNoturno, 32, labelsHorario, DadosHorario, 'Noturno_Horario_Trabalho', "Horários de Trabalho");

        // 19.5. Qual a empresa que você está contratado agora
        let CabecalhoTabela = '';
        let DadosTabela = '';
        let Empresa = [];

        CabecalhoTabela = '<tr class = "thead__row"> <td class = "thead__data"> Empresas: </td> </tr>'
        document.getElementById('thead').innerHTML = CabecalhoTabela;

        for (quest of forms) {

            Empresa[i] = quest["19.5. Qual a empresa que você está contratado agora?"]

            DadosTabela = DadosTabela + `<tr "tbody__row"> <td "tbody__data"> ${Empresa[i]} </td> </tr>`

            i++
        }

        document.getElementById('tbody').innerHTML = DadosTabela;


        // 20. Você tem plano de saúde privado?
        let PlanoSaude = [];
        let DadosPlanoSaude = [];
        let labelsPlanoSaude = [];

        GerarGraficoPie(PlanoSaude, opcPlanoDeSaude, respNoturno, 34, labelsPlanoSaude, DadosPlanoSaude, 'Noturno_Plano_Saude', 'Planos de Saúde');

        // 21.1. Qual o grau de escolaridade do seu pai?
        let EscolaridadePai = [];
        let DadosEscolaridadePai = [];
        let LabelsEscolaPai = [];

        GerarGraficoPie(EscolaridadePai, opcEscolaridade, respNoturno, 35, LabelsEscolaPai, DadosEscolaridadePai, 'Noturno_Escolaridade_Pai', 'Grau de Escolaridade do Pai dos Alunos');

        // 21.2. Qual o grau de escolaridade da sua mãe?
        let EscolaridadeMae = [];
        let DadosEscolaridadeMae = [];
        let LabelsEscolaMae = [];

        GerarGraficoPie(EscolaridadeMae, opcEscolaridade, respNoturno, 36, LabelsEscolaMae, DadosEscolaridadeMae, 'Noturno_Escolaridade_Mae', 'Grau de Escolaridade da Mãe dos Alunos');

        // 22. Na sua vida escolar você estudou
        let EstudouEm = [];
        let DadosEstudouEm = [];
        let labelsEstudouEm = [];

        GerarGraficoPie(EstudouEm, opcEstudou, respNoturno, 37, labelsEstudouEm, DadosEstudouEm, 'Noturno_Estudou_Em', "Na sua vida escolar você estudou");

        // 23.1. Com que frequência você utiliza microcomputadores?
        let FrequenciaMicrocomputadores = [];
        let DadosFrequenciaComp = [];
        let labelsFrequenciaComp = [];

        GerarGraficoPie(FrequenciaMicrocomputadores, opcUsaMicroComp, respNoturno, 38, labelsFrequenciaComp, DadosFrequenciaComp, 'Noturno_Frequencia_Microcomputadores', 'Com que frequência você utiliza microcomputadores?');


        // 23.2. Onde você utiliza microcomputadores?
        let OndeUtilizaMicro = [];
        let DadosOndeUtilizaMicro = [];
        let labelsUtilizaMicro = [];

        GerarGraficoBar(OndeUtilizaMicro, opcOndeUsaMicroComp, respNoturno, 39, labelsUtilizaMicro, DadosOndeUtilizaMicro, 'Noturno_Onde_Microcomputadores', 'horizontalBar', 'Noturno', 'Onde você utiliza microcomputadores?');

        // 23.3. Com qual finalidade você utiliza microcomputadores?
        let FinalidadeUtiliMicro = [];
        let DadosFinalidadeUtiliMicro = [];
        let labelsFinalidadeUtiliza = [];

        GerarGraficoBar(FinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, respNoturno, 40, labelsFinalidadeUtiliza, DadosFinalidadeUtiliMicro, 'Noturno_Finalidade_Microcomputadores', 'horizontalBar', 'Noturno', 'Com qual finalidade você utiliza microcomputadores?');

        // 24. Como você classifica seu conhecimento em informática
        let ConhecimentoInformatica = [];
        let DadosConhecimentoInformatica = [];
        let labelsInformatica = [];

        GerarGraficoPie(ConhecimentoInformatica, opcConhecimentoInformatica, respNoturno, 41, labelsInformatica, DadosConhecimentoInformatica, 'Noturno_Conhecimento_Informatica', 'Conhecimento em Informática');

        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Windows]
        let ConhecimentoWindows = [];
        let DadosWindows = [];
        let labelsWindows = [];

        GerarGraficoPie(ConhecimentoWindows, opcConhecimentoInformatica, respNoturno, 42, labelsWindows, DadosWindows, 'Noturno_Conhecimento_Windows', 'Conhecimento no Windows');


        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Linux]
        let ConhecimentoLinux = [];
        let DadosLinux = [];
        let labelsLinux = [];

        GerarGraficoPie(ConhecimentoLinux, opcConhecimentoInformatica, respNoturno, 43, labelsLinux, DadosLinux, 'Noturno_Conhecimento_Linux', 'Conhecimento no Linux');

        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Editores de textos (Word, Writer, etc.)]
        let ConhecimentoWord = [];
        let DadosWord = [];
        let labelsWord = [];

        GerarGraficoPie(ConhecimentoWord, opcConhecimentoInformatica, respNoturno, 44, labelsWord, DadosWord, 'Noturno_Conhecimento_Word', 'Conhecimento em Editores de textos (Word, Writer, etc.)');

        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Planilhas eletrônicas (Excel, Calc, etc.)]
        let ConhecimentoExcel = [];
        let DadosExcel = [];
        let labelsExcel = [];

        GerarGraficoPie(ConhecimentoExcel, opcConhecimentoInformatica, respNoturno, 45, labelsExcel, DadosExcel, 'Noturno_Conhecimento_Excel', 'Conhecimento em Planilhas eletrônicas (Excel, Calc, etc.)');


        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Apresentadores (Powerpoint, Impress, Prezzi, etc.)]
        let ConhecimentoPowerPoint = [];
        let DadosPowerPoint = [];
        let labelsPowerPoint = [];

        GerarGraficoPie(ConhecimentoPowerPoint, opcConhecimentoInformatica, respNoturno, 46, labelsPowerPoint, DadosPowerPoint, 'Noturno_Conhecimento_PowerPoint', 'Conhecimento em Apresentadores (Powerpoint, Impress, Prezzi, etc.)');


        // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Sistemas de Gestão Empresaria]
        let ConhecimentoGestaoEmpresarial = [];
        let DadosGestaoEmpresarial = [];
        let labelsGestaoEmpresarial = [];

        GerarGraficoPie(ConhecimentoGestaoEmpresarial, opcConhecimentoInformatica, respNoturno, 47, labelsGestaoEmpresarial, DadosGestaoEmpresarial, 'Noturno_Conhecimento_GestaoEmpresarial', 'Conhecimento em Sistemas de Gestão Empresaria');

        //26. Agora, considere seu conhecimento sobre idiomas [Inglês]
        let conhecimentoIngles = [];
        let DadosIngles = [];
        let labelsInlges = [];

        GerarGraficoPie(conhecimentoIngles, opcConhecimentoLinguas, respNoturno, 48, labelsInlges, DadosIngles, 'Noturno_Ingles', 'Conhecimento em inglês');

        // 26. Agora, considere seu conhecimento sobre idiomas [Espanhol]
        let conhecimentoEspanhol = [];
        let DadosEspanhol = [];
        let labelsEspanhol = [];

        GerarGraficoPie(conhecimentoEspanhol, opcConhecimentoLinguas, respNoturno, 49, labelsEspanhol, DadosEspanhol, 'Noturno_Espanhol', 'Conhecimento em Espanhol');

        // 26. Agora, considere seu conhecimento sobre idiomas [Outros]
        let conhecimentoIdioma = [];
        let DadosIdioma = [];
        let labelsIdioma = [];

        GerarGraficoPie(conhecimentoIdioma, opcConhecimentoLinguas, respNoturno, 50, labelsIdioma, DadosIdioma, 'Noturno_Outros', 'Conhecimento em outros idiomas');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Televisores]
        let Televisores = [];
        let DadosTelevisores = [];
        let labelsTelevisores = [];

        GerarGraficoPie(Televisores, opcBuscaInformação, respNoturno, 51, labelsTelevisores, DadosTelevisores, 'Noturno_Televisores', 'Busca por informação no seguinte meio de comunicação(Televisores)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Internet]
        let internet = [];
        let DadosInternet = [];
        let labelsInternet = [];

        GerarGraficoPie(internet, opcBuscaInformação, respNoturno, 52, labelsInternet, DadosInternet, 'Noturno_Internet', 'Busca por informação no seguinte meio de comunicação(Internet)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Revistas]
        let revistas = [];
        let DadosRevistas = [];
        let labelsRevistas = [];

        GerarGraficoPie(revistas, opcBuscaInformação, respNoturno, 53, labelsRevistas, DadosRevistas, 'Noturno_Revistas', 'Busca por informação no seguinte meio de comunicação(Revistas)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Jornais]
        let jornais = [];
        let DadosJornais = [];
        let labelsJornais = [];

        GerarGraficoPie(jornais, opcBuscaInformação, respNoturno, 54, labelsJornais, DadosJornais, 'Noturno_Jornais', 'Busca por informação no seguinte meio de comunicação(Jornais)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Rádio]
        let Radio = [];
        let DadosRadio = [];
        let labelsRadio = [];

        GerarGraficoPie(Radio, opcBuscaInformação, respNoturno, 55, labelsRadio, DadosRadio, 'Noturno_Radio', 'Busca por informação no seguinte meio de comunicação(Rádio)');


        // 27. Considere a busca por informação nos seguintes meios de comunicação [Redes socias]
        let RedesSociais = [];
        let DadosRedesSociais = [];
        let labelsRedesSociais = [];

        GerarGraficoPie(RedesSociais, opcBuscaInformação, respNoturno, 56, labelsRedesSociais, DadosRedesSociais, 'Noturno_Redes_Sociais', 'Busca por informação no seguinte meio de comunicação(Redes Sociais)');

        // 27. Considere a busca por informação nos seguintes meios de comunicação [Conversas com Amigos]
        let ConversaComAmigos = [];
        let DadosConversaComAmigos = [];
        let labelsConversaComAmigos = [];

        GerarGraficoPie(ConversaComAmigos, opcBuscaInformação, respNoturno, 57, labelsConversaComAmigos, DadosConversaComAmigos, 'Noturno_Conversas_com_Amigos', 'Busca por informação no seguinte meio de comunicação(Conversas com Amigos)');

        // 28. Se você lê jornal, qual a frequência?
        let LeJornal = [];
        let DadosLeJornal = [];
        let labelsLeJornal = [];

        GerarGraficoPie(LeJornal, opcLeJornal, respNoturno, 58, labelsLeJornal, DadosLeJornal, 'Noturno_Le_Jornal', ' Frequência que leem jornal');

        // 29. Se você lê jornal, quais os assuntos que mais lê?
        let assuntosQueLeem = [];
        let DadosAssuntosQueLeem = [];
        let labelsAssuntosQueLeem = [];

        GerarGraficoBar(assuntosQueLeem, opcAssuntosJornal, respNoturno, 59, labelsAssuntosQueLeem, DadosAssuntosQueLeem, 'Noturno_Assuntos_que_Le', 'horizontalBar', 'Noturno', 'Assuntos que mais leem');

        // 30. Não considerando os livros escolares, quantos livros você lê por ano (em média)
        let QtdLivros = [];
        let DadosQtdLivros = [];
        let labelsQtdLivros = [];

        GerarGraficoPie(QtdLivros, opcQtdLivros, respNoturno, 60, labelsQtdLivros, DadosQtdLivros, 'Noturno_Qtd_Livros', 'Quantos livros cada aluno lê por ano (em média)');

        // 31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?
        let leLivros = [];
        let DadosLeLivros = [];
        let labelsLeLivros = [];

        GerarGraficoBar(leLivros, opcLeLivros, respNoturno, 61, labelsLeLivros, DadosLeLivros, 'Noturno_Le_Livros', 'horizontalBar', 'Noturno', "Gêneros de livros preferidos de cada aluno");

        // 32. Você dedica parte do seu tempo para atividades voluntárias?
        let atividadesVolutaria = [];
        let DadosAtiviadeVoluntaria = [];
        let labelsAtividadeVoluntaria = [];

        GerarGraficoPie(atividadesVolutaria, opcAtividadeVolun, respNoturno, 62, labelsAtividadeVoluntaria, DadosAtiviadeVoluntaria, 'Noturno_Atividade_Voluntaria', "Dedica parte do tempo para atividades Voluntárias");

        //33. Qual religião você professa?": "Evangélica"
        let religiao = [];
        let DadosReligiao = [];
        let lablesReligiao = [];

        GerarGraficoPie(religiao, opcReligiao, respNoturno, 63, lablesReligiao, DadosReligiao, 'Noturno_Religiao', 'Religião');

        // 34. Quais fontes de entretenimento cultural você usa?
        let FontesEntretenimento = [];
        let DadosFontesEntretenimento = [];
        let labelsFontesEntretenimento = [];

        GerarGraficoBar(FontesEntretenimento, opcEntretenimento, respNoturno, 64, labelsFontesEntretenimento, DadosFontesEntretenimento, "Noturno_Fontes_Entretenimento", 'horizontalBar', 'Noturno', 'Fontes de Entretenimento');

        //35. Estamos quase acabando... Como conheceu a FATEC Franca?
        let ConheceuFatec = [];
        let DadosConheceuFatec = [];
        let labelsConheceuFatec = [];

        GerarGraficoBar(ConheceuFatec, opcConheceuFatec, respNoturno, 65, labelsConheceuFatec, DadosConheceuFatec, 'Noturno_Conheceu_Fatec', 'horizontalBar', 'Noturno', 'Como conheceu a FATEC Franca?')

        // 36. Porque você escolheu este curso?
        let EscolheuCurso = [];
        let DadosEscolheuCurso = [];
        let labelsEscolheuCurso = [];

        GerarGraficoBar(EscolheuCurso, opcEscolheuCurso, respNoturno, 66, labelsEscolheuCurso, DadosEscolheuCurso, 'Noturno_Escolheu_Curso', 'horizontalBar', 'Noturno', 'Porque você escolheu este curso?')

        // 37. Qual sua maior expectativa quanto ao curso?
        let ExpectativaCurso = [];
        let DadosExpectativaCurso = [];
        let labelsExpectativaCurso = [];

        GerarGraficoBar(ExpectativaCurso, opcExpectativa, respNoturno, 67, labelsExpectativaCurso, DadosExpectativaCurso, 'Noturno_Expectativa_Curso', 'horizontalBar', 'Noturno', 'Qual sua maior expectativa quanto ao curso?')

        // 38. Qual sua expectativa após se formar?
        let ExpectativaFormar = [];
        let DadosExpectativaFormar = [];
        let labelsExpectativaFormar = [];

        GerarGraficoBar(ExpectativaFormar, opcFormar, respNoturno, 68, labelsExpectativaFormar, DadosExpectativaFormar, 'Noturno_Expectativa_Formar', 'horizontalBar', 'Noturno', 'Qual sua expectativa após se formar?')

        //39. Você já estudou nesta escola?
        let estudouNaFatec = [];
        let DadosEstudouFatec = [];
        let labelsEstudouFatec = [];

        GerarGraficoPie(estudouNaFatec, opcEstudoNaEscola, respNoturno, 69, labelsEstudouFatec, DadosEstudouFatec, 'Noturno_Estudou_Fatec', 'Você já estudou nesta escola?');

        //40. Você fez algum curso técnico?
        let cursoTecnico = [];
        let DadosCursoTecnico = [];
        let labelsCursoTecnico = [];

        GerarGraficoPie(cursoTecnico, opcCursoTecnico, respNoturno, 70, labelsCursoTecnico, DadosCursoTecnico, 'Noturno_Curso_Tecnico', 'Você fez algum curso técnico?');

        // 41. Qual o meio de transporte você usa para vir à escola?
        let transporte = [];
        let DadosTransporte = [];
        let labelsTransporte = [];

        GerarGraficoPie(transporte, opcTransporte, respNoturno, 71, labelsTransporte, DadosTransporte, 'Noturno_Transporte', 'Meios de transportes');

    }
    // Esconder respostas Geral
    document.getElementById("curso").style.display = "none";
    document.getElementById("periodo").style.display = "none";
    document.getElementById("estado").style.display = "none";
    document.getElementById("cidade").style.display = "none";
    document.getElementById("moram_com").style.display = "none";
    document.getElementById("QTD_de_pessoas_moram_junto").style.display = "none";
    document.getElementById("situacao_domicilio").style.display = "none";
    document.getElementById("tempo_moradia").style.display = "none";
    document.getElementById("genero").style.display = "none";
    document.getElementById("estado_civil").style.display = "none";
    document.getElementById("Portador_de_Necessidade").style.display = "none";
    document.getElementById("convive_com_portador").style.display = "none";
    document.getElementById("qtd_de_filhos").style.display = "none";
    document.getElementById("salario_min").style.display = "none";
    document.getElementById("DataNascimento").style.display = "none";
    document.getElementById("Oque_tem_No_Domicilio").style.display = "none";
    document.getElementById("qtd_geladeira").style.display = "none";
    document.getElementById("qtd_celular_comum").style.display = "none";
    document.getElementById("qtd_micro_ondas").style.display = "none";
    document.getElementById("qtd_notebooks").style.display = "none";
    document.getElementById("qtd_Maquina_de_Lavar").style.display = "none";
    document.getElementById("qtd_motocicletas").style.display = "none";
    document.getElementById("qtd_Automoveis").style.display = "none";
    document.getElementById("qtd_DVD").style.display = "none";
    document.getElementById("qtd_TV").style.display = "none";
    document.getElementById("qtd_Smartphones").style.display = "none";
    document.getElementById("Plano_Saude").style.display = "none";
    document.getElementById("Religiao").style.display = "none";
    document.getElementById("Trabalho").style.display = "none";
    document.getElementById("Vinculo_Emprego").style.display = "none";
    document.getElementById("Area_trabalho").style.display = "none";
    document.getElementById("Horario_Trabalho").style.display = "none";
    document.getElementById("Escolaridade_Pai").style.display = "none";
    document.getElementById("Escolaridade_Mae").style.display = "none";
    document.getElementById("Estudou_Em").style.display = "none";
    document.getElementById("Ingles").style.display = "none";
    document.getElementById("Espanhol").style.display = "none";
    document.getElementById("Outros").style.display = "none";
    document.getElementById("Estudou_Fatec").style.display = "none";
    document.getElementById("Curso_Tecnico").style.display = "none";
    document.getElementById("Frequencia_Microcomputadores").style.display = "none";
    document.getElementById("Onde_Microcomputadores").style.display = "none";
    document.getElementById("Finalidade_Microcomputadores").style.display = "none";
    document.getElementById("Conhecimento_Informatica").style.display = "none";
    document.getElementById("Conhecimento_Windows").style.display = "none";
    document.getElementById("Conhecimento_Linux").style.display = "none";
    document.getElementById("Conhecimento_Word").style.display = "none";
    document.getElementById("Conhecimento_Excel").style.display = "none";
    document.getElementById("Conhecimento_PowerPoint").style.display = "none";
    document.getElementById("Conhecimento_GestaoEmpresarial").style.display = "none";
    document.getElementById("Televisores").style.display = "none";
    document.getElementById("Internet").style.display = "none";
    document.getElementById("Revistas").style.display = "none";
    document.getElementById("Jornais").style.display = "none";
    document.getElementById("Radio").style.display = "none";
    document.getElementById("Redes_Sociais").style.display = "none";
    document.getElementById("Conversas_com_Amigos").style.display = "none";
    document.getElementById("Le_Jornal").style.display = "none";
    document.getElementById("Qtd_Livros").style.display = "none";
    document.getElementById("Assuntos_que_Le").style.display = "none";
    document.getElementById("Le_Livros").style.display = "none";
    document.getElementById("Fontes_Entretenimento").style.display = "none";
    document.getElementById("Atividade_Voluntaria").style.display = "none";
    document.getElementById("Transporte").style.display = "none";
    document.getElementById("Conheceu_Fatec").style.display = "none";
    document.getElementById("Escolheu_Curso").style.display = "none";
    document.getElementById("Expectativa_Curso").style.display = "none";
    document.getElementById("Expectativa_Formar").style.display = "none";

    // Esconder respostas do do Matutino
    document.getElementById("Matutino_curso").style.display = "none";
    document.getElementById("Matutino_Periodo").style.display = "none";
    document.getElementById("Matutino_Estado").style.display = "none";
    document.getElementById("Matutino_Cidade").style.display = "none";
    document.getElementById("Matutino_Moram_com").style.display = "none";
    document.getElementById("Matutino_QTD_de_pessoas_moram_junto").style.display = "none";
    document.getElementById("Matutino_Situacao_domicilio").style.display = "none";
    document.getElementById("Matutino_Tempo_moradia").style.display = "none";
    document.getElementById("Matutino_Genero").style.display = "none";
    document.getElementById("Matutino_Estado_civil").style.display = "none";
    document.getElementById("Matutino_Portador_de_Necessidade").style.display = "none";
    document.getElementById("Matutino_Convive_com_portador").style.display = "none";
    document.getElementById("Matutino_Qtd_de_filhos").style.display = "none";
    document.getElementById("Matutino_Salario_min").style.display = "none";
    document.getElementById("Matutino_DataNascimento").style.display = "none";
    document.getElementById("Matutino_Oque_tem_No_Domicilio").style.display = "none";
    document.getElementById("Matutino_Qtd_geladeira").style.display = "none";
    document.getElementById("Matutino_Qtd_celular_comum").style.display = "none";
    document.getElementById("Matutino_Qtd_micro_ondas").style.display = "none";
    document.getElementById("Matutino_Qtd_notebooks").style.display = "none";
    document.getElementById("Matutino_Qtd_Maquina_de_Lavar").style.display = "none";
    document.getElementById("Matutino_Qtd_motocicletas").style.display = "none";
    document.getElementById("Matutino_Qtd_Automoveis").style.display = "none";
    document.getElementById("Matutino_Qtd_DVD").style.display = "none";
    document.getElementById("Matutino_Qtd_TV").style.display = "none";
    document.getElementById("Matutino_Qtd_Smartphones").style.display = "none";
    document.getElementById("Matutino_Plano_Saude").style.display = "none";
    document.getElementById("Matutino_Religiao").style.display = "none";
    document.getElementById("Matutino_Trabalho").style.display = "none";
    document.getElementById("Matutino_Vinculo_Emprego").style.display = "none";
    document.getElementById("Matutino_Area_trabalho").style.display = "none";
    document.getElementById("Matutino_Horario_Trabalho").style.display = "none";
    document.getElementById("Matutino_Escolaridade_Pai").style.display = "none";
    document.getElementById("Matutino_Escolaridade_Mae").style.display = "none";
    document.getElementById("Matutino_Estudou_Em").style.display = "none";
    document.getElementById("Matutino_Ingles").style.display = "none";
    document.getElementById("Matutino_Espanhol").style.display = "none";
    document.getElementById("Matutino_Outros").style.display = "none";
    document.getElementById("Matutino_Estudou_Fatec").style.display = "none";
    document.getElementById("Matutino_Curso_Tecnico").style.display = "none";
    document.getElementById("Matutino_Frequencia_Microcomputadores").style.display = "none";
    document.getElementById("Matutino_Onde_Microcomputadores").style.display = "none";
    document.getElementById("Matutino_Finalidade_Microcomputadores").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Informatica").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Windows").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Linux").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Word").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Excel").style.display = "none";
    document.getElementById("Matutino_Conhecimento_PowerPoint").style.display = "none";
    document.getElementById("Matutino_Conhecimento_GestaoEmpresarial").style.display = "none";
    document.getElementById("Matutino_Televisores").style.display = "none";
    document.getElementById("Matutino_Internet").style.display = "none";
    document.getElementById("Matutino_Revistas").style.display = "none";
    document.getElementById("Matutino_Jornais").style.display = "none";
    document.getElementById("Matutino_Radio").style.display = "none";
    document.getElementById("Matutino_Redes_Sociais").style.display = "none";
    document.getElementById("Matutino_Conversas_com_Amigos").style.display = "none";
    document.getElementById("Matutino_Le_Jornal").style.display = "none";
    document.getElementById("Matutino_Qtd_Livros").style.display = "none";
    document.getElementById("Matutino_Assuntos_que_Le").style.display = "none";
    document.getElementById("Matutino_Le_Livros").style.display = "none";
    document.getElementById("Matutino_Fontes_Entretenimento").style.display = "none";
    document.getElementById("Matutino_Atividade_Voluntaria").style.display = "none";
    document.getElementById("Matutino_Transporte").style.display = "none";
    document.getElementById("Matutino_Conheceu_Fatec").style.display = "none";
    document.getElementById("Matutino_Escolheu_Curso").style.display = "none";
    document.getElementById("Matutino_Expectativa_Curso").style.display = "none";
    document.getElementById("Matutino_Expectativa_Formar").style.display = "none";

    // Mostrar respostas do Noturno
    document.getElementById("Noturno_curso").style.display = "block";
    document.getElementById("Noturno_Periodo").style.display = "block";
    document.getElementById("Noturno_Estado").style.display = "block";
    document.getElementById("Noturno_Cidade").style.display = "block";
    document.getElementById("Noturno_Moram_com").style.display = "block";
    document.getElementById("Noturno_QTD_de_pessoas_moram_junto").style.display = "block";
    document.getElementById("Noturno_Situacao_domicilio").style.display = "block";
    document.getElementById("Noturno_Tempo_moradia").style.display = "block";
    document.getElementById("Noturno_Genero").style.display = "block";
    document.getElementById("Noturno_Estado_civil").style.display = "block";
    document.getElementById("Noturno_Portador_de_Necessidade").style.display = "block";
    document.getElementById("Noturno_Convive_com_portador").style.display = "block";
    document.getElementById("Noturno_Qtd_de_filhos").style.display = "block";
    document.getElementById("Noturno_Salario_min").style.display = "block";
    document.getElementById("Noturno_DataNascimento").style.display = "block";
    document.getElementById("Noturno_Oque_tem_No_Domicilio").style.display = "block";
    document.getElementById("Noturno_Qtd_geladeira").style.display = "block";
    document.getElementById("Noturno_Qtd_celular_comum").style.display = "block";
    document.getElementById("Noturno_Qtd_micro_ondas").style.display = "block";
    document.getElementById("Noturno_Qtd_notebooks").style.display = "block";
    document.getElementById("Noturno_Qtd_Maquina_de_Lavar").style.display = "block";
    document.getElementById("Noturno_Qtd_motocicletas").style.display = "block";
    document.getElementById("Noturno_Qtd_Automoveis").style.display = "block";
    document.getElementById("Noturno_Qtd_DVD").style.display = "block";
    document.getElementById("Noturno_Qtd_TV").style.display = "block";
    document.getElementById("Noturno_Qtd_Smartphones").style.display = "block";
    document.getElementById("Noturno_Plano_Saude").style.display = "block";
    document.getElementById("Noturno_Religiao").style.display = "block";
    document.getElementById("Noturno_Trabalho").style.display = "block";
    document.getElementById("Noturno_Vinculo_Emprego").style.display = "block";
    document.getElementById("Noturno_Area_trabalho").style.display = "block";
    document.getElementById("Noturno_Horario_Trabalho").style.display = "block";
    document.getElementById("Noturno_Escolaridade_Pai").style.display = "block";
    document.getElementById("Noturno_Escolaridade_Mae").style.display = "block";
    document.getElementById("Noturno_Estudou_Em").style.display = "block";
    document.getElementById("Noturno_Ingles").style.display = "block";
    document.getElementById("Noturno_Espanhol").style.display = "block";
    document.getElementById("Noturno_Outros").style.display = "block";
    document.getElementById("Noturno_Estudou_Fatec").style.display = "block";
    document.getElementById("Noturno_Curso_Tecnico").style.display = "block";
    document.getElementById("Noturno_Frequencia_Microcomputadores").style.display = "block";
    document.getElementById("Noturno_Onde_Microcomputadores").style.display = "block";
    document.getElementById("Noturno_Finalidade_Microcomputadores").style.display = "block";
    document.getElementById("Noturno_Conhecimento_Informatica").style.display = "block";
    document.getElementById("Noturno_Conhecimento_Windows").style.display = "block";
    document.getElementById("Noturno_Conhecimento_Linux").style.display = "block";
    document.getElementById("Noturno_Conhecimento_Word").style.display = "block";
    document.getElementById("Noturno_Conhecimento_Excel").style.display = "block";
    document.getElementById("Noturno_Conhecimento_PowerPoint").style.display = "block";
    document.getElementById("Noturno_Conhecimento_GestaoEmpresarial").style.display = "block";
    document.getElementById("Noturno_Televisores").style.display = "block";
    document.getElementById("Noturno_Internet").style.display = "block";
    document.getElementById("Noturno_Revistas").style.display = "block";
    document.getElementById("Noturno_Jornais").style.display = "block";
    document.getElementById("Noturno_Radio").style.display = "block";
    document.getElementById("Noturno_Redes_Sociais").style.display = "block";
    document.getElementById("Noturno_Conversas_com_Amigos").style.display = "block";
    document.getElementById("Noturno_Le_Jornal").style.display = "block";
    document.getElementById("Noturno_Qtd_Livros").style.display = "block";
    document.getElementById("Noturno_Assuntos_que_Le").style.display = "block";
    document.getElementById("Noturno_Le_Livros").style.display = "block";
    document.getElementById("Noturno_Fontes_Entretenimento").style.display = "block";
    document.getElementById("Noturno_Atividade_Voluntaria").style.display = "block";
    document.getElementById("Noturno_Transporte").style.display = "block";
    document.getElementById("Noturno_Conheceu_Fatec").style.display = "block";
    document.getElementById("Noturno_Escolheu_Curso").style.display = "block";
    document.getElementById("Noturno_Expectativa_Curso").style.display = "block";
    document.getElementById("Noturno_Expectativa_Formar").style.display = "block";

    generateChart()
}

function Geral() {
    // Mostrar respostas Geral
    document.getElementById("curso").style.display = "block";
    document.getElementById("periodo").style.display = "block";
    document.getElementById("estado").style.display = "block";
    document.getElementById("cidade").style.display = "block";
    document.getElementById("moram_com").style.display = "block";
    document.getElementById("QTD_de_pessoas_moram_junto").style.display = "block";
    document.getElementById("situacao_domicilio").style.display = "block";
    document.getElementById("tempo_moradia").style.display = "block";
    document.getElementById("genero").style.display = "block";
    document.getElementById("estado_civil").style.display = "block";
    document.getElementById("Portador_de_Necessidade").style.display = "block";
    document.getElementById("convive_com_portador").style.display = "block";
    document.getElementById("qtd_de_filhos").style.display = "block";
    document.getElementById("salario_min").style.display = "block";
    document.getElementById("DataNascimento").style.display = "block";
    document.getElementById("Oque_tem_No_Domicilio").style.display = "block";
    document.getElementById("qtd_geladeira").style.display = "block";
    document.getElementById("qtd_celular_comum").style.display = "block";
    document.getElementById("qtd_micro_ondas").style.display = "block";
    document.getElementById("qtd_notebooks").style.display = "block";
    document.getElementById("qtd_Maquina_de_Lavar").style.display = "block";
    document.getElementById("qtd_motocicletas").style.display = "block";
    document.getElementById("qtd_Automoveis").style.display = "block";
    document.getElementById("qtd_DVD").style.display = "block";
    document.getElementById("qtd_TV").style.display = "block";
    document.getElementById("qtd_Smartphones").style.display = "block";
    document.getElementById("Plano_Saude").style.display = "block";
    document.getElementById("Religiao").style.display = "block";
    document.getElementById("Trabalho").style.display = "block";
    document.getElementById("Vinculo_Emprego").style.display = "block";
    document.getElementById("Area_trabalho").style.display = "block";
    document.getElementById("Horario_Trabalho").style.display = "block";
    document.getElementById("Escolaridade_Pai").style.display = "block";
    document.getElementById("Escolaridade_Mae").style.display = "block";
    document.getElementById("Estudou_Em").style.display = "block";
    document.getElementById("Ingles").style.display = "block";
    document.getElementById("Espanhol").style.display = "block";
    document.getElementById("Outros").style.display = "block";
    document.getElementById("Estudou_Fatec").style.display = "block";
    document.getElementById("Curso_Tecnico").style.display = "block";
    document.getElementById("Frequencia_Microcomputadores").style.display = "block";
    document.getElementById("Onde_Microcomputadores").style.display = "block";
    document.getElementById("Finalidade_Microcomputadores").style.display = "block";
    document.getElementById("Conhecimento_Informatica").style.display = "block";
    document.getElementById("Conhecimento_Windows").style.display = "block";
    document.getElementById("Conhecimento_Linux").style.display = "block";
    document.getElementById("Conhecimento_Word").style.display = "block";
    document.getElementById("Conhecimento_Excel").style.display = "block";
    document.getElementById("Conhecimento_PowerPoint").style.display = "block";
    document.getElementById("Conhecimento_GestaoEmpresarial").style.display = "block";
    document.getElementById("Televisores").style.display = "block";
    document.getElementById("Internet").style.display = "block";
    document.getElementById("Revistas").style.display = "block";
    document.getElementById("Jornais").style.display = "block";
    document.getElementById("Radio").style.display = "block";
    document.getElementById("Redes_Sociais").style.display = "block";
    document.getElementById("Conversas_com_Amigos").style.display = "block";
    document.getElementById("Le_Jornal").style.display = "block";
    document.getElementById("Qtd_Livros").style.display = "block";
    document.getElementById("Assuntos_que_Le").style.display = "block";
    document.getElementById("Le_Livros").style.display = "block";
    document.getElementById("Fontes_Entretenimento").style.display = "block";
    document.getElementById("Atividade_Voluntaria").style.display = "block";
    document.getElementById("Transporte").style.display = "block";
    document.getElementById("Conheceu_Fatec").style.display = "block";
    document.getElementById("Escolheu_Curso").style.display = "block";
    document.getElementById("Expectativa_Curso").style.display = "block";
    document.getElementById("Expectativa_Formar").style.display = "block";

    // Esconder respostas do do Matutino
    document.getElementById("Matutino_curso").style.display = "none";
    document.getElementById("Matutino_Periodo").style.display = "none";
    document.getElementById("Matutino_Estado").style.display = "none";
    document.getElementById("Matutino_Cidade").style.display = "none";
    document.getElementById("Matutino_Moram_com").style.display = "none";
    document.getElementById("Matutino_QTD_de_pessoas_moram_junto").style.display = "none";
    document.getElementById("Matutino_Situacao_domicilio").style.display = "none";
    document.getElementById("Matutino_Tempo_moradia").style.display = "none";
    document.getElementById("Matutino_Genero").style.display = "none";
    document.getElementById("Matutino_Estado_civil").style.display = "none";
    document.getElementById("Matutino_Portador_de_Necessidade").style.display = "none";
    document.getElementById("Matutino_Convive_com_portador").style.display = "none";
    document.getElementById("Matutino_Qtd_de_filhos").style.display = "none";
    document.getElementById("Matutino_Salario_min").style.display = "none";
    document.getElementById("Matutino_DataNascimento").style.display = "none";
    document.getElementById("Matutino_Oque_tem_No_Domicilio").style.display = "none";
    document.getElementById("Matutino_Qtd_geladeira").style.display = "none";
    document.getElementById("Matutino_Qtd_celular_comum").style.display = "none";
    document.getElementById("Matutino_Qtd_micro_ondas").style.display = "none";
    document.getElementById("Matutino_Qtd_notebooks").style.display = "none";
    document.getElementById("Matutino_Qtd_Maquina_de_Lavar").style.display = "none";
    document.getElementById("Matutino_Qtd_motocicletas").style.display = "none";
    document.getElementById("Matutino_Qtd_Automoveis").style.display = "none";
    document.getElementById("Matutino_Qtd_DVD").style.display = "none";
    document.getElementById("Matutino_Qtd_TV").style.display = "none";
    document.getElementById("Matutino_Qtd_Smartphones").style.display = "none";
    document.getElementById("Matutino_Plano_Saude").style.display = "none";
    document.getElementById("Matutino_Religiao").style.display = "none";
    document.getElementById("Matutino_Trabalho").style.display = "none";
    document.getElementById("Matutino_Vinculo_Emprego").style.display = "none";
    document.getElementById("Matutino_Area_trabalho").style.display = "none";
    document.getElementById("Matutino_Horario_Trabalho").style.display = "none";
    document.getElementById("Matutino_Escolaridade_Pai").style.display = "none";
    document.getElementById("Matutino_Escolaridade_Mae").style.display = "none";
    document.getElementById("Matutino_Estudou_Em").style.display = "none";
    document.getElementById("Matutino_Ingles").style.display = "none";
    document.getElementById("Matutino_Espanhol").style.display = "none";
    document.getElementById("Matutino_Outros").style.display = "none";
    document.getElementById("Matutino_Estudou_Fatec").style.display = "none";
    document.getElementById("Matutino_Curso_Tecnico").style.display = "none";
    document.getElementById("Matutino_Frequencia_Microcomputadores").style.display = "none";
    document.getElementById("Matutino_Onde_Microcomputadores").style.display = "none";
    document.getElementById("Matutino_Finalidade_Microcomputadores").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Informatica").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Windows").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Linux").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Word").style.display = "none";
    document.getElementById("Matutino_Conhecimento_Excel").style.display = "none";
    document.getElementById("Matutino_Conhecimento_PowerPoint").style.display = "none";
    document.getElementById("Matutino_Conhecimento_GestaoEmpresarial").style.display = "none";
    document.getElementById("Matutino_Televisores").style.display = "none";
    document.getElementById("Matutino_Internet").style.display = "none";
    document.getElementById("Matutino_Revistas").style.display = "none";
    document.getElementById("Matutino_Jornais").style.display = "none";
    document.getElementById("Matutino_Radio").style.display = "none";
    document.getElementById("Matutino_Redes_Sociais").style.display = "none";
    document.getElementById("Matutino_Conversas_com_Amigos").style.display = "none";
    document.getElementById("Matutino_Le_Jornal").style.display = "none";
    document.getElementById("Matutino_Qtd_Livros").style.display = "none";
    document.getElementById("Matutino_Assuntos_que_Le").style.display = "none";
    document.getElementById("Matutino_Le_Livros").style.display = "none";
    document.getElementById("Matutino_Fontes_Entretenimento").style.display = "none";
    document.getElementById("Matutino_Atividade_Voluntaria").style.display = "none";
    document.getElementById("Matutino_Transporte").style.display = "none";
    document.getElementById("Matutino_Conheceu_Fatec").style.display = "none";
    document.getElementById("Matutino_Escolheu_Curso").style.display = "none";
    document.getElementById("Matutino_Expectativa_Curso").style.display = "none";
    document.getElementById("Matutino_Expectativa_Formar").style.display = "none";

    // Esconder respostas do Noturno
    document.getElementById("Noturno_curso").style.display = "none";
    document.getElementById("Noturno_Periodo").style.display = "none";
    document.getElementById("Noturno_Estado").style.display = "none";
    document.getElementById("Noturno_Cidade").style.display = "none";
    document.getElementById("Noturno_Moram_com").style.display = "none";
    document.getElementById("Noturno_QTD_de_pessoas_moram_junto").style.display = "none";
    document.getElementById("Noturno_Situacao_domicilio").style.display = "none";
    document.getElementById("Noturno_Tempo_moradia").style.display = "none";
    document.getElementById("Noturno_Genero").style.display = "none";
    document.getElementById("Noturno_Estado_civil").style.display = "none";
    document.getElementById("Noturno_Portador_de_Necessidade").style.display = "none";
    document.getElementById("Noturno_Convive_com_portador").style.display = "none";
    document.getElementById("Noturno_Qtd_de_filhos").style.display = "none";
    document.getElementById("Noturno_Salario_min").style.display = "none";
    document.getElementById("Noturno_DataNascimento").style.display = "none";
    document.getElementById("Noturno_Oque_tem_No_Domicilio").style.display = "none";
    document.getElementById("Noturno_Qtd_geladeira").style.display = "none";
    document.getElementById("Noturno_Qtd_celular_comum").style.display = "none";
    document.getElementById("Noturno_Qtd_micro_ondas").style.display = "none";
    document.getElementById("Noturno_Qtd_notebooks").style.display = "none";
    document.getElementById("Noturno_Qtd_Maquina_de_Lavar").style.display = "none";
    document.getElementById("Noturno_Qtd_motocicletas").style.display = "none";
    document.getElementById("Noturno_Qtd_Automoveis").style.display = "none";
    document.getElementById("Noturno_Qtd_DVD").style.display = "none";
    document.getElementById("Noturno_Qtd_TV").style.display = "none";
    document.getElementById("Noturno_Qtd_Smartphones").style.display = "none";
    document.getElementById("Noturno_Plano_Saude").style.display = "none";
    document.getElementById("Noturno_Religiao").style.display = "none";
    document.getElementById("Noturno_Trabalho").style.display = "none";
    document.getElementById("Noturno_Vinculo_Emprego").style.display = "none";
    document.getElementById("Noturno_Area_trabalho").style.display = "none";
    document.getElementById("Noturno_Horario_Trabalho").style.display = "none";
    document.getElementById("Noturno_Escolaridade_Pai").style.display = "none";
    document.getElementById("Noturno_Escolaridade_Mae").style.display = "none";
    document.getElementById("Noturno_Estudou_Em").style.display = "none";
    document.getElementById("Noturno_Ingles").style.display = "none";
    document.getElementById("Noturno_Espanhol").style.display = "none";
    document.getElementById("Noturno_Outros").style.display = "none";
    document.getElementById("Noturno_Estudou_Fatec").style.display = "none";
    document.getElementById("Noturno_Curso_Tecnico").style.display = "none";
    document.getElementById("Noturno_Frequencia_Microcomputadores").style.display = "none";
    document.getElementById("Noturno_Onde_Microcomputadores").style.display = "none";
    document.getElementById("Noturno_Finalidade_Microcomputadores").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Informatica").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Windows").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Linux").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Word").style.display = "none";
    document.getElementById("Noturno_Conhecimento_Excel").style.display = "none";
    document.getElementById("Noturno_Conhecimento_PowerPoint").style.display = "none";
    document.getElementById("Noturno_Conhecimento_GestaoEmpresarial").style.display = "none";
    document.getElementById("Noturno_Televisores").style.display = "none";
    document.getElementById("Noturno_Internet").style.display = "none";
    document.getElementById("Noturno_Revistas").style.display = "none";
    document.getElementById("Noturno_Jornais").style.display = "none";
    document.getElementById("Noturno_Radio").style.display = "none";
    document.getElementById("Noturno_Redes_Sociais").style.display = "none";
    document.getElementById("Noturno_Conversas_com_Amigos").style.display = "none";
    document.getElementById("Noturno_Le_Jornal").style.display = "none";
    document.getElementById("Noturno_Qtd_Livros").style.display = "none";
    document.getElementById("Noturno_Assuntos_que_Le").style.display = "none";
    document.getElementById("Noturno_Le_Livros").style.display = "none";
    document.getElementById("Noturno_Fontes_Entretenimento").style.display = "none";
    document.getElementById("Noturno_Atividade_Voluntaria").style.display = "none";
    document.getElementById("Noturno_Transporte").style.display = "none";
    document.getElementById("Noturno_Conheceu_Fatec").style.display = "none";
    document.getElementById("Noturno_Escolheu_Curso").style.display = "none";
    document.getElementById("Noturno_Expectativa_Curso").style.display = "none";
    document.getElementById("Noturno_Expectativa_Formar").style.display = "none";
}