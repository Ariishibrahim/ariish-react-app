function Dashboard({isLoggedIn}) {
    return(
        <div>
            {isLoggedIn ? <p>You are logged in!</p> : <p>Please logged in</p>}
            {isLoggedIn ? <p>yes true</p> : <p>no false</p>}
        </div>
    );
}
export default Dashboard;