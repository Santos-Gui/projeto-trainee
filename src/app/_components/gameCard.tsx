export function GameCard({ name, image }: {
    name: string, image: string
}) {
    return (
        <div className="">
            <img src={image} alt={name} className="rounded-2xl"/>
        </div>
    )
}