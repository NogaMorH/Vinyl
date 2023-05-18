import RecordList from "./components/record-list"

export default async function RecordIndex() {
  const records = await getRecords()

  async function getRecords() {
    const res = await fetch('http://localhost:3000/api/record', {
      cache: 'no-store'
    })
    const data = await res.json()
    return data
  }

  return (
    <section className="pt-[130px] grow">
      <RecordList records={records} />
    </section>
  )
}