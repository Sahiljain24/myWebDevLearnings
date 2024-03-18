 const a = (document.getElementById('t'))
    function increment(){
        let value =parseInt(a.innerText);
        value=value+1;
        a.innerText=value;
    }
    function decrement(){
        let value =parseInt(a.innerText);
        value=value-1;
        a.innerText=value;
    }
