export default function Header() {
    return (
        <header className="flex bg-secondary-bg justify-between items-end pb-[12px] fixed w-full">
            <div className="flex items-end">
                <img src={'./icon.png'} className="h-12 ml-8 mr-2" />
                <div className="text-[1.4rem]">Vinyl</div>
            </div>
            <nav className="flex mr-8 min-h-[8vh] items-end">
                <div className="me-5">Home</div>
                <div className="me-5">Shop</div>
                <div>Stay in touch</div>
            </nav>
        </header>
    )
}