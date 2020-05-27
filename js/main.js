                                          
window.onload = function(){

    function makeTableFromCountry(){

        console.log(about.length);

        let div = document.createElement('div');

        for(let i = 0; i < countries.length; i++){
            
            let table = document.createElement('table');
            for(let j = 0; j < about.length; j++){
                
                let row = document.createElement('tr');
                let cell = document.createElement('td');
                cell.innerText = about[j];
                row.appendChild(cell);
                cell = document.createElement('td');
                

                if(j >= 6){

                   for(let item in countries[i][j]){
                        if(j === 8){
                            cell.innerHTML += item + '-' + countries[i][j][item] +'<br>';
                        }
                        else{
                            cell.innerHTML += countries[i][j][item] +'<br>';
                        }  
                   }
                    
                }
                else{
                    cell.innerText = countries[i][j];
                }
                row.appendChild(cell);

                table.appendChild(row);

                div = document.createElement('div');
                div.id = 'd' + i;
                div.className = 'bg ';
                div.appendChild(table);
            }
            document.getElementById('root').appendChild(div);
        }
    }

    makeTableFromCountry();

};
