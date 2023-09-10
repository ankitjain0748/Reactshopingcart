import Left from "./Left";

function Dashboard() {
    
    return ( 
        
        <section id="dashboard">     
            <div id="to-click"><a href="#header"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2 style={{textAlign:'center'}}>Welcome Admin Dashboard</h2>
                    </div>
                </div>
            </div>      
        </section>
       
     );
     
}

export default Dashboard;