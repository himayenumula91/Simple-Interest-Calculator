function Calculate()
    {
        let p=document.getElementById('amount').value;
        let t=document.getElementById('time').value;
        let r=document.getElementById('rate').value;

        let  SI=(p*t*r)/100;

        document.getElementById('si').innerHTML="The Total Simple Interest Is: "+SI;
    }
    function Clear(){
        document.getElementById('amount').value = ''
        document.getElementById('time').value = ''
        document.getElementById('rate').value = ''
    }