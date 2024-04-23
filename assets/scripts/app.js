const MODE_ATTACK = "ATTACK";
const MODE_ATTACK_STRONG = "ATTACK_STRONG";

const DAMAGE_MOUNSTER_ATTACK = 10;
const DAMAGE_MOUNSTER_ATTACK_STRONG = 15;

let maxLife = 100;

let currentMounsterHealth = maxLife;
let currentPlayerHealth = maxLife;

function reset() {
  currentMounsterHealth = maxLife;
  currentPlayerHealth = maxLife;

  resetGame(maxLife);
}

function endRound() {
  const playerDamage = dealPlayerDamage(DAMAGE_MOUNSTER_ATTACK);
  currentPlayerHealth -= playerDamage;

  const playerWin = currentMounsterHealth < 0;
  const mounsterWin = currentPlayerHealth < 0;
  const draw = currentMounsterHealth < 0 && currentPlayerHealth < 0;

  if (playerWin) {
    alert("Player is winner");
  } else if (mounsterWin) {
    alert("Mounster is winner");
  } else if (draw) {
    alert("Draw");
  }

  if (playerWin || mounsterWin || draw) {
    reset();
  }
}

function attackMounsterHandler(mode) {
  const damage =
    mode === MODE_ATTACK
      ? DAMAGE_MOUNSTER_ATTACK
      : DAMAGE_MOUNSTER_ATTACK_STRONG;

  const mounsterDamage = dealMounsterDamage(damage);

  currentMounsterHealth -= mounsterDamage;
  console.log(currentMounsterHealth);

  endRound();
}

function attachHandler() {}

function strongAttackHandler() {}

function healHandler() {}

function printLogHandler() {}

attackBtn.addEventListener(
  "click",
  attackMounsterHandler.bind(this, MODE_ATTACK)
);
strongAttackBtn.addEventListener(
  "click",
  attackMounsterHandler.bind(this, MODE_ATTACK_STRONG)
);
healBtn.addEventListener("click", healHandler);
logBtn.addEventListener("click", printLogHandler);
