# Fibra Import

Acesse: https://mateuscdev.github.io/fibra-import/

Hospedado no GitHub Pages. Para atualizar, altere os arquivos da branch `main`; a publicação usa a raiz do repositório.

Aplicação estática para preparar KML/KMZ para importação manual no OZmap.

## Uso
Abra o site, envie KML/KMZ, revise categorias e preencha tipo e nível dos cabos. Exporte os CSVs por categoria em um ZIP. O arquivo demo.kml contém uma rede fictícia. Os dados de rede ficam apenas em memória no navegador. Apenas padrões de importação são guardados no localStorage. O mapa usa tiles públicos CARTO/OpenStreetMap; o carregamento do fundo informa a região visualizada ao provedor de mapas. Fontes são carregadas do Google Fonts.

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
