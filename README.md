# Fibra Import

Acesse: https://mateuscdev.github.io/fibra-import/

Hospedado no GitHub Pages. Para atualizar, altere os arquivos da branch `main`; a publicação usa a raiz do repositório.

Aplicação estática para preparar KML/KMZ para importação manual no OZmap.

## Uso

Abra o site, envie KML/KMZ, revise categorias e preencha tipo e nível dos cabos. Exporte os CSVs por categoria em um ZIP. O arquivo demo.kml contém uma rede fictícia. Os dados de rede ficam apenas em memória no navegador. Apenas padrões de importação são guardados no localStorage. A chave opcional do Google Maps fica no sessionStorage da aba. O mapa livre usa tiles OpenStreetMap (ruas) e Esri World Imagery (satélite); o carregamento do fundo informa a região visualizada ao provedor de mapas. Fontes são carregadas do Google Fonts.

Use as caixas de seleção na tabela para classificar, excluir ou restaurar vários elementos de uma vez. Itens excluídos não entram nos CSVs nem no KML da rede, mas aparecem no relatório de revisão como “excluído”. A restauração fica disponível antes de iniciar uma nova conversão.

## Escopo

Pontos: caixas, postes, caixas de passagem, POPs, clientes e prospects. Linhas: cabos e dutos. Polígonos: regiões. Reservas técnicas: pontos com metragem obrigatória. Identificação por nomes, pastas e atributos de ExtendedData/SimpleData. KMZ com múltiplos KMLs. Não acessa OZmap, não importa fotos, não infere conexões, não cria splitters ou postes em vértices. NetworkLinks, geometrias sem suporte e anexos internos são relatados. Polígonos com ilhas exigem tratamento manual.

## Formato

CSVs UTF-8 sem BOM, vírgula entre colunas, campos entre aspas, CRLF. Cabeçalhos em inglês. A coluna points/polygon contém latitude;longitude com vírgula entre posições. Referência: https://ajuda.ozmap.com.br/pt-BR/support/solutions/articles/44001524646-tratamento-de-planilhas

## Limites

25 MB por entrada; 100 KMLs por KMZ; 50 MB descompactados de KML por KMZ; 15.000 elementos por conversão. A validação verifica campos, geometria, coordenadas e nomes duplicados dentro da sessão; não consulta os tipos, níveis e nomes já cadastrados no OZmap. Classificação é heurística e pode requerer ajuste.

## Distribuição

Tudo em dist/, sem build ou backend. Bibliotecas vendorizadas: Leaflet 1.9.4 (BSD-2-Clause), JSZip 3.10.1 (MIT/GPL-3.0 dual). Os tiles de mapa precisam de internet. A conversão não depende dos tiles.

## Verificação

14 cenários de conversão e validação e 8 fluxos em DOM simulado. Verificação visual em navegador não disponível no ambiente. Importação em uma instância real do OZmap ainda não validada.

## Google Maps e Google Earth

No painel de rede, alterne Ruas (OpenStreetMap), Satélite (Esri) ou Google Maps. O Google Maps requer sua chave da Maps JavaScript API, com faturamento ativo. Ative essa API no Google Cloud e restrinja a chave à Maps JavaScript API e ao referenciador `https://mateuscdev.github.io/*`. Cole a chave em Configurar Google Maps. Ela fica no sessionStorage e é enviada apenas ao Google para carregar o SDK, sem gravação no repositório. A API pode gerar cobranças no projeto Google Cloud do titular.

O Google Maps sobrepõe os elementos por GeoJSON e oferece ruas, híbrido, satélite e terreno. O traçado segue as coordenadas do arquivo; não é calculada uma rota de navegação. Se houver erro de chave, use o mapa livre. Para trocar uma chave que já carregou o SDK, salve seu trabalho e recarregue.

O botão Google Earth abre a região em outra aba. Para ver a rede no Earth, use KML da rede e importe o arquivo manualmente. Esse KML inclui elementos não excluídos com coordenadas válidas; geometrias com ilhas ou inválidas são omitidas com aviso. Não envia o arquivo ao Google automaticamente. A exibição de mapas carrega dados do provedor escolhido e informa a região visualizada.

A integração Google Maps foi verificada com uma simulação do SDK; o carregamento real depende de uma chave habilitada do usuário e não foi validado nesta sessão.

## Campos obrigatórios e opcionais

A interface inclui a consulta “Campos obrigatórios”, separada por categoria, e indica a exigência nos campos do editor. Os campos obrigatórios são: cabos (type, level, points); dutos (type, points); caixas, postes, POPs, caixas de passagem e prospects (latitude e longitude); regiões (polygon); reservas (pole por nome ou coordenada, reserve em metros). Para clientes, informe nome ou código e uma localização (coordenadas, caixa, poste ou endereço; endereço sem coordenadas requer geocodificação no OZmap).

Nome é opcional nas categorias usuais e pode ser gerado pelo OZmap. Se preenchido, sua unicidade é verificada nas categorias que exigem nomes únicos. Nível, tipo e template de caixas são opcionais; os padrões do OZmap se aplicam quando vazios. A recomendação de definir o nível de caixas de emenda evita a escolha padrão CTO, mas não bloqueia a exportação. Recomendações são incluídas no relatório em coluna própria.

A aplicação também pede a conferência da classificação e dos cadastros de cabos/dutos. Essas são checagens locais adicionais e são identificadas como tais. A lista de campos opcionais da interface cobre as colunas exportadas pela aplicação; consulte a documentação oficial para outros campos disponíveis no OZmap.
