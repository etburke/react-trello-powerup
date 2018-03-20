const removeVote = {
  text: 'Remove Vote',
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  color: 'yellow',
  refresh: 10, // in seconds
  callback: async (t) => {
    const context = t.getContext();
    try {
      const votes = await t.get('board', 'shared', `${context.card}:card:votes`, 0);
      const totalVotesCast = await t.get('board', 'shared', `${context.member}:member:votes`, 0);
      const votesCastForCard = await t.get('board', 'shared', `${context.member}:${context.card}:member-card:votes`, 0);
      const votesPerMember = await t.get('board', 'shared', 'votesPerMember', 3);

      if (votes && totalVotesCast <= votesPerMember && totalVotesCast > 0 && votesCastForCard > 0) {
        await t.set('board', 'shared', `${context.card}:card:votes`, (votes - 1));
        await t.set('board', 'shared', `${context.member}:member:votes`, (totalVotesCast - 1));
        await t.set('board', 'shared', `${context.member}:${context.card}:member-card:votes`, (votesCastForCard - 1));
      }
    } catch (e) {
      console.log('remove exception', e);
    }
  },
};

export default removeVote;
