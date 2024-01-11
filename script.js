var plan=-1;
var yearly_plan=false;
var addon_1=false,addon_2=false,addon_3=false;
displayStep(1);
checkBox();
var focusName=document.getElementById('name');
var focusEmail=document.getElementById('email');
var focusPhone=document.getElementById('phone');

focusName.addEventListener('focus',function(){
    this.style.border='2px solid';
    this.style.outline='none';
    this.style.borderColor='blue';

    if(focusEmail.style.borderColor!=='red'){
        focusEmail.style.border='2px solid';
        focusEmail.style.outline='none';
        focusEmail.style.borderColor='black';
    }

    if(focusPhone.style.borderColor!=='red'){
        focusPhone.style.border='2px solid';
        focusPhone.style.outline='none';
        focusPhone.style.borderColor='black';
    }
});

focusEmail.addEventListener('focus',function(){
    this.style.border='2px solid';
    this.style.outline='none';
    this.style.borderColor='blue';
    if(focusName.style.borderColor!=='red'){
        focusName.style.border='2px solid';
        focusName.style.outline='none';
        focusName.style.borderColor='black';
    }
    
    if(focusPhone.style.borderColor!=='red'){
        focusPhone.style.border='2px solid';
        focusPhone.style.outline='none';
        focusPhone.style.borderColor='black';
    }
});

