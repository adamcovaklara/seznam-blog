const PageList = ({pages}) => {
    console.log("display pages" + pages.constructor === Array)

    return ( <div className="page-list">
        {pages.map(page => (
            <div className="photo" key={page.id} >
            <a href={page.href}><img src={page.img} width={175} height="auto"/>{page.title}</a>
            </div>
        ))}
    </div>
    );
}
 
export default PageList;