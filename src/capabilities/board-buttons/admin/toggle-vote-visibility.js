const toggle = async (t) => {
  const votesVisible = await t.get('board', 'shared', 'votesVisible', true);
  await t.set('board', 'shared', 'votesVisible', !votesVisible);
  t.closePopup();
};

const toggleVoteVisibility = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Toggle Vote Hiding',
  callback: toggle,
};

export default toggleVoteVisibility;
