let opcCurso = ["Análise e Desenvolvimento de Sistemas (ADS)", "Gestão da Produção Industrial (GPI)", "Gestão de Recursos Humanos", "Desenvolvimento de Software Multiplataforma"]
let opcPeriodo = ['Matutino', 'Noturno'];
let opcEstado = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'];
let opcCidade = ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino'];
let opcGenero = ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro'];
let opcDataNascimento = ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
let opcEstadoCivil = ['Solteiro(a)', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'];
let opcPortador = ['Nenhuma', 'Visual', 'Física', 'Auditiva', 'Autismo', 'De fala'];
let opcConvivePort = ['Autismo', 'Síndrome de Down', 'Deficiência', 'Auditiva', 'Visual', 'De fala', 'Física', 'Não convivo ou não moro com alguém com deficiência'];
let opcQtdFilhos = ['Nenhum', 'Um', 'Dois', 'Três', 'Quatro', 'Mais de quatro'];
let opcMoraCom = ['Com pais e(ou) parentes', 'Com esposa(o) e(ou) filho(s)', 'Com amigos (compartilhando despesas) ou de favor', 'Sozinho'];
let opcQtdMoradores = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
let opcSituacaoDomi = ['Próprio', 'Alugado', 'Cedido', 'Financiado', 'Arrendado', 'Mensalista'];
let opcTempoMoradia = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70']
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
                    '#12239E', '#FF0005', '#FF700F',
                    '#1D96CC', '#3DFF64', '#FBBC05',
                    '#9657FF', '#6B007B', '#1E90FF',
                    '#FFF28C', '#F59AF2', '#5BE8F5',
                    '#F50F51', '#9ED3E4', '#00F6A0',
                    '#CEF6A0', '#FF91A0', '#FF0046',
                    '#4A0046', '#BA00B1', '#22BDD4',
                    '#2300BA', '#FFF766', '#FFF713',
                    '#10B92C', '#EB0D0D', '#E0EEEE',
                    '#FFB7F3', '#EE7AE9', '#FFBBFF',
                    '#912CEE', '#008B8B', '#00008B',
                    '#90EE90', '#CD2626', '#EE7621',
                    '#00008B', '#20B2AA', '#8B2500',
                    '#8B0000', '#FFD39B', '#008B8B',
                    '#90EE90', '#FFE1FF', '#8B008B',
                    '#FF82AB', '#4EEE94', '#00FFFF',
                    '#7CFC00', '#CD5C5C', '#FF6347',
                    '#FF69B4', '#DDA0DD', '#EA4335',
                ],
                borderColor: [
                    '#12239E', '#FF0005', '#FF700F',
                    '#1D96CC', '#3DFF64', '#FBBC05',
                    '#9657FF', '#6B007B', '#1E90FF',
                    '#FFF28C', '#F59AF2', '#5BE8F5',
                    '#F50F51', '#9ED3E4', '#00F6A0',
                    '#CEF6A0', '#FF91A0', '#FF0046',
                    '#4A0046', '#BA00B1', '#22BDD4',
                    '#2300BA', '#FFF766', '#FFF713',
                    '#10B92C', '#EB0D0D', '#E0EEEE',
                    '#FFB7F3', '#EE7AE9', '#FFBBFF',
                    '#912CEE', '#008B8B', '#00008B',
                    '#90EE90', '#CD2626', '#EE7621',
                    '#00008B', '#20B2AA', '#8B2500',
                    '#8B0000', '#FFD39B', '#008B8B',
                    '#90EE90', '#FFE1FF', '#8B008B',
                    '#FF82AB', '#4EEE94', '#00FFFF',
                    '#7CFC00', '#CD5C5C', '#FF6347',
                    '#FF69B4', '#DDA0DD', '#EA4335',
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
                    '#12239E', '#FF0005', '#FF700F',
                    '#1D96CC', '#3DFF64', '#FBBC05',
                    '#9657FF', '#6B007B', '#1E90FF',
                    '#FFF28C', '#F59AF2', '#5BE8F5',
                    '#F50F51', '#9ED3E4', '#00F6A0',
                    '#CEF6A0', '#FF91A0', '#FF0046',
                    '#4A0046', '#BA00B1', '#22BDD4',
                    '#2300BA', '#FFF766', '#FFF713',
                    '#10B92C', '#EB0D0D', '#E0EEEE',
                    '#FFB7F3', '#EE7AE9', '#FFBBFF',
                    '#912CEE', '#008B8B', '#00008B',
                    '#90EE90', '#CD2626', '#EE7621',
                    '#00008B', '#20B2AA', '#8B2500',
                    '#8B0000', '#FFD39B', '#008B8B',
                    '#90EE90', '#FFE1FF', '#8B008B',
                    '#FF82AB', '#4EEE94', '#00FFFF',
                    '#7CFC00', '#CD5C5C', '#FF6347',
                    '#FF69B4', '#DDA0DD', '#EA4335',
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

let i = 0;
let questoes

var ExcelToJSON = function () {
    this.parseExcel = function (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary',
            });
            workbook.SheetNames.forEach(function (sheetName) {
                // Here is your object
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(
                    workbook.Sheets[sheetName]
                );
                var json_object = JSON.stringify(XL_row_object);
                const forms = JSON.parse(json_object);

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
                let MatutinoCurso = [];
                let NoturnoCurso = [];
                let DadosCurso = [];
                let MatutinoDadosCurso = [];
                let NoturnoDadosCurso = [];
                let labelsCurso = [];
                let labelsMatutinoCurso = [];
                let labelsNoturnoCurso = [];

                GerarGraficoPie(curso, opcCurso, respostas, 2, labelsCurso, DadosCurso, 'curso', 'Cursos')
                GerarGraficoPie(MatutinoCurso, opcCurso, respMatutino, 2, labelsMatutinoCurso, MatutinoDadosCurso, 'Matutino_curso', 'Cursos')
                GerarGraficoPie(NoturnoCurso, opcCurso, respNoturno, 2, labelsNoturnoCurso, NoturnoDadosCurso, 'Noturno_curso', 'Cursos')


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
                ChartPie('Matutino_Periodo', labelsPeriodo, DadosPeriodo, "Periodo");
                ChartPie('Noturno_Periodo', labelsPeriodo, DadosPeriodo, "Periodo");

                // 4. Qual o estado do Brasil que você nasceu?
                let estado = [];
                let MatutinoEstado = [];
                let NoturnoEstado = [];
                let DadosEstados = [];
                let MatutinoDadosEstado = [];
                let NoturnoDadosEstado = [];
                let labelsEstado = [];
                let labelsMatutinoEstado = [];
                let labelsNoturnoEstado = [];

                GerarGraficoBar(estado, opcEstado, respostas, 5, labelsEstado, DadosEstados, 'estado', 'bar', 'Geral', 'Estados');
                GerarGraficoBar(MatutinoEstado, opcEstado, respMatutino, 5, labelsMatutinoEstado, MatutinoDadosEstado, 'Matutino_Estado', 'bar', 'Matutino', 'Estados');
                GerarGraficoBar(NoturnoEstado, opcEstado, respNoturno, 5, labelsNoturnoEstado, NoturnoDadosEstado, 'Noturno_Estado', 'bar', 'Noturno', 'Estados');


                // 5 - Cidades
                let cidade = [];
                let MatutinoCidade = [];
                let NoturnoCidade = [];
                let DadosCidade = [];
                let MatutinoDadosCidade = [];
                let NoturnoDadosCidade = [];
                let labelsCidade = [];
                let labelsMatutinoCidade = [];
                let labelsNoturnoCidade = [];

                GerarGraficoBar(cidade, opcCidade, respostas, 6, labelsCidade, DadosCidade, 'cidade', 'bar', 'Geral', 'Cidades');
                GerarGraficoBar(MatutinoCidade, opcCidade, respMatutino, 6, labelsMatutinoCidade, MatutinoDadosCidade, 'Matutino_Cidade', 'bar', 'Matutino', 'Cidades');
                GerarGraficoBar(NoturnoCidade, opcCidade, respNoturno, 6, labelsNoturnoCidade, NoturnoDadosCidade, 'Noturno_Cidade', 'bar', 'Noturno', 'Cidades');

                // 6 - Genero
                let genero = [];
                let MatutinoGenero = [];
                let NoturnoGenero = [];
                let DadosGenero = [];
                let MatutinoDadosGenero = [];
                let NoturnoDadosGenero = [];
                let labelsGenero = [];
                let labelsMatutinoGenero = [];
                let labelsNoturnoGenero = [];

                GerarGraficoPie(genero, opcGenero, respostas, 7, labelsGenero, DadosGenero, 'genero', 'Gênero');
                GerarGraficoPie(MatutinoGenero, opcGenero, respMatutino, 7, labelsMatutinoGenero, MatutinoDadosGenero, 'Matutino_Genero', 'Gênero');
                GerarGraficoPie(NoturnoGenero, opcGenero, respNoturno, 7, labelsNoturnoGenero, NoturnoDadosGenero, 'Noturno_Genero', 'Gênero');


                // 7 - Data Nascimento
                let DataNascimento = [];
                let DadosDataNascimento = [];
                let labelsDataNascimento = [];
                let AnoNascimento = [];
                let Nascimento = [];

                for (let i = 0; i < respostas[8].length; i++) {
                    Nascimento[i] = (respostas[8][i].split('/'))
                    AnoNascimento[i] = Nascimento[i][2]
                }

                for (let i = 0; i < opcDataNascimento.length; i++) {
                    DataNascimento[i] = new Array()
                }

                for (j = 0; j < opcDataNascimento.length; j++) {
                    for (k = 0; k < Nascimento.length; k++) {
                        if (AnoNascimento[k] === opcDataNascimento[j]) {
                            DataNascimento[j].push(AnoNascimento[k])
                        }
                    }
                    if (DataNascimento[j].length > 0) {
                        DadosDataNascimento.push(DataNascimento[j].length)
                    }
                }

                for (j = 0; j < 1; j++) {
                    for (k = 0; k < opcDataNascimento.length; k++) {
                        if (DataNascimento[k][j] != undefined) {
                            if (DataNascimento[k][j] >= 00 && DataNascimento[k][j] <= 40) {
                                labelsDataNascimento.push('20' + DataNascimento[k][j])
                            } else if (DataNascimento[k][j] >= 41 && DataNascimento[k][j] <= 99) {
                                labelsDataNascimento.push('19' + DataNascimento[k][j])
                            }
                        }
                    }
                }

                ChartBar('DataNascimento', 'bar', 'Geral', labelsDataNascimento, DadosDataNascimento, 'Datas de Nascimento(Em Anos)');

                let MatutinoNascimento = [];
                let MatutinoDadosDataNascimento = [];
                let labelsMatutinoDataNascimento = [];
                let MatutinoDataNascimento = [];
                let MatutinoAnoNascimento = [];

                for (let i = 0; i < respMatutino[8].length; i++) {
                    MatutinoDataNascimento[i] = (respMatutino[8][i].split('/'))
                    MatutinoAnoNascimento[i] = MatutinoDataNascimento[i][2]
                }

                for (let i = 0; i < opcDataNascimento.length; i++) {
                    MatutinoNascimento[i] = new Array()
                }

                for (j = 0; j < opcDataNascimento.length; j++) {
                    for (k = 0; k < MatutinoDataNascimento.length; k++) {
                        if (MatutinoAnoNascimento[k] === opcDataNascimento[j]) {
                            MatutinoNascimento[j].push(MatutinoAnoNascimento[k])
                        }
                    }
                    if (MatutinoNascimento[j].length > 0) {
                        MatutinoDadosDataNascimento.push(MatutinoNascimento[j].length)
                    }
                }

                for (j = 0; j < 1; j++) {
                    for (k = 0; k < opcDataNascimento.length; k++) {
                        if (MatutinoNascimento[k][j] != undefined) {
                            if (MatutinoNascimento[k][j] >= 00 && MatutinoNascimento[k][j] <= 40) {
                                labelsMatutinoDataNascimento.push('20' + MatutinoNascimento[k][j])
                            } else if (MatutinoNascimento[k][j] >= 41 && MatutinoNascimento[k][j] <= 99) {
                                labelsMatutinoDataNascimento.push('19' + MatutinoNascimento[k][j])
                            }
                        }
                    }
                }

                ChartBar('Matutino_DataNascimento', 'bar', 'Matutino', labelsMatutinoDataNascimento, MatutinoDadosDataNascimento, 'Datas de Nascimento(Em Anos)');


                let NoturnoNascimento = [];
                let NoturnoDadosDataNascimento = [];
                let labelsNoturnoDataNascimento = [];
                let NoturnoDataNascimento = [];
                let NoturnoAnoNascimento = [];

                for (let i = 0; i < respNoturno[8].length; i++) {
                    NoturnoDataNascimento[i] = (respNoturno[8][i].split('/'))
                    NoturnoAnoNascimento[i] = NoturnoDataNascimento[i][2]
                }

                for (let i = 0; i < opcDataNascimento.length; i++) {
                    NoturnoNascimento[i] = new Array()
                }

                for (j = 0; j < opcDataNascimento.length; j++) {
                    for (k = 0; k < NoturnoDataNascimento.length; k++) {
                        if (NoturnoAnoNascimento[k] === opcDataNascimento[j]) {
                            NoturnoNascimento[j].push(NoturnoAnoNascimento[k])
                        }
                    }
                    if (NoturnoNascimento[j].length > 0) {
                        NoturnoDadosDataNascimento.push(NoturnoNascimento[j].length)
                    }
                }

                for (j = 0; j < 1; j++) {
                    for (k = 0; k < opcDataNascimento.length; k++) {
                        if (NoturnoNascimento[k][j] != undefined) {
                            if (NoturnoNascimento[k][j] >= 00 && NoturnoNascimento[k][j] <= 40) {
                                labelsNoturnoDataNascimento.push('20' + NoturnoNascimento[k][j])
                            } else if (NoturnoNascimento[k][j] >= 41 && NoturnoNascimento[k][j] <= 99) {
                                labelsNoturnoDataNascimento.push('19' + NoturnoNascimento[k][j])
                            }
                        }
                    }
                }

                ChartBar('Noturno_DataNascimento', 'bar', 'Noturno', labelsNoturnoDataNascimento, NoturnoDadosDataNascimento, 'Datas de Nascimento(Em Anos)');


                // 8 - Estado Civil
                let estadoCivil = [];
                let DadosEstadoCivil = [];
                let labelsEstadoCivil = [];
                let MatutinoEstadoCivil = [];
                let MatutinoDadosEstadoCivil = [];
                let labelsMatutinoEstadoCivil = [];
                let NoturnoEstadoCivil = [];
                let NoturnoDadosEstadoCivil = [];
                let NoturnolabelsEstadoCivil = [];

                GerarGraficoPie(estadoCivil, opcEstadoCivil, respostas, 9, labelsEstadoCivil, DadosEstadoCivil, 'estado_civil', 'Estado Civil');
                GerarGraficoPie(MatutinoEstadoCivil, opcEstadoCivil, respMatutino, 9, labelsMatutinoEstadoCivil, MatutinoDadosEstadoCivil, 'Matutino_Estado_civil', 'Estado Civil');
                GerarGraficoPie(NoturnoEstadoCivil, opcEstadoCivil, respNoturno, 9, NoturnolabelsEstadoCivil, NoturnoDadosEstadoCivil, 'Noturno_Estado_civil', 'Estado Civil');

                // 9 - Portadores de Necessidades especiais
                let portadores = [];
                let DadosPortadores = [];
                let labelsPortadores = [];
                let MatutinoPortadores = [];
                let MatutinoDadosPortadores = [];
                let labelsMatutinoPortadores = [];
                let NoturnoPortadores = [];
                let NoturnoDadosPortadores = [];
                let labelsNoturnoPortadores = [];

                GerarGraficoPie(portadores, opcPortador, respostas, 10, labelsPortadores, DadosPortadores, 'Portador_de_Necessidade', 'Portadores de Necessidades Especiais');
                GerarGraficoPie(MatutinoPortadores, opcPortador, respMatutino, 10, labelsMatutinoPortadores, MatutinoDadosPortadores, 'Matutino_Portador_de_Necessidade', 'Portadores de Necessidades Especiais');
                GerarGraficoPie(NoturnoPortadores, opcPortador, respNoturno, 10, labelsNoturnoPortadores, NoturnoDadosPortadores, 'Noturno_Portador_de_Necessidade', 'Portadores de Necessidades Especiais');

                // 10 - Convive com Portadores de Necessidades especiais
                let ConvivePort = [];
                let DadosConvivePort = [];
                let labelsConvivePort = [];
                let MatutinoConvivePort = [];
                let MatutinoDadosConvivePort = [];
                let labelsMatutinoConvivePort = [];
                let NoturnoConvivePort = [];
                let NoturnoDadosConvivePort = [];
                let labelsNoturnoConvivePort = [];

                GerarGraficoPie(ConvivePort, opcConvivePort, respostas, 11, labelsConvivePort, DadosConvivePort, 'convive_com_portador', 'Convive com Portadores de Necessidades Especiais');
                GerarGraficoPie(MatutinoConvivePort, opcConvivePort, respMatutino, 11, labelsMatutinoConvivePort, MatutinoDadosConvivePort, 'Matutino_Convive_com_portador', 'Convive com Portadores de Necessidades Especiais');
                GerarGraficoPie(NoturnoConvivePort, opcConvivePort, respNoturno, 11, labelsNoturnoConvivePort, NoturnoDadosConvivePort, 'Noturno_Convive_com_portador', 'Convive com Portadores de Necessidades Especiais');

                // 11 - Quantidade de filhos
                let QtdFilhos = [];
                let DadosQtdFilhos = [];
                let labelsQtdFilhos = [];
                let MatutinoQtdFilhos = [];
                let MatutinoDadosQtdFilhos = [];
                let labelsMatutinoQtdFilhos = [];
                let NoturnoQtdFilhos = [];
                let NoturnoDadosQtdFilhos = [];
                let labelsNoturnoQtdFilhos = [];

                GerarGraficoPie(QtdFilhos, opcQtdFilhos, respostas, 12, labelsQtdFilhos, DadosQtdFilhos, 'qtd_de_filhos', "Quantidade de filhos de cada estudante");
                GerarGraficoPie(MatutinoQtdFilhos, opcQtdFilhos, respMatutino, 12, labelsMatutinoQtdFilhos, MatutinoDadosQtdFilhos, 'Matutino_Qtd_de_filhos', "Quantidade de filhos de cada estudante");
                GerarGraficoPie(NoturnoQtdFilhos, opcQtdFilhos, respNoturno, 12, labelsNoturnoQtdFilhos, NoturnoDadosQtdFilhos, 'Noturno_Qtd_de_filhos', "Quantidade de filhos de cada estudante");

                // 12. Com quem você mora atualmente?
                let moraCom = [];
                let DadosMoraCom = [];
                let labelsMoraCom = [];
                let MatutinoMoraCom = [];
                let MatutinoDadosMoraCom = [];
                let labelsMatutinoMoraCom = [];
                let NoturnoMoraCom = [];
                let NoturnoDadosMoraCom = [];
                let labelsNoturnoMoraCom = [];

                GerarGraficoPie(moraCom, opcMoraCom, respostas, 13, labelsMoraCom, DadosMoraCom, 'moram_com', "Com quem cada estudante mora");
                GerarGraficoPie(MatutinoMoraCom, opcMoraCom, respMatutino, 13, labelsMatutinoMoraCom, MatutinoDadosMoraCom, 'Matutino_Moram_com', "Com quem cada estudante mora");
                GerarGraficoPie(NoturnoMoraCom, opcMoraCom, respNoturno, 13, labelsNoturnoMoraCom, NoturnoDadosMoraCom, 'Noturno_Moram_com', "Com quem cada estudante mora");

                //13. Quantas pessoas, incluindo você, moram no seu domicílio?
                let QtdMoradores = [];
                let DadosQtdMoradores = [];
                let labelsQtdMoradores = [];
                let MatutinoQtdMoradores = [];
                let MatutinoDadosQtdMoradores = [];
                let labelsMatutinoQtdMoradores = [];
                let NoturnoQtdMoradores = [];
                let NoturnoDadosQtdMoradores = [];
                let labelsNoturnoQtdMoradores = [];

                GerarGraficoPie(QtdMoradores, opcQtdMoradores, respostas, 14, labelsQtdMoradores, DadosQtdMoradores, 'QTD_de_pessoas_moram_junto', "Quantidade de pessoas que moram com cada aluno");
                GerarGraficoPie(MatutinoQtdMoradores, opcQtdMoradores, respMatutino, 14, labelsMatutinoQtdMoradores, MatutinoDadosQtdMoradores, 'Matutino_QTD_de_pessoas_moram_junto', "Quantidade de pessoas que moram com cada aluno");
                GerarGraficoPie(NoturnoQtdMoradores, opcQtdMoradores, respNoturno, 14, labelsNoturnoQtdMoradores, NoturnoDadosQtdMoradores, 'Noturno_QTD_de_pessoas_moram_junto', "Quantidade de pessoas que moram com cada aluno");

                // 14. Qual a situação do domicílio onde mora?
                let SituacaoDomicilio = [];
                let DadosSituacaoDomi = [];
                let labelsSituacaoDomi = [];
                let MatutinoSituacaoDomicilio = [];
                let MatutinoDadosSituacaoDomi = [];
                let labelsMatutinoSituacaoDomi = [];
                let NoturnoSituacaoDomicilio = [];
                let NoturnoDadosSituacaoDomi = [];
                let labelsNoturnoSituacaoDomi = [];

                GerarGraficoPie(SituacaoDomicilio, opcSituacaoDomi, respostas, 15, labelsSituacaoDomi, DadosSituacaoDomi, 'situacao_domicilio', "Situação do Domicílio")
                GerarGraficoPie(MatutinoSituacaoDomicilio, opcSituacaoDomi, respMatutino, 15, labelsMatutinoSituacaoDomi, MatutinoDadosSituacaoDomi, 'Matutino_Situacao_domicilio', "Situação do Domicílio")
                GerarGraficoPie(NoturnoSituacaoDomicilio, opcSituacaoDomi, respNoturno, 15, labelsNoturnoSituacaoDomi, NoturnoDadosSituacaoDomi, 'Noturno_Situacao_domicilio', "Situação do Domicílio")

                // 15. Tempo de moradia neste domicílio (Em anos)
                let TempoMoradia = [];
                let DadosTempoMoradia = [];
                let labelsTempoMoradia = [];
                let MatutinoTempoMoradia = [];
                let MatutinoDadosTempoMoradia = [];
                let labelsMatutinoTempoMoradia = [];
                let NoturnoTempoMoradia = [];
                let NoturnoDadosTempoMoradia = [];
                let labelsNoturnoTempoMoradia = [];

                GerarGraficoBar(TempoMoradia, opcTempoMoradia, respostas, 16, labelsTempoMoradia, DadosTempoMoradia, 'tempo_moradia', 'bar', 'Geral', 'Tempo de moradia no domicílio(Em anos)');
                GerarGraficoBar(MatutinoTempoMoradia, opcTempoMoradia, respMatutino, 16, labelsMatutinoTempoMoradia, MatutinoDadosTempoMoradia, 'Matutino_Tempo_moradia', 'bar', 'Matutino', 'Tempo de moradia no domicílio(Em anos)');
                GerarGraficoBar(NoturnoTempoMoradia, opcTempoMoradia, respNoturno, 16, labelsNoturnoTempoMoradia, NoturnoDadosTempoMoradia, 'Noturno_Tempo_moradia', 'bar', 'Noturno', 'Tempo de moradia no domicílio(Em anos)');

                // 16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)
                let RendaMensal = [];
                let DadosRendaMensal = [];
                let labelsRendaMensal = [];
                let MatutinoRendaMensal = [];
                let MatutinoDadosRendaMensal = [];
                let labelsMatutinoRendaMensal = [];
                let NoturnoRendaMensal = [];
                let NoturnoDadosRendaMensal = [];
                let labelsNoturnoRendaMensal = [];

                GerarGraficoPie(RendaMensal, opcRendaMensal, respostas, 17, labelsRendaMensal, DadosRendaMensal, 'salario_min', "Faixa de renda mensal da família do estudante (em Salários Mínimos)");
                GerarGraficoPie(MatutinoRendaMensal, opcRendaMensal, respMatutino, 17, labelsMatutinoRendaMensal, MatutinoDadosRendaMensal, 'Matutino_Salario_min', "Faixa de renda mensal da família do estudante (em Salários Mínimos)");
                GerarGraficoPie(NoturnoRendaMensal, opcRendaMensal, respNoturno, 17, labelsNoturnoRendaMensal, NoturnoDadosRendaMensal, 'Noturno_Salario_min', "Faixa de renda mensal da família do estudante (em Salários Mínimos)");

                //17.1. Quantas geladeiras há em seu domicílio
                let QtdGeladeira = [];
                let DadosQtdGeladeira = [];
                let labelsQtdGeladeira = [];
                let MatutinoQtdGeladeira = [];
                let MatutinoDadosQtdGeladeira = [];
                let labelsMatutinoQtdGeladeira = [];
                let NoturnoQtdGeladeira = [];
                let NoturnoDadosQtdGeladeira = [];
                let labelsNoturnoQtdGeladeira = [];

                GerarGraficoPie(QtdGeladeira, opc17QtdeCadaCoisa, respostas, 18, labelsQtdGeladeira, DadosQtdGeladeira, 'qtd_geladeira', "Quantidade de Geladeiras de cada aluno");
                GerarGraficoPie(MatutinoQtdGeladeira, opc17QtdeCadaCoisa, respMatutino, 18, labelsMatutinoQtdGeladeira, MatutinoDadosQtdGeladeira, 'Matutino_Qtd_geladeira', "Quantidade de Geladeiras de cada aluno");
                GerarGraficoPie(NoturnoQtdGeladeira, opc17QtdeCadaCoisa, respNoturno, 18, labelsNoturnoQtdGeladeira, NoturnoDadosQtdGeladeira, 'Noturno_Qtd_geladeira', "Quantidade de Geladeiras de cada aluno");

                // 17.2. Quantos celulares comuns há em seu domicílio?
                let QtdCelular = [];
                let DadosQtdCelular = [];
                let labelsQtdCelular = [];
                let MatutinoQtdCelular = [];
                let MatutinoDadosQtdCelular = [];
                let labelsMatutinoQtdCelular = [];
                let NoturnoQtdCelular = [];
                let NoturnoDadosQtdCelular = [];
                let labelsNoturnoQtdCelular = [];

                GerarGraficoPie(QtdCelular, opc17QtdeCadaCoisa, respostas, 19, labelsQtdCelular, DadosQtdCelular, 'qtd_celular_comum', "Quantidade de celulares comuns de cada aluno");
                GerarGraficoPie(MatutinoQtdCelular, opc17QtdeCadaCoisa, respMatutino, 19, labelsMatutinoQtdCelular, MatutinoDadosQtdCelular, 'Matutino_Qtd_celular_comum', "Quantidade de celulares comuns de cada aluno");
                GerarGraficoPie(NoturnoQtdCelular, opc17QtdeCadaCoisa, respNoturno, 19, labelsNoturnoQtdCelular, NoturnoDadosQtdCelular, 'Noturno_Qtd_celular_comum', "Quantidade de celulares comuns de cada aluno");

                // 17.3. Quantos micro-ondas há em seu domicílio?
                let QtdMicroOndas = [];
                let DadosQtdMicroOndas = [];
                let labelsQtdMicroOndas = [];
                let MatutinoQtdMicroOndas = [];
                let MatutinoDadosQtdMicroOndas = [];
                let labelsMatutinoQtdMicroOndas = [];
                let NoturnoQtdMicroOndas = [];
                let NoturnoDadosQtdMicroOndas = [];
                let labelsNoturnoQtdMicroOndas = [];

                GerarGraficoPie(QtdMicroOndas, opc17QtdeCadaCoisa, respostas, 20, labelsQtdMicroOndas, DadosQtdMicroOndas, 'qtd_micro_ondas', 'Quantidade de micro-ondas de cada aluno');
                GerarGraficoPie(MatutinoQtdMicroOndas, opc17QtdeCadaCoisa, respMatutino, 20, labelsMatutinoQtdMicroOndas, MatutinoDadosQtdMicroOndas, 'Matutino_Qtd_micro_ondas', 'Quantidade de micro-ondas de cada aluno');
                GerarGraficoPie(NoturnoQtdMicroOndas, opc17QtdeCadaCoisa, respNoturno, 20, labelsNoturnoQtdMicroOndas, NoturnoDadosQtdMicroOndas, 'Noturno_Qtd_micro_ondas', 'Quantidade de micro-ondas de cada aluno');

                // 17.4. Quantos notebooks há em seu domicílio?
                let QtdNotebooks = [];
                let DadosQtdNotebooks = [];
                let labelsQtdNotebook = [];
                let MatutinoQtdNotebooks = [];
                let MatutinoDadosQtdNotebooks = [];
                let labelsMatutinoQtdNotebook = [];
                let NoturnoQtdNotebooks = [];
                let NoturnoDadosQtdNotebooks = [];
                let labelsNoturnoQtdNotebook = [];

                GerarGraficoPie(QtdNotebooks, opc17QtdeCadaCoisa, respostas, 21, labelsQtdNotebook, DadosQtdNotebooks, 'qtd_notebooks', 'Quantidade de Notebooks de cada aluno');
                GerarGraficoPie(MatutinoQtdNotebooks, opc17QtdeCadaCoisa, respMatutino, 21, labelsMatutinoQtdNotebook, MatutinoDadosQtdNotebooks, 'Matutino_Qtd_notebooks', 'Quantidade de Notebooks de cada aluno');
                GerarGraficoPie(NoturnoQtdNotebooks, opc17QtdeCadaCoisa, respNoturno, 21, labelsNoturnoQtdNotebook, NoturnoDadosQtdNotebooks, 'Noturno_Qtd_notebooks', 'Quantidade de Notebooks de cada aluno');

                // 17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?
                let Qtd_Maquina_de_Lavar = [];
                let DadosMaquinaLavar = [];
                let labelsMaquinaLavar = [];
                let MatutinoQtd_Maquina_de_Lavar = [];
                let MatutinoDadosMaquinaLavar = [];
                let labelsMatutinoMaquinaLavar = [];
                let NoturnoQtd_Maquina_de_Lavar = [];
                let NoturnoDadosMaquinaLavar = [];
                let labelsNoturnoMaquinaLavar = [];

                GerarGraficoPie(Qtd_Maquina_de_Lavar, opc17QtdeCadaCoisa, respostas, 22, labelsMaquinaLavar, DadosMaquinaLavar, 'qtd_Maquina_de_Lavar', 'Quantidade de Máquinas de lavar roupa de cada aluno');
                GerarGraficoPie(MatutinoQtd_Maquina_de_Lavar, opc17QtdeCadaCoisa, respMatutino, 22, labelsMatutinoMaquinaLavar, MatutinoDadosMaquinaLavar, 'Matutino_Qtd_Maquina_de_Lavar', 'Quantidade de Máquinas de lavar roupa de cada aluno');
                GerarGraficoPie(NoturnoQtd_Maquina_de_Lavar, opc17QtdeCadaCoisa, respNoturno, 22, labelsNoturnoMaquinaLavar, NoturnoDadosMaquinaLavar, 'Noturno_Qtd_Maquina_de_Lavar', 'Quantidade de Máquinas de lavar roupa de cada aluno');

                // 17.6. Quantas motocicletas há em seu domicílio?
                let Qtd_motoclicletas = [];
                let DadosMotocicletas = [];
                let labelsMotocicletas = [];
                let MatutinoQtd_motoclicletas = [];
                let MatutinoDadosMotocicletas = [];
                let labelsMatutinoMotocicletas = [];
                let NoturnoQtd_motoclicletas = [];
                let NoturnoDadosMotocicletas = [];
                let labelsNoturnoMotocicletas = [];

                GerarGraficoPie(Qtd_motoclicletas, opc17QtdeCadaCoisa, respostas, 23, labelsMotocicletas, DadosMotocicletas, 'qtd_motocicletas', 'Quantidade de Motocicletas de cada aluno');
                GerarGraficoPie(MatutinoQtd_motoclicletas, opc17QtdeCadaCoisa, respMatutino, 23, labelsMatutinoMotocicletas, MatutinoDadosMotocicletas, 'Matutino_Qtd_motocicletas', 'Quantidade de Motocicletas de cada aluno');
                GerarGraficoPie(NoturnoQtd_motoclicletas, opc17QtdeCadaCoisa, respNoturno, 23, labelsNoturnoMotocicletas, NoturnoDadosMotocicletas, 'Noturno_Qtd_motocicletas', 'Quantidade de Motocicletas de cada aluno');

                // 17.7. Quantos automóveis há em seu domicílio?
                let QtdAutomoveis = [];
                let DadosAutomoveis = [];
                let labelsAutomoveis = [];
                let MatutinoQtdAutomoveis = [];
                let MatutinoDadosAutomoveis = [];
                let labelsMatutinoAutomoveis = [];
                let NoturnoQtdAutomoveis = [];
                let NoturnoDadosAutomoveis = [];
                let labelsNoturnoAutomoveis = [];

                GerarGraficoPie(QtdAutomoveis, opc17QtdeCadaCoisa, respostas, 24, labelsAutomoveis, DadosAutomoveis, 'qtd_Automoveis', 'Quantidade de Automóveis de cada aluno');
                GerarGraficoPie(MatutinoQtdAutomoveis, opc17QtdeCadaCoisa, respMatutino, 24, labelsMatutinoAutomoveis, MatutinoDadosAutomoveis, 'Matutino_Qtd_Automoveis', 'Quantidade de Automóveis de cada aluno');
                GerarGraficoPie(NoturnoQtdAutomoveis, opc17QtdeCadaCoisa, respNoturno, 24, labelsNoturnoAutomoveis, NoturnoDadosAutomoveis, 'Noturno_Qtd_Automoveis', 'Quantidade de Automóveis de cada aluno');

                // 17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?
                let QtdDVD = [];
                let DadosDVD = [];
                let labelsDvd = [];
                let MatutinoQtdDVD = [];
                let MatutinoDadosDVD = [];
                let labelsMatutinoDvd = [];
                let NoturnoQtdDVD = [];
                let NoturnoDadosDVD = [];
                let labelsNoturnoDvd = [];

                GerarGraficoPie(QtdDVD, opc17QtdeCadaCoisa, respostas, 25, labelsDvd, DadosDVD, 'qtd_DVD', 'Quantidade de DVD players');
                GerarGraficoPie(MatutinoQtdDVD, opc17QtdeCadaCoisa, respMatutino, 25, labelsMatutinoDvd, MatutinoDadosDVD, 'Matutino_Qtd_DVD', 'Quantidade de DVD players');
                GerarGraficoPie(NoturnoQtdDVD, opc17QtdeCadaCoisa, respNoturno, 25, labelsNoturnoDvd, NoturnoDadosDVD, 'Noturno_Qtd_DVD', 'Quantidade de DVD players');

                // 17.9. Quantos televisores há em seu domicílio?
                let QtdTV = [];
                let DadosTV = [];
                let labelsQtdTV = [];
                let MatutinoQtdTV = [];
                let MatutinoDadosTV = [];
                let labelsMatutinoQtdTV = [];
                let NoturnoQtdTV = [];
                let NoturnoDadosTV = [];
                let labelsNoturnoQtdTV = [];

                GerarGraficoPie(QtdTV, opc17QtdeCadaCoisa, respostas, 26, labelsQtdTV, DadosTV, 'qtd_TV', 'Quantidade de TVs de cada aluno');
                GerarGraficoPie(MatutinoQtdTV, opc17QtdeCadaCoisa, respMatutino, 26, labelsMatutinoQtdTV, MatutinoDadosTV, 'Matutino_Qtd_TV', 'Quantidade de TVs de cada aluno');
                GerarGraficoPie(NoturnoQtdTV, opc17QtdeCadaCoisa, respNoturno, 26, labelsNoturnoQtdTV, NoturnoDadosTV, 'Noturno_Qtd_TV', 'Quantidade de TVs de cada aluno');

                // 17.10. Quantos smartphones há em seu domicílio?
                let Qtd_Smartphones = [];
                let DadosSmatphones = [];
                let labelsQtdSmartphone = [];
                let MatutinoQtd_Smartphones = [];
                let MatutinoDadosSmatphones = [];
                let labelsMatutinoQtdSmartphone = [];
                let NoturnoQtd_Smartphones = [];
                let NoturnoDadosSmatphones = [];
                let labelsNoturnoQtdSmartphone = [];

                GerarGraficoPie(Qtd_Smartphones, opc17QtdeCadaCoisa, respostas, 27, labelsQtdSmartphone, DadosSmatphones, 'qtd_Smartphones', 'Quantidade de Smartphones de cada aluno');
                GerarGraficoPie(MatutinoQtd_Smartphones, opc17QtdeCadaCoisa, respMatutino, 27, labelsMatutinoQtdSmartphone, MatutinoDadosSmatphones, 'Matutino_Qtd_Smartphones', 'Quantidade de Smartphones de cada aluno');
                GerarGraficoPie(NoturnoQtd_Smartphones, opc17QtdeCadaCoisa, respNoturno, 27, labelsNoturnoQtdSmartphone, NoturnoDadosSmatphones, 'Noturno_Qtd_Smartphones', 'Quantidade de Smartphones de cada aluno');

                // 18. No seu domicílio tem? questão com mais de uma alternativa, n esta terminada
                let DomicilioTem = [];
                let DadosDomicilioTem = [];
                let labelsDomicilioTem = [];
                let MatutinoDomicilioTem = [];
                let MatutinoDadosDomicilioTem = [];
                let labelsMatutinoDomicilioTem = [];
                let NoturnoDomicilioTem = [];
                let NoturnoDadosDomicilioTem = [];
                let labelsNoturnoDomicilioTem = [];

                GerarGraficoBar(DomicilioTem, opcTemNoDomicilio, respostas, 28, labelsDomicilioTem, DadosDomicilioTem, 'Oque_tem_No_Domicilio', 'horizontalBar', 'Geral', 'Na casa de cada estudante tem');
                GerarGraficoBar(MatutinoDomicilioTem, opcTemNoDomicilio, respMatutino, 28, labelsMatutinoDomicilioTem, MatutinoDadosDomicilioTem, 'Matutino_Oque_tem_No_Domicilio', 'horizontalBar', 'Matutino', 'Na casa de cada estudante tem');
                GerarGraficoBar(NoturnoDomicilioTem, opcTemNoDomicilio, respNoturno, 28, labelsNoturnoDomicilioTem, NoturnoDadosDomicilioTem, 'Noturno_Oque_tem_No_Domicilio', 'horizontalBar', 'Noturno', 'Na casa de cada estudante tem');

                // 19.1. Você trabalha?
                let trabalha = [];
                let DadosTrabalho = [];
                let labelsTrabalho = [];
                let MatutinoTrabalha = [];
                let MatutinoDadosTrabalho = [];
                let labelsMatutinoTrabalho = [];
                let NoturnoTrabalha = [];
                let NoturnoDadosTrabalho = [];
                let labelsNoturnoTrabalho = [];

                GerarGraficoPie(trabalha, opcTrabalha, respostas, 29, labelsTrabalho, DadosTrabalho, 'Trabalho', 'Você trabalha?');
                GerarGraficoPie(MatutinoTrabalha, opcTrabalha, respMatutino, 29, labelsMatutinoTrabalho, MatutinoDadosTrabalho, 'Matutino_Trabalho', 'Você trabalha?');
                GerarGraficoPie(NoturnoTrabalha, opcTrabalha, respNoturno, 29, labelsNoturnoTrabalho, NoturnoDadosTrabalho, 'Noturno_Trabalho', 'Você trabalha?');

                //19.2. Qual o seu vínculo com o emprego?
                let VinculoEmprego = [];
                let DadosVinculo = [];
                let labelsVinculo = [];
                let MatutinoVinculoEmprego = [];
                let MatutinoDadosVinculo = [];
                let labelsMatutinoVinculo = [];
                let NoturnoVinculoEmprego = [];
                let NoturnoDadosVinculo = [];
                let labelsNoturnoVinculo = [];

                GerarGraficoPie(VinculoEmprego, opcVinculoEmprego, respostas, 30, labelsVinculo, DadosVinculo, 'Vinculo_Emprego', "Vinculo com o emprego");
                GerarGraficoPie(MatutinoVinculoEmprego, opcVinculoEmprego, respMatutino, 30, labelsMatutinoVinculo, MatutinoDadosVinculo, 'Matutino_Vinculo_Emprego', "Vinculo com o emprego");
                GerarGraficoPie(NoturnoVinculoEmprego, opcVinculoEmprego, respNoturno, 30, labelsNoturnoVinculo, NoturnoDadosVinculo, 'Noturno_Vinculo_Emprego', "Vinculo com o emprego");

                // 19.3. Qual a área do seu trabalho?
                let AreaTrabalho = [];
                let DadosAreaTrabalho = [];
                let labelsAreaTrabalho = [];
                let MatutinoAreaTrabalho = [];
                let MatutinoDadosAreaTrabalho = [];
                let labelsMatutinoAreaTrabalho = [];
                let NoturnoAreaTrabalho = [];
                let NoturnoDadosAreaTrabalho = [];
                let labelsNoturnoAreaTrabalho = [];

                GerarGraficoPie(AreaTrabalho, opcAreaTrabalho, respostas, 31, labelsAreaTrabalho, DadosAreaTrabalho, 'Area_trabalho', "Qual a área do seu trabalho?");
                GerarGraficoPie(MatutinoAreaTrabalho, opcAreaTrabalho, respMatutino, 31, labelsMatutinoAreaTrabalho, MatutinoDadosAreaTrabalho, 'Matutino_Area_trabalho', "Qual a área do seu trabalho?");
                GerarGraficoPie(NoturnoAreaTrabalho, opcAreaTrabalho, respNoturno, 31, labelsNoturnoAreaTrabalho, NoturnoDadosAreaTrabalho, 'Noturno_Area_trabalho', "Qual a área do seu trabalho?");

                // 19.4. Qual seu horário de trabalho?
                let HorarioTrabalho = [];
                let DadosHorario = [];
                let labelsHorario = [];
                let MatutinoHorarioTrabalho = [];
                let MatutinoDadosHorario = [];
                let labelsMatutinoHorario = [];
                let NoturnoHorarioTrabalho = [];
                let NoturnoDadosHorario = [];
                let labelsNoturnoHorario = [];

                GerarGraficoPie(HorarioTrabalho, opcHorarioTrabalho, respostas, 32, labelsHorario, DadosHorario, 'Horario_Trabalho', "Horários de Trabalho");
                GerarGraficoPie(MatutinoHorarioTrabalho, opcHorarioTrabalho, respMatutino, 32, labelsMatutinoHorario, MatutinoDadosHorario, 'Matutino_Horario_Trabalho', "Horários de Trabalho");
                GerarGraficoPie(NoturnoHorarioTrabalho, opcHorarioTrabalho, respNoturno, 32, labelsNoturnoHorario, NoturnoDadosHorario, 'Noturno_Horario_Trabalho', "Horários de Trabalho");

                // 20. Você tem plano de saúde privado?
                let PlanoSaude = [];
                let DadosPlanoSaude = [];
                let labelsPlanoSaude = [];
                let MatutinoPlanoSaude = [];
                let MatutinoDadosPlanoSaude = [];
                let labelsMatutinoPlanoSaude = [];
                let NoturnoPlanoSaude = [];
                let NoturnoDadosPlanoSaude = [];
                let labelsNoturnoPlanoSaude = [];

                GerarGraficoPie(PlanoSaude, opcPlanoDeSaude, respostas, 34, labelsPlanoSaude, DadosPlanoSaude, 'Plano_Saude', 'Planos de Saúde');
                GerarGraficoPie(MatutinoPlanoSaude, opcPlanoDeSaude, respMatutino, 34, labelsMatutinoPlanoSaude, MatutinoDadosPlanoSaude, 'Matutino_Plano_Saude', 'Planos de Saúde');
                GerarGraficoPie(NoturnoPlanoSaude, opcPlanoDeSaude, respNoturno, 34, labelsNoturnoPlanoSaude, NoturnoDadosPlanoSaude, 'Noturno_Plano_Saude', 'Planos de Saúde');

                // 21.1. Qual o grau de escolaridade do seu pai?
                let EscolaridadePai = [];
                let DadosEscolaridadePai = [];
                let LabelsEscolaPai = [];
                let MatutinoEscolaridadePai = [];
                let MatutinoDadosEscolaridadePai = [];
                let LabelsMatutinoEscolaPai = [];
                let NoturnoEscolaridadePai = [];
                let NoturnoDadosEscolaridadePai = [];
                let LabelsNoturnoEscolaPai = [];

                GerarGraficoPie(EscolaridadePai, opcEscolaridade, respostas, 35, LabelsEscolaPai, DadosEscolaridadePai, 'Escolaridade_Pai', 'Grau de Escolaridade do Pai dos Alunos');
                GerarGraficoPie(MatutinoEscolaridadePai, opcEscolaridade, respMatutino, 35, LabelsMatutinoEscolaPai, MatutinoDadosEscolaridadePai, 'Matutino_Escolaridade_Pai', 'Grau de Escolaridade do Pai dos Alunos');
                GerarGraficoPie(NoturnoEscolaridadePai, opcEscolaridade, respNoturno, 35, LabelsNoturnoEscolaPai, NoturnoDadosEscolaridadePai, 'Noturno_Escolaridade_Pai', 'Grau de Escolaridade do Pai dos Alunos');

                // 21.2. Qual o grau de escolaridade da sua mãe?
                let EscolaridadeMae = [];
                let DadosEscolaridadeMae = [];
                let LabelsEscolaMae = [];
                let MatutinoEscolaridadeMae = [];
                let MatutinoDadosEscolaridadeMae = [];
                let LabelsMatutinoEscolaMae = [];
                let NoturnoEscolaridadeMae = [];
                let NoturnoDadosEscolaridadeMae = [];
                let LabelsNoturnoEscolaMae = [];

                GerarGraficoPie(EscolaridadeMae, opcEscolaridade, respostas, 36, LabelsEscolaMae, DadosEscolaridadeMae, 'Escolaridade_Mae', 'Grau de Escolaridade da Mãe dos Alunos');
                GerarGraficoPie(MatutinoEscolaridadeMae, opcEscolaridade, respMatutino, 36, LabelsMatutinoEscolaMae, MatutinoDadosEscolaridadeMae, 'Matutino_Escolaridade_Mae', 'Grau de Escolaridade da Mãe dos Alunos');
                GerarGraficoPie(NoturnoEscolaridadeMae, opcEscolaridade, respNoturno, 36, LabelsNoturnoEscolaMae, NoturnoDadosEscolaridadeMae, 'Noturno_Escolaridade_Mae', 'Grau de Escolaridade da Mãe dos Alunos');

                // 22. Na sua vida escolar você estudou
                let EstudouEm = [];
                let DadosEstudouEm = [];
                let labelsEstudouEm = [];
                let MatutinoEstudouEm = [];
                let MatutinoDadosEstudouEm = [];
                let labelsMatutinoEstudouEm = [];
                let NoturnoEstudouEm = [];
                let NoturnoDadosEstudouEm = [];
                let labelsNoturnoEstudouEm = [];

                GerarGraficoPie(EstudouEm, opcEstudou, respostas, 37, labelsEstudouEm, DadosEstudouEm, 'Estudou_Em', "Na sua vida escolar você estudou");
                GerarGraficoPie(MatutinoEstudouEm, opcEstudou, respMatutino, 37, labelsMatutinoEstudouEm, MatutinoDadosEstudouEm, 'Matutino_Estudou_Em', "Na sua vida escolar você estudou");
                GerarGraficoPie(NoturnoEstudouEm, opcEstudou, respNoturno, 37, labelsNoturnoEstudouEm, NoturnoDadosEstudouEm, 'Noturno_Estudou_Em', "Na sua vida escolar você estudou");

                // 23.1. Com que frequência você utiliza microcomputadores?
                let FrequenciaMicrocomputadores = [];
                let DadosFrequenciaComp = [];
                let labelsFrequenciaComp = [];
                let MatutinoFrequenciaMicrocomputadores = [];
                let MatutinoDadosFrequenciaComp = [];
                let labelsMatutinoFrequenciaComp = [];
                let NoturnoFrequenciaMicrocomputadores = [];
                let NoturnoDadosFrequenciaComp = [];
                let labelsNoturnoFrequenciaComp = [];

                GerarGraficoPie(FrequenciaMicrocomputadores, opcUsaMicroComp, respostas, 38, labelsFrequenciaComp, DadosFrequenciaComp, 'Frequencia_Microcomputadores', 'Com que frequência você utiliza microcomputadores?');
                GerarGraficoPie(MatutinoFrequenciaMicrocomputadores, opcUsaMicroComp, respMatutino, 38, labelsMatutinoFrequenciaComp, MatutinoDadosFrequenciaComp, 'Matutino_Frequencia_Microcomputadores', 'Com que frequência você utiliza microcomputadores?');
                GerarGraficoPie(NoturnoFrequenciaMicrocomputadores, opcUsaMicroComp, respNoturno, 38, labelsNoturnoFrequenciaComp, NoturnoDadosFrequenciaComp, 'Noturno_Frequencia_Microcomputadores', 'Com que frequência você utiliza microcomputadores?');

                // 23.2. Onde você utiliza microcomputadores?
                let OndeUtilizaMicro = [];
                let DadosOndeUtilizaMicro = [];
                let labelsUtilizaMicro = [];
                let MatutinoOndeUtilizaMicro = [];
                let MatutinoDadosOndeUtilizaMicro = [];
                let labelsMatutinoUtilizaMicro = [];
                let NoturnoOndeUtilizaMicro = [];
                let NoturnoDadosOndeUtilizaMicro = [];
                let labelsNoturnoUtilizaMicro = [];

                GerarGraficoBar(OndeUtilizaMicro, opcOndeUsaMicroComp, respostas, 39, labelsUtilizaMicro, DadosOndeUtilizaMicro, 'Onde_Microcomputadores', 'horizontalBar', 'Geral', 'Onde você utiliza microcomputadores?');
                GerarGraficoBar(MatutinoOndeUtilizaMicro, opcOndeUsaMicroComp, respMatutino, 39, labelsMatutinoUtilizaMicro, MatutinoDadosOndeUtilizaMicro, 'Matutino_Onde_Microcomputadores', 'horizontalBar', 'Matutino', 'Onde você utiliza microcomputadores?');
                GerarGraficoBar(NoturnoOndeUtilizaMicro, opcOndeUsaMicroComp, respNoturno, 39, labelsNoturnoUtilizaMicro, NoturnoDadosOndeUtilizaMicro, 'Noturno_Onde_Microcomputadores', 'horizontalBar', 'Noturno', 'Onde você utiliza microcomputadores?');

                // 23.3. Com qual finalidade você utiliza microcomputadores?
                let FinalidadeUtiliMicro = [];
                let DadosFinalidadeUtiliMicro = [];
                let labelsFinalidadeUtiliza = [];
                let MatutinoFinalidadeUtiliMicro = [];
                let MatutinoDadosFinalidadeUtiliMicro = [];
                let labelsMatutinoFinalidadeUtiliza = [];
                let NoturnoFinalidadeUtiliMicro = [];
                let NoturnoDadosFinalidadeUtiliMicro = [];
                let labelsNoturnoFinalidadeUtiliza = [];

                GerarGraficoBar(FinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, respostas, 40, labelsFinalidadeUtiliza, DadosFinalidadeUtiliMicro, 'Finalidade_Microcomputadores', 'horizontalBar', 'Geral', 'Com qual finalidade você utiliza microcomputadores?');
                GerarGraficoBar(MatutinoFinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, respMatutino, 40, labelsMatutinoFinalidadeUtiliza, MatutinoDadosFinalidadeUtiliMicro, 'Matutino_Finalidade_Microcomputadores', 'horizontalBar', 'Matutino', 'Com qual finalidade você utiliza microcomputadores?');
                GerarGraficoBar(NoturnoFinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, respNoturno, 40, labelsNoturnoFinalidadeUtiliza, NoturnoDadosFinalidadeUtiliMicro, 'Noturno_Finalidade_Microcomputadores', 'horizontalBar', 'Noturno', 'Com qual finalidade você utiliza microcomputadores?');

                // 24. Como você classifica seu conhecimento em informática
                let ConhecimentoInformatica = [];
                let DadosConhecimentoInformatica = [];
                let labelsInformatica = [];
                let MatutinoConhecimentoInformatica = [];
                let MatutinoDadosConhecimentoInformatica = [];
                let labelsMatutinoInformatica = [];
                let NoturnoConhecimentoInformatica = [];
                let NoturnoDadosConhecimentoInformatica = [];
                let labelsNoturnoInformatica = [];

                GerarGraficoPie(ConhecimentoInformatica, opcConhecimentoInformatica, respostas, 41, labelsInformatica, DadosConhecimentoInformatica, 'Conhecimento_Informatica', 'Conhecimento em Informática');
                GerarGraficoPie(MatutinoConhecimentoInformatica, opcConhecimentoInformatica, respMatutino, 41, labelsMatutinoInformatica, MatutinoDadosConhecimentoInformatica, 'Matutino_Conhecimento_Informatica', 'Conhecimento em Informática');
                GerarGraficoPie(NoturnoConhecimentoInformatica, opcConhecimentoInformatica, respNoturno, 41, labelsNoturnoInformatica, NoturnoDadosConhecimentoInformatica, 'Noturno_Conhecimento_Informatica', 'Conhecimento em Informática');

                // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Windows]
                let ConhecimentoWindows = [];
                let DadosWindows = [];
                let labelsWindows = [];
                let MatutinoConhecimentoWindows = [];
                let MatutinoDadosWindows = [];
                let labelsMatutinoWindows = [];
                let NoturnoConhecimentoWindows = [];
                let NoturnoDadosWindows = [];
                let labelsNoturnoWindows = [];

                GerarGraficoPie(ConhecimentoWindows, opcConhecimentoInformatica, respostas, 42, labelsWindows, DadosWindows, 'Conhecimento_Windows', 'Conhecimento no Windows');
                GerarGraficoPie(MatutinoConhecimentoWindows, opcConhecimentoInformatica, respMatutino, 42, labelsMatutinoWindows, MatutinoDadosWindows, 'Matutino_Conhecimento_Windows', 'Conhecimento no Windows');
                GerarGraficoPie(NoturnoConhecimentoWindows, opcConhecimentoInformatica, respNoturno, 42, labelsNoturnoWindows, NoturnoDadosWindows, 'Noturno_Conhecimento_Windows', 'Conhecimento no Windows');


                // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Linux]
                let ConhecimentoLinux = [];
                let DadosLinux = [];
                let labelsLinux = [];
                let MatutinoConhecimentoLinux = [];
                let MatutinoDadosLinux = [];
                let labelsMatutinoLinux = [];
                let NoturnoConhecimentoLinux = [];
                let NoturnoDadosLinux = [];
                let labelsNoturnoLinux = [];

                GerarGraficoPie(ConhecimentoLinux, opcConhecimentoInformatica, respostas, 43, labelsLinux, DadosLinux, 'Conhecimento_Linux', 'Conhecimento no Linux');
                GerarGraficoPie(MatutinoConhecimentoLinux, opcConhecimentoInformatica, respMatutino, 43, labelsMatutinoLinux, MatutinoDadosLinux, 'Matutino_Conhecimento_Linux', 'Conhecimento no Linux');
                GerarGraficoPie(NoturnoConhecimentoLinux, opcConhecimentoInformatica, respNoturno, 43, labelsNoturnoLinux, NoturnoDadosLinux, 'Noturno_Conhecimento_Linux', 'Conhecimento no Linux');

                // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Editores de textos (Word, Writer, etc.)]
                let ConhecimentoWord = [];
                let DadosWord = [];
                let labelsWord = [];
                let MatutinoConhecimentoWord = [];
                let MatutinoDadosWord = [];
                let labelsMatutinoWord = [];
                let NoturnoConhecimentoWord = [];
                let NoturnoDadosWord = [];
                let labelsNoturnoWord = [];

                GerarGraficoPie(ConhecimentoWord, opcConhecimentoInformatica, respostas, 44, labelsWord, DadosWord, 'Conhecimento_Word', 'Conhecimento em Editores de textos (Word, Writer, etc.)');
                GerarGraficoPie(MatutinoConhecimentoWord, opcConhecimentoInformatica, respMatutino, 44, labelsMatutinoWord, MatutinoDadosWord, 'Matutino_Conhecimento_Word', 'Conhecimento em Editores de textos (Word, Writer, etc.)');
                GerarGraficoPie(NoturnoConhecimentoWord, opcConhecimentoInformatica, respNoturno, 44, labelsNoturnoWord, NoturnoDadosWord, 'Noturno_Conhecimento_Word', 'Conhecimento em Editores de textos (Word, Writer, etc.)');

                // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Planilhas eletrônicas (Excel, Calc, etc.)]
                let ConhecimentoExcel = [];
                let DadosExcel = [];
                let labelsExcel = [];
                let MatutinoConhecimentoExcel = [];
                let MatutinoDadosExcel = [];
                let labelsMatutinoExcel = [];
                let NoturnoConhecimentoExcel = [];
                let NoturnoDadosExcel = [];
                let labelsNoturnoExcel = [];

                GerarGraficoPie(ConhecimentoExcel, opcConhecimentoInformatica, respostas, 45, labelsExcel, DadosExcel, 'Conhecimento_Excel', 'Conhecimento em Planilhas eletrônicas (Excel, Calc, etc.)');
                GerarGraficoPie(MatutinoConhecimentoExcel, opcConhecimentoInformatica, respMatutino, 45, labelsMatutinoExcel, MatutinoDadosExcel, 'Matutino_Conhecimento_Excel', 'Conhecimento em Planilhas eletrônicas (Excel, Calc, etc.)');
                GerarGraficoPie(NoturnoConhecimentoExcel, opcConhecimentoInformatica, respNoturno, 45, labelsNoturnoExcel, NoturnoDadosExcel, 'Noturno_Conhecimento_Excel', 'Conhecimento em Planilhas eletrônicas (Excel, Calc, etc.)');

                // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Apresentadores (Powerpoint, Impress, Prezzi, etc.)]
                let ConhecimentoPowerPoint = [];
                let DadosPowerPoint = [];
                let labelsPowerPoint = [];
                let MatutinoConhecimentoPowerPoint = [];
                let MatutinoDadosPowerPoint = [];
                let labelsMatutinoPowerPoint = [];
                let NoturnoConhecimentoPowerPoint = [];
                let NoturnoDadosPowerPoint = [];
                let labelsNoturnoPowerPoint = [];

                GerarGraficoPie(ConhecimentoPowerPoint, opcConhecimentoInformatica, respostas, 46, labelsPowerPoint, DadosPowerPoint, 'Conhecimento_PowerPoint', 'Conhecimento em Apresentadores (Powerpoint, Impress, Prezzi, etc.)');
                GerarGraficoPie(MatutinoConhecimentoPowerPoint, opcConhecimentoInformatica, respMatutino, 46, labelsMatutinoPowerPoint, MatutinoDadosPowerPoint, 'Matutino_Conhecimento_PowerPoint', 'Conhecimento em Apresentadores (Powerpoint, Impress, Prezzi, etc.)');
                GerarGraficoPie(NoturnoConhecimentoPowerPoint, opcConhecimentoInformatica, respNoturno, 46, labelsNoturnoPowerPoint, NoturnoDadosPowerPoint, 'Noturno_Conhecimento_PowerPoint', 'Conhecimento em Apresentadores (Powerpoint, Impress, Prezzi, etc.)');

                // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Sistemas de Gestão Empresaria]
                let ConhecimentoGestaoEmpresarial = [];
                let DadosGestaoEmpresarial = [];
                let labelsGestaoEmpresarial = [];
                let MatutinoConhecimentoGestaoEmpresarial = [];
                let MatutinoDadosGestaoEmpresarial = [];
                let labelsMatutinoGestaoEmpresarial = [];
                let NoturnoConhecimentoGestaoEmpresarial = [];
                let NoturnoDadosGestaoEmpresarial = [];
                let labelsNoturnoGestaoEmpresarial = [];

                GerarGraficoPie(ConhecimentoGestaoEmpresarial, opcConhecimentoInformatica, respostas, 47, labelsGestaoEmpresarial, DadosGestaoEmpresarial, 'Conhecimento_GestaoEmpresarial', 'Conhecimento em Sistemas de Gestão Empresaria');
                GerarGraficoPie(MatutinoConhecimentoGestaoEmpresarial, opcConhecimentoInformatica, respMatutino, 47, labelsMatutinoGestaoEmpresarial, MatutinoDadosGestaoEmpresarial, 'Matutino_Conhecimento_GestaoEmpresarial', 'Conhecimento em Sistemas de Gestão Empresaria');
                GerarGraficoPie(NoturnoConhecimentoGestaoEmpresarial, opcConhecimentoInformatica, respNoturno, 47, labelsNoturnoGestaoEmpresarial, NoturnoDadosGestaoEmpresarial, 'Noturno_Conhecimento_GestaoEmpresarial', 'Conhecimento em Sistemas de Gestão Empresaria');

                //26. Agora, considere seu conhecimento sobre idiomas [Inglês]
                let conhecimentoIngles = [];
                let DadosIngles = [];
                let labelsInlges = [];
                let MatutinoConhecimentoIngles = [];
                let MatutinoDadosIngles = [];
                let labelsMatutinoInlges = [];
                let NoturnoConhecimentoIngles = [];
                let NoturnoDadosIngles = [];
                let labelsNoturnoInlges = [];

                GerarGraficoPie(conhecimentoIngles, opcConhecimentoLinguas, respostas, 48, labelsInlges, DadosIngles, 'Ingles', 'Conhecimento em inglês');
                GerarGraficoPie(MatutinoConhecimentoIngles, opcConhecimentoLinguas, respMatutino, 48, labelsMatutinoInlges, MatutinoDadosIngles, 'Matutino_Ingles', 'Conhecimento em inglês');
                GerarGraficoPie(NoturnoConhecimentoIngles, opcConhecimentoLinguas, respNoturno, 48, labelsNoturnoInlges, NoturnoDadosIngles, 'Noturno_Ingles', 'Conhecimento em inglês');

                // 26. Agora, considere seu conhecimento sobre idiomas [Espanhol]
                let conhecimentoEspanhol = [];
                let DadosEspanhol = [];
                let labelsEspanhol = [];
                let MatutinoConhecimentoEspanhol = [];
                let MatutinoDadosEspanhol = [];
                let labelsMatutinoEspanhol = [];
                let NoturnoConhecimentoEspanhol = [];
                let NoturnoDadosEspanhol = [];
                let labelsNoturnoEspanhol = [];

                GerarGraficoPie(conhecimentoEspanhol, opcConhecimentoLinguas, respostas, 49, labelsEspanhol, DadosEspanhol, 'Espanhol', 'Conhecimento em Espanhol');
                GerarGraficoPie(MatutinoConhecimentoEspanhol, opcConhecimentoLinguas, respMatutino, 49, labelsMatutinoEspanhol, MatutinoDadosEspanhol, 'Matutino_Espanhol', 'Conhecimento em Espanhol');
                GerarGraficoPie(NoturnoConhecimentoEspanhol, opcConhecimentoLinguas, respNoturno, 49, labelsNoturnoEspanhol, NoturnoDadosEspanhol, 'Noturno_Espanhol', 'Conhecimento em Espanhol');

                // 26. Agora, considere seu conhecimento sobre idiomas [Outros]
                let conhecimentoIdioma = [];
                let DadosIdioma = [];
                let labelsIdioma = [];
                let MatutinoConhecimentoIdioma = [];
                let MatutinoDadosIdioma = [];
                let labelsMatutinoIdioma = [];
                let NoturnoConhecimentoIdioma = [];
                let NoturnoDadosIdioma = [];
                let labelsNoturnoIdioma = [];

                GerarGraficoPie(conhecimentoIdioma, opcConhecimentoLinguas, respostas, 50, labelsIdioma, DadosIdioma, 'Outros', 'Conhecimento em outros idiomas');
                GerarGraficoPie(MatutinoConhecimentoIdioma, opcConhecimentoLinguas, respMatutino, 50, labelsMatutinoIdioma, MatutinoDadosIdioma, 'Matutino_Outros', 'Conhecimento em outros idiomas');
                GerarGraficoPie(NoturnoConhecimentoIdioma, opcConhecimentoLinguas, respNoturno, 50, labelsNoturnoIdioma, NoturnoDadosIdioma, 'Noturno_Outros', 'Conhecimento em outros idiomas');

                // 27. Considere a busca por informação nos seguintes meios de comunicação [Televisores]
                let Televisores = [];
                let DadosTelevisores = [];
                let labelsTelevisores = [];
                let MatutinoTelevisores = [];
                let MatutinoDadosTelevisores = [];
                let labelsMatutinoTelevisores = [];
                let NoturnoTelevisores = [];
                let NoturnoDadosTelevisores = [];
                let labelsNoturnoTelevisores = [];


                GerarGraficoPie(Televisores, opcBuscaInformação, respostas, 51, labelsTelevisores, DadosTelevisores, 'Televisores', 'Busca por informação no seguinte meio de comunicação(Televisores)');
                GerarGraficoPie(MatutinoTelevisores, opcBuscaInformação, respMatutino, 51, labelsMatutinoTelevisores, MatutinoDadosTelevisores, 'Matutino_Televisores', 'Busca por informação no seguinte meio de comunicação(Televisores)');
                GerarGraficoPie(NoturnoTelevisores, opcBuscaInformação, respNoturno, 51, labelsNoturnoTelevisores, NoturnoDadosTelevisores, 'Noturno_Televisores', 'Busca por informação no seguinte meio de comunicação(Televisores)');

                // 27. Considere a busca por informação nos seguintes meios de comunicação [Internet]
                let internet = [];
                let DadosInternet = [];
                let labelsInternet = [];
                let MatutinoInternet = [];
                let MatutinoDadosInternet = [];
                let labelsMatutinoInternet = [];
                let NoturnoInternet = [];
                let NoturnoDadosInternet = [];
                let labelsNoturnoInternet = [];

                GerarGraficoPie(internet, opcBuscaInformação, respostas, 52, labelsInternet, DadosInternet, 'Internet', 'Busca por informação no seguinte meio de comunicação(Internet)');
                GerarGraficoPie(MatutinoInternet, opcBuscaInformação, respMatutino, 52, labelsMatutinoInternet, MatutinoDadosInternet, 'Matutino_Internet', 'Busca por informação no seguinte meio de comunicação(Internet)');
                GerarGraficoPie(NoturnoInternet, opcBuscaInformação, respNoturno, 52, labelsNoturnoInternet, NoturnoDadosInternet, 'Noturno_Internet', 'Busca por informação no seguinte meio de comunicação(Internet)');

                // 27. Considere a busca por informação nos seguintes meios de comunicação [Revistas]
                let revistas = [];
                let DadosRevistas = [];
                let labelsRevistas = [];
                let MatutinoRevistas = [];
                let MatutinoDadosRevistas = [];
                let labelsMatutinoRevistas = [];
                let NoturnoRevistas = [];
                let NoturnoDadosRevistas = [];
                let labelsNoturnoRevistas = [];

                GerarGraficoPie(revistas, opcBuscaInformação, respostas, 53, labelsRevistas, DadosRevistas, 'Revistas', 'Busca por informação no seguinte meio de comunicação(Revistas)');
                GerarGraficoPie(MatutinoRevistas, opcBuscaInformação, respMatutino, 53, labelsMatutinoRevistas, MatutinoDadosRevistas, 'Matutino_Revistas', 'Busca por informação no seguinte meio de comunicação(Revistas)');
                GerarGraficoPie(NoturnoRevistas, opcBuscaInformação, respNoturno, 53, labelsNoturnoRevistas, NoturnoDadosRevistas, 'Noturno_Revistas', 'Busca por informação no seguinte meio de comunicação(Revistas)');

                // 27. Considere a busca por informação nos seguintes meios de comunicação [Jornais]
                let jornais = [];
                let DadosJornais = [];
                let labelsJornais = [];
                let MatutinoJornais = [];
                let MatutinoDadosJornais = [];
                let labelsMatutinoJornais = [];
                let NoturnoJornais = [];
                let NoturnoDadosJornais = [];
                let labelsNoturnoJornais = [];

                GerarGraficoPie(jornais, opcBuscaInformação, respostas, 54, labelsJornais, DadosJornais, 'Jornais', 'Busca por informação no seguinte meio de comunicação(Jornais)');
                GerarGraficoPie(MatutinoJornais, opcBuscaInformação, respMatutino, 54, labelsMatutinoJornais, MatutinoDadosJornais, 'Matutino_Jornais', 'Busca por informação no seguinte meio de comunicação(Jornais)');
                GerarGraficoPie(NoturnoJornais, opcBuscaInformação, respNoturno, 54, labelsNoturnoJornais, NoturnoDadosJornais, 'Noturno_Jornais', 'Busca por informação no seguinte meio de comunicação(Jornais)');

                // 27. Considere a busca por informação nos seguintes meios de comunicação [Rádio]
                let Radio = [];
                let DadosRadio = [];
                let labelsRadio = [];
                let MatutinoRadio = [];
                let MatutinoDadosRadio = [];
                let labelsMatutinoRadio = [];
                let NoturnoRadio = [];
                let NoturnoDadosRadio = [];
                let labelsNoturnoRadio = [];

                GerarGraficoPie(Radio, opcBuscaInformação, respostas, 55, labelsRadio, DadosRadio, 'Radio', 'Busca por informação no seguinte meio de comunicação(Rádio)');
                GerarGraficoPie(MatutinoRadio, opcBuscaInformação, respMatutino, 55, labelsMatutinoRadio, MatutinoDadosRadio, 'Matutino_Radio', 'Busca por informação no seguinte meio de comunicação(Rádio)');
                GerarGraficoPie(NoturnoRadio, opcBuscaInformação, respNoturno, 55, labelsNoturnoRadio, NoturnoDadosRadio, 'Noturno_Radio', 'Busca por informação no seguinte meio de comunicação(Rádio)');

                // 27. Considere a busca por informação nos seguintes meios de comunicação [Redes socias]
                let RedesSociais = [];
                let DadosRedesSociais = [];
                let labelsRedesSociais = [];
                let MatutinoRedesSociais = [];
                let MatutinoDadosRedesSociais = [];
                let labelsMatutinoRedesSociais = [];
                let NoturnoRedesSociais = [];
                let NoturnoDadosRedesSociais = [];
                let labelsNoturnoRedesSociais = [];

                GerarGraficoPie(RedesSociais, opcBuscaInformação, respostas, 56, labelsRedesSociais, DadosRedesSociais, 'Redes_Sociais', 'Busca por informação no seguinte meio de comunicação(Redes Sociais)');
                GerarGraficoPie(MatutinoRedesSociais, opcBuscaInformação, respMatutino, 56, labelsMatutinoRedesSociais, MatutinoDadosRedesSociais, 'Matutino_Redes_Sociais', 'Busca por informação no seguinte meio de comunicação(Redes Sociais)');
                GerarGraficoPie(NoturnoRedesSociais, opcBuscaInformação, respNoturno, 56, labelsNoturnoRedesSociais, NoturnoDadosRedesSociais, 'Noturno_Redes_Sociais', 'Busca por informação no seguinte meio de comunicação(Redes Sociais)');

                // 27. Considere a busca por informação nos seguintes meios de comunicação [Conversas com Amigos]
                let ConversaComAmigos = [];
                let DadosConversaComAmigos = [];
                let labelsConversaComAmigos = [];
                let MatutinoConversaComAmigos = [];
                let MatutinoDadosConversaComAmigos = [];
                let labelsMatutinoConversaComAmigos = [];
                let NoturnoConversaComAmigos = [];
                let NoturnoDadosConversaComAmigos = [];
                let labelsNoturnoConversaComAmigos = [];

                GerarGraficoPie(ConversaComAmigos, opcBuscaInformação, respostas, 57, labelsConversaComAmigos, DadosConversaComAmigos, 'Conversas_com_Amigos', 'Busca por informação no seguinte meio de comunicação(Conversas com Amigos)');
                GerarGraficoPie(MatutinoConversaComAmigos, opcBuscaInformação, respMatutino, 57, labelsMatutinoConversaComAmigos, MatutinoDadosConversaComAmigos, 'Matutino_Conversas_com_Amigos', 'Busca por informação no seguinte meio de comunicação(Conversas com Amigos)');
                GerarGraficoPie(NoturnoConversaComAmigos, opcBuscaInformação, respNoturno, 57, labelsNoturnoConversaComAmigos, NoturnoDadosConversaComAmigos, 'Noturno_Conversas_com_Amigos', 'Busca por informação no seguinte meio de comunicação(Conversas com Amigos)');

                // 28. Se você lê jornal, qual a frequência?
                let LeJornal = [];
                let DadosLeJornal = [];
                let labelsLeJornal = [];
                let MatutinoLeJornal = [];
                let MatutinoDadosLeJornal = [];
                let labelsMatutinoLeJornal = [];
                let NoturnoLeJornal = [];
                let NoturnoDadosLeJornal = [];
                let labelsNoturnoLeJornal = [];

                GerarGraficoPie(LeJornal, opcLeJornal, respostas, 58, labelsLeJornal, DadosLeJornal, 'Le_Jornal', ' Frequência que leem jornal');
                GerarGraficoPie(MatutinoLeJornal, opcLeJornal, respMatutino, 58, labelsMatutinoLeJornal, MatutinoDadosLeJornal, 'Matutino_Le_Jornal', ' Frequência que leem jornal');
                GerarGraficoPie(NoturnoLeJornal, opcLeJornal, respNoturno, 58, labelsNoturnoLeJornal, NoturnoDadosLeJornal, 'Noturno_Le_Jornal', ' Frequência que leem jornal');

                // 29. Se você lê jornal, quais os assuntos que mais lê?
                let assuntosQueLeem = [];
                let DadosAssuntosQueLeem = [];
                let labelsAssuntosQueLeem = [];
                let MatutinoAssuntosQueLeem = [];
                let MatutinoDadosAssuntosQueLeem = [];
                let labelsMatutinoAssuntosQueLeem = [];
                let NoturnoAssuntosQueLeem = [];
                let NoturnoDadosAssuntosQueLeem = [];
                let labelsNoturnoAssuntosQueLeem = [];

                GerarGraficoBar(assuntosQueLeem, opcAssuntosJornal, respostas, 59, labelsAssuntosQueLeem, DadosAssuntosQueLeem, 'Assuntos_que_Le', 'horizontalBar', 'Geral', 'Assuntos que mais leem');
                GerarGraficoBar(MatutinoAssuntosQueLeem, opcAssuntosJornal, respMatutino, 59, labelsMatutinoAssuntosQueLeem, MatutinoDadosAssuntosQueLeem, 'Matutino_Assuntos_que_Le', 'horizontalBar', 'Matutino', 'Assuntos que mais leem');
                GerarGraficoBar(NoturnoAssuntosQueLeem, opcAssuntosJornal, respNoturno, 59, labelsNoturnoAssuntosQueLeem, NoturnoDadosAssuntosQueLeem, 'Noturno_Assuntos_que_Le', 'horizontalBar', 'Noturno', 'Assuntos que mais leem');

                // 30. Não considerando os livros escolares, quantos livros você lê por ano (em média)
                let QtdLivros = [];
                let DadosQtdLivros = [];
                let labelsQtdLivros = [];
                let MatutinoQtdLivros = [];
                let MatutinoDadosQtdLivros = [];
                let labelsMatutinoQtdLivros = [];
                let NoturnoQtdLivros = [];
                let NoturnoDadosQtdLivros = [];
                let labelsNoturnoQtdLivros = [];

                GerarGraficoPie(QtdLivros, opcQtdLivros, respostas, 60, labelsQtdLivros, DadosQtdLivros, 'Qtd_Livros', 'Quantos livros cada aluno lê por ano (em média)');
                GerarGraficoPie(MatutinoQtdLivros, opcQtdLivros, respMatutino, 60, labelsMatutinoQtdLivros, MatutinoDadosQtdLivros, 'Matutino_Qtd_Livros', 'Quantos livros cada aluno lê por ano (em média)');
                GerarGraficoPie(NoturnoQtdLivros, opcQtdLivros, respNoturno, 60, labelsNoturnoQtdLivros, NoturnoDadosQtdLivros, 'Noturno_Qtd_Livros', 'Quantos livros cada aluno lê por ano (em média)');

                // 31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?
                let leLivros = [];
                let DadosLeLivros = [];
                let labelsLeLivros = [];
                let MatutinoLeLivros = [];
                let MatutinoDadosLeLivros = [];
                let labelsMatutinoLeLivros = [];
                let NoturnoLeLivros = [];
                let NoturnoDadosLeLivros = [];
                let labelsNoturnoLeLivros = [];

                GerarGraficoBar(leLivros, opcLeLivros, respostas, 61, labelsLeLivros, DadosLeLivros, 'Le_Livros', 'horizontalBar', 'Geral', "Gêneros de livros preferidos de cada aluno");
                GerarGraficoBar(MatutinoLeLivros, opcLeLivros, respMatutino, 61, labelsMatutinoLeLivros, MatutinoDadosLeLivros, 'Matutino_Le_Livros', 'horizontalBar', 'Matutino', "Gêneros de livros preferidos de cada aluno");
                GerarGraficoBar(NoturnoLeLivros, opcLeLivros, respNoturno, 61, labelsNoturnoLeLivros, NoturnoDadosLeLivros, 'Noturno_Le_Livros', 'horizontalBar', 'Noturno', "Gêneros de livros preferidos de cada aluno");

                // 32. Você dedica parte do seu tempo para atividades voluntárias?
                let atividadesVolutaria = [];
                let DadosAtiviadeVoluntaria = [];
                let labelsAtividadeVoluntaria = [];
                let MatutinoAtividadesVolutaria = [];
                let MatutinoDadosAtiviadeVoluntaria = [];
                let labelsMatutinoAtividadeVoluntaria = [];
                let NoturnoAtividadesVolutaria = [];
                let NoturnoDadosAtiviadeVoluntaria = [];
                let labelsNoturnoAtividadeVoluntaria = [];

                GerarGraficoPie(atividadesVolutaria, opcAtividadeVolun, respostas, 62, labelsAtividadeVoluntaria, DadosAtiviadeVoluntaria, 'Atividade_Voluntaria', "Dedica parte do tempo para atividades Voluntárias");
                GerarGraficoPie(MatutinoAtividadesVolutaria, opcAtividadeVolun, respMatutino, 62, labelsMatutinoAtividadeVoluntaria, MatutinoDadosAtiviadeVoluntaria, 'Matutino_Atividade_Voluntaria', "Dedica parte do tempo para atividades Voluntárias");
                GerarGraficoPie(NoturnoAtividadesVolutaria, opcAtividadeVolun, respNoturno, 62, labelsNoturnoAtividadeVoluntaria, NoturnoDadosAtiviadeVoluntaria, 'Noturno_Atividade_Voluntaria', "Dedica parte do tempo para atividades Voluntárias");

                //33. Qual religião você professa?": "Evangélica"
                let religiao = [];
                let DadosReligiao = [];
                let lablesReligiao = [];
                let MatutinoReligiao = [];
                let MatutinoDadosReligiao = [];
                let lablesMatutinoReligiao = [];
                let NoturnoReligiao = [];
                let NoturnoDadosReligiao = [];
                let lablesNoturnoReligiao = [];

                GerarGraficoPie(religiao, opcReligiao, respostas, 63, lablesReligiao, DadosReligiao, 'Religiao', 'Religião');
                GerarGraficoPie(MatutinoReligiao, opcReligiao, respMatutino, 63, lablesMatutinoReligiao, MatutinoDadosReligiao, 'Matutino_Religiao', 'Religião');
                GerarGraficoPie(NoturnoReligiao, opcReligiao, respNoturno, 63, lablesNoturnoReligiao, NoturnoDadosReligiao, 'Noturno_Religiao', 'Religião');

                // 34. Quais fontes de entretenimento cultural você usa?
                let FontesEntretenimento = [];
                let DadosFontesEntretenimento = [];
                let labelsFontesEntretenimento = [];
                let MatutinoFontesEntretenimento = [];
                let MatutinoDadosFontesEntretenimento = [];
                let labelsMatutinoFontesEntretenimento = [];
                let NoturnoFontesEntretenimento = [];
                let NoturnoDadosFontesEntretenimento = [];
                let labelsNoturnoFontesEntretenimento = [];

                GerarGraficoBar(FontesEntretenimento, opcEntretenimento, respostas, 64, labelsFontesEntretenimento, DadosFontesEntretenimento, "Fontes_Entretenimento", 'horizontalBar', 'Geral', 'Fontes de Entretenimento');
                GerarGraficoBar(MatutinoFontesEntretenimento, opcEntretenimento, respMatutino, 64, labelsMatutinoFontesEntretenimento, MatutinoDadosFontesEntretenimento, "Matutino_Fontes_Entretenimento", 'horizontalBar', 'Matutino', 'Fontes de Entretenimento');
                GerarGraficoBar(NoturnoFontesEntretenimento, opcEntretenimento, respNoturno, 64, labelsNoturnoFontesEntretenimento, NoturnoDadosFontesEntretenimento, "Noturno_Fontes_Entretenimento", 'horizontalBar', 'Noturno', 'Fontes de Entretenimento');

                //35. Estamos quase acabando... Como conheceu a FATEC Franca?
                let ConheceuFatec = [];
                let DadosConheceuFatec = [];
                let labelsConheceuFatec = [];
                let MatutinoConheceuFatec = [];
                let MatutinoDadosConheceuFatec = [];
                let labelsMatutinoConheceuFatec = [];
                let NoturnoConheceuFatec = [];
                let NoturnoDadosConheceuFatec = [];
                let labelsNoturnoConheceuFatec = [];

                GerarGraficoBar(ConheceuFatec, opcConheceuFatec, respostas, 65, labelsConheceuFatec, DadosConheceuFatec, 'Conheceu_Fatec', 'horizontalBar', 'Geral', 'Como conheceu a FATEC Franca?');
                GerarGraficoBar(MatutinoConheceuFatec, opcConheceuFatec, respMatutino, 65, labelsMatutinoConheceuFatec, MatutinoDadosConheceuFatec, 'Matutino_Conheceu_Fatec', 'horizontalBar', 'Matutino', 'Como conheceu a FATEC Franca?')
                GerarGraficoBar(NoturnoConheceuFatec, opcConheceuFatec, respNoturno, 65, labelsNoturnoConheceuFatec, NoturnoDadosConheceuFatec, 'Noturno_Conheceu_Fatec', 'horizontalBar', 'Noturno', 'Como conheceu a FATEC Franca?')

                // 36. Porque você escolheu este curso?
                let EscolheuCurso = [];
                let DadosEscolheuCurso = [];
                let labelsEscolheuCurso = [];
                let MatutinoEscolheuCurso = [];
                let MatutinoDadosEscolheuCurso = [];
                let labelsMatutinoEscolheuCurso = [];
                let NoturnoEscolheuCurso = [];
                let NoturnoDadosEscolheuCurso = [];
                let labelsNoturnoEscolheuCurso = [];

                GerarGraficoBar(EscolheuCurso, opcEscolheuCurso, respostas, 66, labelsEscolheuCurso, DadosEscolheuCurso, 'Escolheu_Curso', 'horizontalBar', 'Geral', 'Porque você escolheu este curso?');
                GerarGraficoBar(MatutinoEscolheuCurso, opcEscolheuCurso, respMatutino, 66, labelsMatutinoEscolheuCurso, MatutinoDadosEscolheuCurso, 'Matutino_Escolheu_Curso', 'horizontalBar', 'Matutino', 'Porque você escolheu este curso?')
                GerarGraficoBar(NoturnoEscolheuCurso, opcEscolheuCurso, respNoturno, 66, labelsNoturnoEscolheuCurso, NoturnoDadosEscolheuCurso, 'Noturno_Escolheu_Curso', 'horizontalBar', 'Noturno', 'Porque você escolheu este curso?')

                // 37. Qual sua maior expectativa quanto ao curso?
                let ExpectativaCurso = [];
                let DadosExpectativaCurso = [];
                let labelsExpectativaCurso = [];
                let MatutinoExpectativaCurso = [];
                let MatutinoDadosExpectativaCurso = [];
                let labelsMatutinoExpectativaCurso = [];
                let NoturnoExpectativaCurso = [];
                let NoturnoDadosExpectativaCurso = [];
                let labelsNoturnoExpectativaCurso = [];

                GerarGraficoBar(ExpectativaCurso, opcExpectativa, respostas, 67, labelsExpectativaCurso, DadosExpectativaCurso, 'Expectativa_Curso', 'horizontalBar', 'Geral', 'Qual sua maior expectativa quanto ao curso?');
                GerarGraficoBar(MatutinoExpectativaCurso, opcExpectativa, respMatutino, 67, labelsMatutinoExpectativaCurso, MatutinoDadosExpectativaCurso, 'Matutino_Expectativa_Curso', 'horizontalBar', 'Matutino', 'Qual sua maior expectativa quanto ao curso?')
                GerarGraficoBar(NoturnoExpectativaCurso, opcExpectativa, respNoturno, 67, labelsNoturnoExpectativaCurso, NoturnoDadosExpectativaCurso, 'Noturno_Expectativa_Curso', 'horizontalBar', 'Noturno', 'Qual sua maior expectativa quanto ao curso?')

                // 38. Qual sua expectativa após se formar?
                let ExpectativaFormar = [];
                let DadosExpectativaFormar = [];
                let labelsExpectativaFormar = [];
                let MatutinoExpectativaFormar = [];
                let MatutinoDadosExpectativaFormar = [];
                let labelsMatutinoExpectativaFormar = [];
                let NoturnoExpectativaFormar = [];
                let NoturnoDadosExpectativaFormar = [];
                let labelsNoturnoExpectativaFormar = [];

                GerarGraficoBar(ExpectativaFormar, opcFormar, respostas, 68, labelsExpectativaFormar, DadosExpectativaFormar, 'Expectativa_Formar', 'horizontalBar', 'Geral', 'Qual sua expectativa após se formar?');
                GerarGraficoBar(MatutinoExpectativaFormar, opcFormar, respMatutino, 68, labelsMatutinoExpectativaFormar, MatutinoDadosExpectativaFormar, 'Matutino_Expectativa_Formar', 'horizontalBar', 'Matutino', 'Qual sua expectativa após se formar?')
                GerarGraficoBar(NoturnoExpectativaFormar, opcFormar, respNoturno, 68, labelsNoturnoExpectativaFormar, NoturnoDadosExpectativaFormar, 'Noturno_Expectativa_Formar', 'horizontalBar', 'Noturno', 'Qual sua expectativa após se formar?')

                //39. Você já estudou nesta escola?
                let estudouNaFatec = [];
                let DadosEstudouFatec = [];
                let labelsEstudouFatec = [];
                let MatutinoEstudouNaFatec = [];
                let MatutinoDadosEstudouFatec = [];
                let labelsMatutinoEstudouFatec = [];
                let NoturnoEstudouNaFatec = [];
                let NoturnoDadosEstudouFatec = [];
                let labelsNoturnoEstudouFatec = [];

                GerarGraficoPie(estudouNaFatec, opcEstudoNaEscola, respostas, 69, labelsEstudouFatec, DadosEstudouFatec, 'Estudou_Fatec', 'Você já estudou nesta escola?');
                GerarGraficoPie(MatutinoEstudouNaFatec, opcEstudoNaEscola, respMatutino, 69, labelsMatutinoEstudouFatec, MatutinoDadosEstudouFatec, 'Matutino_Estudou_Fatec', 'Você já estudou nesta escola?');
                GerarGraficoPie(NoturnoEstudouNaFatec, opcEstudoNaEscola, respNoturno, 69, labelsNoturnoEstudouFatec, NoturnoDadosEstudouFatec, 'Noturno_Estudou_Fatec', 'Você já estudou nesta escola?');

                //40. Você fez algum curso técnico?
                let cursoTecnico = [];
                let DadosCursoTecnico = [];
                let labelsCursoTecnico = [];
                let MatutinoCursoTecnico = [];
                let MatutinoDadosCursoTecnico = [];
                let labelsMatutinoCursoTecnico = [];
                let NoturnoCursoTecnico = [];
                let NoturnoDadosCursoTecnico = [];
                let labelsNoturnoCursoTecnico = [];

                GerarGraficoPie(cursoTecnico, opcCursoTecnico, respostas, 70, labelsCursoTecnico, DadosCursoTecnico, 'Curso_Tecnico', 'Você fez algum curso técnico?');
                GerarGraficoPie(MatutinoCursoTecnico, opcCursoTecnico, respMatutino, 70, labelsMatutinoCursoTecnico, MatutinoDadosCursoTecnico, 'Matutino_Curso_Tecnico', 'Você fez algum curso técnico?');
                GerarGraficoPie(NoturnoCursoTecnico, opcCursoTecnico, respNoturno, 70, labelsNoturnoCursoTecnico, NoturnoDadosCursoTecnico, 'Noturno_Curso_Tecnico', 'Você fez algum curso técnico?');

                // 41. Qual o meio de transporte você usa para vir à escola?
                let transporte = [];
                let DadosTransporte = [];
                let labelsTransporte = [];
                let MatutinoTransporte = [];
                let MatutinoDadosTransporte = [];
                let labelsMatutinoTransporte = [];
                let NoturnoTransporte = [];
                let NoturnoDadosTransporte = [];
                let labelsNoturnoTransporte = [];

                GerarGraficoPie(transporte, opcTransporte, respostas, 71, labelsTransporte, DadosTransporte, 'Transporte', 'Meios de transportes');
                GerarGraficoPie(MatutinoTransporte, opcTransporte, respMatutino, 71, labelsMatutinoTransporte, MatutinoDadosTransporte, 'Matutino_Transporte', 'Meios de transportes');
                GerarGraficoPie(NoturnoTransporte, opcTransporte, respNoturno, 71, labelsNoturnoTransporte, NoturnoDadosTransporte, 'Noturno_Transporte', 'Meios de transportes');

                jQuery('#xlx_json').val(json_object);
            });
        };

        reader.onerror = function (ex) {
            console.log(ex);
        };

        reader.readAsBinaryString(file);
    };
};

function handleFileSelect(evt) {
    var files = evt.target.files;
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(files[0]);
}

document
    .getElementById('upload')
    .addEventListener('change', handleFileSelect, false);

// Mostrar respostas Geral
document.getElementById('Geral').style.display = "block";
// Esconder respostas do do Matutino
document.getElementById('Matutino').style.display = "none";
// Esconder respostas do Noturno
document.getElementById('Noturno').style.display = "none";