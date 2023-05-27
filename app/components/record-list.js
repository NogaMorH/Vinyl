import RecordPreview from "./record-preview"

export default async function RecordList({ records }) {

    // const [records, setRecords] = useState([])

    // useEffect(() => {
    //     loadRecords()
    //     console.log('records:', records)
    // }, [])


    // console.log('records:', records)
    return (
        <div className="record-list mx-8 grid gap-[3%] grid-cols-5">
            {records.map(record => (
                <div>
                    <RecordPreview key={record.id} record={record} />
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps({ onRemove }) {
    return {
        props: { onRemove }, // will be passed to the page component as props
    };
}