/* using Vue 3 */

Vue.createApp({
  data() {
    return {
      goals: [],
      inputVal: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.inputVal);
      this.inputVal = "";
    },
  },
}).mount("#app");

// const btnEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal () {
//   const enteredVal = inputEl.value;
//   const listItem = document.createElement('li');
//   listItem.textContent = enteredVal;
//   listEl.appendChild(listItem);
//   inputEl.value = '';
// }

// btnEl.addEventListener('click', addGoal);
