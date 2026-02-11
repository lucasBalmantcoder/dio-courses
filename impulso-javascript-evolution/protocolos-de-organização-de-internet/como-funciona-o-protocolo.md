Protocolo e HTTP
O que é um Protocolo?
Um protocolo é um conjunto de regras e padrões que definem como dois ou mais sistemas se comunicam. Ele estabelece as diretrizes fundamentais para a troca de informações:

Estruturação: Como os dados devem ser organizados.

Transmissão: Como os dados devem ser enviados e recebidos.

Tratamento de Erros: Como o sistema deve reagir a falhas na comunicação.

Sem protocolos, não haveria comunicação padronizada entre dispositivos em rede.

Exemplos de protocolos comuns:
HTTP / HTTPS (Navegação Web)

FTP (Transferência de arquivos)

TCP / IP (Base da comunicação na internet)

O que é o Protocolo HTTP?
O HTTP (HyperText Transfer Protocol) é um protocolo de camada de aplicação utilizado para a transferência de dados na World Wide Web. Ele opera sob o modelo cliente-servidor, permitindo que:

Um cliente (geralmente um navegador) envie requisições.

Um servidor responda com recursos específicos (HTML, CSS, JavaScript, imagens, etc.).

Contexto Histórico
1989: Criado por Tim Berners-Lee no CERN.

HTTP/0.9: Primeira versão pública.

HTTP/1.1 (1997): Introduziu melhorias significativas de eficiência.

HTTP/2 (2015): Focado em alto desempenho e multiplexação.

HTTP/3 (2022): Utiliza o protocolo QUIC (baseado em UDP) para maior velocidade e segurança.

Como o HTTP Funciona?
O funcionamento baseia-se estritamente no ciclo de requisição–resposta.

1. O Cliente envia uma requisição
   A requisição é composta por:

Método: Define a ação (ex: GET, POST, PUT, DELETE).

URL: O endereço do recurso desejado.

Cabeçalhos (Headers): Metadados sobre a requisição.

Corpo (Body): Conteúdo enviado ao servidor (opcional).

Exemplo de requisição:

HTTP
GET /index.html HTTP/1.1
Host: exemplo.com 2. O Servidor processa e envia a resposta
A resposta retornada pelo servidor contém:

Código de Status: Indica o resultado (ex: 200 OK, 404 Not Found, 500 Internal Server Error).

Cabeçalhos: Informações sobre o servidor e o conteúdo.

Corpo da Resposta: O recurso solicitado propriamente dito.

Exemplo de resposta:

HTTP
HTTP/1.1 200 OK
Content-Type: text/html
Características Principais
Stateless: O protocolo não mantém estado entre requisições; cada interação é independente.

Baseado em texto: Até a versão 1.1, as mensagens são legíveis por humanos.

Camada de Transporte: Opera majoritariamente sobre TCP (com exceção do HTTP/3, que utiliza QUIC/UDP).
