const count = document.querySelectorAll(".count");
const ArrayCount = Array.from(count);
ArrayCount.map((item) => {
  let countDigit = item.dataset.amount;
  let countNumber = 0;
  function CounterUp() {
    item.innerHTML = `${countDigit--} -`;
    if (countDigit < countNumber) {
      clearInterval(stop);
    }
  }
  let stop = setInterval(() => {
    CounterUp();
  }, 100);
});
