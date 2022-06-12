// const a = { x: 1, y: 2 };
// const b = a;

// console.log({ a: 1 } === { b: 1 });

// a.c = 100

// console.log(a)
// console.log(b)


// ------------------------ знатйти друга


const friends = [
  {name: "Mango", online: false},
  {name: "Kiwi", online: true},
  {name: "Poli", online: true},
  {name: "Ajax", online: false},
];

// console.table(friends)

const findFriendByName = function (allFriends, name) {
  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.name);

  if (friend.name === name) {
    return "Знайшли";
    }

  }

  return "НЕ ЗНАЙШЛИ :("
  
}

// console.log(findFriendByName(friends, "Poli"));
// console.log(findFriendByName(friends, "Andrew"));

//----------------------------------- отримати імена всіх друзів

const getAllNames = function (allFriends) {
  const names = [];

for (const friend of allFriends) {
  console.log(friend.name)
  names.push(friend.name)
}

  return names;

};

// console.log(getAllNames(friends));

//---------------------------------- отримати значення друзів онлайн

const getOnlineFriends = function (allFriends) {
  const onlineFriends = []
  for (const friend of allFriends) {
    console.log(friend)
    console.log(friend.online)

      if (friend.online){
        onlineFriends.push(friend)
      }
  }
  return onlineFriends;
}
// console.log(getOnlineFriends(friends));

const getOfflinefriends = function (allFriends) {
  const offlineFriend = []

  for (const friend of allFriends) {
    console.log(friend.online)

    if (!friend.online) {
      offlineFriend.push(friend)
    }
  }

  return offlineFriend
}
// console.log(getOfflinefriends(friends))

// --------------------- вивести і оналйн і офлайн друзів

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: []
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    } 
      friendsByStatus.offline.push(friend);
  }

  return friendsByStatus
}

// console.log(getFriendsByStatus(friends));

// ------------------------ дізнатись загальну кількість об'єктів 

const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100.
};

//  ----------------------- знайти найменшу температуру

const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.min(...temps));

// -------------------------- зшиваємо декілька масивів з температурою

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [6, 7, 8];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps)

// ----------------------------- роспиляємо об'єкти

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = {
  ...a,
  x: 10,
  ...b,
  y: 20
}

// console.log(c)

// -------------------------- змінюємо налаштування на сайті 

const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSudebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSudebar: true,
}

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
}

// console.log(finalSettings)

// --------------------------- деструктуризація об'єктів

const playlist = {
  name: 'Мій суперплейлист',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3
} 

const {name, rating, tracks, trackCount} = playlist

// console.log(name, rating, tracks, trackCount)