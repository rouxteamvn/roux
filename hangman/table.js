var table;

function createTable(char)
{
        table = document.createElement("table");
        var row = document.createElement("tr");
        var text;
        for(var i= 0; i < char.length; i++)
        {
            var col= document.createElement("td");
            text = document.createTextNode(char[i]); 
            col.appendChild(text);
            row.appendChild(col);
            }
    
        table.appendChild(row);
        document.getElementById("tab").appendChild(table);
}

function createTableCondition(char)
{ 
    table = document.createElement("table");
    var row = document.createElement("tr");
    var text;

    while(tab.length < word.length)
    {
        tab.push("-----");
    }

    //create table 
    for(var i= 0; i < word.length; i++)
    {
        var col= document.createElement("td");
        if (char == word[i])
        {
            text = document.createTextNode(char);
            tab[i] = char;
        }
        else
        {
            text = document.createTextNode(tab[i]);
        } 
        col.appendChild(text);
        row.appendChild(col);
    }
    table.appendChild(row);
    document.getElementById("tab").appendChild(table);
}

function show()
{   
    //check if the table exsit then draw
    if(del == "off")
    {  
        createTableCondition(guess);
        del = "on";
    }
    else
    {
        // delete old row then draw the new one.
        table.parentNode.removeChild(table);
        createTableCondition(guess);
    }
}

function showAnswer()
{
    if(del == "on")
    {
        // delete old row then draw the new one.
        table.parentNode.removeChild(table);
        createTable(word);
    }   
    else
    {
        createTable(word);
    }

}
