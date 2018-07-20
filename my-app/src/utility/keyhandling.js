
const keyHandling = (e) =>{
    console.log('e--------------',e);
    let target = e.target;
    if(e.keyCode == 39){
        let atr =  target.getAttribute('right');
        if(document.getElementById(atr)){
            document.getElementById(atr).focus();
        }
    }else if(e.keyCode == 37){
        let atr =  target.getAttribute('left');
        if(document.getElementById(atr)){
            document.getElementById(atr).focus();
        }
    }
};
export default keyHandling;