focusPhone.addEventListener('focus',function(){
    this.style.border='2px solid';
    this.style.outline='none';
    this.style.borderColor='blue';

    if(focusName.style.borderColor!=='red'){
        focusName.style.border='2px solid';
        focusName.style.outline='none';
        focusName.style.borderColor='black';
    }

    if(focusEmail.style.borderColor!=='red'){
        focusEmail.style.border='2px solid';
        focusEmail.style.outline='none';
        focusEmail.style.borderColor='black';
    }
});
function displayStep(step){
    var v1=document.getElementById('step1');
    var v2=document.getElementById('step2');
    var v3=document.getElementById('step3');
    var v4=document.getElementById('step4');
    var v5=document.getElementById('step5');

    var stp1=document.getElementById('s1');
    var stp2=document.getElementById('s2');
    var stp3=document.getElementById('s3');
    var stp4=document.getElementById('s4');
    if(step==1){
        v2.style.display='none';
        v3.style.display='none';
        v4.style.display='none';
        v1.style.display='block';
        v5.style.display='none';

        stp2.style.color='white';
        stp2.style.backgroundColor='transparent';

        stp3.style.color='white';
        stp3.style.backgroundColor='transparent';

        stp4.style.color='white';
        stp4.style.backgroundColor='transparent';

        stp1.style.color='blue';
        stp1.style.backgroundColor='white';
    }
    else if(step==2){
        v3.style.display='none';
        v4.style.display='none';
        v1.style.display='none';
        v2.style.display='block';
        v5.style.display='none';

        stp1.style.color='white';
        stp1.style.backgroundColor='transparent';

        stp3.style.color='white';
        stp3.style.backgroundColor='transparent';

        stp4.style.color='white';
        stp4.style.backgroundColor='transparent';

        stp2.style.color='blue';
        stp2.style.backgroundColor='white';
    }
    else if(step==3){
        v2.style.display='none';
        v1.style.display='none';
        v4.style.display='none';
        v3.style.display='block';
        v5.style.display='none';

        stp2.style.color='white';
        stp2.style.backgroundColor='transparent';

        stp1.style.color='white';
        stp1.style.backgroundColor='transparent';

        stp4.style.color='white';
        stp4.style.backgroundColor='transparent';
        
        stp3.style.color='blue';
        stp3.style.backgroundColor='white';
    }
    else if(step==4){
        setSummary();
        v2.style.display='none';
        v1.style.display='none';
        v3.style.display='none';
        v4.style.display='block';
        v5.style.display='none';
        
        stp2.style.color='white';
        stp2.style.backgroundColor='transparent';

        stp3.style.color='white';
        stp3.style.backgroundColor='transparent';

        stp1.style.color='white';
        stp1.style.backgroundColor='transparent';

        stp4.style.color='blue';
        stp4.style.backgroundColor='white';
    }
    else if(step==5){
        v2.style.display='none';
        v3.style.display='none';
        v4.style.display='none';
        v1.style.display='none';
        v5.style.display='block';

        stp2.style.color='white';
        stp2.style.backgroundColor='transparent';

        stp3.style.color='white';
        stp3.style.backgroundColor='transparent';

        stp1.style.color='white';
        stp1.style.backgroundColor='transparent';

        stp4.style.color='blue';
        stp4.style.backgroundColor='white';

    }
}
function validateForm1(){
    var name_1=document.getElementById('name');
    var email_1=document.getElementById('email');
    var phone_1=document.getElementById('phone');
    
    var error_name=false,error_email=false,error_phone=false;
    
    var name=name_1.value;
    var email=email_1.value;
    var phone=phone_1.value;
    if(name.trim()===''){
        error_name=true;
        name_1.style.outline='none';
        name_1.style.border='2px solid';
        name_1.style.borderColor='red';
        document.getElementById('error_name').innerText="This field is required";
    }
    else{
        for(let i=0;i<name.length;i++){
            if(name[i]>='0' && name[i]<='9'){
                error_name=true;
            }
        }
    
        var regex=/^[a-zA-Z]+$/;
        if(!regex.test(name))
            error_name=true;

        if(error_name){
            name_1.style.outline='none';
            name_1.style.border='2px solid';
            name_1.style.borderColor='red';
            document.getElementById('error_name').innerText='Invalid name';
        }
        else{
            name_1.style.outline='none';
            name_1.style.border='2px solid';
            name_1.style.borderColor='black';
            document.getElementById('error_name').innerText='';
        }
    }


    if(email.trim()===''){
        email_1.style.outline='none';
        email_1.style.border='2px solid';
        email_1.style.borderColor='red';
        error_email=true;
        document.getElementById('error_email').innerText="This field is required";
    }
    else{
        var regexe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regexe.test(email))
            error_email=true;

        if(error_email){
            email_1.style.outline='none';
            email_1.style.border='2px solid';
            email_1.style.borderColor='red';
            document.getElementById('error_email').innerText='Invalid email';
        }
        else{
            email_1.style.outline='none';
            email_1.style.border='2px solid';
            email_1.style.borderColor='black';
            document.getElementById('error_email').innerText='';
        }
    }


    if(phone.trim()===''){
        phone_1.style.outline='none';
        phone_1.style.border='2px solid';
        phone_1.style.borderColor='red';
        error_phone=true;
        document.getElementById('error_phone').innerText="This field is required";
    }
    else{
        var regexp=/^\+?\d{0,3}?\-?\d{1,14}$/;
        if(!regexp.test(phone))
            error_phone=true;   
        
        if(error_phone){
            phone_1.style.outline='none';
            phone_1.style.border='2px solid';
            phone_1.style.borderColor='red';
            document.getElementById('error_phone').innerText='Invalid phone number';
        } 
        else{
            phone_1.style.outline='none';
            phone_1.style.border='2px solid';
            phone_1.style.borderColor='black';
            document.getElementById('error_phone').innerText='';
        }
    }
   
    
    if(!error_name && !error_email && !error_phone){
        name_1.style.outline='none';
        name_1.style.border='1px solid';
        name_1.style.borderColor='black';

        email_1.style.outline='none';
        email_1.style.border='1px solid';
        email_1.style.borderColor='black';
        
        phone_1.style.outline='none';
        phone_1.style.border='1px solid';
        phone_1.style.borderColor='black';
        displayStep(2);
    }
}
function planValidate(val){
    plan=val;
    var arc1=document.getElementById('arcade-plan');
    var adv1=document.getElementById('advanced-plan');
    var pro1=document.getElementById('pro-plan');
    if(plan==0){
        arc1.style.backgroundColor='#d6d9e6';
        adv1.style.backgroundColor='white';
        pro1.style.backgroundColor='white';

        arc1.style.border='1px solid';
        arc1.style.borderColor='blue';
        adv1.style.border='1px solid';
        adv1.style.borderColor='black';
        pro1.style.border='1px solid';
        pro1.style.borderColor='black';
    }
    else if(plan==1){
        adv1.style.backgroundColor='#d6d9e6';
        arc1.style.backgroundColor='white';
        pro1.style.backgroundColor='white';
    
        adv1.style.border='1px solid';
        adv1.style.borderColor='blue';
        arc1.style.border='1px solid';
        arc1.style.borderColor='black';
        pro1.style.border='1px solid';
        pro1.style.borderColor='black';
    }
    else if(plan==2){
        pro1.style.backgroundColor='#d6d9e6';
        arc1.style.backgroundColor='white';
        adv1.style.backgroundColor='white';
    
        pro1.style.border='1px solid';
        pro1.style.borderColor='blue';
        adv1.style.border='1px solid';
        adv1.style.borderColor='black';
        arc1.style.border='1px solid';
        arc1.style.borderColor='black';
    }
}
function validateForm2(){
    var checkbox=document.getElementById('check-box');
    var plancheck=document.getElementById('plan-check');
    var error=false;
    if(plan==-1){
        plancheck.innerText='Please select a plan!';
        error=true;
    }
    if(!error){
        if(yearly_plan){
            document.getElementById('addon-cost-1').innerText='$10/yr';
            document.getElementById('addon-cost-2').innerText='$20/yr';
            document.getElementById('addon-cost-3').innerText='$20/yr';
        }
        else{
            document.getElementById('addon-cost-1').innerText='$1/mo';
            document.getElementById('addon-cost-2').innerText='$2/mo';
            document.getElementById('addon-cost-3').innerText='$2/mo';
        }
        displayStep(3);
    }
}
function checkBox(){
    var month1=document.getElementById('month');
    var year1=document.getElementById('year');
    var checkbox=document.getElementById('check-box');
    
    var pro1=document.getElementById('pro-offer-yearly');
    var adv1=document.getElementById('advanced-offer-yearly');
    var arc1=document.getElementById('arcade-offer-yearly');
    
    
    if(checkbox.checked){
        month1.style.color='gray';
        year1.style.color='black';
        pro1.style.display='block';
        adv1.style.display='block';
        arc1.style.display='block';

        document.getElementById('arc-cost').innerText='$90/yr';
        document.getElementById('adv-cost').innerText='$120/yr';
        document.getElementById('pro-cost').innerText='$150/yr';
        yearly_plan=true;
    }
    else{
        month1.style.color='black';
        year1.style.color='gray';
        
        pro1.style.display='none';
        adv1.style.display='none';
        arc1.style.display='none';
        document.getElementById('arc-cost').innerText='$9/mo';
        document.getElementById('adv-cost').innerText='$12/mo';
        document.getElementById('pro-cost').innerText='$15/mo';
        yearly_plan=false;
    }
}
function selectAddon(addon){
    var addon1=document.getElementById('addon-1');
    var addon2=document.getElementById('addon-2');
    var addon3=document.getElementById('addon-3');
    if(addon==1){
        addon_1= (!addon_1);
        var ckbx1=document.getElementById('c1');
        if(addon_1){
            ckbx1.checked=true;
            addon1.style.backgroundColor='#d6d9e6';
            addon1.style.outline='none';
            addon1.style.border='1px solid';
            addon1.style.borderColor='blue';
        }
        else{
            addon1.style.backgroundColor='white';
            addon1.style.outline='none';
            addon1.style.border='1px solid';
            addon1.style.borderColor='black';
            ckbx1.checked=false;
        }
    }
    else if(addon==2){
        addon_2= (!addon_2);
        var ckbx2=document.getElementById('c2');
        if(addon_2){
            ckbx2.checked=true;
            addon2.style.backgroundColor='#d6d9e6';
            addon2.style.outline='none';
            addon2.style.border='1px solid';
            addon2.style.borderColor='blue';
        }
        else{
            addon2.style.backgroundColor='white';
            addon2.style.outline='none';
            addon2.style.border='1px solid';
            addon2.style.borderColor='black';
            ckbx2.checked=false;
        }
    }
    else if(addon==3){
        addon_3= (!addon_3);
        var ckbx3=document.getElementById('c3');
        if(addon_3){
            addon3.style.backgroundColor='#d6d9e6';
            addon3.style.outline='none';
            addon3.style.border='1px solid';
            addon3.style.borderColor='blue';
            ckbx3.checked=true;
        }
        else{
            addon3.style.backgroundColor='white';
            addon3.style.outline='none';
            addon3.style.border='1px solid';
            addon3.style.borderColor='black';
            ckbx3.checked=false;
        }
    }

}
function setSummary(){
    var total_cost=0;
    var plan_text=document.getElementById('final-plan-text');
    var plan_cost=document.getElementById('final-plan-cost');
    if(yearly_plan){
        if(plan==0){
            plan_text.innerText='Arcade (Yearly)';
            plan_cost.innerText='$90/yr';
            total_cost+=90;
        }
        else if(plan==1){
            plan_text.innerText='Advanced (Yearly)';
            plan_cost.innerText='$120/yr';
            total_cost+=120;
        }
        else if(plan==2){
            plan_text.innerText='Pro (Yearly)';
            plan_cost.innerText='$150/yr';
            total_cost+=150;
        }
    }
    else{
        if(plan==0){
            plan_text.innerText='Arcade (Monthly)';
            plan_cost.innerText='$9/mo';
            total_cost+=9;
        }
        else if(plan==1){
            plan_text.innerText='Advanced (Monthly)';
            plan_cost.innerText='$12/mo';
            total_cost+=12;
        }
        else if(plan==2){
            plan_text.innerText='Pro (Monthly)';
            plan_cost.innerText='$15/mo';
            total_cost+=15;
        }
    }
    var a1text=document.getElementById('selected-addon-1-text');
    var a1cost=document.getElementById('selected-addon-1-cost');
    
    var a2text=document.getElementById('selected-addon-2-text');
    var a2cost=document.getElementById('selected-addon-2-cost');

    var a3text=document.getElementById('selected-addon-3-text');
    var a3cost=document.getElementById('selected-addon-3-cost');

    if(!addon_1 && !addon_2 && !addon_3)
        a1text.innerText='No addon selected'
    if(addon_1){
        a1text.innerText='Online service';
        if(yearly_plan){
            a1cost.innerText='$10/yr';
            total_cost+=10;
        }
        else{
            a1cost.innerText='$1/mo';
            total_cost+=1;
        }
    }
    if(addon_2){
        a2text.innerText='Larger storage';
        if(yearly_plan){
            a2cost.innerText='$20/yr';
            total_cost+=20;
        }
        else{
            a2cost.innerText='$2/mo';
            total_cost+=2;
        }
    }
    if(addon_3){
        a3text.innerText='Customizable Profile';
        if(yearly_plan){
            a3cost.innerText='$20/yr';
            total_cost+=20;
        }
        else{
            a3cost.innerText='$2/mo';
            total_cost+=2;
        }
    }
    var final_result=document.getElementById('final-cost-here');
    if(yearly_plan){
        final_result.innerText='$'+total_cost+'/yr';
        document.getElementById('result-total-text').innerText='Total (per year)';
    }
    else{
        final_result.innerText='$'+total_cost+'/mo';
        document.getElementById('result-total-text').innerText='Total (per month)';
    }
}