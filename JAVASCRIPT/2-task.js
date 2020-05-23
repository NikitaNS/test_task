let col = ["white","blue", "red"]

let flagDiv = document.getElementById("flag")

let div = document.createElement('div')

flagDiv.style.backgroundColor = "gray"

for(let i = 0; i < 3; i++) {
    for (let k = 0; k < 20; k++) {
        let div = document.createElement('div')
        div.style.color = col[i]
        for (let j = 0; j < 80; j++) {
            div.append("О")
        }
        flagDiv.append(div)
    }
}


