const votesRemaining = {
  dynamic: async (t) => {
    const context = t.getContext();
    const votesPerMember = await t.get('board', 'shared', 'votesPerMember', 3);
    const memberVotes = await t.get('board', 'shared', `${context.member}:member:votes`, 0);
    const text = `${votesPerMember - memberVotes} Votes Remaining`;
    return {
      text,
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      color: 'yellow',
      refresh: 10, // in seconds
    };
  },
};

export default votesRemaining;
