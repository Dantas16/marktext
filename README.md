# marktext

This is a simple javascript to mark a paragraph of an article.
<br>
Este é um javascript simples para marcar "Destacar" partes de um artigo, funciona como um tipo de 'marcador'.

The purpose is to provide to readers a way do mark important parts of an article that may would like to come back later.
<br>
O propósito é prover aos leitores uma maneira de destacar parágrafos importantes de um artigo e continuar lendo.

I have many ideas to implement, one is to build a pdf file from the marked part, but for now, It's just an idea.
<br>
Tenho algumas ideias para implementar, uma delas é que o usuário possa criar um arquivo PDF a partir dos parágrafos destacados.

Feel free to try it.
<br>
Sinta-se livre para tentar implementar em seus projetos.

# Instructions / Instruções

It was designed to use according the new html5 structure, so you need to use at least the p tag inside an article tag as the same way in markText.html
.<br>
O projeto foi desenvolvido para trabalhar de acordo com os novos padrões em HTML5, sendo assim, os parágrafos que você deseja
liberar para marcação, deverão está dentro de um elemento p 'parágrafo' que por sua vez deve está numa tag Article, esta que 
deverá ter um atributo class = "mark-event".
<br>

The paragraph will be marked when the user make a double click (yes, only it).<br>
O parágrafo será selecionado quando o usuário clicar duas vezes, sim é só isso!

<br>

If you write an article and want to leave free to user mark any paragraph, just put on the article tag the class="mark-event", the javascript will look for each tag which has the class and will add a listener.

<br>
Consider that this is just a simple javascript that can be improved.
<br>
Considere que é apenas javascript simples que pode ser implementado e quem sabe se torna uma boa ferramenta para sites de conteúdo.
<br>
