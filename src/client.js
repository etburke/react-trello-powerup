import 'babel-core/register';
import 'babel-polyfill';
import boardButtons from './capabilities/board-buttons';
import cardBadges from './capabilities/card-badges';
// import cardButtons from './capabilities/card-buttons';
import cardDetailBadges from './capabilities/card-detail-badges';

window.TrelloPowerUp.initialize({
  'board-buttons': boardButtons,
  'card-badges': cardBadges,
  // 'card-buttons': cardButtons,
  'card-detail-badges': cardDetailBadges,
});
