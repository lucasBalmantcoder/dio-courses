1. Operações do SSL

  As operações do SSL (Secure Sockets Layer) correspondem ao conjunto de processos internos responsáveis por estabelecer, proteger e encerrar uma comunicação segura entre cliente e servidor. Essas operações garantem autenticação, confidencialidade e integridade dos dados transmitidos por meio da combinação de criptografia assimétrica, criptografia simétrica e funções de hash criptográfico.

  De forma estruturada, as principais operações do SSL são:

  **a) Handshake (Negociação Inicial)**
    É a fase inicial da conexão segura. Nessa etapa, cliente e servidor negociam os parâmetros de segurança, como versão do protocolo e algoritmos criptográficos (cipher suites). O servidor apresenta seu certificado digital, que contém sua chave pública. O cliente valida esse certificado junto a uma Autoridade Certificadora (CA) e, em seguida, ocorre a troca de informações para geração de uma chave de sessão compartilhada.

  **b) Autenticação**
    O SSL permite autenticação do servidor (obrigatória) e, opcionalmente, do cliente. Isso ocorre por meio de certificados digitais baseados em infraestrutura de chave pública (PKI). Essa operação garante que as partes envolvidas são legítimas e reduz o risco de ataques do tipo man-in-the-middle.

  **c) Geração de Chave de Sessão**
    Após o handshake, é estabelecida uma chave simétrica temporária, chamada chave de sessão. Essa chave é utilizada para criptografar os dados durante a comunicação, pois algoritmos simétricos possuem maior desempenho.

  **d) Criptografia e Decriptação de Dados**
    Durante a transmissão, os dados são cifrados utilizando a chave de sessão. O destinatário utiliza a mesma chave para decifrar as informações, garantindo confidencialidade.

  **e) Verificação de Integridade**
    O SSL utiliza funções de hash e códigos de autenticação de mensagem (MAC – Message Authentication Code) para assegurar que os dados não foram alterados durante o tráfego. Caso haja qualquer modificação indevida, a conexão é invalidada.

  **f) Encerramento Seguro da Sessão**
    Ao final da comunicação, ocorre o fechamento controlado da conexão, invalidando a chave de sessão e evitando reutilização indevida.

  Essas operações atuam em conjunto para estabelecer um canal criptografado confiável sobre protocolos como HTTP, originando o HTTPS. Atualmente, tais operações são implementadas na prática pelo TLS, sucessor do SSL.
