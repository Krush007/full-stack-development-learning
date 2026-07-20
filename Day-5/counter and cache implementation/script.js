function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");

counterBtn.addEventListener("click", () => {
    counterValue.textContent = counter();
});

function createMemoizedSquare() {
    const cache = {};
    let operationCounter = 0;

    return {
        calculate(num) {
            operationCounter++;

            if (cache[num] !== undefined) {
                return {
                    result: cache[num],
                    status: "Cache Hit",
                    operation: operationCounter,
                    cache
                };
            }

            const result = num * num;
            cache[num] = result;

            return {
                result,
                status: "Cache Miss",
                operation: operationCounter,
                cache
            };
        }
    };
}

const squareService = createMemoizedSquare();

const numberInput = document.getElementById("numberInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultValue = document.getElementById("resultValue");
const eventList = document.getElementById("eventList");
const cacheContent = document.getElementById("cacheContent");

calculateBtn.addEventListener("click", () => {
    const num = Number(numberInput.value);

    if (Number.isNaN(num)) {
        return;
    }

    const response = squareService.calculate(num);

    resultValue.textContent = response.result;

    const li = document.createElement("li");
    li.textContent =
        `${response.operation}. ${response.status} → Input: ${num} → Output: ${response.result}`;

    eventList.appendChild(li);

    cacheContent.textContent = JSON.stringify(
        response.cache,
        null,
        2
    );
});