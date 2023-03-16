class Password {

    constructor() {
        console.log("Welcome to Password Generator!")
    }

    generatePassword(len) {
        let codearr = [[0, 1, 2, 3], [3, 2, 1, 0], [2, 0, 1, 3], [1, 3, 0, 2], [3, 0, 1, 2]];
        let n = codearr[Math.floor(Math.random() * 4)]
        let password = "";
        let i = 0;
        let char = "abcdefghijklmnopqrstuvwxyz";
        let CHAR = char.toUpperCase();
        let numbers = "0123456789";
        let special = "!@#$%^&*()_+|}{:?><";
        if (len <= 3) {
            let len3 = "Your password should contain atleast 4 or more than 4 characters!"
            console.log(len3);
            return len3
        }

        else if (len >= 9) {

            let len9 = "Your password should contain atmost 8 characters!"
            console.log(len9);
            return len9
        }
        else {
            for (i = 0; i < len; i++) {

                if (n[i] == 0) { password += char[Math.floor(Math.random() * len)]; }
                else if (n[i] == 1) { password += numbers[Math.floor(Math.random() * len)]; }
                else if (n[i] == 2) { password += special[Math.floor(Math.random() * len)]; }
                else { password += CHAR[Math.floor(Math.random() * len)]; }

            }

        }
        return password.substring(0, len);
    }
}

let password = document.getElementById("password");
let btn = document.getElementById("btn");




function run() {
    let p = new Password();
    let length = document.getElementById("input").value;
    let generatedPassword = p.generatePassword(length);
    console.log(generatedPassword);
    return generatedPassword;
}

btn.addEventListener("click", () => {
    password.innerHTML = run();
});