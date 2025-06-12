
const Landmark=()=>{
    let landmark_list=[
        {id:1,name:'TajMahal',loc:'Agra',country:'India'},
        {id:2,name:'Statue of Liberty',loc:'NY',country:'USA'},
        {id:3,name:'Colosseum',loc:'Rome',country:'Italy'},
    ]
    return(
        <div className="L-main">
            <h1>LANDMARKS</h1>
            <ol>
                {
                    landmark_list.map((i)=>
                        <li key={i.id} ><b>{i.name} </b><br />{i.loc} <br />{i.country}</li>
                    )
                }
            </ol>
        </div>
    )
}


export default Landmark