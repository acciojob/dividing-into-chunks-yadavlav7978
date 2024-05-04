const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	
    let sum = 0;
    let ans = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        temp.push(arr[i]);
        if (sum > n) {
            let last = temp.pop();
            ans.push([...temp]); // Push a copy of temp into ans
            temp = [];
            temp.push(last);
            sum = last;
        }
    }

    ans.push(temp); // Push the remaining part of arr
    return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
