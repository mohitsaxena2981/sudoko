let error = 0;
let numSelected = null;
let InputBoxSelected = null;



window.onload = function()
{
    set_Game();
} 

let solution=
[
    "435269781",
    "682571493",
    "197834562",
    "826195347",
    "374682915",
    "951743628",
    "519326874",
    "248957136",
    "763418259"
]

let SudokuBoard=
[
    "---26-7-1",
    "68--7--9-",
    "19---45--",
    "82-1---4-",
    "--46-29--",
    "-5---3-28",
    "--93---74",
    "-4--5--36",
    "7-3-18---"
]

let inputNumber;
let i;
let r;
let c;

function set_Game()
{
    for(i=1;i<=9;i++)
    {  
        inputNumber=document.createElement("div");
        inputNumber.id=i
        inputNumber.innerText=i;
        inputNumber.addEventListener("click",selectInputNumber);
        inputNumber.classList.add("inputNumber");
        document.getElementById("AddDigits").appendChild(inputNumber);
    }

    for(r=0; r<9;r++)
    {
        for(c=0;c<9;c++)
        {
            let InputBox = document.createElement("div");
            InputBox.id = r.toString() + "-" + c.toString();
            if(SudokuBoard[r][c] != "-")
            {
                InputBox.innerText = SudokuBoard[r][c];
                InputBox.classList.add("InputBox-start");
            }
            if(r==2 || r==5)
            
                InputBox.classList.add("horizontal-line")
            
            if(c==2 || c==5)
                InputBox.classList.add("vertical-line")
            
            InputBox.addEventListener("click",selectInputBox);
            InputBox.classList.add("InputBox");
            document.getElementById("SudokuBoard").append(InputBox);
        }
    }
}
let Cording;
let x;
let y;
function selectInputBox()
{
    if(numSelected){
        if(this.innerText != ""){
            return;
        }

        Cording = this.id.split("-");
        y= parseInt(Cording[1]);
        x=parseInt(Cording[0]);
        

        if(solution[x][y]==numSelected.id)
        {
            this.innerText=numSelected.id;
        }
        else
        {
            error += 1;
            document.getElementById("errorSteps").innerText = error;
        }
    }
}

function selectInputNumber()
{
    if(numSelected!=null)
    {
        numSelected.classList.remove("inputNumber-selected");
    }
    numSelected=this;
    numSelected.classList.add("inputNumber-selected");
}



