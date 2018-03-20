import 'babel-core/register';
import 'babel-polyfill';

const t = TrelloPowerUp.iframe();

const resetAllVotes = async (newVotesPerMember) => {
  const votesPerMember = await t.get('board', 'shared', 'votesPerMember', 3);
  if (newVotesPerMember !== votesPerMember) {
    await t.set('board', 'shared', 'votesPerMember', newVotesPerMember);
    const { board } = await t.getAll();
    const items = Object.keys(board.shared)
      .filter(i => i.includes('votes'));
    await t.remove('board', 'shared', items);
  }
};

window['set-votes-per-member'].addEventListener('submit', async (event) => {
  event.preventDefault();
  const { value } = window['votes-per-member'];
  await resetAllVotes(value);
  t.closePopup();
});

const initForm = async () => {
  const votesPerMember = await t.get('board', 'shared', 'votesPerMember', 3);
  window['votes-per-member'].value = votesPerMember;
};

t.render(() => {
  t.sizeTo('#set-votes-per-member').done();
  initForm();
});
