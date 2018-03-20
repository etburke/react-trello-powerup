const votes = {
  dynamic: async (t) => {
    const context = t.getContext();
    const votesVisible = await t.get('board', 'shared', 'votesVisible', true);
    const allVotes = votesVisible ?
      await t.get('board', 'shared', `${context.card}:card:votes`, 0) :
      '?';
    const yourVotes = await t.get('board', 'shared', `${context.member}:${context.card}:member-card:votes`, 0);

    return {
      text: `Votes ${allVotes} (${yourVotes})`,
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      color: 'green',
      refresh: 10, // in seconds
    };
  },
};

export default votes;
