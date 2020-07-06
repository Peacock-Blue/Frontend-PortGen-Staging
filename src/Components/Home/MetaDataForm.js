import React,{ useState, useEffect,useRef } from "react"
import Axios from "axios"
import moment from 'moment'
import {Button,TextField,TextareaAutosize,FormControl,InputLabel } from "@material-ui/core"


export default function(){
    var userdata=useRef(null)
    const [uname,setUname]=useState(null)
    const [achievements,setAchievements]=useState([])
    const [qualifications,setQualifications]=useState([])
    const [works,setWorks]=useState([])
    const [name,setName]=useState('')
    const [about,setAbout] = useState('')
    useEffect(()=>{       
        Axios.get('/api/auth/current_user').then(res=>{
            if(!res || !res.data || !res.data.uname){
                alert("Something is wrong... Please sign in again")
                window.location.replace('/login')
                return
            }
            else{
                setUname(res.data.uname)
                    
                /*await setUserdata(data.data||{})
                await setAchievements(data.data.meta.achievements||[])
                await setQualifications(data.data.meta.qualifications||[])
                await setWorks(data.data.meta.works||[])
                await setName(data.data.meta.name||"")
                await setAbout(data.data.meta.about||"")*/
            }
        })   
    },[])

    useEffect(()=>{
        if(!uname) return
        Axios.get(`/api/fetchuserdata/${uname}`).then(data=>{
            userdata=data.data
            setAchievements(data.data.meta.achievements||[])
            setQualifications(data.data.meta.qualifications||[])
            setWorks(data.data.meta.works||[])
            setName(data.data.meta.name||"")
            setAbout(data.data.meta.about||"")                                        
        })
    },[uname])
    const submitUserdata=async()=>{
        //await setUserdata({...{meta:{...userdata.meta,...{achievements:achievements}}}})
        var sendMeta=Object.assign({},userdata.meta,{name,about,qualifications,works,achievements})
        var res=await Axios.post('/api/updateuserdata',{
            meta:sendMeta
        })
        if(res.status===200){
        }else{
            alert("something went wrong")
        }
    }


    if(!userdata){
        return(<h3>Loading...</h3>)
    }
    return(
        <>
            <InputLabel htmlFor='name'>Name</InputLabel>

            <TextField 
                name="name"
                value={name}
                type='textarea'
                InputProps={{
                    style:{
                        fontSize:'30px'
                    }
                }}
                onChange={async (e)=>{
                    await setName(e.target.value)
                }}
            />
            <InputLabel htmlFor='about'><h3>About</h3></InputLabel>
            <TextField
                name="about"
                value={about}
                multiline
                onChange={async (e)=>{
                    await setAbout(e.target.value)
                }}
            />


        {/*Qualifications*/}
        <div>
            <h3>Qualifications</h3>
            <table>
                <thead>
                    <tr><th>Name</th><th>Field</th><th>Start Date</th><th>End Date</th><th>Grade</th><th>Institution</th><th>Actions</th></tr>
                </thead>
                <tbody>
                {
                    (qualifications && qualifications.map((value,index)=>
                        (<tr key={index.toString()}>
                            <td>
                                <TextField
                                    name={`qualification_name_${index}`} 
                                    value={value.name} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=Object.assign([], qualifications)
                                        updatedQualifications[index]=Object.assign(updatedQualifications[index],{name:e.target.value})
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <TextField 
                                    name={`qualification_field_${index}`} 
                                    type='textarea'
                                    value={value.field} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=Object.assign([], qualifications)
                                        updatedQualifications[index]=Object.assign(updatedQualifications[index],{field:e.target.value})
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                {/*<input 
                                    name={`qualification_startDate_${index.toString()}`} 
                                    type='date'
                                    value={new Date(value.startDate)} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=JSON.parse(JSON.stringify(qualifications))
                                        updatedQualifications[index]={...updatedQualifications,...{startDate:new Date(e.target.value)}}
                                        setQualifications(updatedQualifications)
                                    }}
                                />*/}
                                <input
                                    type="date"
                                    value={value.startDate}
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=Object.assign([], qualifications)
                                        updatedQualifications[index]=Object.assign(updatedQualifications[index],{startDate:moment(e.target.value).toDate()})
                                        setQualifications(updatedQualifications)
                                    }}
                                    />
                            </td>
                            <td>
                                <input 
                                    name={`qualification_endDate_${index.toString()}`} 
                                    type='date' 
                                    value={moment(value.endDate).format('YYYY-MM-DD').toString()} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=Object.assign([], qualifications)
                                        updatedQualifications[index]=Object.assign(updatedQualifications[index],{endDate:moment(e.target.value).toDate()})
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <TextField
                                    name={`qualification_grade_${index}`} 
                                    type='textarea'
                                    value={value.grade} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=Object.assign([], qualifications)
                                        updatedQualifications[index]=Object.assign(updatedQualifications[index],{grade:e.target.value})
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <TextField
                                    name={`qualification_institution_${index}`} 
                                    type='textarea'
                                    value={value.institution} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=Object.assign([], qualifications)
                                        updatedQualifications[index]=Object.assign(updatedQualifications[index],{institution:e.target.value})
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <Button onClick={(e)=>{
                                    var updatedQualifications=qualifications.slice(0,index).concat([{name:"",field:"",endDate:Date.now(),startDate:Date.now(),grade:"",institution:""}]).concat(qualifications.slice(index))
                                    setQualifications(updatedQualifications)
                                }}>+</Button>
                                <Button onClick={(e)=>{
                                    var updatedQualifications=qualifications.slice(0,index).concat(qualifications.slice(index+1))
                                    setQualifications(updatedQualifications)
                                }}>-</Button>
                            </td>
                        </tr>)
                    ))
                }
                <tr>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                    <td>
                        <Button onClick={(e)=>{
                            var updatedQualifications=qualifications.concat([{name:"",field:"",endDate:Date.now(),startDate:Date.now(),grade:"",institution:""}])
                            setQualifications(updatedQualifications)
                        }}>+</Button>
                    </td>
                </tr>
                </tbody>
            </table>
            
        </div>
        {/*Qualifications*/}
        

        {/*Works*/}
        <div>
            <h3>Work Experience</h3>
            <table>
                <thead>
                    <tr><th>Description</th><th>Start Date</th><th>End Date</th><th>Institution</th><th>Actions</th></tr>
                </thead>
                <tbody>
                {
                    (works && works.map((value,index)=>
                        (<tr key={index.toString()}>
                            <td>
                                <TextField 
                                    name={`work_description_${index}`} 
                                    type='textarea'
                                    value={value.description} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedWorks=Object.assign([], works)
                                        updatedWorks[index]=Object.assign(updatedWorks[index],{description:e.target.value})
                                        setWorks(updatedWorks)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`work_startDate_${index.toString()}`} 
                                    type='date' 
                                    value={value.startDate} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedWorks=Object.assign([], works)
                                        updatedWorks[index]=Object.assign(updatedWorks[index],{startDate:e.target.value})
                                        setWorks(updatedWorks)
                                    }}
                                />
                            </td>

                            <td>
                                <input 
                                    name={`work_endDate_${index.toString()}`} 
                                    type='date' 
                                    value={value.endDate} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedWorks=Object.assign([], works)
                                        updatedWorks[index]=Object.assign(updatedWorks[index],{endDate:e.target.value})
                                        setWorks(updatedWorks)
                                    }}
                                />
                            </td>

                            <td>
                                <TextField
                                    name={`work_institution_${index}`} 
                                    type='textarea'
                                    value={value.institution} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedWorks=Object.assign([], works)
                                        updatedWorks[index]=Object.assign(updatedWorks[index],{institution:e.target.value})
                                        setWorks(updatedWorks)
                                    }}
                                />
                            </td>
                            <td>
                                <Button onClick={(e)=>{
                                    var updatedWorks=works.slice(0,index).concat([{description:"",endDate:Date.now(),startDate:Date.now(),institution:""}]).concat(works.slice(index))
                                    setWorks(updatedWorks)
                                }}>+</Button>
                                <Button onClick={(e)=>{
                                    var updatedWorks=works.slice(0,index).concat(works.slice(index+1))
                                    setWorks(updatedWorks)
                                }}>-</Button>
                            </td>
                        </tr>)
                    ))
                }
                <tr>
                    <td></td><td></td><td></td><td></td>
                    <td>
                        <Button onClick={(e)=>{
                            var updatedWorks=works.concat([{description:"",endDate:Date.now(),startDate:Date.now(),institution:""}])
                            setWorks(updatedWorks)
                        }}>+</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        
        {/*Achievements*/}
        <div>
            <h3>achievements</h3>
            <table>
                <thead>
                    <tr><th>Description</th><th>Date</th><th>Actions</th></tr>
                </thead>
                <tbody>
                {
                    (achievements && achievements.map((value,index)=>
                        (<tr key={index.toString()}>
                            <td>
                                <TextField
                                    name={`description_${index}`} 
                                    type='textarea'
                                    value={value.description} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedAchievements=Object.assign([], achievements)
                                        updatedAchievements[index]=Object.assign(updatedAchievements[index],{description:e.target.value})
                                        setAchievements(updatedAchievements)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`date_${index.toString()}`} 
                                    type='date' 
                                    value={value.date} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedAchievements=Object.assign([], achievements)
                                        updatedAchievements[index]=Object.assign(updatedAchievements[index],{date:e.target.value})
                                        setAchievements(updatedAchievements)
                                    }}
                                />
                            </td>
                            <td>
                                <Button onClick={(e)=>{
                                    var updatedAchievements=achievements.slice(0,index).concat([{description:"",endDate:Date.now(),startDate:Date.now(),institution:""}]).concat(achievements.slice(index))
                                    setAchievements(updatedAchievements)
                                }}>+</Button>
                                <Button onClick={(e)=>{
                                    var updatedAchievements=achievements.slice(0,index).concat(achievements.slice(index+1))
                                    setAchievements(updatedAchievements)
                                }}>-</Button>
                            </td>
                        </tr>)
                    ))
                }
                <tr>
                    <td></td><td></td>
                    <td>
                        <Button onClick={(e)=>{
                            var updatedAchievements=achievements.concat([{description:"",date:Date.now()}])
                            setAchievements(updatedAchievements)
                        }}>+</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        {/*Achievements*/}

        <Button 
            onClick={(e)=>{
                submitUserdata()
            }}>
            Submit
        </Button>
        </>
    )
}


