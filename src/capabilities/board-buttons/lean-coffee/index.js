const { getHexString } = window.TrelloPowerUp.util.colors;

const admin = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Lean Coffee',
  callback: t => t.modal({
    title: 'Lean Coffee',
    url: 'https://etburke.github.io/react-trello-powerup/dist/example.html',
    accentColor: getHexString('blue'),
    fullscreen: true,
  }),
};

export default admin;
