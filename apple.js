Make();
let Rang=['white','cyan','purple','orange']
let pos=0;
let gate=0;
function Make(){
    const body=document.body,
    Job=document.createElement('table');
    Job.style.width='100%';
    Job.style.height='400px';
    Job.style.border='1px solid red';
    let m=1;
    let n=1;
    
    while(n<11){
        const TableRow=Job.insertRow();
        
        let m=1;
        while(m<11){
            const TableCell=TableRow.insertCell();
            TableCell.addEventListener('mouseover',function Hover(){
                TableCell.style.backgroundColor=Rang[pos];
            });
            TableCell.style.border='1px solid blue';
           
            m++;
           
        }
        n++;
        
    }
    body.appendChild(Job);
}


function g1(){
    pos='0'
    
}
function g2(){
    pos='1'
    
}
function g3(){
    pos='2'
    
}
function g4(){
    pos='3'
    
}