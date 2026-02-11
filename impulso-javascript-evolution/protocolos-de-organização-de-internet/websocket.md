WebSocket

  O WebSocket é um protocolo de comunicação que permite a troca de dados bidirecional e persistente entre cliente e servidor sobre uma única conexão TCP. Diferentemente do modelo tradicional do HTTP, baseado em requisições independentes (request/response), o WebSocket estabelece um canal contínuo, no qual ambas as partes podem enviar mensagens a qualquer momento, sem a necessidade de novas conexões para cada interação.

  A conexão WebSocket é iniciada por meio de uma requisição HTTP especial contendo um cabeçalho Upgrade, que solicita a mudança do protocolo para WebSocket. Após a aceitação do servidor e a conclusão do handshake, a comunicação deixa de seguir o padrão HTTP e passa a utilizar o protocolo WebSocket propriamente dito, mantendo a conexão aberta até que uma das partes a encerre.

  Esse modelo é especialmente adequado para aplicações que exigem comunicação em tempo real, como chats, sistemas de notificações, jogos online, dashboards de monitoramento e aplicações financeiras. Entre suas principais vantagens estão menor latência, redução de overhead de rede e comunicação full-duplex (envio e recebimento simultâneos).

  O WebSocket opera geralmente sobre as portas 80 (ws://) ou 443 (wss://). A versão segura, wss://, utiliza TLS para garantir criptografia, integridade e autenticação da comunicação.
