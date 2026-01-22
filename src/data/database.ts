// === BANCO DE DADOS MASTER (PADRÃO "TREINADOR MODERNO" - REVISADO E COMPLETO) ===
// Contém 63 movimentos com descrições visuais, biomecânica e fisiologia.

export const db: Record<string, any> = {
    "crimp": {
        names: { pt: "Crimp (Reglete)", en: "Crimp" },
        tags: ["Esportiva", "Boulder", "Mãos", "Bloqueio", "Força"],
        // --- NOVO CAMPO DE MONETIZAÇÃO ---
        products: {
            text: { pt: "Sapatilhas para Edging", en: "Best Edging Shoes" },
            link: "https://www.decathlon.com.br/esportes/escalada/sapatilhas" // Exemplo
        },
        // ---------------------------------
                intro: {
            pt: "Transformar os dedos em garras de aço para dominar bordas minúsculas.",
            en: "Turning fingers into steel claws to master tiny edges."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine que seus dedos são ganchos. Em vez de se pendurar passivamente na pele, você arqueia os dedos para criar uma 'ponte' tensa. Isso conecta você à rocha com pressão ativa, não apenas atrito.</p><p><strong>O Mental:</strong> É o momento de 'ligar o interruptor'. O cérebro primitivo quer soltar a agarra porque a borda é afiada e desconfortável. O treino ensina a mente a entender que aquela tensão é segurança, mantendo o foco laser na ponta dos dedos.</p>",
            en: "<p><strong>Visual Logic:</strong> Arch fingers like steel hooks. Create a solid bridge using tension, not just friction.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Half Crimp (Meio):</strong> Dedos a 90º. É o ponto ideal entre força máxima e saúde a longo prazo.</li><li><strong>Full Crimp (Fechado):</strong> O polegar trava o indicador por cima. Gera força extra, mas coloca a estrutura em risco máximo.</li><li><strong>Open Crimp (Aberto):</strong> Dedos mais esticados. Menos força bruta, mais eficiência.</li></ul>",
            en: "<ul><li>Half Crimp (The Base)</li><li>Full Crimp (The Turbo)</li><li>Open Crimp (The Flow)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Funciona como a corda de um arco. Ao dobrar os dedos, você estica os tendões sobre as 'polias' (anéis de tecido nos ossos). Isso cria uma alavanca mecânica que multiplica a força na ponta do dedo.",
            en: "<strong>Mechanics:</strong> Like a bowstring. Tendons stretch over pulleys creating leverage to hold tiny edges."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexor Profundo (o único músculo capaz de dobrar a última falange do dedo).<br><strong>O Freio:</strong> Músculos do antebraço que travam o punho levemente para trás.",
            en: "<strong>Engine:</strong> Deep Flexor.<br><strong>Brake:</strong> Wrist extensors locking the wrist back."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Explosão pura (Anaeróbico). A pressão interna é tão grande que o sangue para de circular no dedo momentaneamente.",
            en: "<strong>Fuel:</strong> Pure explosion. Blood flow cuts off, giving seconds of max power."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Um estalo alto ('POP') é sinal de perigo real nas polias. <strong>Aquecimento:</strong> Abra e feche as mãos rápido e comece com suspensão progressiva. Jovens: evitem o Full Crimp!",
            en: "<strong>Red Alert:</strong> A 'POP' sound means stop. Warm up well. Youth: avoid Full Crimp!"
        }
    },

    "sloper": {
        names: { pt: "Sloper (Abaulado)", en: "Sloper" },
        tags: ["Boulder", "Esportiva", "Mãos", "Aderência", "Equilíbrio"],
        intro: {
            pt: "Acariciar a rocha em vez de esmagá-la: a arte da física e da confiança.",
            en: "Caressing the rock instead of crushing it: the art of physics and trust."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Não tente 'agarrar' uma bola de basquete com as pontas dos dedos; você usa a palma toda. O Sloper é igual. Você precisa moldar a mão na superfície e posicionar o corpo bem embaixo dela, como um pêndulo pesado.</p><p><strong>O Mental:</strong> É a 'escola da fé'. Você vai sentir que está caindo. O segredo não é apertar mais (isso faz suar), mas respirar, relaxar os ombros e confiar na aderência da pele.</p>",
            en: "<p><strong>Visual Logic:</strong> Like holding a basketball. Use the whole palm. Hang low like a pendulum.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Compressão:</strong> Abraçar a pedra ou volume como um urso (palmas opostas).</li><li><strong>Meat Hook:</strong> Dobrar o punho radicalmente para usar o antebraço como gancho.</li></ul>",
            en: "<ul><li>Compression (Bear hug)</li><li>Meat Hook (Wrist hook)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Física simples de atrito. Área de contato + Vetor Correto (perpendicular à superfície). Puxou torto, caiu.",
            en: "<strong>Mechanics:</strong> Contact Area + Vector. Pull perpendicular to the surface or slip."
        },
        anat: {
            pt: "<strong>A Base:</strong> Flexores do punho (para colar a palma).<br><strong>O Segredo:</strong> Grande Dorsal (Asas) e Ombros puxam o corpo para baixo.",
            en: "<strong>Base:</strong> Wrist flexors.<br><strong>Secret:</strong> Lats and Shoulders pulling body down/in."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Resistência e Coordenação. O maior inimigo aqui não é a falha muscular, é a falha térmica: o suor na ponta dos dedos.",
            en: "<strong>Fuel:</strong> Endurance. Enemy is sweat, not just fatigue."
        },
        care: {
            pt: "<strong>Dica de Ouro:</strong> Escove a agarra! O excesso de magnésio vira um 'rolamento' microscópico. Mantenha os ombros ativos para proteger a articulação.",
            en: "<strong>Gold Tip:</strong> Brush the hold! Too much chalk hurts. Keep shoulders active."
        }
    },

    "pinch": {
        names: { pt: "Pinch (Pinça)", en: "Pinch" },
        tags: ["Boulder", "Esportiva", "Mãos", "Bloqueio", "Força"],
        intro: {
            pt: "Ativar o modo 'garra de caranguejo': o polegar entra no jogo para esmagar.",
            en: "Activate 'crab claw' mode: thumb joins the game to crush."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> A maioria das agarras a gente puxa para baixo. O Pinch a gente aperta 'de lado'. É como segurar um livro pesado pela lombada: seus dedos puxam de um lado, o polegar empurra do outro, criando um grampo humano.</p><p><strong>O Mental:</strong> Persistência. O antebraço vai queimar rápido. O desafio é manter a pressão constante mesmo quando o cérebro grita para abrir a mão.</p>",
            en: "<p><strong>Visual Logic:</strong> Like holding a heavy book spine. Fingers pull, thumb pushes. Squeeze sideways.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Larga (Wide):</strong> Mão aberta como se segurasse um tijolo. Exige força bruta.</li><li><strong>Fina (Precision):</strong> Pinçar um cristal ou uma moeda. Exige precisão cirúrgica.</li></ul>",
            en: "<ul><li>Wide (Brute force)</li><li>Precision (Surgical accuracy)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Oposição. O polegar funciona como um torno de bancada. Ele precisa fazer força suficiente para anular a força dos outros quatro dedos juntos.",
            en: "<strong>Mechanics:</strong> Opposition. Thumb acts as a vice, countering the other four fingers."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Músculos da base do polegar (aquela 'almofada' gordinha da mão) e os extensores.",
            en: "<strong>Engine:</strong> Thumb pad muscles and extensors.<br><strong>Synergy:</strong> Full body tension."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Misto. Precisa de explosão para travar a pinça e resistência para não deixar ela abrir.",
            en: "<strong>Fuel:</strong> Mixed. Explosive lock + endurance hold. True hand strength indicator."
        },
        care: {
            pt: "<strong>Alerta:</strong> Dor na base do polegar é sinal de sobrecarga. <strong>Aquecimento:</strong> Aperte bolinhas de borracha e faça exercícios de oposição.",
            en: "<strong>Alert:</strong> Thumb base pain? Rest. <strong>Warm-up:</strong> Squeeze balls and finger taps."
        }
    },

    "undercling": {
        names: { pt: "Undercling (Invertida)", en: "Undercling" },
        tags: ["Esportiva", "Mãos", "Braços", "Tensão", "Força"],
        intro: {
            pt: "O mundo de ponta-cabeça: puxar para cima para colar os pés no chão.",
            en: "Upside down world: pulling up to glue feet to the ground."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine que você vai levantar um sofá pesado. Você pega por baixo e estica as pernas. Na escalada é igual: as mãos puxam a agarra para cima e os pés empurram o chão. Você vira um arco tenso.</p><p><strong>O Mental:</strong> Contra-intuitivo. O instinto é se pendurar, mas aqui você tem que se 'levantar' usando a agarra invertida como âncora.</p>",
            en: "<p><strong>Visual Logic:</strong> Lifting a heavy sofa. Hands pull up, legs push down. You become a tense arch.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Na Cintura:</strong> Braços esticados. É um descanso disfarçado e muito eficiente.</li><li><strong>Alto:</strong> Mão no peito. Bíceps gritando. Exige muita tensão de corpo.</li></ul>",
            en: "<ul><li>Waist (Rest in disguise)</li><li>High (Biceps screaming)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Tensão em Arco. O Core conecta a força das pernas (que empurram) com os braços (que puxam). Se o pé escorregar, o arco quebra.",
            en: "<strong>Mechanics:</strong> Arch Tension. Core connects leg push to arm pull. Slip means fall."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Bíceps (para a puxada) e Pernas (para a empurrada).<br><strong>A Cola:</strong> Lombar e Glúteos.",
            en: "<strong>Engine:</strong> Biceps/Legs.<br><strong>Glue:</strong> Lower back/Glutes keep hips close to wall."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tensão Corporal. O bíceps trabalha travado (isometria), mas a verdadeira energia vem das pernas.",
            en: "<strong>Fuel:</strong> Body Tension. Biceps lock, legs drive."
        },
        care: {
            pt: "<strong>Alerta:</strong> Se o pé escapar, o bíceps leva um tranco violento. Confie nos pés! <strong>Aquecimento:</strong> Roscas de bíceps leves e prancha.",
            en: "<strong>Alert:</strong> Feet slip shocks the biceps. Trust feet! <strong>Warm-up:</strong> Curls and planks."
        }
    },

    "gaston": {
        names: { pt: "Gaston", en: "Gaston" },
        tags: ["Esportiva", "Mãos", "Ombros", "Oposição", "Força"],
        intro: {
            pt: "Abrir a porta do elevador: cotovelos para fora, peito aberto, atitude de ataque.",
            en: "Opening the elevator door: elbows out, chest open, attack mode."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Ao contrário de puxar a rocha para você, no Gaston você tenta 'separar' a rocha ao meio. Polegar para baixo, cotovelo para fora. Você empurra para os lados para travar o corpo.</p><p><strong>O Mental:</strong> Postura de Coragem. O medo faz a gente se encolher. O Gaston obriga a abrir o peito e encarar a parede de frente.</p>",
            en: "<p><strong>Visual Logic:</strong> Trying to rip the rock apart. Thumbs down, elbows out. Push out to lock in.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Alto:</strong> Braço esticado lá em cima. Parece estranho, mas cria uma alavanca poderosa.</li><li><strong>Press:</strong> Mão perto do ombro. É força pura de empurrar.</li></ul>",
            en: "<ul><li>High (Long lever)</li><li>Press (Pure push)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Rotação Interna. Ao girar o ombro para dentro e empurrar para fora, você cria estabilidade. Mas precisa da escápula firme.",
            en: "<strong>Mechanics:</strong> Internal Rotation. Push out to stabilize. Keep shoulder blade firm."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Ombros (Deltóides).<br><strong>Os Bastidores:</strong> Manguito Rotador. São os pequenos músculos que impedem seu ombro de sair do lugar.",
            en: "<strong>Engine:</strong> Shoulders.<br><strong>Backstage:</strong> Rotator cuff keeping shoulder in place."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Estabilidade. Esse movimento cansa músculos pequenos posturais.",
            en: "<strong>Fuel:</strong> Stability. Tires hidden muscles. Fixes computer posture."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cotovelo muito alto pode pinçar o ombro. <strong>Aquecimento:</strong> Gire os braços e use elásticos (rotação) antes de fazer força.",
            en: "<strong>Alert:</strong> High elbow can pinch. <strong>Warm-up:</strong> Arm circles and band rotations."
        }
    },

    "mantle": {
        names: { pt: "Mantle (Virada)", en: "Mantle" },
        tags: ["Boulder", "Tradicional", "Braços", "Bloqueio", "Força"],
        intro: {
            pt: "Sair da piscina: a arte de transformar uma puxada numa empurrada para dominar o topo.",
            en: "Pool exit: the art of turning a pull into a push to master the top."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> É exatamente o movimento de sair da borda de uma piscina sem escada. Primeiro você puxa até o queixo (barra), depois gira o cotovelo para cima e empurra até esticar o braço (tríceps).</p><p><strong>O Mental:</strong> Decisão. Existe um 'ponto morto' na virada onde você não está nem puxando nem empurrando. Ali você tem que acreditar e jogar o peso para cima.</p>",
            en: "<p><strong>Visual Logic:</strong> Like a pool exit. Pull to chin, flip elbow, push to lockout.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Com Pé (Rockover):</strong> Jogar o calcanhar alto do lado da mão. A técnica da perna vence a força do braço.</li><li><strong>Na Raça (Muscle-up):</strong> Explosão pura de braço. Lindo de ver, mas gasta muita bateria.</li></ul>",
            en: "<ul><li>With Foot (Let legs work)</li><li>Muscle-up (Pure explosion)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Gangorra. O objetivo é levar o seu umbigo (centro de gravidade) para cima da mão de apoio. O cotovelo é o eixo.",
            en: "<strong>Mechanics:</strong> Seesaw. Get belly button over hand. Elbow must point up."
        },
        anat: {
            pt: "<strong>Fase 1:</strong> Costas e Bíceps (Puxar).<br><strong>Fase 2:</strong> Tríceps e Peitoral (Empurrar). O ombro trabalha hora extra na transição.",
            en: "<strong>Phase 1:</strong> Back/Biceps.<br><strong>Phase 2:</strong> Triceps/Pecs. Shoulder works overtime."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Potência. Fibras musculares rápidas entram em ação para a explosão da virada.",
            en: "<strong>Fuel:</strong> Power. Fast fibers fire for the flip."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cuidado com os punhos e ombros na hora da virada. <strong>Aquecimento:</strong> Flexões de braço e alongar bem os punhos.",
            en: "<strong>Alert:</strong> Watch wrists/shoulders. <strong>Warm-up:</strong> Push-ups and wrist stretches."
        }
    },

    "stemming": {
        names: { pt: "Stemming (Oposição)", en: "Stemming" },
        tags: ["Tradicional", "Corpo", "Pernas", "Oposição", "Equilíbrio"],
        intro: {
            pt: "Virar um macaco hidráulico humano: empurrar paredes para flutuar e descansar.",
            en: "Human hydraulic jack: pushing walls to float and rest."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine que você está no compactador de lixo de Star Wars e as paredes vão fechar. Você abre as pernas e empurra as paredes para fora. Pronto, você está travado no ar. Você não se pendura, você se expande.</p><p><strong>O Mental:</strong> Calma e Visão 3D. O iniciante procura agarras para puxar; o mestre procura paredes para empurrar.",
            en: "<p><strong>Visual Logic:</strong> Star Wars trash compactor style. Push walls out, don't hang. Expand.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Ponte (Bridge):</strong> Pernas bem abertas, uma em cada parede.</li><li><strong>Costas-Pé:</strong> Encostar as costas numa parede e o pé na outra. É como sentar numa cadeira invisível.</li></ul>",
            en: "<ul><li>Bridge (Legs wide)</li><li>Back-Foot (Invisible chair)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Ação e Reação. Ao empurrar a parede, a parede te empurra de volta. Esse atrito vence a gravidade. Se parar de empurrar, escorrega.",
            en: "<strong>Mechanics:</strong> Action/Reaction. Push wall, wall pushes back. Friction beats gravity."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Pernas e Glúteos. Os braços quase não fazem força.<br><strong>O Controle:</strong> Abdômen (Core) para manter o corpo rígido.",
            en: "<strong>Engine:</strong> Legs/Glutes. Arms chill.<br><strong>Control:</strong> Core keeps body rigid."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Eficiência. Gasta pouquíssima energia comparado a puxar. Momento perfeito para recuperar o fôlego.",
            en: "<strong>Fuel:</strong> Efficiency. Recover breath and lower heart rate."
        },
        care: {
            pt: "<strong>Alerta:</strong> Requer flexibilidade. Cuidado para não abrir demais e estirar a virilha. <strong>Aquecimento:</strong> Posição de sapo.",
            en: "<strong>Alert:</strong> Needs flexibility. Don't oversplit. <strong>Warm-up:</strong> Frog pose and side squats."
        }
    },

    "smear": {
        names: { pt: "Smear (Aderência)", en: "Smear" },
        tags: ["Tradicional", "Boulder", "Pés", "Aderência", "Equilíbrio"],
        intro: {
            pt: "Fé na borracha: confiar no atrito quando não existe onde pisar.",
            en: "Faith in rubber: trusting friction when there is no step."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Sabe quando você apaga algo com uma borracha escolar e aperta forte? É isso. O Smear é esfregar a sapatilha na parede lisa e aplicar pressão. Não tem borda, tem física.</p><p><strong>O Mental:</strong> Superação do Medo. O cérebro grita: 'Não tem onde pisar!'. Você tem que responder: 'Tem atrito!'. Exige decisão: se pisar com medo, escorrega.",
            en: "<p><strong>Visual Logic:</strong> Like pressing an eraser on paper. Rub shoe on wall, apply pressure. No edge, just physics.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Puro (Laje):</strong> Subir rampas lisas. Calcanhar baixo é lei.</li><li><strong>De Parede:</strong> Encostar a ponta do pé na parede vertical só para não girar.</li></ul>",
            en: "<ul><li>Pure (Slab friction)</li><li>Wall (Balance tripod)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Área de Contato. Baixe o calcanhar! Isso faz mais borracha da sapatilha encostar na rocha. Se ficar na pontinha do pé, a área diminui e você cai.",
            en: "<strong>Mechanics:</strong> Contact Area. Drop the heel! More rubber = more stick. Tiptoe = slip."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Panturrilhas e canelas.<br><strong>O Controle:</strong> Músculos internos do pé trabalham muito para moldar a sapatilha.",
            en: "<strong>Engine:</strong> Calves/Shins.<br><strong>Control:</strong> Foot muscles molding shoe to rock."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Resistência Isométrica. A panturrilha fica tensa o tempo todo. É normal tremer ('Perna de Elvis').",
            en: "<strong>Fuel:</strong> Endurance. Constant tension. 'Elvis Leg' shakes are normal fatigue."
        },
        care: {
            pt: "<strong>Dica de Ouro:</strong> Se a perna tremer, respire e force o calcanhar para baixo para estabilizar. <strong>Aquecimento:</strong> Gire os tornozelos.",
            en: "<strong>Gold Tip:</strong> Leg shakes? Drop heel. <strong>Warm-up:</strong> Ankle rotations and light hops."
        }
    },

    // === FISSURAS E OPOSIÇÃO (9-16) ===
    "chimney": {
        names: { pt: "Chimney (Chaminé)", en: "Chimney" },
        tags: ["Tradicional", "Corpo", "Oposição", "Força"],
        intro: {
            pt: "Virar um macaco hidráulico humano: a arte de empurrar paredes opostas para flutuar.",
            en: "Human hydraulic jack: the art of pushing opposing walls to float."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine que você está no compactador de lixo de Star Wars. Você abre as pernas e empurra as costas contra a parede de trás. Pronto, você está travado no ar. Na Chaminé, você não se pendura, você se <em>expande</em> para ocupar o espaço.</p><p><strong>O Mental:</strong> Controle da Claustrofobia. O instinto é se debater, mas a técnica exige calma.",
            en: "<p><strong>Visual Logic:</strong> Like the Star Wars trash compactor. Push out, expand to fill space. Don't hang.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Bridging (Ponte):</strong> Pernas bem abertas, uma em cada parede. Elegante.</li><li><strong>Squeezing (Rastejo):</strong> Espaço tão apertado que mal dá para respirar.</li></ul>",
            en: "<ul><li>Bridging (Wide & Elegant)</li><li>Squeezing (Tight crawl)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Força Normal. Ao empurrar as paredes para fora, a física devolve uma força de reação que gera atrito.",
            en: "<strong>Mechanics:</strong> Normal Force. Pushing out creates reactive friction. Skeleton bears the load, saving arms."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Quadríceps (para esticar as pernas) e Panturrilhas.<br><strong>O Freio:</strong> Costas e Tríceps mantêm a pressão contra a parede posterior.",
            en: "<strong>Engine:</strong> Quads/Calves.<br><strong>Brake:</strong> Back/Triceps pushing back."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Eficiência Metabólica. O esforço muscular localizado é baixo, mas o estresse global é alto.",
            en: "<strong>Fuel:</strong> Metabolic Efficiency. Low muscle effort, high stress. Challenge is breathing under compression."
        },
        care: {
            pt: "<strong>Alerta:</strong> Vai custar pele (ralados nos cotovelos e costas). <strong>Aquecimento:</strong> Agachamentos profundos. Use calça comprida!",
            en: "<strong>Care:</strong> Skin abrasion inevitable. Wear long sleeves/pants. <strong>Warm-up:</strong> Deep squats, trunk rotation."
        }
    },

    "layback": {
        names: { pt: "Layback (Dülfer)", en: "Layback" },
        tags: ["Tradicional", "Corpo", "Mãos", "Oposição", "Força"],
        intro: {
            pt: "O cabo de guerra vertical: confiar na oposição entre mãos e pés.",
            en: "Vertical tug-of-war: trusting the opposition between hands and feet."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine tentar abrir uma porta de geladeira emperrada: você puxa a maçaneta com as mãos e empurra a parede com os pés. Isso é o Layback. Você cria um triângulo de tensão. Se soltar as mãos, cai para trás; se soltar os pés, bate de cara.</p><p><strong>O Mental:</strong> Compromisso Total. É binário: ou você está fazendo a oposição perfeita, ou você cai.</p>",
            en: "<p><strong>Visual Logic:</strong> Like opening a stuck fridge. Pull handle, push wall. Create a tension triangle.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Mão Cruzada:</strong> Cruzar as mãos na borda para ganhar altura rápido. Rápido, mas instável.</li><li><strong>Shuffle:</strong> Mover mãos e pés alternadamente em pequenos passos. Mais seguro.</li></ul>",
            en: "<ul><li>Cross-over (Speed/Unstable)</li><li>Shuffle (Control/Safe)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Vetores Opostos. As mãos puxam horizontalmente, os pés empurram horizontalmente. Essa tensão gera o atrito vertical.",
            en: "<strong>Mechanics:</strong> Opposing Vectors. Horizontal pull/push creates vertical foot friction. Straight arms save biceps."
        },
        anat: {
            pt: "<strong>A Tração:</strong> Os dedos seguram, mas quem puxa mesmo são as Costas.<br><strong>A Pressão:</strong> Quadríceps e Glúteos empurram a parede. O Core é a ponte.",
            en: "<strong>Traction:</strong> Fingers/Lats.<br><strong>Pressure:</strong> Quads/Glutes. Core connects them."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Alta Octanagem. Envolve grandes grupos musculares. O coração dispara e o 'pump' chega rápido se você dobrar os cotovelos.",
            en: "<strong>Fuel:</strong> High Octane. Large muscle groups. Rapid pump if elbows bend."
        },
        care: {
            pt: "<strong>Alerta:</strong> O temido 'Zipper' (girar e bater o lado do corpo na rocha se o pé escorregar). <strong>Dica:</strong> Mantenha os calcanhares baixos.",
            en: "<strong>Alert:</strong> Barn-door falls. <strong>Tip:</strong> Low heels for friction. Clean shoe soles!"
        }
    },

    "jam": {
        names: { pt: "Jam (Entalamento)", en: "Jam" },
        tags: ["Tradicional", "Mãos", "Bloqueio", "Técnica"],
        intro: {
            pt: "Transformar sua mão numa 'porca e parafuso' humana para travar em fendas.",
            en: "Turning your hand into a human 'nut and bolt' to lock into cracks."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Esqueça agarrar. Pense em preencher. Você enfia a mão na fenda (fina como uma faca) e depois expande (gira o polegar ou fecha o punho). Sua mão vira uma cunha que trava mecanicamente na rocha. Dói? Um pouco. Funciona? Muito.</p><p><strong>O Mental:</strong> Aceitação do Desconforto. O Jam exige entender que a dor na pele é sinal de segurança.</p>",
            en: "<p><strong>Visual Logic:</strong> Don't grip, fill. Insert thin, expand to lock. Hand becomes a wedge.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Hand Jam (Mão):</strong> O clássico. Polegar para dentro, palma contra a rocha.</li><li><strong>Fist Jam (Punho):</strong> Feche a mão como um soco dentro da fenda.</li></ul>",
            en: "<ul><li>Hand Jam (Classic)</li><li>Fist Jam (Wide)</li><li>Finger Jam (Thin)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Expansão Volumétrica. Você aumenta o volume da sua mão dentro de um espaço fixo. A força lateral vira suporte vertical.",
            en: "<strong>Mechanics:</strong> Volumetric Expansion. Expanding hand inside fixed space creates vertical support."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Músculos intrínsecos da mão (para expandir a palma) e rotadores do antebraço. O braço fica relaxado pendurado na estrutura óssea.",
            en: "<strong>Engine:</strong> Intrinsic hand muscles and forearm rotators. Arm hangs on skeletal structure."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tolerância à Dor. Metabolicamente barato, mas exige adaptação sensorial da pele.",
            en: "<strong>Fuel:</strong> Pain Tolerance. Metabolically cheap, sensory expensive."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cortes no dorso da mão. <strong>Dica Técnica:</strong> Use esparadrapo (Tape Gloves) para proteger a pele. Não lute contra a fenda, preencha-a.",
            en: "<strong>Alert:</strong> Gobies (cuts). <strong>Tip:</strong> Tape gloves mandatory. Don't fight, fill."
        }
    },

    "off_width": {
        names: { pt: "Off-width (Fenda Larga)", en: "Off-width" },
        tags: ["Tradicional", "Corpo", "Oposição", "Força"],
        intro: {
            pt: "A luta de MMA vertical: usar o corpo todo em fendas de tamanho ingrato.",
            en: "Vertical MMA: using the whole body in awkwardly sized cracks."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Grande demais para a mão, pequeno demais para o corpo. Bem-vindo ao pesadelo. Aqui vale tudo: entalar cotovelo, joelho, ombro e até a cabeça. Você cria alavancas com seus membros para não escorregar. É feio, é bruto, mas é glorioso.</p><p><strong>O Mental:</strong> Resiliência Pura. Off-width não se escala com estilo, se escala com raiva e determinação.</p>",
            en: "<p><strong>Visual Logic:</strong> Too big for hands, too small for body. Stack limbs, use elbows/knees. Ugly but glorious.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Chicken Wing (Asa de Frango):</strong> Cotovelo para cima, palma para fora. Trava o braço.</li><li><strong>Arm Bar:</strong> Braço esticado fundo na fenda, empurrando com o tríceps.</li></ul>",
            en: "<ul><li>Chicken Wing (Elbow lock)</li><li>Arm Bar (Deep press)</li><li>Leavittation (Hand stacking)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Alavancas de Classe 1 e 2. Você usa suas articulações como pontos de fulcro para expandir e travar. O atrito da roupa é essencial.",
            en: "<strong>Mechanics:</strong> Class 1 & 2 Levers. Joints act as fulcrums to expand and lock. Clothing friction helps."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Corpo Inteiro. Tríceps, Ombros, Oblíquos e Adutores da coxa trabalham ao mesmo tempo.",
            en: "<strong>Engine:</strong> Full Body. Triceps, Shoulders, Obliques, Adductors working simultaneously."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Exaustão Total. É o estilo mais taxativo metabolicamente. O coração vai ao máximo e o corpo todo luta contra a gravidade.",
            en: "<strong>Fuel:</strong> Total Exhaustion. Most taxing style. Max heart rate, full body struggle."
        },
        care: {
            pt: "<strong>Alerta:</strong> Ralados profundos. <strong>Dica Técnica:</strong> Use calça jeans ou roupas reforçadas e camisas de manga longa.",
            en: "<strong>Alert:</strong> Deep scrapes. <strong>Tip:</strong> Wear jeans/thick clothes. High-top shoes protect ankles."
        }
    },

    "stem_stem_rest": {
        names: { pt: "Stem-Stem Rest (Descanso)", en: "Stem-Stem Rest" },
        tags: ["Tradicional", "Esportiva", "Pernas", "Descanso", "Equilíbrio"],
        intro: {
            pt: "Transformar a via em uma cadeira invisível para recuperar as energias.",
            en: "Turning the route into an invisible chair to recharge."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine que você está num corredor e decide parar para amarrar o tênis sem sentar no chão. Você abre as pernas e trava os pés nas paredes laterais. O peso sai 100% dos braços. Agora você pode soltar as mãos e sacudir o ácido lático.</p><p><strong>O Mental:</strong> Oásis de Calma. O iniciante passa batido; o expert para, respira e zera o cronômetro da fadiga.</p>",
            en: "<p><strong>Visual Logic:</strong> Like pausing in a hallway. Legs wide, feet locked. Weight off arms. Hands free to shake out.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Simétrico:</strong> Pés na mesma altura.</li><li><strong>Assimétrico:</strong> Um pé mais alto, buscando qualquer rugosidade na parede para travar.</li></ul>",
            en: "<ul><li>Symmetrical</li><li>Asymmetrical</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Estabilidade Estática. O Centro de Gravidade fica alinhado entre os pés. Os braços servem apenas para equilíbrio fino.",
            en: "<strong>Mechanics:</strong> Static Stability. COG aligned between feet. Arms for balance only, no load."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Esqueleto Axial (Coluna e Bacia). Os ossos suportam a compressão.",
            en: "<strong>Engine:</strong> Axial Skeleton. Bones bear compression, allowing muscles to relax."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Recuperação (Clearance). O objetivo é baixar o batimento cardíaco e permitir que o sangue limpe as toxinas.",
            en: "<strong>Fuel:</strong> Recovery. Lower heart rate, fresh blood flushes toxins."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Não relaxe tanto a ponto de perder o foco. Mantenha a tensão mínima nas pernas.",
            en: "<strong>Tip:</strong> Don't over-relax. Keep minimum leg tension to avoid surprise slips."
        }
    },

    "heel_hook": {
        names: { pt: "Heel Hook (Gancho de Calcanhar)", en: "Heel Hook" },
        tags: ["Boulder", "Esportiva", "Pés", "Bloqueio", "Força"],
        intro: {
            pt: "Transformar a perna num terceiro braço: puxar com o calcanhar.",
            en: "Turning the leg into a third arm: pulling with the heel."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Sabe aquele exercício de academia de puxar o peso com a perna (mesa flexora)? É isso. Você joga o calcanhar numa agarra alta e puxa. Sua perna vira um gancho poderoso que tira o peso dos braços.</p><p><strong>O Mental:</strong> Criatividade. Às vezes a solução não é puxar mais com a mão, mas sim usar esse 'bíceps da perna' que é muito mais forte.</p>",
            en: "<p><strong>Visual Logic:</strong> Like a hamstring curl. Hook heel, pull. Leg becomes a powerful hook saving arms.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Alto:</strong> Calcanhar acima da cabeça (flexibilidade pura).</li><li><strong>De Compressão:</strong> Calcanhar empurrando contra a mão oposta para 'esmagar' um volume.</li></ul>",
            en: "<ul><li>High (Flexibility)</li><li>Compression (Squeezing volume)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Alavanca de Terceira Classe. O joelho é o eixo. Ao flexionar o joelho com força, você cria um torque que puxa o corpo.",
            en: "<strong>Mechanics:</strong> 3rd Class Lever. Knee is axis. Flexing creates massive torque pulling body."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Isquiotibiais (Posterior da coxa) – são eles que fazem a força bruta.",
            en: "<strong>Engine:</strong> Hamstrings do the heavy lifting. Glutes help finish."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Força de Grandes Grupos. A perna é muito mais forte que o braço. Economiza a bateria dos dedos.",
            en: "<strong>Fuel:</strong> Large Group Strength. Legs > Arms. Saves finger battery."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Se o pé travar e você girar o corpo, o joelho sofre. Cuidado com o menisco! <strong>Aquecimento:</strong> 'Chutes no bumbum' para acordar o posterior.",
            en: "<strong>Red Alert:</strong> Knee torque risk! Watch meniscus. <strong>Warm-up:</strong> Squats and butt kicks."
        }
    },

    "toe_hook": {
        names: { pt: "Toe Hook (Gancho de Dedão)", en: "Toe Hook" },
        tags: ["Boulder", "Esportiva", "Pés", "Bloqueio", "Tensão"],
        intro: {
            pt: "Usar o peito do pé para puxar e desafiar a gravidade em tetos.",
            en: "Using the top of the foot to pull and defy gravity on roofs."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine que você está de ponta-cabeça num teto. Para não cair, você engancha a parte de cima do pé numa borda e puxa para cima (contra a canela). Funciona como uma garra que impede seu corpo de balançar para longe da parede.</p><p><strong>O Mental:</strong> Tensão Constante. Diferente de pisar (onde a gravidade ajuda), no Toe Hook você tem que fazer força ativa o tempo todo.</p>",
            en: "<p><strong>Visual Logic:</strong> Upside down? Hook top of foot on edge, pull up. Prevents swinging away.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Estático:</strong> Para manter o corpo parado enquanto move as mãos.</li><li><strong>Dinâmico (Catch):</strong> Chutar o pé no ar para capturar uma agarra e frear um balanço.</li></ul>",
            en: "<ul><li>Static (Stabilizing)</li><li>Dynamic Catch (Stopping swing)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Cadeia Cinética Anterior. Você precisa de dorsiflexão (puxar o pé para a canela) combinada com tensão abdominal.",
            en: "<strong>Mechanics:</strong> Anterior Kinetic Chain. Dorsiflexion + Core tension connects hook to body."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tibial Anterior (o músculo da frente da canela).<br><strong>A Conexão:</strong> Abdominais e Flexores do Quadril. Sem core, o gancho não segura.",
            en: "<strong>Engine:</strong> Tibialis Anterior.<br><strong>Connection:</strong> Abs/Hip Flexors. No core, no hold."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Coordenação e Core. Exige que o cérebro coordene a mão puxando e o pé 'pescando' ao mesmo tempo.",
            en: "<strong>Fuel:</strong> Coordination/Core. Brain syncs hand pull and foot catch."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Sapatilhas com borracha em cima do dedo ajudam muito. <strong>Alerta:</strong> Cuidado com a 'canelite'.",
            en: "<strong>Tip:</strong> Toe rubber helps. <strong>Alert:</strong> Watch for shin splints."
        }
    },

    "knee_bar": {
        names: { pt: "Knee Bar (Entalamento de Joelho)", en: "Knee Bar" },
        tags: ["Esportiva", "Tradicional", "Pernas", "Bloqueio", "Descanso"],
        intro: {
            pt: "O truque de mágica: ficar de ponta-cabeça sem usar as mãos.",
            en: "The magic trick: hanging upside down with no hands."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você encontra um espaço entre duas agarras que é do tamanho exato da sua canela. Você enfia o pé numa, o joelho na outra e faz força para esticar a panturrilha. Pronto! Sua perna virou uma barra de ferro travada. Agora você pode soltar as mãos e descansar.</p><p><strong>O Mental:</strong> Oportunismo. O escalador inteligente está sempre escaneando a rocha procurando esse 'encaixe perfeito'.</p>",
            en: "<p><strong>Visual Logic:</strong> Fit shin between two holds. Push foot, lock knee. Leg becomes iron bar. Hands free rest.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Sólido:</strong> Tão bom que você solta as duas mãos.</li><li><strong>Precário (Scum):</strong> O joelho só encosta para dar um equilíbrio extra.</li></ul>",
            en: "<ul><li>Solid (No hands rest)</li><li>Scum (Balance assist)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Ação de Pistão. A panturrilha empurra o pé para longe do joelho, expandindo a perna até ela travar.",
            en: "<strong>Mechanics:</strong> Piston Action. Calf pushes foot away from knee, expanding leg to lock."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tibial Anterior e Panturrilha criam a tensão. O resto do corpo entra em modo de economia de energia.",
            en: "<strong>Engine:</strong> Shin/Calf create lock tension. Rest of body enters eco mode."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Recuperação Total. É a melhor forma de zerar o ácido lático dos braços no meio de uma via negativa.",
            en: "<strong>Fuel:</strong> Total Recovery. Flushes arm pump mid-route."
        },
        care: {
            pt: "<strong>Alerta:</strong> Dói a coxa! Use joelheiras de borracha (Knee Pads) ou calças grossas. <strong>Aquecimento:</strong> Mobilidade de tornozelo.",
            en: "<strong>Alert:</strong> Painful thighs! Use Knee Pads. <strong>Warm-up:</strong> Ankle mobility."
        }
    },

    // === DINÂMICOS E EQUILÍBRIO (17-24) ===
    "drop_knee": {
        names: { pt: "Drop Knee (Lolotte)", en: "Drop Knee" },
        tags: ["Esportiva", "Boulder", "Pernas", "Bloqueio", "Alcance"],
        intro: {
            pt: "Girar o joelho para dentro para 'quebrar' o quadril contra a parede e ganhar alcance.",
            en: "Twisting the knee inward to lock the hip against the wall and gain reach."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine tentar alcançar algo longe na prateleira mais alta. Você não fica de frente; você vira de lado e estica o braço. O Drop Knee faz isso: ao girar o joelho de trás para baixo, seu quadril cola na parede e seu braço ganha 10 a 20cm de alcance extra 'de graça'.</p><p><strong>O Mental:</strong> Eficiência. É usar a alavanca do esqueleto para subir flutuando.</p>",
            en: "<p><strong>Visual Logic:</strong> Like reaching a high shelf. Turn sideways, drop the back knee. Hips lock, reach extends.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Clássico:</strong> Joelho aponta para a parede oposta. Estabilidade.</li><li><strong>Profundo (Deep):</strong> O joelho aponta para o chão. Alcance máximo.</li></ul>",
            en: "<ul><li>Classic (Stability)</li><li>Deep (Max Reach)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Rotação Interna e Pivô. Você gira sobre a ponta do pé. Isso trava o quadril contra a parede, reduzindo o vetor de força que te puxa para trás.",
            en: "<strong>Mechanics:</strong> Internal Rotation/Pivot. Locks hip to wall, neutralizing backward gravity vector."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Adutores e Rotadores Internos do quadril.<br><strong>A Trava:</strong> O Core mantém o tronco girado.",
            en: "<strong>Engine:</strong> Adductors/Internal Rotators.<br><strong>Lock:</strong> Core maintains trunk twist."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Economia Mecânica. Ao travar o quadril, você tira a carga dos braços.",
            en: "<strong>Fuel:</strong> Mechanical Economy. Offloads arms. Saves massive energy on long routes."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Cuidado com o Ligamento Colateral Medial (MCL) do joelho. Se sentir dor na parte interna, pare. <strong>Aquecimento:</strong> Rotações de quadril.",
            en: "<strong>Red Alert:</strong> Watch the MCL (inner knee). Pain? Stop twisting. <strong>Warm-up:</strong> Hip rotations."
        }
    },

    "dyno": {
        names: { pt: "Dyno (Dinâmico)", en: "Dyno" },
        tags: ["Boulder", "Corpo", "Dinâmico", "Força"],
        intro: {
            pt: "O salto de fé: explosão total para voar entre agarras distantes.",
            en: "The leap of faith: total explosion to fly between distant holds."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você é uma mola comprimida. Primeiro você desce, depois explode para cima esticando tudo (pernas, quadris, costas). Por um segundo, você voa. O objetivo não é apenas pular alto, mas controlar a aterrissagem nas mãos.</p><p><strong>O Mental:</strong> Compromisso Radical. Se você duvidar no meio do voo, você bate na parede. O cérebro tem que estar focado na agarra de chegada.</p>",
            en: "<p><strong>Visual Logic:</strong> You are a compressed spring. Down, then explode up. Flight, then stick.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Simples:</strong> Uma mão busca a agarra.</li><li><strong>Duplo:</strong> As duas mãos voam e agarram juntas (Double Dyno).</li><li><strong>Run-and-Jump:</strong> Correr na parede antes de saltar.</li></ul>",
            en: "<ul><li>Single</li><li>Double (Movie style)</li><li>Run-and-Jump</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Tripla Extensão e Trajetória Parabólica. Tornozelos, joelhos e quadris estendem simultaneamente. O centro de gravidade deve ser lançado na direção exata da agarra alvo.",
            en: "<strong>Mechanics:</strong> Triple Extension. Ankles, knees, hips fire together. COG follows parabolic arc."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Pernas (Gastrocnêmio, Quadríceps, Glúteos) geram o impulso. Costas iniciam o movimento.",
            en: "<strong>Engine:</strong> Legs generate drive. Lats start it.<br><strong>Control:</strong> Core keeps posture in air."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Potência Pura (Fibras Rápidas). Exige muito do sistema nervoso central (SNC) para coordenar o 'disparo'.",
            en: "<strong>Fuel:</strong> Pure Power. Fast Twitch fibers. High CNS demand for coordination."
        },
        care: {
            pt: "<strong>Alerta:</strong> Impacto nos ombros na chegada pode ser brutal. Mantenha os ombros ativos! <strong>Aquecimento:</strong> Saltos verticais e puxadas explosivas.",
            en: "<strong>Alert:</strong> Shoulder impact. Keep active! <strong>Warm-up:</strong> Box jumps and explosive pull-ups."
        }
    },

    "deadpoint": {
        names: { pt: "Deadpoint", en: "Deadpoint" },
        tags: ["Boulder", "Corpo", "Dinâmico", "Precisão"],
        intro: {
            pt: "A precisão do atirador: pegar a agarra no momento exato da gravidade zero.",
            en: "Sniper precision: catching the hold at the exact moment of zero gravity."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Pense num jogador de basquete arremessando no ponto mais alto do pulo. Existe um milésimo de segundo onde você parou de subir, mas ainda não começou a cair. Esse é o 'Ponto Morto'. Você se lança para chegar na agarra exatamente nesse instante.</p><p><strong>O Mental:</strong> Timing Perfeito. É a elegância de fazer um movimento difícil parecer fácil.</p>",
            en: "<p><strong>Visual Logic:</strong> Basketball jump shot apex. Weightless moment. Catch the hold right then.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Curto:</strong> Movimento sutil para ajustar a mão.</li><li><strong>Longo:</strong> Quase um Dyno, mas os pés geralmente não saem da parede.</li></ul>",
            en: "<ul><li>Short (Adjustment)</li><li>Long (Near Dyno)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Conservação de Momento. Ao pegar a agarra no ápice da parábola (velocidade = 0), a força necessária nos dedos para segurar é mínima.",
            en: "<strong>Mechanics:</strong> Momentum Conservation. Catch at apex (velocity=0) minimizes finger force needed."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Cadeia Posterior (Glúteos e Lombar).<br><strong>A Precisão:</strong> Flexores dos dedos e Olhos. A coordenação olho-mão é fundamental.",
            en: "<strong>Engine:</strong> Posterior Chain.<br><strong>Precision:</strong> Finger flexors and Eye-hand coordination."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Coordenação Neuromuscular. O cérebro precisa calcular a trajetória perfeita.",
            en: "<strong>Fuel:</strong> Neuromuscular Coordination. Brain calculates trajectory. Focus over brute force."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Respire *antes* do movimento e solte o ar na execução. <strong>Aquecimento:</strong> Praticar alcances longos em agarras fáceis.",
            en: "<strong>Tip:</strong> Exhale on execution. <strong>Warm-up:</strong> Practice long reaches on jugs."
        }
    },

    "campus": {
        names: { pt: "Campus (Sem Pés)", en: "Campusing" },
        tags: ["Boulder", "Braços", "Dinâmico", "Força"],
        intro: {
            pt: "Canalizar seu Tarzan interior: escalar usando apenas a força dos braços e o balanço.",
            en: "Channeling your inner Tarzan: climbing using only arm power and swing."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine subir uma escada de mão sem usar os pés. Você precisa puxar, travar e lançar o outro braço. O segredo não é só puxar, é usar as pernas (mesmo soltas) como um pêndulo para gerar impulso para cima.</p><p><strong>O Mental:</strong> Agressividade. Não dá para ser tímido no Campus. Exige uma atitude de ataque.",
            en: "<p><strong>Visual Logic:</strong> Climbing a ladder, no feet. Pull, lock, throw. Legs act as a pendulum counterweight.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Básico:</strong> Mão após mão (1-2-3).</li><li><strong>Explosivo:</strong> Pular agarras (1-3-5).</li><li><strong>Match:</strong> Juntar as duas mãos na mesma agarra antes de subir.</li></ul>",
            en: "<ul><li>Basic (1-2-3)</li><li>Explosive (Skipping rungs)</li><li>Matching</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Cadeia Cinética Aberta. Como não há pés, o Core precisa controlar o balanço das pernas para anular o torque rotacional.",
            en: "<strong>Mechanics:</strong> Open Kinetic Chain. Core controls leg swing to prevent rotation and drive momentum up."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Grande Dorsal (Asas) e Bíceps.<br><strong>O Controle:</strong> Reto Abdominal e Flexores do Quadril para chicotear as pernas.",
            en: "<strong>Engine:</strong> Lats/Biceps.<br><strong>Control:</strong> Abs/Hip Flexors to whip legs."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Potência e Resistência de Força. Cansa o sistema nervoso central rapidamente.",
            en: "<strong>Fuel:</strong> Power Endurance. Max upper body recruitment. Drains CNS fast."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Risco altíssimo de tendinite nos cotovelos. Não recomendado para iniciantes. <strong>Aquecimento:</strong> Ombros e dedos muito bem aquecidos.",
            en: "<strong>Red Alert:</strong> Elbow tendonitis risk! Not for beginners. <strong>Warm-up:</strong> Shoulders/fingers essential."
        }
    },

    "flagging": {
        names: { pt: "Flagging (Bandeira)", en: "Flagging" },
        tags: ["Esportiva", "Pernas", "Corpo", "Equilíbrio", "Técnica"],
        intro: {
            pt: "Usar a perna livre como a cauda de um macaco ou a vara de um equilibrista.",
            en: "Using the free leg like a monkey's tail or a tightrope walker's pole."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Quando você tira o pé direito do chão, seu corpo tende a girar como uma porta aberta (Barndoor). Para evitar isso, você estica a perna livre para o lado ou cruza por trás. Ela age como um contrapeso para anular o giro.</p><p><strong>O Mental:</strong> Consciência Espacial. É entender que a perna que *não* está pisando é tão importante quanto a que está.</p>",
            en: "<p><strong>Visual Logic:</strong> Counterweight. Sticking leg out prevents swinging open (barndoor). Like a tightrope pole.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Back Flag (Por trás):</strong> Cruzar a perna livre por trás da perna de apoio. O mais comum.</li><li><strong>Side Flag (Lateral):</strong> Esticar a perna para o lado aberto.</li></ul>",
            en: "<ul><li>Back Flag (Cross behind)</li><li>Side Flag (Open side)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Manipulação do Centro de Massa (CM). Você move o peso da perna para longe do eixo de rotação, criando um torque contrário que te mantém estável.",
            en: "<strong>Mechanics:</strong> Center of Mass manipulation. Leg creates counter-torque to stabilize rotation."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Abdutores do quadril e Oblíquos.<br><strong>A Base:</strong> A perna de apoio trabalha dobrada para permitir o movimento da outra.",
            en: "<strong>Engine:</strong> Hip Abductors/Obliques.<br><strong>Base:</strong> Support leg stays bent."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Controle Postural. Gasta pouca energia muscular, mas exige processamento cerebral constante.",
            en: "<strong>Fuel:</strong> Postural Control. Low energy, high brain processing for balance."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Se você sentir que vai girar para fora da parede, faça um Flagging imediatamente. É a cura para o desequilíbrio.",
            en: "<strong>Tip:</strong> Feel like spinning? Flag immediately. It's the cure for imbalance."
        }
    },

    "bat_hang": {
        names: { pt: "Bat Hang (Morcego)", en: "Bat Hang" },
        tags: ["Boulder", "Pés", "Bloqueio", "Descanso"],
        intro: {
            pt: "Ficar de ponta-cabeça: diversão, descanso e solução criativa para tetos.",
            en: "Upside down: fun, rest, and creative solution for roofs."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Exatamente como um morcego. Você engancha os dedos dos pés numa agarra grande no teto e solta as mãos. O mundo fica invertido. É usado para descansar braços 'pumpados' ou para começar um boulder de forma inusitada.</p><p><strong>O Mental:</strong> Desinibição. Parece coisa de circo, mas é uma ferramenta tática real.",
            en: "<p><strong>Visual Logic:</strong> Like a bat. Hook toes on roof, drop hands. Inverted world rest or start.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Duplo:</strong> Dois pés na mesma agarra. Mais seguro.</li><li><strong>Campusing de Pé:</strong> Caminhar com os pés pelo teto enquanto está de cabeça para baixo. Nível ninja.</li></ul>",
            en: "<ul><li>Double (Safer)</li><li>Foot Campusing (Ninja level)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Dorsiflexão Extrema. Você precisa puxar a ponta do pé contra a canela com força máxima para criar o gancho. A gravidade faz o resto.",
            en: "<strong>Mechanics:</strong> Extreme Dorsiflexion. Pull toes to shins hard to create the hook. Gravity does the rest."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tibial Anterior (frente da canela) é quem segura você. Se ele falhar, você cai de cabeça.",
            en: "<strong>Engine:</strong> Tibialis Anterior holds you. If it fails, you drop."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Isometria Localizada. A canela queima rápido. O resto do corpo descansa.",
            en: "<strong>Fuel:</strong> Localized Isometry. Shins burn, body rests."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Risco de queda de cabeça! O Spotter (segurança) é obrigatório. <strong>Aquecimento:</strong> Alongar bem a canela.",
            en: "<strong>Red Alert:</strong> Head fall risk! Spotter mandatory. <strong>Warm-up:</strong> Shin stretches."
        }
    },

    "hand_jam": {
        names: { pt: "Hand Jam (Entalamento de Mão)", en: "Hand Jam" },
        tags: ["Tradicional", "Mãos", "Bloqueio", "Técnica"],
        intro: {
            pt: "O aperto de mão com a rocha: técnica fundamental para fendas médias.",
            en: "Shaking hands with the rock: fundamental technique for medium cracks."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> A fenda tem a largura da sua mão. Você insere a mão aberta como uma faca (perfil). Depois, traz o polegar para a palma, estufando o músculo do polegar contra a parede. Quanto mais você puxa para baixo, mais a mão trava.</p><p><strong>O Mental:</strong> Segurança Paradoxal. Parece que vai escorregar, mas é uma das travas mais seguras que existem.",
            en: "<p><strong>Visual Logic:</strong> Hand in like a knife. Tuck thumb to expand muscle. Pulling down locks it tight.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Thumbs Up (Polegar pra cima):</strong> O padrão. Melhor para alcance.</li><li><strong>Thumbs Down (Polegar pra baixo):</strong> Ótimo para quando a fenda está baixa.</li></ul>",
            en: "<ul><li>Thumbs Up (Standard)</li><li>Thumbs Down (Low/Lock)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Expansão e Atrito. O formato de cunha da mão impede que ela passe pela fenda quando tensionada.",
            en: "<strong>Mechanics:</strong> Expansion/Friction. Hand's wedge shape prevents it from pulling through."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Músculos da Eminência Tenar (base do polegar). O antebraço trabalha pouco comparado a um Crimp.",
            en: "<strong>Engine:</strong> Thenar muscles. Forearm works less than in Crimp."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tolerância Sensorial. A pressão na pele é intensa. O limite geralmente é a dor, não a força muscular.",
            en: "<strong>Fuel:</strong> Sensory Tolerance. Skin pressure is high. Pain is the limit, not muscle."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Relaxe a mão quando não estiver puxando. Use esparadrapo para não sair com a mão em carne viva.",
            en: "<strong>Tip:</strong> Relax hand to flow blood. Tape up to save skin."
        }
    },

    "fist_jam": {
        names: { pt: "Fist Jam (Entalamento de Punho)", en: "Fist Jam" },
        tags: ["Tradicional", "Mãos", "Bloqueio", "Força"],
        intro: {
            pt: "O soco de sustentação: preencher fendas largas com volume bruto.",
            en: "The structural punch: filling wide cracks with raw volume."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> A fenda é larga demais para a mão aberta. Solução? Feche a mão em punho dentro dela. O punho fechado é muito mais largo. Você orienta o punho para achar o melhor encaixe e 'soca' a fenda para travar.</p><p><strong>O Mental:</strong> Determinação. É uma técnica agressiva e cansativa.",
            en: "<p><strong>Visual Logic:</strong> Crack too wide? Make a fist inside. Orient vertical or horizontal to fit.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Plano (Flat):</strong> Palma virada para a parede da fenda.</li><li><strong>Vertical:</strong> Polegar virado para você.</li><li><strong>Mão-Punho (Stacked):</strong> Uma mão fechada, a outra aberta contra o punho (para fendas muito largas).</li></ul>",
            en: "<ul><li>Flat</li><li>Vertical</li><li>Stacked (Hand-Fist)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Expansão Máxima. Ao fechar o punho, os músculos e ossos se expandem radialmente. O atrito vem dos nós dos dedos.",
            en: "<strong>Mechanics:</strong> Max Expansion. Clenching expands muscles/bones radially creating friction."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexores dos dedos e do punho. Manter o punho fechado sob carga exige força isométrica constante.",
            en: "<strong>Engine:</strong> Finger/Wrist flexors. Keeping fist clenched under load needs isometric strength."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Força de Preensão (Grip). Cansa o antebraço rápido porque não há 'relaxamento' enquanto você está travado.",
            en: "<strong>Fuel:</strong> Grip Strength. Forearms pump fast; no relaxation while locked."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cuidado com os ossinhos da mão (metacarpos). A pressão é alta. <strong>Dica:</strong> Luvas de esparadrapo reforçadas são essenciais.",
            en: "<strong>Alert:</strong> Watch metacarpals. High pressure. <strong>Tip:</strong> Reinforced tape gloves essential."
        }
    },

    // === REFINAMENTO TÉCNICO (25-32) ===
    "finger_jam": {
        names: { pt: "Finger Jam (Entalamento de Dedos)", en: "Finger Jam" },
        tags: ["Tradicional", "Mãos", "Bloqueio", "Técnica"],
        intro: {
            pt: "Transformar os dedos numa chave mestra: travar em fendas estreitas por torção.",
            en: "Turning fingers into a skeleton key: locking into narrow cracks via torsion."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine colocar uma chave numa fechadura e girar. É isso. Você insere os dedos na fenda e gira o cotovelo. A torção faz as juntas dos dedos travarem contra a parede. Não é força de apertar, é força de alavanca.</p><p><strong>O Mental:</strong> Superação da Agonia. A pressão nas articulações é intensa. O segredo é confiar na trava mecânica.",
            en: "<p><strong>Visual Logic:</strong> Like turning a key in a lock. Insert, twist elbow. Joints lock mechanically.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Ring Locks:</strong> Fazer um anel com o polegar e indicador.</li><li><strong>Pinky Jam:</strong> Usar o dedo mínimo em fendas muito finas (arriscado).</li></ul>",
            en: "<ul><li>Ring Locks (Thumb-Index loop)</li><li>Pinky Jam (High risk)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Torção Axial. Ao girar o antebraço, você aumenta a largura efetiva dos dedos. A força é transmitida para os ligamentos e ossos.",
            en: "<strong>Mechanics:</strong> Axial Torsion. Rotating forearm expands finger width. Load on ligaments/bones, saving muscles."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Rotadores do antebraço e bíceps.<br><strong>A Estrutura:</strong> Ligamentos colaterais das articulações dos dedos suportam a carga.",
            en: "<strong>Engine:</strong> Forearm rotators/Biceps.<br><strong>Structure:</strong> Collateral ligaments bear the load."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tolerância Articular. O limite não é o ATP, é a integridade das articulações e a dor.",
            en: "<strong>Fuel:</strong> Joint Tolerance. Limitation is structural integrity and pain, not energy."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Risco alto de torção e lesão de ligamento. Não escorregue enquanto estiver travado! <strong>Aquecimento:</strong> Mobilidade de dedos.",
            en: "<strong>Red Alert:</strong> Ligament sprain risk. Don't slip while locked! <strong>Warm-up:</strong> Finger/wrist mobility."
        }
    },

    "thumb_catch": {
        names: { pt: "Thumb Catch (Trava de Polegar)", en: "Thumb Catch" },
        tags: ["Esportiva", "Mãos", "Bloqueio", "Equilíbrio"],
        intro: {
            pt: "A 'arma secreta' da estabilidade: usar o polegar ativo para anular o giro.",
            en: "The stability 'secret weapon': using an active thumb to stop the spin."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Muitas vezes você segura uma agarra vertical e sente a mão 'abrindo' (girando para fora). O Thumb Catch é o trinco. Você engancha o polegar numa micro-saliência ou na lateral da agarra para travar esse giro.</p><p><strong>O Mental:</strong> Atenção aos Detalhes. O mestre escaneia a rocha procurando onde colocar o polegar.",
            en: "<p><strong>Visual Logic:</strong> Like a door latch. Hook thumb on a bump to stop hand from barn-dooring open.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Wrap:</strong> Envolver o polegar sobre o indicador em agarras laterais.</li><li><strong>Bump Catch:</strong> Apoiar o polegar numa pedrinha separada.</li></ul>",
            en: "<ul><li>Wrap (Over index)</li><li>Bump Catch (Separate feature)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Anulação de Torque. O polegar cria um vetor de força oposto que cancela a rotação da mão, estabilizando o punho.",
            en: "<strong>Mechanics:</strong> Torque Cancellation. Thumb creates opposing vector stabilizing the wrist."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexor Longo do Polegar e Adutor.<br><strong>O Benefício:</strong> Reduz a força necessária nos outros quatro dedos.",
            en: "<strong>Engine:</strong> Thumb Flexor/Adductor.<br><strong>Benefit:</strong> Stabilizing hand reduces load on other fingers."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Eficiência Fina. Transforma uma pegada instável em estável sem custo energético extra.",
            en: "<strong>Fuel:</strong> Fine Efficiency. Stabilizes grip with zero extra energy cost."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Treine olhar para o polegar. Ele costuma ficar 'morto' no ar. Ative-o!",
            en: "<strong>Tip:</strong> Look at your thumb. Don't let it hang dead. <strong>Warm-up:</strong> Finger opposition."
        }
    },

    "toe_catch": {
        names: { pt: "Toe Catch (Captura de Pé)", en: "Toe Catch" },
        tags: ["Boulder", "Pés", "Dinâmico", "Equilíbrio"],
        intro: {
            pt: "O freio de emergência: capturar uma agarra com o pé para parar um balanço violento.",
            en: "The emergency brake: catching a hold with the foot to stop a violent swing."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você acabou de pular para uma agarra e seu corpo vai balançar para fora. Antes que isso aconteça, você chuta ou engancha a ponta do pé numa agarra qualquer. É como lançar uma âncora para parar o barco instantaneamente.</p><p><strong>O Mental:</strong> Reflexo Rápido. Não dá para pensar. Tem que ser automático.",
            en: "<p><strong>Visual Logic:</strong> Like dropping an anchor mid-swing. Hook toe instantly to kill momentum.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Frontal:</strong> Puxar a agarra com a ponta do pé (dorsiflexão).</li><li><strong>Lateral:</strong> Usar a parte de fora do pé para frear um giro.</li></ul>",
            en: "<ul><li>Frontal (Dorsiflexion pull)</li><li>Lateral (Stopping spin)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Absorção de Energia Cinética. A tensão gerada na cadeia anterior (perna-abdômen) dissipa a força do balanço.",
            en: "<strong>Mechanics:</strong> Kinetic Energy Absorption. Anterior chain tension dissipates swing force."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tibial Anterior e Abdominais.<br><strong>A Conexão:</strong> O Core tem que estar travado para conectar o pé à mão.",
            en: "<strong>Engine:</strong> Shin, Hip Flexors, Abs.<br><strong>Connection:</strong> Core locks foot to hand."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Potência Reativa. É uma contração explosiva para frear o movimento.",
            en: "<strong>Fuel:</strong> Reactive Power. Explosive contraction to brake momentum."
        },
        care: {
            pt: "<strong>Alerta:</strong> Se falhar, o corpo volta com tudo contra a parede (efeito chicote). Cuidado com os joelhos! <strong>Aquecimento:</strong> Elevação de pernas.",
            en: "<strong>Alert:</strong> Whiplash effect if missed. Watch knees. <strong>Warm-up:</strong> Hanging leg raises."
        }
    },

    "thumb_press": {
        names: { pt: "Thumb Press (Pressão de Polegar)", en: "Thumb Press" },
        tags: ["Esportiva", "Mãos", "Aderência", "Equilíbrio"],
        intro: {
            pt: "Empurrar em vez de apertar: transformar o polegar num pilar de sustentação.",
            en: "Pushing instead of squeezing: turning the thumb into a support pillar."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Diferente do Pinch, aqui o polegar empurra a rocha, funcionando como um micro-mantle. Imagine que seu polegar é um pilar que sustenta sua mão, impedindo que ela escorregue para baixo em agarras inclinadas.</p><p><strong>O Mental:</strong> Sutileza. É um movimento de 'ajuste fino'.",
            en: "<p><strong>Visual Logic:</strong> Like a micro-mantle. Thumb pushes rock to support hand, adjusting wrist angle.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Under-press:</strong> Empurrar uma superfície por baixo da agarra principal.</li><li><strong>Side-press:</strong> Empurrar a lateral para estabilizar.</li></ul>",
            en: "<ul><li>Under-press</li><li>Side-press</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Força Normal Adicional. Ao empurrar o polegar contra a rocha, você gera estabilidade e altera o vetor de força do punho.",
            en: "<strong>Mechanics:</strong> Extra Normal Force. Thumb push stabilizes and optimizes wrist angle for fingers."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Extensores e Abdutores do Polegar.<br><strong>O Benefício:</strong> Alivia a carga nos flexores dos dedos.",
            en: "<strong>Engine:</strong> Thumb Extensors/Abductors.<br><strong>Benefit:</strong> Offloads finger flexors."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Estabilização Isométrica. Baixo custo energético, alto retorno em controle.",
            en: "<strong>Fuel:</strong> Isometric Stabilization. Low cost, high control."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Útil em agarras gastas ou escorregadias.",
            en: "<strong>Tip:</strong> Great on slippery holds. Adjust thumb if sliding."
        }
    },

    "hip_twist": {
        names: { pt: "Hip Twist (Giro de Quadril)", en: "Hip Twist" },
        tags: ["Esportiva", "Corpo", "Técnica", "Alcance"],
        intro: {
            pt: "A base de toda a escalada eficiente: girar o quadril para ganhar alcance grátis.",
            en: "The foundation of efficient climbing: twisting hips to gain free reach."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Tente tocar a parede o mais alto possível de frente. Agora, vire de lado e estique o braço. Você ganhou 15cm, certo? O Hip Twist é isso. Em vez de escalar de frente (sapo), você escala de lado, encostando o quadril na parede. É o segredo para escalar muito cansando pouco.</p><p><strong>O Mental:</strong> Fluxo (Flow). A escalada vira uma dança contínua.</p>",
            en: "<p><strong>Visual Logic:</strong> Reach high facing wall vs sideways. Sideways wins (+15cm). Climb sideways, save energy.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Twist Lock:</strong> Manter a posição girada para fazer movimentos seguidos.</li><li><strong>Pivô Dinâmico:</strong> Girar o quadril no ar para gerar impulso.</li></ul>",
            en: "<ul><li>Twist Lock (Continuous)</li><li>Dynamic Pivot (Generating momentum)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Aproximação do Centro de Massa. Ao encostar o quadril na parede, você alinha o peso sobre os pés e aumenta o braço de alavanca do alcance.",
            en: "<strong>Mechanics:</strong> COG close to wall. Aligns weight over feet, reduces arm torque, extends reach."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Oblíquos (cintura) e Rotadores do quadril.<br><strong>O Pivô:</strong> Ponta dos pés. Se o pé estiver chapado, o quadril não gira.",
            en: "<strong>Engine:</strong> Obliques/Hip Rotators.<br><strong>Pivot:</strong> Tiptoes. Flat feet don't twist."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Eficiência Energética. Transforma força vertical em movimento lateral e alcance.",
            en: "<strong>Fuel:</strong> Energy Efficiency. Converts vertical force into reach."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Essencial em negativos. Se você escala de frente no negativo, seus braços explodem. Gire!",
            en: "<strong>Tip:</strong> Essential on overhangs. Facing forward kills arms. Twist!"
        }
    },

    "rock_over": {
        names: { pt: "Rock Over", en: "Rock Over" },
        tags: ["Boulder", "Pernas", "Equilíbrio", "Força"],
        intro: {
            pt: "Transferir todo o peso para cima de um pé alto: a gangorra do equilíbrio.",
            en: "Shifting full weight onto a high foot: the balance seesaw."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você coloca um pé alto numa agarra. Agora você precisa 'montar' em cima desse pé. Você joga o joelho para frente e o corpo para o lado, como uma gangorra, até que seu nariz esteja alinhado com o dedão do pé. Só aí você consegue ficar em pé.</p><p><strong>O Mental:</strong> Confiança no Pé. O momento crítico é quando você transfere o peso e se sente instável.</p>",
            en: "<p><strong>Visual Logic:</strong> High foot placed. Shift weight sideways/forward like a seesaw until nose is over toe. Then stand.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Flexibilidade:</strong> Pé na altura do peito.</li><li><strong>Potência:</strong> Usar o Rock Over para lançar o corpo para a próxima agarra.</li></ul>",
            en: "<ul><li>Flexibility (Chest high)</li><li>Power (Launching pad)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Deslocamento do Centro de Massa + Extensão Unilateral. Você move o CM horizontalmente para cima da base de apoio e depois converte em força vertical.",
            en: "<strong>Mechanics:</strong> COG Shift + Unilateral Extension. Horizontal shift to base, then vertical drive."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Glúteo Máximo e Quadríceps. É um agachamento unilateral (Pistol Squat) disfarçado.",
            en: "<strong>Engine:</strong> Glute Max/Quads. Disguised pistol squat."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Força Dinâmica. Exige força concêntrica em ângulo fechado.",
            en: "<strong>Fuel:</strong> Dynamic Strength. Concentric force from closed angle."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cuidado com o joelho (menisco) durante a rotação com carga total. <strong>Aquecimento:</strong> Agachamentos unilaterais assistidos.",
            en: "<strong>Alert:</strong> Watch knee meniscus under load. <strong>Warm-up:</strong> Assisted pistol squats."
        }
    },

    "high_step": {
        names: { pt: "High Step (Subida Alta)", en: "High Step" },
        tags: ["Esportiva", "Pernas", "Flexibilidade", "Força"],
        intro: {
            pt: "A arte de colocar o pé na altura do rosto sem usar as mãos.",
            en: "The art of putting your foot by your face without using hands."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> As agarras de mão acabaram ou estão ruins. A solução é subir os pés. Você precisa comprimir o corpo e levantar o pé numa agarra alta (acima do joelho ou quadril). É o pré-requisito para o Rock Over.</p><p><strong>O Mental:</strong> Mobilidade Ativa. A dificuldade não é só flexibilidade, é ter a força para levantar a perna pesada.</p>",
            en: "<p><strong>Visual Logic:</strong> Hands bad? Feet up. Compress body, lift foot high. Prerequisite for Rock Over.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Frontal:</strong> Joelho no peito.</li><li><strong>Lateral:</strong> Joelho para fora (sapo). Mais fácil para quem tem quadril aberto.</li></ul>",
            en: "<ul><li>Frontal (Knee to chest)</li><li>Lateral (Frog style)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Flexão Extrema de Quadril. Ao levantar o pé alto, você encurta a distância para a próxima agarra, mas coloca o músculo da perna em desvantagem mecânica inicial.",
            en: "<strong>Mechanics:</strong> Extreme Hip Flexion. Shortens distance to next hold but starts leg in mechanical disadvantage."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Iliopsoas (flexor do quadril) para levantar a perna. Isquiotibiais precisam estar alongados.",
            en: "<strong>Engine:</strong> Iliopsoas lifts leg. Hamstrings must be flexible to allow it."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Mobilidade e Força Flexora. Muitas vezes a cãibra na virilha acontece por falta de força no Iliopsoas, não por falta de alongamento.",
            en: "<strong>Fuel:</strong> Mobility/Flexor Strength. Groin cramps often mean weak Iliopsoas, not just tight muscles."
        },
        care: {
            pt: "<strong>Alerta:</strong> Risco de estiramento na virilha. Levante com controle. <strong>Aquecimento:</strong> Elevação de joelhos e alongamento dinâmico.",
            en: "<strong>Alert:</strong> Groin strain risk. Lift controlled, don't kick. <strong>Warm-up:</strong> High knees/dynamic stretch."
        }
    },

    "toe_scum": {
        names: { pt: "Toe Scum (Arrasto de Pé)", en: "Toe Scum" },
        tags: ["Boulder", "Pés", "Aderência", "Equilíbrio"],
        intro: {
            pt: "O 'Toe Hook' do preguiçoso: usar o peito do pé para equilíbrio sutil.",
            en: "The lazy Toe Hook: using top of foot for subtle balance."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Não é um gancho forte. É um toque sutil. Você arrasta o peito do pé contra um volume ou parede para dar um 'chega pra lá' no corpo para se equilibrar.</p><p><strong>O Mental:</strong> Sensibilidade. É um movimento de finesse. Se fizer muita força, escorrega; se fizer pouca, não equilibra.</p>",
            en: "<p><strong>Visual Logic:</strong> Not a load-bearing hook. Subtle drag of foot top/side for balance. Finesse move.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Estabilizador:</strong> Pressionar contra uma aresta lateral.</li><li><strong>Contra-pressão:</strong> Empurrar para cima sob um volume.</li></ul>",
            en: "<ul><li>Stabilizer (Side press)</li><li>Counter-pressure (Under volume)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Atrito Lateral Leve. Cria um ponto de contato extra que aumenta a estabilidade, impedindo rotações.",
            en: "<strong>Mechanics:</strong> Light Lateral Friction. Extra contact point increases Stability Polygon, stopping rotation."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tibial Anterior e Abdutores do quadril.",
            en: "<strong>Engine:</strong> Tibialis Anterior/Hip Abductors. Core fine-tunes."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Propriocepção. Exige leitura rápida da superfície para saber onde 'encostar' o pé.",
            en: "<strong>Fuel:</strong> Proprioception. Quick surface reading to know where to 'scum'."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Desgasta a borracha de cima da sapatilha rapidamente.",
            en: "<strong>Tip:</strong> Wears toe rubber fast. Use shoes with toe patches."
        }
    },

    // === COORDENAÇÃO (33-40) ===
    "hand_foot_match": {
        names: { pt: "Hand-Foot Match (Troca)", en: "Hand-Foot Match" },
        tags: ["Boulder", "Corpo", "Flexibilidade", "Técnica"],
        intro: {
            pt: "O desafio de yoga na vertical: colocar o pé exatamente onde a mão está.",
            en: "Vertical yoga challenge: placing the foot exactly where the hand is."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você tem uma agarra ótima na mão e precisa subir o pé. O problema é que só tem essa agarra. A solução? Você traz o joelho no peito, comprime o corpo como uma mola e coloca o pé ao lado (ou em cima) da mão. É um momento de tensão máxima antes de liberar a mão para subir.</p><p><strong>O Mental:</strong> Mobilidade sob Tensão. Exige paciência. Se você chutar a agarra com pressa, sua mão escapa. É um movimento cirúrgico.</p>",
            en: "<p><strong>Visual Logic:</strong> Knee to chest, compress like a spring. Place foot next to hand. Surgical precision.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Dinâmico:</strong> Jogar o pé e tirar a mão simultaneamente (arriscado).</li><li><strong>Piano (Dedilhado):</strong> Levantar um dedo da mão de cada vez para abrir espaço para a borracha do pé.</li></ul>",
            en: "<ul><li>Dynamic (Pop and swap)</li><li>Piano (Finger by finger)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Compressão do Centro de Massa. Você precisa elevar o quadril para criar espaço físico para a flexão da perna. O Core trabalha em compressão total para manter o equilíbrio durante a troca de base de suporte.",
            en: "<strong>Mechanics:</strong> COG Compression. High hips create space. Core compression maintains balance during base swap."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexores do Quadril (Iliopsoas) para puxar a perna para cima.<br><strong>A Flexibilidade:</strong> Isquiotibiais e Glúteos precisam ceder (alongar) para permitir a posição.",
            en: "<strong>Engine:</strong> Hip Flexors.<br><strong>Flexibility:</strong> Hamstrings/Glutes must elongate."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Mobilidade Ativa. Não é só ser flexível, é ter força para fechar o ângulo do corpo e segurar.",
            en: "<strong>Fuel:</strong> Active Mobility. Strength to close the body angle and hold."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Olhe para o pé! Não faça no cego. Cuidado para não pisar nos próprios dedos da mão. <strong>Aquecimento:</strong> Alongamento de cadeia posterior.",
            en: "<strong>Tip:</strong> Look at your foot! Don't step on your fingers. <strong>Warm-up:</strong> Posterior chain stretch."
        }
    },

    "bicycle": {
        names: { pt: "Bicicleta (Bicycle)", en: "Bicycle" },
        tags: ["Boulder", "Pernas", "Compressão", "Força"],
        intro: {
            pt: "Pedalar no teto: criar um grampo humano usando as duas pernas em oposição.",
            en: "Pedaling on the roof: creating a human clamp using legs in opposition."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine que você está pedalando uma bicicleta no ar. Um pé empurra uma agarra para longe (como pisar no pedal), enquanto o outro pé puxa uma agarra para você (Toe Hook). Essa força oposta cria um 'grampo' que trava seu corpo no teto sem precisar de muita força nas mãos.</p><p><strong>O Mental:</strong> Coordenação. É como fazer um truque de mágica com as pernas. Exige o cérebro focado nos pés, não nas mãos.</p>",
            en: "<p><strong>Visual Logic:</strong> Pedaling mid-air. One foot pushes, one pulls. Creates a clamp locking you to the roof.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Mesma Agarra:</strong> Puxar e empurrar a mesma pedra (sanduíche de pé).</li><li><strong>Agarras Distintas:</strong> Puxar uma, empurrar outra para gerar torque no quadril.</li></ul>",
            en: "<ul><li>Same Hold (Foot sandwich)</li><li>Split (Torque generation)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Vetores de Força Opostos (Binário). As pernas geram um momento de força que anula a gravidade e impede o balanço. É a aplicação perfeita da Terceira Lei de Newton nas pernas.",
            en: "<strong>Mechanics:</strong> Opposing Force Vectors. Legs generate torque canceling gravity/swing. Newton's 3rd Law."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Quadríceps (empurrada) e Isquiotibiais/Tibial Anterior (puxada). O Core conecta tudo.",
            en: "<strong>Engine:</strong> Quads (push) vs Hamstrings/Shin (pull). Core connects all."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tensão Isométrica Complexa. Exige contração simultânea de grupos musculares opostos.",
            en: "<strong>Fuel:</strong> Complex Isometric Tension. Simultaneous contraction of opposing groups."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cãibras na panturrilha ou na canela são comuns se você não estiver acostumado. <strong>Aquecimento:</strong> Ativação de pernas e core.",
            en: "<strong>Alert:</strong> Cramp city! <strong>Warm-up:</strong> Leg and core activation."
        }
    },

    "stem_corner": {
        names: { pt: "Stem Corner (Oposição de Canto)", en: "Stem Corner" },
        tags: ["Tradicional", "Corpo", "Oposição", "Equilíbrio"],
        intro: {
            pt: "O Homem-Aranha no canto da sala: usar a pressão das mãos para subir os pés.",
            en: "Spiderman in the corner: using hand pressure to walk the feet up."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você está num diedro (canto de livro aberto). Não há agarras boas para puxar. Você coloca uma mão em cada parede e empurra para fora (como empurrar dois armários). Enquanto sustenta essa pressão, seus pés sobem em pequenos degraus. É uma escalada de empurrar, não de puxar.</p><p><strong>O Mental:</strong> Fé no Atrito. Se você parar de empurrar, você cai. Exige manter a pressão constante enquanto move os pés.</p>",
            en: "<p><strong>Visual Logic:</strong> Open book corner. Push walls apart with hands. Walk feet up. Push, don't pull.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Palming:</strong> Empurrar com a palma da mão aberta na parede lisa.</li><li><strong>Smearing:</strong> Pés em aderência pura, sem degraus.</li></ul>",
            en: "<ul><li>Palming (Open hand push)</li><li>Smearing (Friction feet)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Atrito Puro. A estabilidade vem da largura da base. Quanto mais abertos os braços e pernas, mais estável (mas mais cansativo). Você cria uma 'ponte' de tensão.",
            en: "<strong>Mechanics:</strong> Pure Friction. Stability from base width. Tension bridge."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tríceps e Ombros (para empurrar as paredes).<br><strong>A Base:</strong> Panturrilhas para sustentar o peso nos pés.",
            en: "<strong>Engine:</strong> Triceps/Shoulders (push).<br><strong>Base:</strong> Calves support weight."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Estabilidade Estática. O movimento é lento e controlado. O coração bate calmo se você confiar na técnica.",
            en: "<strong>Fuel:</strong> Static Stability. Slow, controlled. Low heart rate if trusting technique."
        },
        care: {
            pt: "<strong>Alerta:</strong> O 'Efeito Porta' (Barndoor). Se uma mão escorregar, você gira para fora. Mantenha a pressão simétrica. <strong>Aquecimento:</strong> Flexões e alongamento de punho.",
            en: "<strong>Alert:</strong> Barndoor spin. Keep pressure symmetrical. <strong>Warm-up:</strong> Push-ups/wrist stretch."
        }
    },

    "toe_point": {
        names: { pt: "Toe Point (Ponta de Pé)", en: "Toe Point" },
        tags: ["Esportiva", "Pés", "Precisão", "Alcance"],
        intro: {
            pt: "Ganhar centímetros grátis: esticar o tornozelo como uma bailarina para buscar a agarra longe.",
            en: "Free centimeters: extending the ankle like a ballerina to reach far holds."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você precisa colocar o pé numa agarra que está *quase* fora de alcance. Em vez de se jogar, você estica a perna e aponta o pé (flexão plantar máxima). Isso alonga sua perna em 10cm, permitindo 'pescar' a agarra com precisão.</p><p><strong>O Mental:</strong> Intenção. Não é chutar o ar; é esticar o corpo com propósito até sentir a borracha tocar a rocha.</p>",
            en: "<p><strong>Visual Logic:</strong> Reach holds just out of range. Point toe, extend leg. Fishing for the hold.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Cego (Blind):</strong> Buscar a agarra sem olhar, tateando com a ponta esticada.</li><li><strong>Tensão:</strong> Manter o pé esticado para não cortar o balanço num teto.</li></ul>",
            en: "<ul><li>Blind (Feeling it out)</li><li>Tension (Maintaining span)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Aumento do Braço de Alavanca. A flexão plantar adiciona o comprimento do pé ao comprimento da perna, maximizando o raio de alcance.",
            en: "<strong>Mechanics:</strong> Lever Arm Increase. Plantar flexion adds foot length to leg length."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tríceps Sural (Gastrocnêmio e Sóleo).<br><strong>O Controle:</strong> Músculos intrínsecos do pé para sentir a agarra.",
            en: "<strong>Engine:</strong> Calf muscles.<br><strong>Control:</strong> Intrinsic foot muscles feel the hold."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Controle Motor Fino. Gasta pouca energia bruta, mas exige conexão neural precisa.",
            en: "<strong>Fuel:</strong> Fine Motor Control. Low energy, high precision."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cãibras na panturrilha são clássicas aqui. Hidrate-se! <strong>Aquecimento:</strong> Rotação de tornozelo e 'pontinha do pé'.",
            en: "<strong>Alert:</strong> Calf cramps common! Hydrate. <strong>Warm-up:</strong> Ankle rotations/tiptoes."
        }
    },

    "toe_turn_in": {
        names: { pt: "Toe Turn-in (Pé para Dentro)", en: "Toe Turn-in" },
        tags: ["Esportiva", "Pés", "Técnica", "Posicionamento"],
        intro: {
            pt: "A chave da força: girar o pé para dentro para alinhar o quadril e explodir.",
            en: "The key to power: turning the toe in to align hips and explode."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> É o passo inicial para a maioria dos movimentos atléticos. Você pisa com a borda interna da sapatilha (dedão) e gira o joelho para dentro. Isso carrega a mola da perna e prepara o quadril para girar ou lançar o corpo.</p><p><strong>O Mental:</strong> Preparação. É a base. Antes de puxar com a mão, verifique se o pé está bem posicionado para empurrar.</p>",
            en: "<p><strong>Visual Logic:</strong> Inside edge, knee in. Loads the leg spring. Prepares hip for rotation.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Front Step:</strong> Pisar reto, mas focado no dedão.</li><li><strong>Pré-Drop Knee:</strong> O início de uma torção mais agressiva.</li></ul>",
            en: "<ul><li>Front Step (Straight on)</li><li>Pre-Drop Knee (Aggressive twist)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Cadeia Cinética Fechada. Alinha a força através do eixo mais forte do pé (Hálux/Dedão), permitindo máxima transferência de força para a parede.",
            en: "<strong>Mechanics:</strong> Closed Kinetic Chain. Aligns force through the big toe axis for max transfer."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Rotadores Internos do Quadril e Adutores.<br><strong>A Base:</strong> Flexor Longo do Hálux (o músculo que pressiona o dedão).",
            en: "<strong>Engine:</strong> Internal Hip Rotators.<br><strong>Base:</strong> Flexor Hallucis Longus."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Eficiência Biomecânica. É a posição natural para gerar força vertical.",
            en: "<strong>Fuel:</strong> Biomechanical Efficiency. Natural position for vertical force."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Mantenha o calcanhar móvel. Não deixe ele cair passivamente; use-o para direcionar a força.",
            en: "<strong>Tip:</strong> Keep heel mobile. Direct the force actively."
        }
    },

    "toe_turn_out": {
        names: { pt: "Toe Turn-out (Pé para Fora)", en: "Toe Turn-out" },
        tags: ["Esportiva", "Pés", "Flexibilidade", "Técnica"],
        intro: {
            pt: "O 'Sapo Tático': abrir o quadril para colar o corpo na parede.",
            en: "The 'Tactical Frog': opening hips to glue body to the wall."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine um sapo na parede. Joelhos para fora, calcanhares juntos. Ao girar a ponta do pé para fora (rotação externa), você consegue trazer a bacia para bem perto da rocha. Isso transfere o peso para os pés e alivia as mãos.</p><p><strong>O Mental:</strong> Centro. Trazer o centro de gravidade para 'dentro' da parede é a meta. É um movimento de aproximação.</p>",
            en: "<p><strong>Visual Logic:</strong> Frog on a wall. Knees out, heels in. Brings hips close, offloads hands.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Frog Position:</strong> Ambos os pés para fora, agachado.</li><li><strong>High Step Aberto:</strong> Levantar o pé alto com o joelho aberto para ganhar altura sem se afastar da parede.</li></ul>",
            en: "<ul><li>Frog Position (Squat)</li><li>Open High Step (Height without distance)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Rotação Externa. Desloca o Centro de Massa para a frente (em direção à rocha). Quanto mais flexibilidade pélvica, mais peso sai das mãos.",
            en: "<strong>Mechanics:</strong> External Rotation. Shifts COG forward to rock. More flexibility = less hand weight."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Glúteo Máximo e os rotadores profundos do quadril (Piriforme, Gêmeos, etc.).",
            en: "<strong>Engine:</strong> Glute Max and deep hip rotators."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Flexibilidade Ativa. Exige mobilidade para manter a posição sem lutar contra os próprios tecidos.",
            en: "<strong>Fuel:</strong> Active Flexibility. Mobility is key to rest here."
        },
        care: {
            pt: "<strong>Alerta:</strong> Se você tem quadril travado, isso vai forçar seus joelhos. <strong>Aquecimento:</strong> Abertura de sapo e borboleta.",
            en: "<strong>Alert:</strong> Tight hips hurt knees. <strong>Warm-up:</strong> Frog/Butterfly stretches."
        }
    },

    "toe_smear": {
        names: { pt: "Toe Smear (Flagging Ativo)", en: "Toe Smear" },
        tags: ["Boulder", "Pés", "Aderência", "Equilíbrio"],
        intro: {
            pt: "O 'limpador de para-brisa': usar a lateral da sapatilha para estabilizar.",
            en: "The windshield wiper: using the shoe side to stabilize."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você não está pisando numa agarra, está esfregando a lateral ou a ponta da sapatilha contra a parede lisa. Funciona como uma perna de tripé. Você pressiona contra a parede para evitar que seu corpo gire (Barndoor). É um Flagging que 'toca' a parede.</p><p><strong>O Mental:</strong> Sutileza. Não é um apoio de carga, é um apoio de direção. É como usar a mão para se equilibrar numa parede enquanto caminha no meio-fio.</p>",
            en: "<p><strong>Visual Logic:</strong> Rubbing shoe side on wall like a tripod leg. Prevents spin. Steering, not loading.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Lateral:</strong> Usar a borda de fora do pé contra uma parede lateral.</li><li><strong>Ponta:</strong> Pressionar a ponta do pé contra a parede frontal para manter a tensão.</li></ul>",
            en: "<ul><li>Lateral (Side wall press)</li><li>Tip (Front wall tension)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Atrito Lateral e Estabilização de Momento. A força leve aplicada cria um torque que cancela a rotação do corpo.",
            en: "<strong>Mechanics:</strong> Lateral Friction. Light force creates torque canceling rotation."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Abdutores do quadril (para abrir a perna) e Eversores do pé (para pressionar a lateral).",
            en: "<strong>Engine:</strong> Hip Abductors/Foot Everters."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Propriocepção. O cérebro precisa calcular a pressão exata: muito forte te empurra para fora, muito fraco você escorrega.",
            en: "<strong>Fuel:</strong> Proprioception. Brain calculates exact pressure needed."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Isso come a borracha da sapatilha! Mas vale a pena pelo equilíbrio. Use sapatilhas com reforço lateral se abusar dessa técnica.",
            en: "<strong>Tip:</strong> Eats shoe rubber! Worth it for balance. Use reinforced shoes."
        }
    },

    "knee_scum": {
        names: { pt: "Knee Scum (Apoio de Joelho)", en: "Knee Scum" },
        tags: ["Boulder", "Pernas", "Aderência", "Equilíbrio"],
        intro: {
            pt: "O ajudante invisível: um toque sutil de joelho para parar o balanço.",
            en: "The invisible helper: a subtle knee nudge to stop the swing."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Não é um Knee Bar (trava forte). É apenas um encosto. Você toca o joelho ou a coxa num volume ou na parede para ganhar um ponto extra de equilíbrio. É como encostar o joelho na mesa para não cair da cadeira.</p><p><strong>O Mental:</strong> Malandragem. É um recurso técnico para 'roubar' um pouco de estabilidade em lances precários.</p>",
            en: "<p><strong>Visual Logic:</strong> Not a lock, just a touch. Nudging knee against wall for extra balance point.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Estático:</strong> Apoiar para soltar uma mão.</li><li><strong>Guia:</strong> Usar o joelho deslizando na parede para guiar o quadril para cima.</li></ul>",
            en: "<ul><li>Static (Hand release)</li><li>Guide (Sliding upward)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Polígono de Sustentação. Ao adicionar o joelho como ponto de contato, você cria um triângulo de base maior, tornando o equilíbrio mais fácil.",
            en: "<strong>Mechanics:</strong> Base of Support. Knee adds a contact point, enlarging the stability triangle."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexores do Quadril e Adutores (para pressionar o joelho contra a rocha).",
            en: "<strong>Engine:</strong> Hip Flexors/Adductors press knee to rock."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Sensibilidade. Requer tato na perna (mesmo através da calça) para saber o quanto pressionar.",
            en: "<strong>Fuel:</strong> Sensitivity. Feeling the pressure through pants."
        },
        care: {
            pt: "<strong>Alerta:</strong> Abrasão na pele ou rasgo na calça. Se a parede for muito áspera, pode machucar a patela. Use com moderação.",
            en: "<strong>Alert:</strong> Skin abrasion/Torn pants. Watch the patella on rough rock."
        }
    },

    // === FISSURA AVANÇADA (41-48) ===
    "chicken_wing": {
        names: { pt: "Asa de Frango (Chicken Wing)", en: "Chicken Wing" },
        tags: ["Tradicional", "Braços", "Oposição", "Bloqueio"],
        intro: {
            pt: "A 'chave de braço' na rocha: usar o cotovelo para travar em fendas largas.",
            en: "Arm-barring the rock: using the elbow to lock into wide cracks."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> A fenda é larga demais para a mão e estreita demais para o corpo. Você enfia o braço e levanta o cotovelo como uma asa de frango. A mão empurra uma parede, o cotovelo empurra a outra. Você cria uma barra de expansão com o próprio braço.</p><p><strong>O Mental:</strong> Conforto no Desconforto. É uma posição bizarra e claustrofóbica. O segredo é relaxar o ombro e deixar a estrutura óssea fazer o trabalho de travamento.</p>",
            en: "<p><strong>Visual Logic:</strong> Crack too wide/narrow? Elbow up like a chicken wing. Hand pushes one wall, elbow the other. Expansion bar.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Palma para fora:</strong> A variação clássica para gerar pressão.</li><li><strong>Double Chicken Wing:</strong> Usar os dois braços em chaminés estreitas (parece uma dança estranha).</li></ul>",
            en: "<ul><li>Palm Out (Classic)</li><li>Double (Narrow chimneys)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Rotação Interna e Abdução. A força de expansão do tríceps gera atrito no cotovelo e na palma da mão. É uma alavanca mecânica pura.",
            en: "<strong>Mechanics:</strong> Internal Rotation/Abduction. Triceps expansion creates friction at elbow and palm."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tríceps (empurra o antebraço) e Deltóide (levanta o cotovelo).<br><strong>A Estrutura:</strong> O Úmero (osso do braço) suporta a compressão.",
            en: "<strong>Engine:</strong> Triceps/Deltoid.<br><strong>Structure:</strong> Humerus bears compression."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Isometria de Ombros. Cansa o deltóide rápido se você não usar as pernas para subir.",
            en: "<strong>Fuel:</strong> Shoulder Isometry. Deltoids fatigue fast if legs don't help."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cuidado com o ombro! Se escorregar, a alavanca pode forçar a articulação. <strong>Aquecimento:</strong> Rotações de ombro e tríceps.",
            en: "<strong>Alert:</strong> Watch the shoulder joint on slips. <strong>Warm-up:</strong> Shoulder rotations/triceps."
        }
    },

    "finger_lock": {
        names: { pt: "Finger Lock (Trava de Dedo)", en: "Finger Lock" },
        tags: ["Tradicional", "Mãos", "Bloqueio", "Precisão"],
        intro: {
            pt: "Encontrar o gargalo da garrafa: travar a junta do dedo numa constrição da rocha.",
            en: "Finding the bottleneck: locking the finger knuckle in a rock constriction."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Diferente do 'Jam' (que usa torção), o Lock usa a geometria. Você procura um estreitamento na fenda (como um funil). Encaixa os dedos na parte larga e puxa para baixo até que os nós dos dedos entalem na parte estreita. É passivo e super seguro.</p><p><strong>O Mental:</strong> Precisão Cirúrgica. Exige olhar de raio-x para encontrar a constrição perfeita. Uma vez encaixado, confie na trava mecânica, não aperte.</p>",
            en: "<p><strong>Visual Logic:</strong> Like a funnel. Insert wide, pull into narrow. Knuckles catch passively.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Dedo Indicador:</strong> Comum em buracos de 'pin' (furos de piton).</li><li><strong>Médio e Anelar:</strong> A combinação mais forte e comum em fendas de dedo.</li></ul>",
            en: "<ul><li>Index (Pin scars)</li><li>Middle/Ring (Strongest combo)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Bloqueio Mecânico Passivo. A pele e a estrutura óssea da articulação (PIP) agem como um calço. A gravidade faz o trabalho de puxar o dedo para o aperto.",
            en: "<strong>Mechanics:</strong> Passive Mechanical Lock. Skin/Bone acts as a chock. Gravity locks it."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Quase nenhum esforço muscular de preensão. Os flexores apenas mantêm o dedo no lugar.<br><strong>A Carga:</strong> Pele e ligamentos.",
            en: "<strong>Engine:</strong> Minimal grip effort. Flexors simply position.<br><strong>Load:</strong> Skin/Ligaments."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Eficiência Máxima. Gasta zero ATP. O limite é a dor na pele.",
            en: "<strong>Fuel:</strong> Max Efficiency. Zero ATP cost. Limit is skin pain."
        },
        care: {
            pt: "<strong>Alerta:</strong> Pode ralar a pele sobre a articulação (knuckles). <strong>Dica Técnica:</strong> Não puxe se sentir que está cortando a circulação.",
            en: "<strong>Alert:</strong> Knuckle abrasion. <strong>Tip:</strong> Don't cut off circulation."
        }
    },

    "finger_stack": {
        names: { pt: "Finger Stack (Empilhamento)", en: "Finger Stack" },
        tags: ["Tradicional", "Mãos", "Bloqueio", "Técnica"],
        intro: {
            pt: "Jogar Tetris com os dedos: cruzar dedos para preencher espaços irregulares.",
            en: "Finger Tetris: crossing fingers to fill irregular spaces."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> A fenda é larga demais para um dedo, mas estreita demais para dois lado a lado. Solução? Você estala os dedos (cruza o indicador sobre o médio, ou vice-versa) para criar um 'super dedo' mais grosso. Isso preenche o espaço e trava.</p><p><strong>O Mental:</strong> Criatividade. É uma técnica de 'MacGyver'. Quando nada funciona, você inventa um formato de mão novo.</p>",
            en: "<p><strong>Visual Logic:</strong> Crack size awkward? Cross fingers (snap style) to make a 'thicker finger' wedge.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Thumb Stack:</strong> Usar o polegar como calço ao lado do indicador para engrossar a pega.</li><li><strong>Cross Stack:</strong> Cruzar dedos para aumentar a espessura lateral.</li></ul>",
            en: "<ul><li>Thumb Stack (Thumb wedge)</li><li>Cross Stack (Finger crossing)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Aumento de Volume Artificial. Você altera a geometria da mão para criar atrito onde ele não existiria naturalmente.",
            en: "<strong>Mechanics:</strong> Artificial Volume. Altering hand geometry to create friction."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Músculos intrínsecos e flexores profundos trabalhando em isometria para manter a posição cruzada sob pressão.",
            en: "<strong>Engine:</strong> Intrinsics/Deep Flexors holding the crossed position."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tolerância à Pressão. Pode ser doloroso para os dedos esmagados uns contra os outros.",
            en: "<strong>Fuel:</strong> Pressure Tolerance. Painful crushing of fingers against each other."
        },
        care: {
            pt: "<strong>Alerta:</strong> Risco de esmagamento de tecidos moles. Treine devagar antes de colocar o peso do corpo.",
            en: "<strong>Alert:</strong> Soft tissue crushing. Test slowly before weighting."
        }
    },

    "shoulder_stand": {
        names: { pt: "Shoulder Stand (Apoio de Ombro)", en: "Shoulder Stand" },
        tags: ["Tradicional", "Corpo", "Oposição", "Descanso"],
        intro: {
            pt: "O terceiro ponto de apoio: usar o ombro para descansar ou estabilizar.",
            en: "The third contact point: using the shoulder to rest or stabilize."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Em chaminés ou diedros apertados, você pressiona o ombro ou as costas contra a rocha. Isso libera suas mãos para arrumar o equipamento ou relaxar. É como se encostar na parede enquanto espera o ônibus, só que a 30 metros de altura.</p><p><strong>O Mental:</strong> Calma Tática. É um momento de 'reset'. Você para, respira e deixa a parede segurar você.</p>",
            en: "<p><strong>Visual Logic:</strong> Leaning against a wall waiting for the bus. Press shoulder to rock, free hands.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Scum:</strong> Apenas um toque leve para evitar girar.</li><li><strong>Press:</strong> Força ativa para subir o corpo (comum em Mantles estreitos).</li></ul>",
            en: "<ul><li>Scum (Balance touch)</li><li>Press (Active push)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Atrito de Grande Superfície. A área de contato da roupa/ombro gera atrito suficiente para aliviar o peso dos pés e mãos.",
            en: "<strong>Mechanics:</strong> Large Surface Friction. Clothing/shoulder friction offloads feet/hands."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Pernas (para empurrar o corpo contra a parede). O ombro é passivo.<br><strong>A Proteção:</strong> Músculos do Trapézio protegem a estrutura óssea.",
            en: "<strong>Engine:</strong> Legs drive body into wall.<br><strong>Protection:</strong> Trapezius cushions bone."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Recuperação. Permite baixar o cortisol e limpar o lactato.",
            en: "<strong>Fuel:</strong> Recovery. Lowers cortisol, flushes lactate."
        },
        care: {
            pt: "<strong>Alerta:</strong> Destrói camisetas! Abrasão na pele do ombro é comum. <strong>Dica:</strong> Respire com o diafragma (barriga) pois o peito pode estar comprimido.",
            en: "<strong>Alert:</strong> Shirt destroyer! Skin abrasion. <strong>Tip:</strong> Belly breathe."
        }
    },

    "back_step": {
        names: { pt: "Back Step (Passada Externa)", en: "Back Step" },
        tags: ["Esportiva", "Pernas", "Posicionamento", "Técnica"],
        intro: {
            pt: "Caminhar de lado na parede: pisar com a borda externa para aumentar o alcance.",
            en: "Walking sideways on the wall: outside edging to extend reach."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Em vez de subir de frente (sapo), você vira de lado e pisa com a borda de fora do pé (dedinho). Isso projeta seu quadril para a parede automaticamente. É a preparação natural para um Drop Knee ou para alcançar longe com a mão do mesmo lado.</p><p><strong>O Mental:</strong> Fluidez. Transforma a escalada dura e 'quadrada' em um movimento contínuo e elegante.</p>",
            en: "<p><strong>Visual Logic:</strong> Don't frog climb. Turn sideways, step on outside edge (pinky). Hip hits wall naturally.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Estático:</strong> Para descanso e alcance longo.</li><li><strong>Dinâmico:</strong> Passar correndo numa travessia.</li></ul>",
            en: "<ul><li>Static (Rest/Reach)</li><li>Dynamic (Traverse flow)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Rotação Interna do Fêmur. Alinha o esqueleto de forma que o osso da perna suporte o peso, enquanto o quadril próximo à parede reduz o braço de momento da gravidade.",
            en: "<strong>Mechanics:</strong> Internal Femur Rotation. Bone stacking supports weight, hip reduces gravity torque."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Glúteo Médio e Tensor da Fáscia Lata.<br><strong>A Base:</strong> Fibulares (músculos laterais da perna) estabilizam o pé na borda externa.",
            en: "<strong>Engine:</strong> Glute Medius/TFL.<br><strong>Base:</strong> Peroneals stabilize outside edge."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Economia de Movimento. Reduz a necessidade de puxada de braço.",
            en: "<strong>Fuel:</strong> Movement Economy. Reduces arm pull requirement."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Exige sapatilhas precisas e justas. Se a sapatilha estiver larga, o pé 'samba' e você cai.",
            en: "<strong>Tip:</strong> Needs tight shoes. Loose shoes roll off the hold."
        }
    },

    "knee_jam": {
        names: { pt: "Knee Jam (Entalamento de Joelho)", en: "Knee Jam" },
        tags: ["Tradicional", "Pernas", "Bloqueio", "Força"],
        intro: {
            pt: "A âncora de carne e osso: travar o joelho em fendas gigantes.",
            en: "Flesh and bone anchor: locking the knee into giant cracks."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Fenda larga (Off-width). Você enfia o joelho lá dentro e flexiona a perna (traz o pé para a bunda). Isso faz sua coxa e panturrilha expandirem, preenchendo o espaço. É uma trava super sólida, mas psicologicamente assustadora.</p><p><strong>O Mental:</strong> Confiança na Dor. Se está doendo e a calça está rasgando, provavelmente está seguro. É uma âncora emocional para descansar os braços.</p>",
            en: "<p><strong>Visual Logic:</strong> Off-width. Insert knee, flex leg. Thigh/calf expand to lock. Solid but scary.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Vertical:</strong> Para progredir na via.</li><li><strong>Horizontal (Teto):</strong> Para ficar de cabeça para baixo sem as mãos.</li></ul>",
            en: "<ul><li>Vertical (Progress)</li><li>Horizontal (Roof hang)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Expansão Volumétrica e Alavanca. A flexão do joelho aumenta o diâmetro da perna. A tíbia atua como uma alavanca contra a rocha.",
            en: "<strong>Mechanics:</strong> Volumetric Expansion/Leverage. Flexing knee expands leg diameter against rock."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Isquiotibiais (para flexionar o joelho).<br><strong>A Carga:</strong> Fêmur e Patela suportam a pressão.",
            en: "<strong>Engine:</strong> Hamstrings (flexion).<br><strong>Load:</strong> Femur/Patella bear pressure."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Segurança Psicológica. Permite recuperação total dos membros superiores.",
            en: "<strong>Fuel:</strong> Psychological Safety. Allows full upper body recovery."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Muito doloroso. Uso de calça grossa ou joelheira (Knee Pad) é quase obrigatório para evitar cortes profundos. <strong>Aquecimento:</strong> Flexão de joelhos.",
            en: "<strong>Red Alert:</strong> Painful. Pants/Knee pads mandatory. <strong>Warm-up:</strong> Knee flexion."
        }
    },

    "crimp_lock_off": {
        names: { pt: "Crimp-Lock-Off", en: "Crimp-Lock-Off" },
        tags: ["Esportiva", "Braços", "Bloqueio", "Força"],
        intro: {
            pt: "Congelar no tempo: puxar numa micro-agarra e travar o braço para alcançar o topo.",
            en: "Freezing time: pulling on a micro-hold and locking the arm to reach the top."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você segura uma agarra minúscula (Crimp), puxa o corpo até a altura do queixo e <em>congela</em>. O braço que segura vira uma estátua de pedra, enquanto o outro braço flutua suavemente para a próxima agarra. É o teste final de força estática.</p><p><strong>O Mental:</strong> Controle Total. Nada treme. Você domina a gravidade por 3 segundos para fazer o movimento com precisão, sem se jogar.</p>",
            en: "<p><strong>Visual Logic:</strong> Hold crimp, pull to chin, freeze like a statue. Reach calmly. Static strength test.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>90 Graus:</strong> Trava no ângulo mais forte do cotovelo.</li><li><strong>Profundo (Deep):</strong> Mão no ombro. Exige força extrema de final de curso.</li></ul>",
            en: "<ul><li>90 Degrees (Strongest)</li><li>Deep (Max compression)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Estabilidade Estática sob Carga Distal. Combina a alavanca dos dedos (Crimp) com a isometria dos flexores do cotovelo e ombro.",
            en: "<strong>Mechanics:</strong> Static Stability. Finger leverage meets elbow/shoulder isometry."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexor Profundo dos Dedos (segura), Bíceps e Braquial (travam o cotovelo), Grande Dorsal (trava o ombro).",
            en: "<strong>Engine:</strong> FDP (grip), Biceps/Brachialis (lock), Lats (shoulder)."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Força Isométrica Máxima. Oclui o fluxo sanguíneo tanto nos dedos quanto no braço. Gera ácido lático rapidamente.",
            en: "<strong>Fuel:</strong> Max Isometric Force. Occludes blood flow everywhere. Rapid pump."
        },
        care: {
            pt: "<strong>Alerta:</strong> Alto risco de tendinite no cotovelo e ombro. Não abuse nos treinos se sentir dor. <strong>Aquecimento:</strong> Isometrias de bíceps e dedos.",
            en: "<strong>Alert:</strong> Elbow/shoulder tendonitis risk. <strong>Warm-up:</strong> Bicep/finger isometrics."
        }
    },

    "mono": {
        names: { pt: "Mono (Monodedo)", en: "Mono" },
        tags: ["Esportiva", "Mãos", "Bloqueio", "Força"],
        intro: {
            pt: "O dedo de aço: sustentar o peso do corpo em um único tendão.",
            en: "The steel finger: supporting body weight on a single tendon."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Um buraco na rocha onde só cabe um dedo (geralmente o médio). Você insere o dedo, trava o pulso e reza. É a concentração máxima de força na menor área possível. Parece impossível, mas com treino o tendão vira um cabo de aço.</p><p><strong>O Mental:</strong> Frio na Barriga. Exige confiança absoluta na sua estrutura. O medo de lesão é real, então o foco tem que ser total.</p>",
            en: "<p><strong>Visual Logic:</strong> One finger pocket. Insert, lock wrist, pray. Max force in min area.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Médio:</strong> O mais forte e seguro (centro da mão).</li><li><strong>Indicador:</strong> Mais raro, usado em buracos específicos.</li></ul>",
            en: "<ul><li>Middle (Strongest)</li><li>Index (Rare)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Carga Isolada. Toda a força gravitacional passa por um único cabo (tendão flexor) e uma polia. Qualquer rotação lateral cria um torque destrutivo.",
            en: "<strong>Mechanics:</strong> Isolated Load. Gravity on one cable. Rotation is destructive."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexor Profundo do dedo Médio.<br><strong>O Apoio:</strong> Os outros dedos devem ficar flexionados (mas sem apertar) para dar suporte através dos ligamentos interdigitais (efeito quadriga).",
            en: "<strong>Engine:</strong> Middle finger FDP.<br><strong>Support:</strong> Curl other fingers for quadriga effect."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Adaptação Neural e Tecidual. A força vem mais da rigidez do tendão do que do tamanho do músculo.",
            en: "<strong>Fuel:</strong> Neural/Tissue adaptation. Tendon stiffness > Muscle size."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Risco Extremo de ruptura de polia ou tendão. Nunca gire o corpo bruscamente num mono. Só para avançados! <strong>Aquecimento:</strong> Progressão lenta de carga.",
            en: "<strong>Red Alert:</strong> Extreme rupture risk. No twisting! Experts only. <strong>Warm-up:</strong> Slow progression."
        }
    },

    // === EQUILÍBRIO DINÂMICO (49-56) ===
    "toe_drag": {
        names: { pt: "Toe Drag (Arrasto de Ponta)", en: "Toe Drag" },
        tags: ["Boulder", "Pés", "Dinâmico", "Equilíbrio"],
        intro: {
            pt: "O leme do barco: arrastar o pé livre para estabilizar um movimento longo.",
            en: "The boat's rudder: dragging the free foot to stabilize a long move."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você vai fazer um movimento longo e não tem onde pisar com o segundo pé. Em vez de deixá-lo solto no ar (o que faria você balançar), você arrasta a ponta da sapatilha contra a parede enquanto sobe. Isso cria um atrito sutil que funciona como o leme de um barco, mantendo você na linha reta.</p><p><strong>O Mental:</strong> Controle Sutil. É um movimento 'parasita' (gasta energia e borracha), mas necessário para evitar que o corpo se solte da parede na chegada.</p>",
            en: "<p><strong>Visual Logic:</strong> Like a rudder. Dragging the free foot against the wall creates friction to keep you tracking straight during a reach.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Estabilizador:</strong> Pressão constante para evitar giro.</li><li><strong>Frenagem:</strong> Aumentar a pressão no final do movimento para parar o impulso.</li></ul>",
            en: "<ul><li>Stabilizer (Anti-spin)</li><li>Braking (Momentum control)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Atrito Cinético. A força de atrito oposta ao movimento vertical ajuda a desacelerar o corpo e manter o Centro de Gravidade próximo à parede, combatendo o vetor de afastamento.",
            en: "<strong>Mechanics:</strong> Kinetic Friction. Drag forces keep COG close to wall and dampen outward momentum."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexores do Quadril (para manter a perna levantada) e Extensores (Glúteo) para pressionar contra a parede.<br><strong>O Sacrifício:</strong> A borracha da sapatilha.",
            en: "<strong>Engine:</strong> Hip Flexors/Extensors.<br><strong>Sacrifice:</strong> Shoe rubber."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tensão de Core. O abdômen precisa estar contraído para transmitir a força do pé arrastando até o tronco.",
            en: "<strong>Fuel:</strong> Core Tension. Abs transfer the drag force to the torso."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Não faça força demais, senão você freia a subida. É um toque leve. <strong>Alerta:</strong> Destrói a ponta da sapatilha rapidamente.",
            en: "<strong>Tip:</strong> Light touch, don't brake too hard. <strong>Alert:</strong> Destroys shoe toes fast."
        }
    },

    "layaway": {
        names: { pt: "Layaway (Afastamento)", en: "Layaway" },
        tags: ["Esportiva", "Corpo", "Oposição", "Equilíbrio"],
        intro: {
            pt: "Esqui aquático na parede: jogar o corpo para longe para segurar uma agarra lateral.",
            en: "Water skiing on the wall: leaning away to hold a sidepull."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você tem uma agarra lateral ruim. Se puxar para baixo, a mão escorrega. O segredo é jogar o quadril para o lado oposto, esticando o braço e a perna. Você cria uma linha de tensão diagonal, como um esquiador segurando a corda do barco.</p><p><strong>O Mental:</strong> Confiança na Física. O instinto é ficar perto da agarra, mas a técnica exige que você se afaste dela para fazê-la funcionar.</p>",
            en: "<p><strong>Visual Logic:</strong> Like water skiing. Lean away from the sidepull to create tension. Proximity kills the grip.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Estático:</strong> Posição de descanso ou preparação.</li><li><strong>Dinâmico:</strong> Usar o rebote da posição para se lançar para a próxima agarra.</li></ul>",
            en: "<ul><li>Static (Setup/Rest)</li><li>Dynamic (Slingshot)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Vetores de Oposição. Ao deslocar o Centro de Massa lateralmente, você transforma uma pega vertical ruim em uma pega horizontal boa, maximizando a Força Normal.",
            en: "<strong>Mechanics:</strong> Opposing Vectors. Shifting COG laterally transforms a bad vertical pull into a good horizontal one."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Grande Dorsal e Oblíquos (para manter a inclinação).<br><strong>A Base:</strong> Pernas empurrando forte em oposição à mão.",
            en: "<strong>Engine:</strong> Lats/Obliques.<br><strong>Base:</strong> Legs pushing hard against the hand pull."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tensão Isométrica Global. O corpo todo vira uma corda esticada.",
            en: "<strong>Fuel:</strong> Global Isometric Tension. Body becomes a tightrope."
        },
        care: {
            pt: "<strong>Alerta:</strong> Se o pé escorregar, você sai girando (Barndoor). <strong>Aquecimento:</strong> Prancha lateral e ativação de ombros.",
            en: "<strong>Alert:</strong> Barndoor spin risk. <strong>Warm-up:</strong> Side planks and shoulder activation."
        }
    },

    "flag_pole": {
        names: { pt: "Flag-pole (Bandeira Estendida)", en: "Flag-pole" },
        tags: ["Esportiva", "Pernas", "Equilíbrio", "Força"],
        intro: {
            pt: "O contrapeso extremo: esticar a perna no horizonte para anular a rotação.",
            en: "Extreme counterweight: extending the leg to the horizon to cancel rotation."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> É um Flagging anabolizado. Você está numa posição tão precária que precisa esticar a perna livre o máximo possível para o lado, totalmente esticada, para mover seu centro de gravidade e não cair. Você vira literalmente um mastro de bandeira humano.</p><p><strong>O Mental:</strong> Consciência Corporal. Exige sentir exatamente onde está o peso do seu corpo no espaço e ajustá-lo milimetricamente com a perna.</p>",
            en: "<p><strong>Visual Logic:</strong> Flagging on steroids. Leg straight out to shift COG and prevent a fall. Human flagpole.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Horizontal:</strong> Perna alinhada com o quadril.</li><li><strong>Cruzada:</strong> Flag-pole por trás da perna de apoio em tetos.</li></ul>",
            en: "<ul><li>Horizontal (Hip level)</li><li>Crossed (Roof logic)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Braço de Alavanca Longo. Quanto mais longe o pé estiver do corpo, maior o torque que ele gera para contrabalancear o giro. É a física da gangorra.",
            en: "<strong>Mechanics:</strong> Long Lever Arm. Further the foot, greater the counter-torque. Seesaw physics."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Abdutores do Quadril (Glúteo Médio) e Cadeia Lateral do Core.<br><strong>O Esforço:</strong> Manter a perna pesada no ar cansa a lombar.",
            en: "<strong>Engine:</strong> Hip Abductors/Lateral Core.<br><strong>Effort:</strong> Holding heavy leg tires lower back."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Força de Estabilização. Exige resistência muscular nos estabilizadores do quadril e coluna.",
            en: "<strong>Fuel:</strong> Stabilization Strength. Endurance in hip/spine stabilizers."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Aponte o pé (bailarina) para ativar toda a cadeia muscular da perna e deixá-la mais leve. <strong>Aquecimento:</strong> Abdução de perna deitado.",
            en: "<strong>Tip:</strong> Point the toe to engage leg muscles. <strong>Warm-up:</strong> Lying leg abductions."
        }
    },

    "shoulder_press": {
        names: { pt: "Shoulder Press (Gaston Invertido)", en: "Shoulder Press" },
        tags: ["Tradicional", "Braços", "Pressão", "Bloqueio"],
        intro: {
            pt: "Empurrar o teto para longe: usar o ombro como pistão para ganhar altura.",
            en: "Pushing the roof away: using the shoulder as a piston to gain height."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você está numa chaminé ou diedro apertado. Você coloca a mão na parede, vira os dedos para dentro (ou para baixo) e empurra até o braço esticar, travando o ombro perto da orelha. É como se você estivesse tentando levantar o teto com uma mão só.</p><p><strong>O Mental:</strong> Força Bruta. É um movimento de empurrada pura, muitas vezes usado quando não há nada para puxar.</p>",
            en: "<p><strong>Visual Logic:</strong> Pushing the roof up single-handedly. Fingers in/down, extend arm, lock shoulder.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Baixo:</strong> Mão na altura do quadril (Mantle).</li><li><strong>Alto:</strong> Mão acima da cabeça, empurrando uma parede lateral ou teto.</li></ul>",
            en: "<ul><li>Low (Mantle style)</li><li>High (Roof/Side wall push)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Extensão de Cadeia Fechada. O ombro e o tríceps trabalham juntos para afastar o corpo da rocha, criando espaço para subir os pés.",
            en: "<strong>Mechanics:</strong> Closed Chain Extension. Shoulder/Triceps push body away to make room for feet."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tríceps, Deltóide Anterior e Trapézio Superior.<br><strong>A Estabilidade:</strong> Serrátil Anterior para manter a escápula colada nas costelas.",
            en: "<strong>Engine:</strong> Triceps/Deltoids.<br><strong>Stability:</strong> Serratus Anterior prevents winging."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Força Concêntrica Lenta. Geralmente é um movimento de 'grind' (esforço contínuo e lento).",
            en: "<strong>Fuel:</strong> Slow Concentric Strength. A grinding effort."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Posição de risco para impacto no ombro. Mantenha o peito aberto, não deixe o ombro rodar para frente. <strong>Aquecimento:</strong> Flexões e desenvolvimento (overhead press).",
            en: "<strong>Red Alert:</strong> Shoulder impingement risk. Open chest! <strong>Warm-up:</strong> Push-ups/Overhead press."
        }
    },

    "toe_cam": {
        names: { pt: "Toe Cam (Trava de Pé)", en: "Toe Cam" },
        tags: ["Tradicional", "Pés", "Torção", "Bloqueio"],
        intro: {
            pt: "Transformar o pé numa peça móvel: torcer para travar em buracos e fendas.",
            en: "Turning the foot into active gear: twisting to lock into pockets and cracks."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você encontra um buraco ou fenda horizontal. Você enfia a ponta do pé lá dentro e gira o calcanhar. A sapatilha torce e trava mecanicamente, como uma peça de proteção (Camalot). Agora você pode puxar com a perna como se fosse um gancho indestrutível.</p><p><strong>O Mental:</strong> Confiança no Equipamento. Sua sapatilha é parte do seu corpo. Você precisa confiar que a borracha vai aguentar a torção.</p>",
            en: "<p><strong>Visual Logic:</strong> Foot in hole, twist heel. Shoe cams active like gear. Pull with the leg.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Horizontal:</strong> Em fendas de teto.</li><li><strong>Vertical:</strong> Em fendas largas, girando o tornozelo para preencher o espaço.</li></ul>",
            en: "<ul><li>Horizontal (Roof cracks)</li><li>Vertical (Filling space)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Ação de Came (Excêntrica). Ao girar o pé em torno de um eixo, você aumenta a largura efetiva da sapatilha, criando uma força normal imensa contra as paredes do buraco.",
            en: "<strong>Mechanics:</strong> Camming Action. Rotating foot expands effective width, creating huge locking force."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tibial Posterior e Fibulares (para inverter/everter o pé).<br><strong>A Carga:</strong> Ligamentos do tornozelo e joelho. Cuidado!",
            en: "<strong>Engine:</strong> Tibialis/Peroneals.<br><strong>Load:</strong> Ankle/Knee ligaments. Careful!"
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tensão Isométrica. Uma vez travado, gasta pouca energia muscular, mas estressa as articulações.",
            en: "<strong>Fuel:</strong> Isometric Tension. Energy cheap, joint expensive."
        },
        care: {
            pt: "<strong>Alerta:</strong> Pode machucar o dedão ou torcer o tornozelo se escorregar girando. <strong>Dica Técnica:</strong> Use sapatilhas ligeiramente mais rígidas para proteger o pé.",
            en: "<strong>Alert:</strong> Toe pain/Ankle sprain risk. <strong>Tip:</strong> Stiffer shoes protect the foot."
        }
    },

    "figure_four": {
        names: { pt: "Figure Four (Figura Quatro)", en: "Figure Four" },
        tags: ["Boulder", "Corpo", "Torção", "Força"],
        intro: {
            pt: "O movimento de circo: usar a própria perna como alavanca sobre o braço.",
            en: "Circus move: using your own leg as a lever over your arm."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você está pendurado numa agarra muito boa com uma mão, mas não tem pé nenhum. Solução? Você passa a perna oposta POR CIMA do braço que está segurando, trava o joelho no punho e estica a perna. Isso cria uma alavanca que joga seu corpo para cima. É escalar em si mesmo.</p><p><strong>O Mental:</strong> Improvisação Radical. Usado quando não há outra saída (ou para impressionar os amigos). Exige coordenação acrobática.</p>",
            en: "<p><strong>Visual Logic:</strong> No feet? Leg over arm, lock knee on wrist, extend. Climbing on yourself.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Figure Nine:</strong> Passar a perna do MESMO lado sobre o braço. Mais difícil e instável.</li><li><strong>Low 4:</strong> Fazer com o braço mais baixo para alcance lateral.</li></ul>",
            en: "<ul><li>Figure Nine (Same side)</li><li>Low 4 (Lateral reach)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Fulcro Artificial. Seu pulso vira o ponto de apoio (fulcro) para a alavanca da perna. A força de extensão da perna impulsiona o Centro de Massa para cima.",
            en: "<strong>Mechanics:</strong> Artificial Fulcrum. Wrist acts as pivot. Leg extension drives COG up."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexores do Quadril (para subir a perna) e Isquiotibiais (para travar no braço). O braço de base sofre tração extrema.",
            en: "<strong>Engine:</strong> Hip Flexors/Hamstrings. Base arm under extreme tension."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Força Explosiva e Core. É um movimento de tudo ou nada.",
            en: "<strong>Fuel:</strong> Explosive Power/Core. All or nothing move."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Se a mão de base soltar, você cai de costas sem controle. Risco de lesão no pulso da mão base. Só para avançados!",
            en: "<strong>Red Alert:</strong> Uncontrolled fall risk! Wrist injury risk. Experts only."
        }
    },

    "drop_knee_twist": {
        names: { pt: "Drop-knee Twist (Giro Dinâmico)", en: "Drop-knee Twist" },
        tags: ["Esportiva", "Pernas", "Torção", "Dinâmico"],
        intro: {
            pt: "O saca-rolhas humano: usar o giro do Drop Knee para gerar impulso vertical.",
            en: "The human corkscrew: using the Drop Knee twist to generate vertical momentum."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Não é apenas ficar na posição de Drop Knee. É usar a ação de *entrar* no Drop Knee com velocidade para catapultar o corpo para a próxima agarra. Você torce o quadril com força e deixa esse giro te levar para cima, como um saca-rolhas saindo da garrafa.</p><p><strong>O Mental:</strong> Fluidez Dinâmica. Conectar o movimento da perna diretamente com o alcance da mão num fluxo único.</p>",
            en: "<p><strong>Visual Logic:</strong> Active twisting. Snap into the Drop Knee to catapult upwards like a corkscrew.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Twist-Lock:</strong> Girar e travar no final para estabilizar.</li><li><strong>Twist-Dyno:</strong> Usar o giro para lançar um dinâmico.</li></ul>",
            en: "<ul><li>Twist-Lock (Stabilize)</li><li>Twist-Dyno (Launch)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Transferência de Momento Angular. A energia rotacional do quadril é convertida em alcance vertical e estabilização no ponto morto.",
            en: "<strong>Mechanics:</strong> Angular Momentum Transfer. Hip rotation converts to vertical reach."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Cadeia Espiral (Pernas -> Quadril -> Tronco -> Braço oposto). Conexão fascial completa.",
            en: "<strong>Engine:</strong> Spiral Chain. Legs to Hip to Trunk to Arm. Full facial connection."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Potência Rotacional. Usa os oblíquos e rotadores do quadril de forma explosiva.",
            en: "<strong>Fuel:</strong> Rotational Power. Explosive use of obliques/hip rotators."
        },
        care: {
            pt: "<strong>Alerta:</strong> O joelho sofre muito torque. Não faça se o pé estiver muito fixo e o joelho não puder girar livremente. <strong>Aquecimento:</strong> Rotação de tronco.",
            en: "<strong>Alert:</strong> High knee torque. Foot must pivot. <strong>Warm-up:</strong> Trunk rotations."
        }
    },

    "arm_bar": {
        names: { pt: "Arm Bar (Barra de Braço)", en: "Arm Bar" },
        tags: ["Tradicional", "Braços", "Bloqueio", "Oposição"],
        intro: {
            pt: "Mergulhar fundo na fenda: travar o braço inteiro para descansar ou subir.",
            en: "Deep diving into the crack: locking the whole arm to rest or climb."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Em fendas muito largas (Off-width), a mão não alcança o fundo. Você enfia o braço inteiro até o ombro, coloca a palma da mão na parede lateral e empurra com o cotovelo/tríceps contra a outra parede. Seu braço vira uma viga de sustentação.</p><p><strong>O Mental:</strong> Aceitação. É claustrofóbico ter o braço engolido pela rocha. Respire e confie que a trava segura.</p>",
            en: "<p><strong>Visual Logic:</strong> Off-width deep dive. Insert arm to shoulder. Press palm vs elbow. Arm becomes a beam.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>T-Bar:</strong> Usar a mão para empurrar perpendicularmente.</li><li><strong>Cotovelo Profundo:</strong> Apenas o antebraço entra, travando no cotovelo.</li></ul>",
            en: "<ul><li>T-Bar</li><li>Deep Elbow</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Alavanca de Expansão. O tríceps empurra o antebraço para longe do úmero, criando pressão contra as paredes da fenda.",
            en: "<strong>Mechanics:</strong> Expansion Lever. Triceps pushes forearm away, creating pressure against walls."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Tríceps e Deltóide Posterior.<br><strong>A Proteção:</strong> A musculatura do ombro protege a articulação contra a rocha.",
            en: "<strong>Engine:</strong> Triceps/Rear Deltoid.<br><strong>Protection:</strong> Shoulder muscles cushion the joint."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Isometria de Empurrada. Pode levar à fadiga localizada no tríceps, mas permite que os dedos descansem totalmente.",
            en: "<strong>Fuel:</strong> Push Isometry. Triceps fatigue, but fingers rest completely."
        },
        care: {
            pt: "<strong>Alerta:</strong> Abrasão severa. Manga longa é obrigatória. Cuidado para não hiperestender o cotovelo. <strong>Aquecimento:</strong> Tríceps na polia ou elástico.",
            en: "<strong>Alert:</strong> Severe abrasion. Long sleeves mandatory. Watch elbow extension. <strong>Warm-up:</strong> Triceps."
        }
    },

    // === COMPLEXOS (57-63) ===
    "crossover": {
        names: { pt: "Crossover (Cruzada)", en: "Crossover" },
        tags: ["Esportiva", "Corpo", "Torção", "Equilíbrio"],
        intro: {
            pt: "Quebrar as regras: cruzar a linha média do corpo para manter o fluxo.",
            en: "Breaking the rules: crossing the body's midline to maintain flow."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> A regra básica diz 'não cruze os braços', mas o Crossover quebra isso. Você leva a mão direita para uma agarra na extrema esquerda (ou vice-versa), passando por cima ou por baixo do outro braço. O corpo gira como um saca-rolhas. É essencial para não ter que trocar de mãos (match) toda hora.</p><p><strong>O Mental:</strong> Fluidez. O iniciante para, troca de mão e segue. O mestre cruza e continua dançando.</p>",
            en: "<p><strong>Visual Logic:</strong> Reaching across the body midline. Avoids matching hands. Creates a corkscrew motion.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Por Cima:</strong> O braço livre passa sobre o braço de base. Mais alcance.</li><li><strong>Por Baixo:</strong> Passa por baixo da axila. Mais torque e estabilidade.</li></ul>",
            en: "<ul><li>Over (Reach)</li><li>Under (Torque)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Rotação de Tronco. O movimento não vem do ombro, vem da cintura. Você gira o umbigo na direção da agarra alvo para estender o alcance funcional.",
            en: "<strong>Mechanics:</strong> Trunk Rotation. Movement starts at the waist, twisting belly button to target."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Oblíquos (para girar o tronco) e Peitoral Maior (na adução do braço).<br><strong>A Base:</strong> O braço de apoio trabalha travado.",
            en: "<strong>Engine:</strong> Obliques/Pecs.<br><strong>Base:</strong> Support arm locks off."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Coordenação e Momentum. Se feito estático, cansa muito. Se feito com balanço, é 'de graça'.",
            en: "<strong>Fuel:</strong> Coordination/Momentum. Expensive if static, cheap if swinging."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Se cruzar demais, você pode ficar 'preso' (no man's land). Tenha certeza de que tem como desenrolar o corpo depois.",
            en: "<strong>Tip:</strong> Don't get stuck in a knot. Plan the untwist."
        }
    },

    "rose_move": {
        names: { pt: "Movimento Rosa (Rose Move)", en: "Rose Move" },
        tags: ["Boulder", "Corpo", "Torção", "Flexibilidade"],
        intro: {
            pt: "A cruzada extrema: girar de costas para a parede para alcançar o impossível.",
            en: "The extreme cross: turning your back to the wall to reach the impossible."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> É um Crossover anabolizado. Você cruza o braço tão longe que sua cabeça passa por baixo da axila do braço de base. Por um momento, você fica de costas para a rocha. É um movimento de contorcionista que permite alcançar agarras muito distantes sem soltar os pés.</p><p><strong>O Mental:</strong> Audácia. Exige confiança para ficar numa posição cega e vulnerável antes de conectar a próxima agarra.</p>",
            en: "<p><strong>Visual Logic:</strong> Extreme crossover. Head goes under armpit. Back to wall. Contortionist reach.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Clássico:</strong> Mão cruza por baixo, cabeça segue.</li><li><strong>Com Pé:</strong> Combinado com um gancho de calcanhar alto para travar o corpo.</li></ul>",
            en: "<ul><li>Classic (Under arm)</li><li>With Heel (Body lock)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Cadeia Espiral Máxima. Envolve a torção completa da coluna torácica e lombar. O braço de base entra em rotação externa extrema enquanto puxa.",
            en: "<strong>Mechanics:</strong> Max Spiral Chain. Full spine twist. Base arm in extreme external rotation."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Cadeia Cruzada (Ombro direito conecta com quadril esquerdo). Latíssimo do Dorso e Oblíquos trabalham no limite.",
            en: "<strong>Engine:</strong> Cross Chain. Shoulder to opposite hip. Lats/Obliques at limit."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Flexibilidade Ativa e Potência. Exige muito do sistema metabólico pois envolve grandes grupos musculares em tensão máxima.",
            en: "<strong>Fuel:</strong> Active Flexibility/Power. High metabolic demand on large groups."
        },
        care: {
            pt: "<strong>Alerta Vermelho:</strong> Risco para o ombro de base e coluna. Aqueça muito bem as costas com rotações antes de tentar. Não force se sentir pinçamento.",
            en: "<strong>Red Alert:</strong> Shoulder/Spine risk. Warm up back rotations thoroughly."
        }
    },

    "calf_lock": {
        names: { pt: "Calf Lock (Trava de Panturrilha)", en: "Calf Lock" },
        tags: ["Tradicional", "Pernas", "Bloqueio", "Descanso"],
        intro: {
            pt: "O descanso do preguiçoso: envolver a perna numa aresta para soltar as mãos.",
            en: "The lazy climber's rest: wrapping the leg around an arete to go hands-free."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você encontra uma pedra saliente ou uma aresta vertical. Você envolve a perna ao redor dela e flexiona o pé para travar o peito do pé do outro lado. Sua canela e panturrilha abraçam a rocha como uma cobra jiboia. Isso segura seu peso e você pode descansar.</p><p><strong>O Mental:</strong> Visão de Oportunidade. Onde os outros veem dificuldade, você vê uma cadeira.</p>",
            en: "<p><strong>Visual Logic:</strong> Like a constrictor snake. Wrap leg around feature, hook foot. Hands-free rest.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Aresta:</strong> Envolver uma quina vertical.</li><li><strong>Fenda:</strong> Variação do Knee Bar onde a canela trava na borda da fenda.</li></ul>",
            en: "<ul><li>Arete (Wrap)</li><li>Crack (Shin lock)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Alavanca e Atrito. A perna cria um gancho mecânico. O atrito da calça e a trava do pé impedem o deslizamento vertical.",
            en: "<strong>Mechanics:</strong> Leverage/Friction. Mechanical hook. Pants friction prevents sliding."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Isquiotibiais e Tibial Anterior para manter a pressão do 'abraço'. O resto do corpo relaxa.",
            en: "<strong>Engine:</strong> Hamstrings/Shin maintain the hug. Body relaxes."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Recuperação. Baixa demanda energética. Excelente para limpar o lactato antes do crux.",
            en: "<strong>Fuel:</strong> Recovery. Low energy. Clears lactate before the crux."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Confie na trava antes de soltar as mãos. Se a calça for muito lisa (lycra), pode escorregar. Jeans ou calças de algodão funcionam melhor.",
            en: "<strong>Tip:</strong> Test lock before releasing hands. Slippery pants dangerous."
        }
    },

    "straight_arms": {
        names: { pt: "Straight Arms (Braços Esticados)", en: "Straight Arms" },
        tags: ["Esportiva", "Braços", "Eficiência", "Técnica"],
        intro: {
            pt: "A regra de ouro da eficiência: pendurar-se nos ossos, não nos músculos.",
            en: "Golden rule of efficiency: hang on bones, not muscles."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Imagine que você é um esqueleto pendurado. Seus braços são correntes. Se você dobrar o cotovelo (fazer barra), gasta energia. Se deixar esticado, o peso vai para os ossos e ligamentos. Escale agachando e levantando as pernas, mantendo os braços como cordas que apenas conectam você à parede.</p><p><strong>O Mental:</strong> Disciplina. O instinto quando ficamos com medo é puxar o corpo para perto da parede (fetal). A técnica exige relaxar e esticar.</p>",
            en: "<p><strong>Visual Logic:</strong> Skeleton hanging. Arms are chains. Don't do pull-ups. Let bones carry weight.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Descanso:</strong> Braço esticado para sacudir o outro.</li><li><strong>Movimento:</strong> Girar o corpo para alcançar a próxima agarra sem dobrar o braço de base.</li></ul>",
            en: "<ul><li>Resting (Shake out)</li><li>Moving (Twist to reach)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Transferência de Carga. Músculos contraídos gastam energia e comprimem vasos sanguíneos. Estruturas passivas (ossos/ligamentos) suportam tensão com custo metabólico quase zero.",
            en: "<strong>Mechanics:</strong> Load Transfer. Contracted muscles burn energy. Bones support tension for free."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Pernas! Elas empurram o corpo para cima. Os braços e dorsais apenas estabilizam.",
            en: "<strong>Engine:</strong> Legs! Arms/Lats just stabilize."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Economia Aeróbica. Previne o 'Pump' (inchaço) precoce nos antebraços, permitindo escalar por mais tempo.",
            en: "<strong>Fuel:</strong> Aerobic Economy. Prevents early pump. Climbing longer."
        },
        care: {
            pt: "<strong>Alerta:</strong> Não 'despenque' nas articulações. Mantenha uma micro-ativação nos ombros para não lesionar. Esticado não significa 'solto'.",
            en: "<strong>Alert:</strong> Don't dead hang loosely. Keep micro-tension in shoulders to protect joints."
        }
    },

    "bridge": {
        names: { pt: "Bridge (Ponte)", en: "Bridge" },
        tags: ["Boulder", "Corpo", "Flexibilidade", "Força"],
        intro: {
            pt: "Desafiar a gravidade em tetos: estender o corpo para alcançar o impossível.",
            en: "Defying gravity on roofs: extending the body to reach the impossible."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> Você está de cabeça para baixo num teto. Para alcançar uma agarra longe atrás de você, você não se encolhe; você faz uma ponte. Empurra os pés, eleva o quadril e abre o peito, arqueando as costas. Isso estende seu alcance ao máximo.</p><p><strong>O Mental:</strong> Expansão. É o oposto de se proteger. Você se abre completamente para conectar os pontos distantes.</p>",
            en: "<p><strong>Visual Logic:</strong> Upside down on roof. Arch back, lift hips, open chest. Maximize reach.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Dinâmica:</strong> Usar a extensão da ponte para gerar impulso.</li><li><strong>Estática:</strong> Manter a tensão para clipar ou passar magnésio.</li></ul>",
            en: "<ul><li>Dynamic (Impulse)</li><li>Static (Clip/Chalk)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Extensão da Cadeia Posterior. Glúteos e Eretores da Espinha trabalham contra a gravidade para manter o quadril alto, permitindo que os braços alcancem mais longe.",
            en: "<strong>Mechanics:</strong> Posterior Chain Extension. Glutes/Spine lift hips, extending arm reach."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Cadeia Posterior completa (Isquiotibiais, Glúteos, Paravertebrais).<br><strong>A Base:</strong> Calcanhares travados em ganchos ou pisadas fortes.",
            en: "<strong>Engine:</strong> Full Posterior Chain.<br><strong>Base:</strong> Heels hooked or pushing hard."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Tensão Total (Full Body Tension). Exige muita energia. É difícil respirar nessa posição, então seja rápido.",
            en: "<strong>Fuel:</strong> Full Body Tension. High energy. Hard to breathe, move fast."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cuidado com a lombar. Se sentir pinçamento nas costas, contraia mais o abdômen para proteger a coluna. <strong>Aquecimento:</strong> A ponte de ginástica no chão.",
            en: "<strong>Alert:</strong> Watch lower back. Engage abs to protect spine. <strong>Warm-up:</strong> Floor bridges."
        }
    },

    "climb_down": {
        names: { pt: "Climb Down (Desescalada)", en: "Climb Down" },
        tags: ["Tradicional", "Corpo", "Segurança", "Técnica"],
        intro: {
            pt: "A arte esquecida: descer é mais difícil (e técnico) do que subir.",
            en: "The forgotten art: climbing down is harder (and more technical) than climbing up."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> O filme rodando ao contrário. Você precisa olhar para baixo, escolher o pé antes de mover a mão e esticar os braços. É o teste final de controle. Se você consegue desescalar uma via, você realmente a domina.</p><p><strong>O Mental:</strong> Humildade e Segurança. A maioria dos acidentes acontece na descida (saltos mal calculados). Desescalar salva seus joelhos e te ensina a confiar nos pés cegamente.</p>",
            en: "<p><strong>Visual Logic:</strong> Rewinding the movie. Look down, foot first. Ultimate control test. Saves knees.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Face para a Rocha:</strong> Padrão.</li><li><strong>Face para Fora:</strong> Em terrenos fáceis, descendo como numa escada (mais visão).</li></ul>",
            en: "<ul><li>Face In (Standard)</li><li>Face Out (Ladder style)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Contração Excêntrica. Seus músculos trabalham como freios, alongando sob tensão. Isso gera muito controle e força, mas também causa mais micro-lesões (dor muscular tardia) se você não estiver acostumado.",
            en: "<strong>Mechanics:</strong> Eccentric Contraction. Muscles act as brakes. Builds strength, causes soreness."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Quadríceps (freiam a descida do corpo) e Ombros (estabilizam).<br><strong>O Guia:</strong> Pescoço e Olhos. A visão periférica dos pés é crucial.",
            en: "<strong>Engine:</strong> Quads (brake) and Shoulders.<br><strong>Guide:</strong> Neck/Eyes. Foot vision is key."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Controle Neuromuscular. Exige calma. O batimento cardíaco deve baixar, não subir.",
            en: "<strong>Fuel:</strong> Neuromuscular Control. Stay calm. Lower heart rate."
        },
        care: {
            pt: "<strong>Dica Técnica:</strong> Sempre mantenha três pontos de apoio. Mova um membro de cada vez. <strong>Benefício:</strong> Salva seus joelhos e coluna de impactos repetitivos de saltos.",
            en: "<strong>Tip:</strong> 3 points of contact always. <strong>Benefit:</strong> Saves knees/spine from impact."
        }
    },

    "jug_final": {
        names: { pt: "Jug Final (Agarrão de Topo)", en: "Jug" },
        tags: ["Esportiva", "Mãos", "Descanso", "Meta"],
        intro: {
            pt: "A recompensa: uma agarra tão boa que parece um balde. O fim da linha.",
            en: "The reward: a hold so good it feels like a bucket. The finish line."
        },
        desc: {
            pt: "<p><strong>A Lógica Visual:</strong> É a alça de uma caneca gigante. Você enfia a mão inteira, os dedos dobram confortavelmente e a gravidade trabalha a seu favor. É o momento de clipar a corrente, dominar o topo do boulder ou apenas sacudir os braços e sorrir.</p><p><strong>O Mental:</strong> Celebração e Calma. Não afobe! Muitos caem tentando segurar o Jug final com pressa. Respire, acomode a mão e curta o momento.</p>",
            en: "<p><strong>Visual Logic:</strong> Giant mug handle. Full hand comfort. Clip the chains, top out, smile.</p>"
        },
        variacoes: {
            pt: "<ul><li><strong>Mini-Jug:</strong> Menor, mas ainda incisivo e positivo.</li><li><strong>Handle (Alça):</strong> Você pode puxar para fora, para baixo ou para os lados. A agarra perfeita.</li></ul>",
            en: "<ul><li>Mini-Jug (Smaller but positive)</li><li>Handle (Perfect grip)</li></ul>"
        },
        bio: {
            pt: "<strong>A Mecânica:</strong> Preensão Cilíndrica ou em Gancho. A forma da agarra faz o trabalho mecânico de travar a mão. Exige força muscular mínima comparada a um Crimp ou Sloper.",
            en: "<strong>Mechanics:</strong> Cylindrical/Hook Grip. Hold shape locks hand mechanically. Minimal effort."
        },
        anat: {
            pt: "<strong>O Motor:</strong> Flexores dos dedos em posição anatômica confortável. O relaxamento é a chave aqui.",
            en: "<strong>Engine:</strong> Finger flexors in comfortable position. Relaxation is key."
        },
        fisio: {
            pt: "<strong>O Combustível:</strong> Recuperação Aeróbica. Permite reoxigenar os tecidos. Use esse momento para baixar a frequência cardíaca antes de descer.",
            en: "<strong>Fuel:</strong> Aerobic Recovery. Re-oxygenate tissues. Lower heart rate before descending."
        },
        care: {
            pt: "<strong>Alerta:</strong> Cuidado com a pele! Jugs novos podem ser muito ásperos e causar 'flappers' (arrancar pele) se você girar a mão com força. <strong>Aquecimento:</strong> O melhor lugar para aquecer.",
            en: "<strong>Alert:</strong> Watch skin! Rough jugs cause flappers. <strong>Warm-up:</strong> Best place to start."
        }
    }

};