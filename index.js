import {$} from './src/libs'

window.PDFJS_LOCALE = {
  pdfJsWorker: 'node_modules/flip-book/js/pdf.worker.js'
};
require('flip-book');



// Sample 1 {
function theKingIsBlackPageCallback(n) {
  return {
    type: 'image',
    src: 'books/image/theKingIsBlack/'+(n+1)+'.jpg',
    interactive: false
  };
}

$('#container').FlipBook({
  pageCallback: theKingIsBlackPageCallback,
  pages: 10,
  propertiesCallback: function(props) {
    props.cover.color = 0x000000;
    return props;
  },
  template: {
    html: 'node_modules/flip-book/templates/default-book-view.html',
    links: [
      {
        rel: 'stylesheet',
        href: 'node_modules/flip-book/css/font-awesome.min.css'
      }
    ],
    styles: [
      'node_modules/flip-book/css/short-white-book-view.css'
    ],
    links: [{
      rel: 'stylesheet',
      href: 'node_modules/flip-book/css/font-awesome.min.css'
    }],
    script: 'node_modules/flip-book/js/default-book-view.js',
    sounds: {
      startFlip: 'node_modules/flip-book/sounds/start-flip.mp3',
      endFlip: 'node_modules/flip-book/sounds/end-flip.mp3'
    }
  }
});
// }
