import moment from 'moment';

const setNewTimer = duration => async (t) => {
  const newExpiration = moment.utc().add(duration, 'minutes').format();
  await t.set('board', 'shared', 'timerExpiration', newExpiration);
  t.closePopup();
};

const durations = [1, 2, 5, 10, 30, 60];

const setTimer = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Set Timer',
  callback: t => t.popup({
    title: 'Set Timer',
    items: durations.map(duration => ({
      text: `${duration} minutes`,
      callback: setNewTimer(duration),
    })),
  }),
};

export default setTimer;
