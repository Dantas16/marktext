/**
* Highlight Paragraph inside an article which has 'mark-event' class attribute
* Destaca um parágrafo dentro de um artigo que tenha a classe 'mark-event'
*
* Double Click
*
* @author Gutemberg <gti5tecnologias@outlook.com>
*/

var highlightText = {
    /**
    * Add listeners to paragraphs
    * Adiciona ouvintes aos parágrafos 
    */
    addListener: function () {
        "use strict";
        var articles = document.querySelectorAll('.mark-event');

        for (var i = 0; i < articles.length; i++) {

            var elements = articles[i].children;

            for (var ii = 0; ii < elements.length; ii++) {
                if (elements[ii].nodeName.toLowerCase() === 'p') {
                    elements[ii].addEventListener('dblclick', function () { highlightText.markText(this); }, false);
                }
            }

        }
    },

    /**
    * Surround the paragraph content with <mark>
    * Adiciona o conteúdo do parágrafo dentro da tag <mark>
    */
    markText: function (element) {
        "use strict";
        var content = element.innerHTML;
        
        var pattern = /\<mark>/;
        
        if (pattern.test(element.innerHTML)) {
            content = content.replace(pattern, '');
            element.innerHTML = content;
            return false;
        }

        element.innerHTML = '<mark>' + content + '</mark>';
    }
}

document.addEventListener('DOMContentLoaded', function () { highlightText.addListener(); }, false);