const MODE_ATTACK = "ATTACK";
const MODE_ATTACK_STRONG = "ATTACK_STRONG";

const LOG_EVENT_MOUNSTER_ATTACK = "MOUNSTER_ATTACK";
const LOG_EVENT_GAME_OVER = "GAME_OVER";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_ATTACK_STRONG";
const LOG_EVENT_PLAYER_HEALTH = "PLAYER_HEALTH";

const HEALTH_VALUE = 20;

const MAX_AVAILABLE_LIFE = 3;

const DAMAGE_MOUNSTER_ATTACK_MAX = 10;
const DAMAGE_MOUNSTER_ATTACK_STRONG_MAX = 15;

let availableLifes;
let hasBonusLife = true;

let maxLife = 100;

const DEFAULT_LIFES = 100;
let choseMaxLife;

let currentMounsterHealth = maxLife;
let currentPlayerHealth = maxLife;

const logs = [];

function writeToLog(event, value, mounsterHealth, playerHealth) {
  const logEntry = {
    event,
    value,
    finalMounsterHealth: mounsterHealth,
    finalPlayerHealth: playerHealth,
  };

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MOUNSTER";
      break;
    case LOG_EVENT_MOUNSTER_ATTACK:
    case LOG_EVENT_PLAYER_HEALTH:
      logEntry.target = "PLAYER";
      break;
    default:
      logEntry.target = "";
  }

  /*if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = "MOUNSTER";
  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = "MOUNSTER";
  } else if (event === LOG_EVENT_MOUNSTER_ATTACK) {
    logEntry.target = "PLAYER";
  } else if (event === LOG_EVENT_PLAYER_HEALTH) {
    logEntry.target = "PLAYER";
  } else {
    logEntry.target = "";
  }*/
  /*
const LOG_EVENT_MOUNSTER_ATTACK = "MOUNSTER_ATTACK";
const LOG_EVENT_GAME_OVER = "GAME_OVER";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_ATTACK_STRONG";
const LOG_EVENT_PLAYER_HEALTH = "PLAYER_HEALTH";
  */

  logs.push(logEntry);
}

function reset() {
  currentMounsterHealth = maxLife;
  currentPlayerHealth = maxLife;

  resetGame(maxLife);
}

function endRound() {
  const playerDamage = dealPlayerDamage(DAMAGE_MOUNSTER_ATTACK_MAX);
  currentPlayerHealth -= playerDamage;

  const playerWin = currentMounsterHealth < 0;
  const mounsterWin = currentPlayerHealth < 0;
  const draw = currentMounsterHealth < 0 && currentPlayerHealth < 0;

  writeToLog(
    LOG_EVENT_MOUNSTER_ATTACK,
    playerDamage,
    currentMounsterHealth,
    currentPlayerHealth
  );

  if (playerWin) {
    alert("Player is winner");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WIN",
      currentMounsterHealth,
      currentPlayerHealth
    );
  } else if (mounsterWin) {
    alert("Mounster is winner");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MOUNSTER WIN",
      currentMounsterHealth,
      currentPlayerHealth
    );
  } else if (draw) {
    alert("Draw");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "draw",
      currentMounsterHealth,
      currentPlayerHealth
    );
  }

  if (playerWin || mounsterWin || draw) {
    reset();
  }
}

function attackMounsterHandler(mode) {
  const damage =
    mode === MODE_ATTACK
      ? DAMAGE_MOUNSTER_ATTACK_MAX
      : DAMAGE_MOUNSTER_ATTACK_STRONG_MAX;

  const eventTypeAttack =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  const mounsterDamage = dealMounsterDamage(damage);
  currentMounsterHealth -= mounsterDamage;

  writeToLog(
    eventTypeAttack,
    mounsterDamage,
    currentMounsterHealth,
    currentPlayerHealth
  );

  endRound();
}

function attachHandler() {
  attackMounsterHandler(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMounsterHandler(MODE_ATTACK_STRONG);
}

function healHandler() {
  if (currentMounsterHealth <= 0 || currentPlayerHealth <= 0 || !hasBonusLife)
    return;

  if (availableLifes > 0) {
    availableLifes--;
    updateAvailableLifes(availableLifes);

    if (!availableLifes) {
      hasBonusLife = false;
      removeBonusLife();
    }
  }

  let healthValue;

  if (currentPlayerHealth >= choseMaxLife - HEALTH_VALUE) {
    alert("Player cannot have more life than health maximum");
    healthValue = choseMaxLife - currentPlayerHealth;
  } else {
    healthValue = HEALTH_VALUE;
  }

  currentPlayerHealth += healthValue;
  increasePlayerHealth(currentPlayerHealth);

  writeToLog(
    LOG_EVENT_PLAYER_HEALTH,
    healthValue,
    currentMounsterHealth,
    currentPlayerHealth
  );

  endRound();
}

function getMaxLifesValue() {
  const enteredValue = prompt(
    "Ingrese el máximo de vida para el jugador y para el mounstro"
  );

  const parsed = parseInt(enteredValue);

  if (isNaN(parsed) || parsed <= 20) {
    throw { msg: "Valor inválido ingresado por el usuario" };
  }

  return parsed;
}

function getAvailabelLifes() {
  const enteredValue = prompt(
    "Ingrese la cantidad de bonus disponible",
    MAX_AVAILABLE_LIFE
  );

  const parsed = parseInt(enteredValue);

  if (isNaN(parsed) || parsed < 2 || parsed > 4) {
    throw { msg: "Valor de vidas disponibles no válido" };
  }

  return parsed;
}

try {
  choseMaxLife = getMaxLifesValue();
} catch (error) {
  alert("Ocurrió un error");
  choseMaxLife = DEFAULT_LIFES;
}

try {
  availableLifes = getAvailabelLifes();
} catch (error) {
  alert("Ocurrió un error");
  availableLifes = MAX_AVAILABLE_LIFE;
}

updateAvailableLifes(availableLifes);

function printLogHandler() {
  console.table(logs);
}

attackBtn.addEventListener(
  "click",
  //attackMounsterHandler.bind(this, MODE_ATTACK)
  attachHandler
);
strongAttackBtn.addEventListener(
  "click",
  //attackMounsterHandler.bind(this, MODE_ATTACK_STRONG)
  strongAttackHandler
);
healBtn.addEventListener("click", healHandler);
logBtn.addEventListener("click", printLogHandler);
