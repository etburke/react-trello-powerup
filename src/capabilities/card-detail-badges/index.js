import addVote from './add-vote';
import removeVote from './remove-vote';
import votes from '../card-badges/votes';
import votesRemaining from './votes-remaining';
import timeRemaining from './time-remaining';

const cardDetailBadges = () => ([
  votes,
  addVote,
  removeVote,
  votesRemaining,
  timeRemaining,
]);

export default cardDetailBadges;
