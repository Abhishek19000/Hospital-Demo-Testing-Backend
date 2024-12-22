const express= require('express');

const app=express();

var users=[{
    name:"Abhinav",
    kidneys:[{
        healthy:true
    }]
}]

app.use(express.json());

app.get('/',(req,res)=>{
    const userkidney=users[0].kidneys;
    const noOfUsersKidney=userkidney.length;

    let noOfHealthyKidneys=0;

    for(let i=0;i<noOfUsersKidney;i++)
        {
            if(userkidney[i].healthy)
                {
                    noOfHealthyKidneys+=1;
                }
        }
    const noOfUnhealthyKidneys=noOfUsersKidney-noOfHealthyKidneys;

    res.json({
        users,
        noOfUsersKidney,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
})


app.post('/',(req,res)=>
{
    isHealthy=req.body.isHealthy;

    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Kidney Added"
    })
})

app.delete('/',(req,res)=>
{
    let newListOfKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++)
        {
            if(users[0].kidneys[i].healthy)
                {
                    newListOfKidneys.push(
                        {
                            healthy:true
                        }
                    )
                }
        }
        users[0].kidneys=newListOfKidneys;

        res.json({
            msg:"Updated Kidney List"
        })
})

app.listen(3000);