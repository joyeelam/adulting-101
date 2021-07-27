function Header() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    date = dd + '/' + mm + '/' + yyyy;

    function handleReload() {
        window.location.reload();
    }

    return (
        <div>
            <h1 className="pagetitle" onClick={handleReload}> daily meal planner </h1>
            <h4> <mark> today is {date}. </mark> </h4>
        </div>
    )
}

export default Header;