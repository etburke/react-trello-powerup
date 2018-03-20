import setTimer from './set-timer';
import resetVotes from './reset-votes';
import toggleVoteVisibility from './toggle-vote-visibility';

const setVotesPerMember = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Set Votes per Member',
  callback: async t => t.popup({
    title: 'Set Votes per Member',
    url: './src/capabilities/board-buttons/admin/set-votes-per-member.html',
  }),
};


const admin = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Admin',
  callback: t => t.popup({
    title: 'Admin',
    items: [
      setTimer,
      setVotesPerMember,
      resetVotes,
      toggleVoteVisibility,
    ],
  }),
};

export default admin;
