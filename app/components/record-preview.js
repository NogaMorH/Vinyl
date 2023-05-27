import Link from "next/link";

export default function RecordPreview({ record }) {
    return (
        <div className="record-preview max-w-[250px]">
            <Link href={`record/${record._id}`}>
                <img className="w-[100%]" src={record.coverImg} />
            </Link>
            <div className="record-name">{record.recordName}</div>
            <div className="artist">{record.artist}</div>
            <div className="price">{record.price}$</div>
        </div>
    )
}