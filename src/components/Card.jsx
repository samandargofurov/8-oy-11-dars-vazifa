function Card(props) {
    return (
        <>
            <div className="card bg-base-100 shadow-xl w-[305px] h-[322px]">
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <hr />
                    <div className='flex gap-5 mt-4'>
                        <span><img src={props.data} width={160} height={130} alt="slack"  /></span>
                        <p>Slack is an instant messaging program designed by Slack Technologies and owned by Salesforce.</p>
                    </div>
                    <div className='flex justify-end mt-6'>
                    <input type="checkbox" className="toggle toggle-success" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card