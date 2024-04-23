const mounsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const bonusLife = document.getElementById("bonus-life");

const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

function dealMounsterDamage(damage) {
  const dealDamage = Math.random() * damage;
  mounsterHealthBar.value = +mounsterHealthBar.value - dealDamage;
  return dealDamage;
}

function dealPlayerDamage(damage) {
  const dealDamagePlayer = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealDamagePlayer;
  return dealDamagePlayer;
}

function resetGame(value) {
  mounsterHealthBar.value = value;
  playerHealthBar.value = value;
}
